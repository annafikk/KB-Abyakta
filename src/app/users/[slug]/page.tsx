"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

import { userDummy } from "@/lib/dummy/users";
import { postinganDummy } from "@/lib/dummy/posts";
import { formatTanggal } from "@/lib/utils/formatTanggal";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export default function UserDetailPage() {
    const params = useParams();
    const slug = params?.slug as string;

    const user = userDummy.find((u) => u.name === slug);
    if (!user) return <p className="p-8">User tidak ditemukan.</p>;

    const userPosts = postinganDummy.filter((p) => p.userId === user.id);

    const getUserName = (userId: string) => {
        const u = userDummy.find((u) => u.id === userId);
        return u ? u.name : "Tidak Diketahui";
    };

    return (
        <section className="p-6 md:p-20">
            <div className="mb-8 text-center">
                <h1 className="text-3xl font-bold">{user.name}</h1>
                <p className="text-muted-foreground">{user.email}</p>
            </div>

            {userPosts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    <AnimatePresence>
                        {userPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                <Card className="flex flex-col pt-0 min-h-[480px]">
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

                                    <CardContent>
                                        <p className="text-muted-foreground line-clamp-3">{post.content}</p>
                                    </CardContent>

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
            ) : (
                <p className="text-center text-muted-foreground mt-8">
                    User ini belum membuat artikel apapun.
                </p>
            )}
        </section>
    );
}
