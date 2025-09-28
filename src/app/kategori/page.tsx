"use client";

import Link from "next/link";
import { kategoriDummy } from "@/lib/dummy/categories";

export default function KategoriPage() {
    return (
        <section className="px-20 py-16 container mx-auto">
            <h1 className="text-3xl font-bold mb-8">Kategori</h1>
            <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {kategoriDummy.map((cat) => (
                    <li
                        key={cat.id}
                        className="p-6 border rounded-lg shadow hover:shadow-md transition"
                    >
                        <Link href={`/kategori/${cat.slug}`}>
                            <h2 className="text-xl font-semibold hover:underline">
                                {cat.name}
                            </h2>
                        </Link>
                    </li>
                ))}
            </ul>
        </section>
    );
}
