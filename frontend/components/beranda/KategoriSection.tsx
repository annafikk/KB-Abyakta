import KategoriCarousel from "@/components/layout/KategoriCarousel";
import type { Category } from "@/lib/types";

type Props = {
    categories: Category[];
};

export default function KategoriSection({ categories }: Props) {
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Kategori Artikel</h2>
            {categories.length === 0 ? (
                <p className="text-gray-500">Tidak ada kategori tersedia.</p>
            ) : (
                <KategoriCarousel categories={categories} />
            )}
        </div>
    );
}
