export interface Category {
    id: number;
    name: string;
    slug: string;
}

export async function getCategories(): Promise<Category[]> {
    const res = await fetch("https://berita-desa-api2.vercel.app/api/categories");

    if (!res.ok) {
        throw new Error("Gagal mengambil kategori");
    }

    const data: Category[] = await res.json();
    return data;
}
