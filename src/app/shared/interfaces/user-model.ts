export interface UserModel {
    createdAt: string;
    name: string;
    avatar: string;
    password: string;
    email: string;
    token: string;
    id: string;
}

export interface UserInformation {
    name: string;
    avatar: string;
    token: string;
}