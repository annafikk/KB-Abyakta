export type Category = {
    id: string;
    name: string;
    slug: string;
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

const API_BASE = "https://berita-desa-api2.vercel.app";

export async function getCategories(): Promise<Category[]> {
    const res = await fetch(`${API_BASE}/api/categories`, { cache: "no-store" });
    if (!res.ok) throw new Error("Gagal mengambil kategori");
    return res.json();
}

export async function getPosts(): Promise<Post[]> {
    const [postsRes, categories] = await Promise.all([
        fetch(`${API_BASE}/api/posts`, { cache: "no-store" }),
        getCategories(),
    ]);

    if (!postsRes.ok) throw new Error("Gagal mengambil posts");

    const posts = await postsRes.json();

    return posts.map((post: any) => {
        const matchedCat = categories.find(
            (cat) => cat.id === post.category || cat.slug === post.category
        );

        return {
            ...post,
            category: matchedCat?.slug || "umum",
            image: post.image.startsWith("/uploads")
                ? `${API_BASE}${post.image}`
                : post.image,
        };
    });
}
