"use client";

import { useState } from "react";
import { komentarDummy } from "@/lib/dummy/comments";
import { postinganDummy } from "@/lib/dummy/posts";
import { userDummy } from "@/lib/dummy/users";
import { formatTanggal } from "@/lib/utils/formatTanggal";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export default function KomentarDashboardPage() {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = komentarDummy.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentComments = komentarDummy.slice(startIndex, endIndex);

    // Ambil nama user dari userDummy
    const getUserName = (userId: string) => {
        const user = userDummy.find((u) => u.id === userId);
        return user ? user.name : "Tidak diketahui";
    };

    // Ambil judul postingan dari postinganDummy
    const getPostTitle = (postId: string) => {
        const post = postinganDummy.find((p) => p.id === postId);
        return post ? post.title : "Postingan tidak ditemukan";
    };

    return (
        <section className="p-8 container mx-auto">
            <Card>
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <CardTitle>Daftar Komentar</CardTitle>
                    <Select
                        value={String(itemsPerPage)}
                        onValueChange={(val) => {
                            setItemsPerPage(Number(val));
                            setCurrentPage(1);
                        }}
                    >
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="10" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="10">10 komentar</SelectItem>
                            <SelectItem value="20">20 komentar</SelectItem>
                            <SelectItem value="50">50 komentar</SelectItem>
                        </SelectContent>
                    </Select>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">No</TableHead>
                                <TableHead>Isi Komentar</TableHead>
                                <TableHead>Penulis</TableHead>
                                <TableHead>Artikel</TableHead>
                                <TableHead>Tanggal</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentComments.map((komentar, index) => (
                                <TableRow key={komentar.id}>
                                    <TableCell>{startIndex + index + 1}</TableCell>
                                    <TableCell className="max-w-[250px] truncate">
                                        {komentar.content}
                                    </TableCell>
                                    <TableCell>{getUserName(komentar.userId)}</TableCell>
                                    <TableCell>{getPostTitle(komentar.postId)}</TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {formatTanggal(komentar.createdAt)}
                                    </TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button size="sm" variant="outline">
                                            <a href="/dashboard/maintenance">Approve</a>
                                        </Button>
                                        <Button size="sm" variant="destructive">
                                            <a href="/dashboard/maintenance">Hapus</a>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* Pagination */}
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                            Menampilkan {startIndex + 1} - {Math.min(endIndex, totalItems)} dari {totalItems} komentar
                        </p>
                        <div className="flex gap-2 justify-start sm:justify-end">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                Sebelumnya
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                Selanjutnya
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}
