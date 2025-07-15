import { Category } from "@/lib/types";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

export async function getCategories(): Promise<Category[]> {
    const res = await fetch(`${API_BASE}/api/categories`, { cache: "no-store" });

    if (!res.ok) {
        throw new Error("Gagal mengambil kategori");
    }

    return res.json();
}
