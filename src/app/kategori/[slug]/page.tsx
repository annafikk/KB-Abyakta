"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

import { postinganDummy } from "@/lib/dummy/posts";
import { kategoriDummy } from "@/lib/dummy/categories";
import { userDummy } from "@/lib/dummy/users"; // import userDummy
import { formatTanggal } from "@/lib/utils/formatTanggal";

// Fungsi cari nama user berdasarkan userId
const getUserName = (userId: string) => {
    const user = userDummy.find((u) => u.id === userId);
    return user ? user.name : "Tidak Diketahui";
};

export default function KategoriDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const category = kategoriDummy.find((c) => c.slug === slug);

    const [visibleCount, setVisibleCount] = useState(6);
    const handleLoadMore = () => setVisibleCount((prev) => prev + 6);

    if (!category) {
        return <p className="p-8">Kategori tidak ditemukan.</p>;
    }

    const filteredPosts = postinganDummy.filter((p) => p.categoryId === category.id);

    return (
        <section className="p-20">
            <div className="container mx-auto flex flex-col gap-16 lg:px-16">
                {/* Heading kategori */}
                <div className="text-center px-4">
                    <h1 className="mb-3 text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6 lg:text-5xl">
                        {category.name}
                    </h1>
                </div>

                {/* Grid posts */}
                {filteredPosts.length > 0 ? (
                    <>
                        <div className="grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                            <AnimatePresence>
                                {filteredPosts.slice(0, visibleCount).map((post) => (
                                    <motion.div
                                        key={post.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    >
                                        <Card className="grid grid-rows-[auto_auto_1fr_auto] pt-0">
                                            {/* Gambar */}
                                            <div className="aspect-[16/9] w-full relative">
                                                <a
                                                    href={`/artikel/${post.slug}`}
                                                    className="transition-opacity duration-200 fade-in hover:opacity-70 block w-full h-full"
                                                >
                                                    <Image
                                                        src={post.image}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover object-center rounded-t-lg"
                                                    />
                                                </a>
                                            </div>

                                            <CardHeader>
                                                {/* Meta info */}
                                                <div className="text-sm text-muted-foreground mb-2 flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                                    <span>{formatTanggal(post.createdAt)}</span>
                                                    <span className="hidden sm:inline">|</span>
                                                    <span>Oleh&nbsp;
                                                        <a href={`/users/${getUserName(post.userId)}`} className="text-blue-800 hover:underline">
                                                            {getUserName(post.userId)}
                                                        </a>
                                                    </span>
                                                </div>

                                                {/* Judul */}
                                                <h3 className="text-lg font-semibold hover:underline md:text-xl">
                                                    <a href={`/artikel/${post.slug}`}>{post.title}</a>
                                                </h3>
                                            </CardHeader>

                                            {/* Deskripsi singkat */}
                                            <CardContent>
                                                <p className="text-muted-foreground line-clamp-3">
                                                    {post.content}
                                                </p>
                                            </CardContent>

                                            {/* Link Baca Selengkapnya */}
                                            <CardFooter>
                                                <a
                                                    href={`/artikel/${post.slug}`}
                                                    className="flex items-center text-foreground hover:underline"
                                                >
                                                    Baca selengkapnya
                                                    <ArrowRight className="ml-2 size-4" />
                                                </a>
                                            </CardFooter>
                                        </Card>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* Tombol Load More */}
                        <AnimatePresence>
                            {visibleCount < filteredPosts.length && (
                                <motion.div
                                    className="mt-8 flex justify-center"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ duration: 0.4, ease: "easeOut" }}
                                >
                                    <Button
                                        variant="secondary"
                                        onClick={handleLoadMore}
                                        className="w-full sm:w-auto"
                                    >
                                        Muat Berita Lainnya
                                    </Button>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </>
                ) : (
                    <p className="text-center">Tidak ada artikel dalam kategori ini.</p>
                )}
            </div>
        </section>
    );
}
