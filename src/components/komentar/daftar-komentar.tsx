"use client";

import { formatTanggal } from "@/lib/utils/formatTanggal";

interface Comment {
    _id: string;
    post: string;
    user: string;
    content: string;
    createdAt: Date;
}

interface CommentListProps {
    comments: Comment[];
}

export function CommentList({ comments }: CommentListProps) {
    if (comments.length === 0) {
        return <p className="text-muted-foreground">Belum ada komentar.</p>;
    }

    return (
        <ul className="space-y-6">
            {comments.map((comment) => (
                <li key={comment._id} className="border-b pb-4 last:border-b-0">
                    <p className="text-sm text-muted-foreground">
                        {comment.user} | {formatTanggal(comment.createdAt)}
                    </p>
                    <p className="mt-1">{comment.content}</p>
                </li>
            ))}
        </ul>
    );
}
