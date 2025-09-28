"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";

import { postinganDummy } from "@/lib/dummy/posts";
import { userDummy } from "@/lib/dummy/users";
import { formatTanggal } from "@/lib/utils/formatTanggal";

const getUserName = (userId: string) => {
    const user = userDummy.find((u) => u.id === userId);
    return user ? user.name : "Tidak Diketahui";
};

const Blog = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 6);
    };

    return (
        <section className="p-20">
            <div className="container mx-auto flex flex-col items-center gap-16 lg:px-16">
                {/* Heading */}
                <div className="text-center px-4">
                    <Badge variant="secondary" className="mb-6">
                        Berita Terkini
                    </Badge>
                    <h2 className="mb-3 text-3xl font-semibold text-pretty md:mb-4 md:text-4xl lg:mb-6 lg:max-w-3xl lg:text-5xl">
                        Artikel Terbaru
                    </h2>
                    <p className="mb-8 text-muted-foreground md:text-base lg:max-w-2xl lg:text-lg">
                        Kumpulan berita dan informasi terbaru dari Desa Abyakta.
                    </p>
                </div>

                {/* Posts Grid */}
                <div className="grid gap-6 px-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    <AnimatePresence>
                        {postinganDummy.slice(0, visibleCount).map((post) => (
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
                                        <div className="text-sm text-muted-foreground mb-2 flex flex-col sm:flex-row sm:items-center sm:gap-2">
                                            <span>{formatTanggal(post.createdAt)}</span>
                                            <span className="hidden sm:inline">|</span>
                                            <span>Oleh&nbsp;
                                                <a href={`/users/${getUserName(post.userId)}`} className="text-blue-800 hover:underline">
                                                    {getUserName(post.userId)}
                                                </a>
                                            </span>

                                        </div>

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
            </div>

            <AnimatePresence>
                {visibleCount < postinganDummy.length && (
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
        </section>
    );
};

export { Blog };
