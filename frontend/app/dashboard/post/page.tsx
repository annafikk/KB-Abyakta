import { getPosts, Post } from "@/lib/api";

export default async function DashboardPostsPage() {
    const posts: Post[] = await getPosts();

    return (
        <section className="p-6">
            <h1 className="text-3xl font-bold mb-6">Daftar Postingan</h1>
            {posts.length === 0 ? (
                <p>Tidak ada postingan tersedia.</p>
            ) : (
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li key={post.id} className="border rounded p-4 hover:shadow">
                            <h2 className="text-xl font-semibold">{post.title}</h2>
                            <p className="text-gray-600">Kategori: {post.category}</p>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
