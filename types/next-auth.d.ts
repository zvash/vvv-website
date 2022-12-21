import { Session } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
    interface User {
        id: string,
        token_type: string,
        expires_in: number,
        token: string,
        refresh_token: string
        name: string
    }
    interface Session {
        // id: number,
        expires: Date,
        user?: User
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: number,
        name: string,
        expires_at: number,
        expires_in_minutes: number,
        access_token: string,
        user: User
    }
}