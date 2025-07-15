"use client";

import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export type PostCardProps = {
    id: string;
    slug: string;
    title: string;
    image: string;
    category: string;
};

export default function PostCard({ id, slug, title, image, category }: PostCardProps) {
    return (
        <div
            key={id}
            className="bg-white border rounded-lg shadow-sm hover:shadow-md transition flex flex-col h-full"
        >
            {image && (
                <div className="relative w-full h-48">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover rounded-t-lg"
                        sizes="(min-width: 768px) 100%, 100vw"
                    />
                </div>
            )}

            <div className="p-4 flex flex-col flex-1">
                <Link
                    href={`/kategori/${category}`}
                    className="text-sm text-blue-600 font-medium mb-1 capitalize hover:underline"
                >
                    <Badge
                        variant="secondary"
                        className="bg-blue-500 text-white dark:bg-blue-600"
                    >{category}</Badge>
                </Link>

                <h3 className="text-md font-semibold text-gray-900 line-clamp-2 mb-2">
                    {title}
                </h3>

                <div className="mt-auto">
                    <Link
                        href={`/artikel/${slug}`}
                        className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
                    >
                        Baca Selengkapnya
                    </Link>
                </div>
            </div>
        </div>
    );
}
