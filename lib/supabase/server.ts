import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
    const cookieStore = await cookies()

    // Determine the correct Supabase URL based on the environment
    // For local development, we use the local proxy or the upstream URL directly if needed.
    // For production, we force the public proxy URL to match the browser's cookie domain.
    const supabaseUrl = process.env.NODE_ENV === "development"
        ? "http://localhost:3000/supabase" // Force localhost proxy in dev to match browser cookie
        : "https://mikepdrexpert.com/supabase"; // Force public proxy in prod

    console.log("SERVER CLIENT URL:", supabaseUrl)
    console.log("SERVER CLIENT COOKIES:", cookieStore.getAll().length)

    return createServerClient(
        supabaseUrl,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            cookies: {
                getAll() {
                    return cookieStore.getAll()
                },
                setAll(cookiesToSet) {
                    try {
                        cookiesToSet.forEach(({ name, value, options }) =>
                            cookieStore.set(name, value, options)
                        )
                    } catch {
                        // The `setAll` method was called from a Server Component.
                        // This can be ignored if you have middleware refreshing
                        // user sessions.
                    }
                },
            },
        }
    )
}
