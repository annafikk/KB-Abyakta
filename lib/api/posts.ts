import { Post, RawPost } from "@/lib/types";
import { getCategories } from "@/lib/api/categories";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function getPosts(): Promise<Post[]> {
    const [postsRes, categories] = await Promise.all([
        fetch(`${API_BASE}/api/posts`, { cache: "no-store" }),
        getCategories(),
    ]);

    if (!postsRes.ok) throw new Error("Gagal mengambil artikel");

    const rawPosts: RawPost[] = await postsRes.json();

    return rawPosts.map((post) => {
        const matchedCat = categories.find(
            (cat) => cat.id === post.category || cat.slug === post.category
        );

        return {
            ...post,
            category: matchedCat?.slug || "Umum",
            image: post.image.startsWith("/uploads")
                ? `${API_BASE}${post.image}`
                : post.image,
        };
    });
}

export async function getPost(id: string): Promise<Post> {
    const res = await fetch(`${API_BASE}/api/posts/${id}`, { cache: "no-store" });
    if (!res.ok) throw new Error("Artikel tidak ditemukan");

    const rawPost: RawPost = await res.json();
    const categories = await getCategories();

    const matchedCat = categories.find(
        (cat) => cat.id === rawPost.category || cat.slug === rawPost.category
    );

    return {
        ...rawPost,
        category: matchedCat?.slug || "Umum",
        image: rawPost.image.startsWith("/uploads")
            ? `${API_BASE}${rawPost.image}`
            : rawPost.image,
    };
}

export async function createPost(
    post: { title: string; content: string; category: string },
    token: string
) {
    const res = await fetch(`${API_BASE}/api/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(post),
    });

    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || "Gagal membuat artikel");
    }

    return res.json();
}
