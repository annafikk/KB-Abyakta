import { getTopHeadlines } from "@/lib/newsapi";
import { getCategories, Category } from "@/lib/getCategories";

export default async function Beranda() {
    const articles = await getTopHeadlines();
    const latestArticles = articles.slice(0, 3);

    const categories: Category[] = await getCategories();

    return (
        <section className="space-y-10">
            <div>
                <h1 className="text-4xl font-bold text-gray-900">Selamat Datang</h1>
                <p className="text-lg text-gray-600">
                    Dapatkan berita terbaru dari seluruh dunia secara cepat dan terpercaya.
                </p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kategori Berita</h2>
                {categories.length === 0 ? (
                    <p className="text-gray-500">Tidak ada kategori tersedia.</p>
                ) : (
                    <ul className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {categories.map((cat) => (
                            <li
                                key={cat.slug}
                                className="bg-blue-50 border border-blue-200 rounded p-3 text-center text-gray-700 font-medium cursor-pointer hover:bg-blue-100 transition"
                            >
                                <a href={`/kategori/${cat.slug}`}>{cat.name}</a>
                            </li>
                        ))}
                    </ul>

                )}
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Berita Terbaru</h2>
                <ul className="grid md:grid-cols-3 gap-4">
                    {latestArticles.map((article, i) => (
                        <li
                            key={i}
                            className="bg-white border rounded p-4 shadow-sm hover:shadow-md transition"
                        >
                            <a href={article.url} target="_blank" rel="noopener noreferrer">
                                {article.urlToImage && (
                                    <img
                                        src={article.urlToImage}
                                        alt={article.title}
                                        className="w-full h-40 object-cover rounded mb-2"
                                    />
                                )}
                                <h3 className="text-md font-semibold text-gray-900 mb-1">
                                    {article.title}
                                </h3>
                                <p className="text-sm text-gray-600">{article.source.name}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}