export interface LoginUsers {
    user: string,
    password: string,
}

export interface User {
    id: number,
    user: string,
    password: string,
    email: string,
    name: string,
    last_name: string,
    type_user: string
}