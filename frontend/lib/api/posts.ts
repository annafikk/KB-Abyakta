const API_BASE = "https://berita-desa-api2.vercel.app";

export type Post = {
    id: string;
    title: string;
    slug: string;
    image?: string;
    content: string;
    category: string;
};

export async function getPosts(): Promise<Post[]> {
    const res = await fetch(`${API_BASE}/api/posts`, { cache: "no-store" });
    if (!res.ok) throw new Error("Gagal mengambil postingan");
    return res.json();
}

export async function getPost(id: string): Promise<Post> {
    const res = await fetch(`${API_BASE}/api/posts/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Postingan tidak ditemukan");
    return res.json();
}

export async function createPost(post: {
    title: string;
    content: string;
    category: string;
}, token: string) {
    const res = await fetch("/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Gagal membuat postingan");
    }

    return res.json();
}
