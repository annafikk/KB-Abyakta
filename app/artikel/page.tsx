import { getPosts } from "@/lib/api/posts";
import PostCard from "@/components/artikel/PostCard";

export default async function Beranda() {
    const posts = await getPosts();
    const totalPosts = posts.length;

    if (totalPosts === 0) {
        return (
            <section className="space-y-8">
                <div className="text-sm text-gray-600">
                    Menampilkan 0 - 0 dari 0 Artikel
                </div>

                <div className="text-xl text-gray-800">
                    Belum ada artikel.
                </div>
            </section>
        );
    }

    const latestPosts = posts.slice(0, 6);
    const startIndex = 1;
    const endIndex = latestPosts.length;

    return (
        <section className="space-y-8">
            {/* Info Jumlah Artikel */}
            <div className="text-gray-600">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Artikel Terbaru
                </h2>
                <p className="leading-relaxed">
                    Menampilkan {startIndex} - {endIndex} dari {totalPosts} Artikel
                </p>
            </div>

            {/* Daftar Artikel Terbaru */}
            <div className="space-y-6">
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {latestPosts.map((post) => (
                        <li key={post.id}>
                            <PostCard
                                id={post.id}
                                slug={post.slug}
                                title={post.title}
                                image={post.image}
                                category={post.category}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
