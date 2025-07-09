import { getTopHeadlines } from "@/lib/newsapi";

export default async function Beranda() {
    const articles = await getTopHeadlines();
    const latestArticles = articles.slice(0, 3);

    return (
        <section className="space-y-6">
            <h1 className="text-4xl font-bold text-gray-900">Selamat Datang</h1>
            <p className="text-lg text-gray-600">
                Dapatkan berita terbaru dari seluruh dunia secara cepat dan terpercaya.
            </p>

            <div className="mt-8 space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800">Berita Terbaru</h2>
                <ul className="grid md:grid-cols-3 gap-4">
                    {latestArticles.map((article, i) => (
                        <li key={i} className="bg-white border rounded p-4 shadow-sm hover:shadow-md transition">
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
                                <p className="text-sm text-gray-600">
                                    {article.source.name}
                                </p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
