import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
    // Use proxy URL in browser to avoid CORS issues with self-hosted Supabase
    const supabaseUrl = typeof window !== 'undefined'
        ? `${window.location.origin}/supabase`
        : (process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co')

    return createBrowserClient(
        supabaseUrl,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder'
    )
}
