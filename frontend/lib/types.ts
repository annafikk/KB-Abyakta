export type Category = {
    id: string;
    name: string;
    slug: string;
};

export type RawPost = {
    id: string;
    title: string;
    slug: string;
    image: string;
    content: string;
    category: string;
    created_at?: string;
};

export type Post = {
    id: string;
    title: string;
    slug: string;
    image: string;
    content: string;
    category: string;
    created_at?: string;
};

export interface LoginResponse {
    success: boolean;
    token: string;
    user: {
        id: string;
        email: string;
        role: string;
    };
}
