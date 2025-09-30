"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { FileText, Folder, MessageSquare, Users } from "lucide-react";

// Import data dummy
import { postinganDummy } from "@/lib/dummy/posts";
import { kategoriDummy } from "@/lib/dummy/categories";
import { userDummy } from "@/lib/dummy/users";
import { komentarDummy } from "@/lib/dummy/comments";

export default function DashboardPage() {
    const router = useRouter();
    const [user, setUser] = useState<{ name: string; email: string } | null>(null);

    // Hitung jumlah data dummy
    const stats = {
        posts: postinganDummy.length,
        categories: kategoriDummy.length,
        comments: komentarDummy ? komentarDummy.length : 0,
        users: userDummy.length,
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        const userData = localStorage.getItem("user");

        if (!token || !userData) {
            router.push("/masuk");
            return;
        }

        setUser(JSON.parse(userData));
    }, [router]);

    if (!user) {
        return <p className="p-8">Memuat...</p>;
    }

    return (
        <section className="container mx-auto p-10">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Link href="/dashboard/artikel">
                    <Card className="hover:shadow-lg transition">
                        <CardHeader>
                            <FileText className="w-8 h-8 text-primary mb-2" />
                            <CardTitle>Postingan</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">{stats.posts}</p>
                            <p className="text-muted-foreground">Total artikel</p>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/dashboard/kategori">
                    <Card className="hover:shadow-lg transition">
                        <CardHeader>
                            <Folder className="w-8 h-8 text-primary mb-2" />
                            <CardTitle>Kategori</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">{stats.categories}</p>
                            <p className="text-muted-foreground">Total kategori</p>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/dashboard/komentar">
                    <Card className="hover:shadow-lg transition">
                        <CardHeader>
                            <MessageSquare className="w-8 h-8 text-primary mb-2" />
                            <CardTitle>Komentar</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">{stats.comments}</p>
                            <p className="text-muted-foreground">Total komentar</p>
                        </CardContent>
                    </Card>
                </Link>

                <Link href="/dashboard/pengguna">
                    <Card className="hover:shadow-lg transition">
                        <CardHeader>
                            <Users className="w-8 h-8 text-primary mb-2" />
                            <CardTitle>Pengguna</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-3xl font-bold">{stats.users}</p>
                            <p className="text-muted-foreground">Total pengguna</p>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </section>
    );
}
