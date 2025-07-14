import Link from "next/link";
import { getPosts } from "@/lib/api/posts";
import { Post } from "@/lib/types";
import { Badge } from "@/components/ui/badge"

export default async function DashboardPostsPage() {
    const posts: Post[] = await getPosts();

    return (
        <section className="p-6 space-y-6">
            {/* Judul Halaman */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Daftar Postingan</h1>
                <Link
                    href="/dashboard/post/tambah"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium"
                >
                    + Tambah Postingan
                </Link>
            </div>

            {/* Daftar Postingan */}
            {posts.length === 0 ? (
                <p className="text-gray-600">Tidak ada postingan tersedia.</p>
            ) : (
                <ul className="space-y-4">
                    {posts.map((post) => (
                        <li
                            key={post.id}
                            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow transition"
                        >
                            <div className="flex justify-between items-start">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">{post.title}</h2>
                                    <p className="text-sm text-gray-500 mt-1">
                                        <Badge variant="secondary">{post.category}</Badge>
                                    </p>
                                </div>

                                <div className="flex gap-2">
                                    <Link
                                        href={`/dashboard/post/edit/${post.id}`}
                                        className="text-sm px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600 text-white"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={`/dashboard/post/hapus/${post.id}`}
                                        className="text-sm px-3 py-1 rounded bg-red-600 hover:bg-red-700 text-white"
                                    >
                                        Hapus
                                    </Link>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
