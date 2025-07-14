import PostCard from "@/components/artikel/PostCard";
import type { Post } from "@/lib/types";

type Props = {
    posts: Post[];
};

export default function LatestPostsSection({ posts }: Props) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Artikel Terbaru</h2>
            <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <li key={post.id}>
                        <PostCard {...post} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
