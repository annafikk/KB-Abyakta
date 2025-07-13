import { getTopHeadlines } from "@/lib/newsapi";
// import { getCategories, Category } from "@/lib/getCategories";

export default async function Berita() {
    const articles = await getTopHeadlines();

    return (
        <section className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">Berita Terkini (US)</h1>
            <ul className="grid md:grid-cols-2 gap-6">
                {articles.map((article, i) => (
                    <li
                        key={i}
                        className="bg-white border rounded-lg p-4 shadow-sm hover:shadow-md transition"
                    >
                        <a href={article.url} target="_blank" rel="noopener noreferrer">
                            {article.urlToImage && (
                                <img
                                    src={article.urlToImage}
                                    alt={article.title}
                                    className="w-full h-48 object-cover rounded mb-3"
                                />
                            )}
                            <h2 className="text-lg font-semibold text-gray-800 mb-2">
                                {article.title}
                            </h2>
                            <p className="text-sm text-gray-600">
                                {article.description || "Tidak ada deskripsi."}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">{article.source.name}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
