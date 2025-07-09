export interface Article {
    source: {
        id: string | null;
        name: string;
    };
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
}

const API_KEY = process.env.NEWS_API_KEY!;
const BASE_URL = "https://newsapi.org/v2";

export async function getTopHeadlines(country = "us"): Promise<Article[]> {
    const url = `${BASE_URL}/top-headlines?country=${country}&apiKey=${API_KEY}`;
    const res = await fetch(url, { cache: "no-store" });
    if (!res.ok) throw new Error("Gagal mengambil berita");
    const data = await res.json();
    return data.articles;
}
