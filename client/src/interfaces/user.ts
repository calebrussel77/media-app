export interface UserState{
    token: string;
    isAuthenticated: boolean;
    user: User;
}

export interface User{
    id: number;
    username: string;
    email: string;
}

export interface UserPayload{
    user:User;
    token: string;
}