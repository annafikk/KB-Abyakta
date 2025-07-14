import { getPosts, Post } from "@/lib/api";
import PostCard from "@/components/PostCard";

export default async function Beranda() {
    const posts: Post[] = await getPosts();

    const totalPosts = posts.length;

    if (totalPosts === 0) {
        return (
            <section className="space-y-16">
                <div className="text-sm text-gray-600">
                    Menampilkan 0 - 0 of 0 Artikel
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
        <section className="space-y-16">
            {/* 1 - n of n Artikel */}
            <div className="text-sm text-gray-600">
                Menampilkan {startIndex} - {endIndex} of {totalPosts} Artikel
            </div>

            {/* Berita Terbaru */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Artikel Terbaru</h2>
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
