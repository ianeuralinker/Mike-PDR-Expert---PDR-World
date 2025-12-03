import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Only intercept requests to /supabase or /auth
    if (request.nextUrl.pathname.startsWith('/supabase') || request.nextUrl.pathname.startsWith('/auth')) {

        // Clone the request headers
        const requestHeaders = new Headers(request.headers)

        // Force the X-Forwarded-Host to be the public domain
        // This tricks Supabase into thinking the request came from the public site
        requestHeaders.set('X-Forwarded-Host', 'mikepdrexpert.com')
        requestHeaders.set('X-Forwarded-Proto', 'https')

        // We let the next.config.js rewrites handle the actual proxying,
        // but we attach these headers to the request that goes through.
        return NextResponse.next({
            request: {
                headers: requestHeaders,
            },
        })
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/supabase/:path*', '/auth/:path*'],
}
