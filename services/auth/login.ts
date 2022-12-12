import axios from 'axios';
import { LoginCredentials } from './auth'

if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
    throw new Error('NEXT_PUBLIC_API_BASE_URL missing from .env file')
}

if (!process.env.CLIENT_SECRET) {
    throw new Error('CLIENT_SECRET missing from .env file')
}

export async function signIn({ username, password }: LoginCredentials) {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/login`, {
        "grant_type": "password",
        "client_id": "2",
        "client_secret": process.env.CLIENT_SECRET,
        "username": username,
        "password": password,
        "scope": "*"
    });
    return res.data;
}
