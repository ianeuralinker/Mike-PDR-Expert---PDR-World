import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export async function middleware(request: NextRequest) {
    // 1. Proxy Headers Logic (Keep existing)
    if (request.nextUrl.pathname.startsWith('/supabase') || request.nextUrl.pathname.startsWith('/auth')) {
        const requestHeaders = new Headers(request.headers)
        requestHeaders.set('X-Forwarded-Host', 'mikepdrexpert.com')
        requestHeaders.set('X-Forwarded-Proto', 'https')
        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        })
    }

    // 2. Maintenance Mode Logic
    // Skip for admin, api, static files, and the maintenance page itself
    if (
        !request.nextUrl.pathname.startsWith('/admin') &&
        !request.nextUrl.pathname.startsWith('/login') &&
        !request.nextUrl.pathname.startsWith('/redefinir-senha') &&
        !request.nextUrl.pathname.startsWith('/forgot-password') &&
        !request.nextUrl.pathname.startsWith('/maintenance') &&
        !request.nextUrl.pathname.startsWith('/_next') &&
        !request.nextUrl.pathname.startsWith('/static') &&
        !request.nextUrl.pathname.includes('.') // Skip files with extensions (images, etc)
    ) {
        try {
            // Create a lightweight client just for this check
            // We use the public URL and Anon Key directly to avoid complex server setup in middleware
            const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
            const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

            // Basic check - in a real high-traffic app, you might want to cache this or use Edge Config
            // But for this scale, a direct DB call is acceptable
            const supabase = createClient(supabaseUrl, supabaseKey)

            const { data } = await supabase
                .from('settings')
                .select('value')
                .eq('key', 'maintenance_mode')
                .single()

            if (data?.value === true) {
                return NextResponse.redirect(new URL('/maintenance', request.url))
            }
        } catch (error) {
            // If DB check fails, fail open (allow access) to avoid locking everyone out
            console.error("Middleware Maintenance Check Error:", error)
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
