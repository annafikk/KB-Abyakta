import { Category } from "@/lib/getCategories";

interface Props {
    params: {
        slug: string;
    };
}

export default async function KategoriPage({ params }: Props) {
    const slug = params.slug;

    const res = await fetch("https://berita-desa-api2.vercel.app/api/categories");
    if (!res.ok) {
        throw new Error("Gagal mengambil data kategori");
    }

    const categories: Category[] = await res.json();
    const kategori = categories.find((cat) => cat.slug === slug);

    if (!kategori) {
        return <p>Kategori tidak ditemukan</p>;
    }

    const mockArticles = [
        {
            id: 1,
            title: `Contoh berita dari kategori ${kategori.name}`,
            description: "Deskripsi berita simulasi.",
        },
        {
            id: 2,
            title: `Berita lain di kategori ${kategori.name}`,
            description: "Berita kedua dari kategori ini.",
        },
    ];

    return (
        <section className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Kategori: {kategori.name}</h1>

            <ul className="grid md:grid-cols-2 gap-4">
                {mockArticles.map((article) => (
                    <li key={article.id} className="p-4 border rounded shadow-sm bg-white">
                        <h2 className="text-lg font-semibold text-gray-800">{article.title}</h2>
                        <p className="text-sm text-gray-600">{article.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
}
