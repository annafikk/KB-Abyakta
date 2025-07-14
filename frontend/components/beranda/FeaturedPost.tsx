import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/types";
import { Badge } from "@/components/ui/badge";

type Props = {
    post: Post;
};

export default function FeaturedPost({ post }: Props) {
    return (
        <div className="relative rounded-xl overflow-hidden bg-white shadow-lg md:flex h-[320px]">
            <div className="relative w-full md:w-1/2 h-60 md:h-auto">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 768px) 50vw, 100vw"
                />
            </div>
            <div className="flex flex-col justify-center p-6 md:w-1/2 space-y-3">
                <Link
                    href={`/kategori/${post.category}`}
                    className="text-blue-600 hover:underline font-medium text-sm"
                ><Badge
                    variant="secondary"
                    className="bg-blue-500 text-white dark:bg-blue-600"
                >{post.category}</Badge></Link>
                <h3 className="text-2xl font-semibold text-gray-900">{post.title}</h3>
                <Link
                    href={`/artikel/${post.slug}`}
                    className="text-blue-600 hover:underline font-medium text-sm"
                >
                    Baca selengkapnya
                </Link>
            </div>
        </div>
    );
}
