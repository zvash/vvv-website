import axios from "axios";
import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
import { signIn } from "../../../services/auth/login";
import type { NextAuthOptions } from 'next-auth'
import { v4 as uuid } from 'uuid'

interface AuthenticatedUser {
    data: {
        name: string
    }
}

export const authOptions: NextAuthOptions = {
    debug: false,
    providers: [
        CredentialsProvider({
            name: 'Sign in with Email',
            credentials: {
                username: { label: 'Username', type: 'text' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials, req) {
                if (credentials == null) return null;
                try {
                    const { data } = await signIn({
                        username: credentials.username,
                        password: credentials.password,
                    });
                    // console.log(data)
                    return {
                        id: uuid(),
                        token_type: "Bearer",
                        expires_in: data.expires_in,
                        token: data.access_token,
                        refresh_token: data.refresh_token
                    };
                } catch (error: any) {
                    // Sign In Fail
                    console.log(error.response)
                    return null;
                }
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: '/auth/login',
        // newUser: '/'
    },
    callbacks: {
        session: async ({ session, token, user }) => {

            const userData = await axios.get<AuthenticatedUser>(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/me`, {
                headers: { 'Authorization': `Bearer ${token.user.token}` }
            }).then((res) => {
                return res.data.data;
            }).catch((err) => {
                console.log(err.response)
            });

            if (!userData) {
                return Promise.reject('token-expired');
            }
            session.user = {
                ...token.user,
                name: userData.name
            };
            return Promise.resolve(session);
        },
        jwt: async ({ token, user }) => {
            const isSignIn = user ? true : false;
            if (isSignIn) {
                token.user = user;
            }
            return Promise.resolve(token);
        },
        // async signIn({ user, account, profile, email, credentials }) { return true },
        // async redirect({ url, baseUrl }) { return baseUrl },
        // async session({ session, token, user }) { return session },
        // async jwt({ token, user, account, profile, isNewUser }) { return token }
    },
    events: {}
}

export default NextAuth(authOptions)