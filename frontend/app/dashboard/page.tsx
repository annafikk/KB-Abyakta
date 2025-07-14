import { getPosts } from "@/lib/api/posts";
import { getCategories } from "@/lib/api/categories";
import { Post, Category } from "@/lib/types";
import CardStat from "@/components/dashboard/CardStat";

export default async function DashboardPage() {
    const posts: Post[] = await getPosts();
    const categories: Category[] = await getCategories();

    return (
        <div className="space-y-8">
            <h1 className="text-3xl font-bold mb-4">Selamat datang di Dashboard</h1>
            <p>Pilih menu di sidebar untuk mulai mengelola postingan, kategori, dan profil.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <CardStat title="Postingan" value={posts.length} colorClass="text-blue-600" />
                <CardStat title="Kategori" value={categories.length} colorClass="text-green-600" />
            </div>
        </div>
    );
}