import { getPosts, getCategories, Post, Category } from "@/lib/api";
import Link from "next/link";
import Image from "next/image";
import KategoriCarousel from "@/components/KategoriCarousel";
import PostCard from "@/components/PostCard";

export default async function Beranda() {
    const posts: Post[] = await getPosts();
    const categories: Category[] = await getCategories();

    const latestPosts = posts.slice(0, 6);

    return (
        <section className="space-y-16">
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold text-gray-900">Selamat Datang di KB Abyakta</h1>
                <p className="text-lg text-gray-600">Berita terbaru, terpercaya, dan cepat dari desa Abyakta.</p>
            </div>

            {/* Kategori Berita dengan Carousel */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Kategori Berita</h2>
                {categories.length === 0 ? (
                    <p className="text-gray-500">Tidak ada kategori tersedia.</p>
                ) : (
                    <KategoriCarousel categories={categories} />
                )}
            </div>

            {/* Berita Terbaru */}
            <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-gray-800">Berita Terbaru</h2>
                <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {latestPosts.map((post) => (
                        <li key={post.id}>
                            <PostCard
                                id={post.id}
                                slug={post.slug}
                                title={post.title}
                                image={post.image}
                                category={post.category}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
