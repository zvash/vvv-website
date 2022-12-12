import axios from "axios"
import { RegisterCredentials } from "./auth";

if (!process.env.NEXT_PUBLIC_API_BASE_URL) {
    throw new Error('NEXT_PUBLIC_API_BASE_URL missing from .env file')
}

export const register = async ({ name, password, password_confirmation, phone, referrer_phone }: RegisterCredentials) => {
    return await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/register`, {
        name,
        phone,
        password,
        password_confirmation,
        referrer_phone,
    })
}