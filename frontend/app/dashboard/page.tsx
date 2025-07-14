import { getPosts, getCategories } from "@/lib/api";
import { Post, Category } from "@/lib/api";

export default async function DashboardPage() {
    const posts: Post[] = await getPosts();
    const categories: Category[] = await getCategories();

    const totalPosts = posts.length;
    const totalCategories = categories.length;

    return (
        <div className="space-y-8">
            {/* Header Dashboard */}
            <h1 className="text-3xl font-bold mb-4">Selamat datang di Dashboard</h1>
            <p>Pilih menu di sidebar untuk mulai mengelola postingan, kategori, dan profil.</p>

            {/* Card Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card Post Count */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">Jumlah Postingan</h3>
                    <p className="text-3xl font-bold text-blue-600">{totalPosts}</p>
                </div>

                {/* Card Category Count */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-800">Jumlah Kategori</h3>
                    <p className="text-3xl font-bold text-green-600">{totalCategories}</p>
                </div>
            </div>
        </div>
    );
}
