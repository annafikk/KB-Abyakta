// src/app/dashboard/kategori/page.tsx
"use client";

import { useState } from "react";
import { kategoriDummy } from "@/lib/dummy/categories";
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

export default function KategoriDashboardPage() {
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = kategoriDummy.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Data per halaman
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentCategories = kategoriDummy.slice(startIndex, endIndex);

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
                    <CardTitle>Daftar Kategori</CardTitle>
                    <div className="flex items-center gap-4">
                        {/* Dropdown jumlah kategori */}
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
                                <SelectItem value="10">10 kategori</SelectItem>
                                <SelectItem value="20">20 kategori</SelectItem>
                                <SelectItem value="50">50 kategori</SelectItem>
                            </SelectContent>
                        </Select>

                        <Button>
                            <a href="/dashboard/maintenance">Tambah</a>
                        </Button>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[50px]">No</TableHead>
                                <TableHead>Nama</TableHead>
                                <TableHead>Slug</TableHead>
                                <TableHead className="text-right">Aksi</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {currentCategories.map((cat, index) => (
                                <TableRow key={cat.id}>
                                    <TableCell>{startIndex + index + 1}</TableCell>
                                    <TableCell>{cat.name}</TableCell>
                                    <TableCell>{cat.slug}</TableCell>
                                    <TableCell className="text-right space-x-2">
                                        <Button size="sm" variant="outline">
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
                            Menampilkan {startIndex + 1} - {Math.min(endIndex, totalItems)} dari {totalItems} kategori
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
