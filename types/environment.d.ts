namespace NodeJS {
    interface ProcessEnv extends NodeJS.ProcessEnv {
        NEXTAUTH_SECRET: string
        NEXTAUTH_URL: string
        CLIENT_SECRET: string
        NEXT_PUBLIC_API_BASE_URL: string
        NEXT_PUBLIC_APP_URL: string
    }
}