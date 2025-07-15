import { getCategories } from "@/lib/api/categories";
import { getPosts } from "@/lib/api/posts";
import Link from "next/link";

export default async function KategoriPage() {
    const [categories, posts] = await Promise.all([getCategories(), getPosts()]);

    return (
        <section className="max-w-4xl mx-auto px-4 py-12 space-y-10">
            <h1 className="text-3xl font-bold text-gray-900">Semua Kategori</h1>

            {categories.length === 0 ? (
                <p className="text-gray-500">Belum ada kategori yang tersedia.</p>
            ) : (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {categories.map((category) => {
                        const count = posts.filter((post) => post.category === category.slug).length;

                        return (
                            <li key={category.slug}>
                                <Link
                                    href={`/kategori/${category.slug}`}
                                    className="block border border-gray-200 rounded p-4 hover:bg-gray-50 transition"
                                >
                                    <h2 className="text-xl font-semibold text-blue-700">{category.name}</h2>
                                    <p className="text-sm text-gray-600">
                                        {count} artikel
                                    </p>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            )}
        </section>
    );
}
