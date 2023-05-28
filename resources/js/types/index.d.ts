export interface User {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
    email_verified_at: string;
    is_available: boolean;
}

export interface Chat {
    id: number;
    uuid: string;
    participants: User[];
    messages: Message[];
}

export interface Message {
    id: number;
    user: User;
    content: string;
    created_at: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
};
