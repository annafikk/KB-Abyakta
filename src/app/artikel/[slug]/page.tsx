"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { postinganDummy } from "@/lib/dummy/posts";
import { komentarDummy } from "@/lib/dummy/comments";
import { userDummy } from "@/lib/dummy/users";
import { formatTanggal } from "@/lib/utils/formatTanggal";

interface PostPageProps {
    params: Promise<{ slug: string }>;
}

const getUserName = (userId: string) => {
    const user = userDummy.find((u) => u.id === userId);
    return user ? user.name : "Tidak Diketahui";
};

function renderComments(
    comments: typeof komentarDummy,
    parentId: string | null = null,
    level = 0
) {
    return comments
        .filter((comment) => comment.parentId === parentId)
        .map((comment) => (
            <li
                key={comment.id}
                className="border-b pb-4 last:border-b-0"
                style={{ paddingLeft: level * 20 }}
            >
                <p className="text-sm text-muted-foreground">
                    {getUserName(comment.userId)} | {formatTanggal(comment.createdAt)}
                </p>
                <p className="mt-1">{comment.content}</p>
                <ul>{renderComments(comments, comment.id, level + 1)}</ul>
            </li>
        ));
}

export default function PostPage(props: PostPageProps) {
    const { slug } = use(props.params);

    const post = postinganDummy.find((p) => p.slug === slug);
    if (!post) return notFound();

    const comments = komentarDummy.filter((c) => c.postId === post.id);

    return (
        <article className="container mx-auto max-w-3xl py-12 px-4">
            {/* Hero */}
            <div className="mb-8">
                <Image
                    src={post.image}
                    alt={post.title}
                    width={1200}
                    height={600}
                    className="w-full rounded-lg object-cover"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                    {formatTanggal(post.createdAt)} | Ditulis oleh&nbsp;
                    <a href={`/users/${getUserName(post.userId)}`} className="text-blue-800">
                        {getUserName(post.userId)}
                    </a>
                </p>

                <h1 className="mt-2 text-3xl font-bold md:text-4xl">{post.title}</h1>
            </div>

            {/* Konten */}
            <div className="prose prose-neutral dark:prose-invert max-w-none mb-12">
                <p>{post.content}</p>
            </div>

            {/* Komentar */}
            <section className="mt-12">
                <h2 className="text-2xl font-semibold mb-6">Komentar</h2>
                {comments.length === 0 ? (
                    <p className="text-muted-foreground">Belum ada komentar.</p>
                ) : (
                    <ul className="space-y-6">{renderComments(comments)}</ul>
                )}
            </section>
        </article>
    );
}
