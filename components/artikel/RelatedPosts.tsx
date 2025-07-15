"use client";

import { Post } from "@/lib/types";
import PostCard from "@/components/artikel/PostCard";

interface RelatedPostsProps {
    currentPostId: string;
    posts: Post[];
    categorySlug: string;
}

export default function RelatedPosts({
    currentPostId,
    posts,
    categorySlug,
}: RelatedPostsProps) {
    const relatedPosts = posts
        .filter(
            (post) =>
                post.id !== currentPostId && post.category === categorySlug
        )
        .slice(0, 3);

    if (relatedPosts.length === 0) {
        return (
            <section aria-labelledby="related-heading" className="mt-16">
                <h2
                    id="related-heading"
                    className="text-2xl font-semibold text-gray-800 mb-4"
                >
                    Artikel Terkait
                </h2>
                <p className="text-gray-500">Belum ada Artikel terkait untuk kategori ini.</p>
            </section>
        );
    }

    return (
        <section aria-labelledby="related-heading" className="mt-16 space-y-6">
            <h2 id="related-heading" className="text-2xl font-semibold text-gray-800">
                Artikel Terkait
            </h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
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
        </section>
    );
}
