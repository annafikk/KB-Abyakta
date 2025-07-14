"use client";

import { Post } from "@/lib/api";
import PostCard from "./PostCard";

interface RelatedPostsProps {
    currentPostId: string;
    posts: Post[];
    categorySlug: string;
}

export default function RelatedPosts({ currentPostId, posts, categorySlug }: RelatedPostsProps) {
    const related = posts
        .filter((post) => post.id !== currentPostId && post.category === categorySlug)
        .slice(0, 3);

    if (related.length === 0) return null;

    return (
        <div className="mt-16 space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Berita Terkait</h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {related.map((post) => (
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
    );
}
