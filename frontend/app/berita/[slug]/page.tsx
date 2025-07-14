import { getPosts, getCategories, Post, Category } from "@/lib/api";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import RelatedPosts from "@/components/RelatedPosts";

interface Props {
    params: { slug: string };
}

export default async function PostDetailPage({ params }: Props) {
    const { slug } = params;

    const [posts, categories] = await Promise.all([getPosts(), getCategories()]);
    const post = posts.find((p) => p.slug === slug);

    if (!post) return notFound();

    const category = categories.find((c) => c.slug === post.category);

    return (
        <>

            <article className="max-w-3xl mx-auto px-4 py-8 space-y-6">
                {/* Judul */}
                <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>

                {/* Kategori */}
                {category && (
                    <Link
                        href={`/kategori/${category.slug}`}
                        className="text-sm text-blue-600 font-medium hover:underline"
                    >
                        Kategori: {category.name}
                    </Link>
                )}

                {/* Gambar utama */}
                {post.image && (
                    <div className="relative w-full h-72 md:h-96 mt-4">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover rounded"
                            sizes="100vw"
                        />
                    </div>
                )}

                {/* Konten (HTML) */}
                <div
                    className="prose max-w-none text-gray-800"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </article>

            <RelatedPosts
                currentPostId={post.id}
                posts={posts}
                categorySlug={post.category}
            />
        </>
    );
}