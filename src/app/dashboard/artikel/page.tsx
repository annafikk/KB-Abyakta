"use client";

import { useState } from "react";
import { postinganDummy } from "@/lib/dummy/posts";
import { formatTanggal } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";


export default function DashboardPostsPage() {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = postinganDummy.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // ambil data sesuai page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPosts = postinganDummy.slice(startIndex, endIndex);

    const handlePrev = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <section className="p-8 container mx-auto">
            <Card>
                <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <CardTitle>Daftar Postingan</CardTitle>
                    <div className="flex items-center gap-4">
                        {/* Dropdown jumlah artikel */}
                        <Select
                            value={String(itemsPerPage)}
                            onValueChange={(val) => {
                                setItemsPerPage(Number(val));
                                setCurrentPage(1);
                            }}
                        >
                            <SelectTrigger className="w-[120px]">
                                <SelectValue placeholder="10" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="10">10 artikel</SelectItem>
                                <SelectItem value="20">20 artikel</SelectItem>
                                <SelectItem value="50">50 artikel</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button asChild>
                            <a href="/dashboard/maintenance">Tambah</a>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>No</TableHead>
                                <TableHead>Judul</TableHead>
                                <TableHead>Slug</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Tanggal</TableHead>
                                <TableHead>Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentPosts.map((post, index) => (
                                <TableRow key={post.id}>
                                    <TableCell>{startIndex + index + 1}</TableCell>
                                    <TableCell className="font-medium">{post.title}</TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {post.slug}
                                    </TableCell>
                                    <TableCell>
                                        <span className="px-2 py-1 text-xs rounded bg-secondary">
                                            {post.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="text-muted-foreground">
                                        {formatTanggal(post.createdAt)}
                                    </TableCell>
                                    <TableCell className="flex gap-2">
                                        <Button variant="outline" size="sm" asChild>
                                            {/* <a href={`/dashboard/post/edit/${post.id}`}>Edit</a> */}
                                            <a href={`/dashboard/maintenance`}>Edit</a>
                                        </Button>
                                        <Button variant="destructive" size="sm">
                                            <a href={`/dashboard/maintenance`}>Hapus</a>
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* Pagination */}
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                        <p className="text-sm text-muted-foreground">
                            Menampilkan {startIndex + 1} - {Math.min(endIndex, totalItems)} dari {totalItems} postingan
                        </p>
                        <div className="flex gap-2 justify-start sm:justify-end">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                            >
                                Sebelumnya
                            </Button>
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={handleNext}
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
