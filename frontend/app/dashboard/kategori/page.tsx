import Link from "next/link";
import { getCategories } from "@/lib/api/categories";
import { Category } from "@/lib/types";

export default async function DashboardCategoriesPage() {
    const categories: Category[] = await getCategories();

    return (
        <section className="p-6 space-y-6">
            {/* Judul Halaman */}
            <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">Daftar Kategori</h1>
                <Link
                    href="/dashboard/category/tambah"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm font-medium"
                >
                    + Tambah Kategori
                </Link>
            </div>

            {/* Daftar Kategori */}
            {categories.length === 0 ? (
                <p className="text-gray-600">Tidak ada kategori tersedia.</p>
            ) : (
                <ul className="space-y-4">
                    {categories.map((category) => (
                        <li
                            key={category.id}
                            className="border rounded-lg p-4 bg-white shadow-sm hover:shadow transition"
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-semibold text-gray-800">{category.name}</h2>
                                </div>

                                <div className="flex gap-2">
                                    <Link
                                        href={`/dashboard/category/edit/${category.id}`}
                                        className="text-sm px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600 text-white"
                                    >
                                        Edit
                                    </Link>
                                    <Link
                                        href={`/dashboard/category/hapus/${category.id}`}
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
