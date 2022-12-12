export interface LoginCredentials {
    username: string,
    password: string
}

export interface RegisterCredentials {
    name: string
    phone: string
    password: string
    password_confirmation: string
    referrer_phone: string
}

type RegisterErrorResponse = {
    errors: {
        [key]: string[]
    };
    message: string;
};