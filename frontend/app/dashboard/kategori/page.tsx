import { getCategories, Category } from "@/lib/api";

export default async function DashboardKategoriPage() {
    const categories: Category[] = await getCategories();

    return (
        <section className="p-6">
            <h1 className="text-3xl font-bold mb-6">Daftar Kategori</h1>
            {categories.length === 0 ? (
                <p>Tidak ada kategori tersedia.</p>
            ) : (
                <ul className="space-y-4">
                    {categories.map((cat) => (
                        <li key={cat.id} className="border rounded p-4 hover:shadow">
                            <h2 className="text-xl font-semibold">{cat.name}</h2>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
