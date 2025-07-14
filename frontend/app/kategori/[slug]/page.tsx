import { getPosts, getCategories, Post, Category } from "@/lib/api";
import PostCard from "@/components/PostCard";
import { notFound } from "next/navigation";

interface Props {
    params: { slug: string };
}

export default async function KategoriPage({ params }: Props) {
    const slug = params.slug;

    const [categories, posts] = await Promise.all([
        getCategories(),
        getPosts()
    ]);

    const kategori = categories.find((cat) => cat.slug === slug);
    if (!kategori) return notFound();

    const filteredPosts = posts.filter((post) => post.category === slug);

    return (
        <section className="space-y-6 max-w-5xl mx-auto px-4 py-8">
            {/* Judul Halaman */}
            <h1 className="text-3xl font-bold text-gray-900">
                Kategori: {kategori.name}
            </h1>

            {/* Post = 0 */}
            {filteredPosts.length === 0 ? (
                <p className="text-gray-500">Belum ada berita di kategori ini.</p>
            ) : (
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {filteredPosts.map((post: Post) => (
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
            )}
        </section>
    );
}