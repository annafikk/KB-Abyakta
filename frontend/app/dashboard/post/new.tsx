"use client";

import { useState } from "react";
import { createPost } from "@/lib/api/posts";

export default function NewPostPage() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [category, setCategory] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState(false);

    const categories = [
        { id: "1", name: "Pekerjaan" },
        { id: "2", name: "Teknologi" },
        { id: "3", name: "Umum" },
    ];

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const token = localStorage.getItem("token");
            if (!token) throw new Error("Anda harus login dulu.");

            await createPost({ title, content, category }, token);

            setSuccess(true);
            setTitle("");
            setContent("");
            setCategory("");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white rounded shadow space-y-6">
            <h1 className="text-2xl font-bold mb-4">Tambah Postingan Baru</h1>

            {error && <p className="text-red-600">{error}</p>}
            {success && <p className="text-green-600">Postingan berhasil dibuat!</p>}

            <div>
                <label htmlFor="title" className="block mb-1 font-medium">
                    Judul
                </label>
                <input
                    id="title"
                    type="text"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    disabled={loading}
                />
            </div>

            <div>
                <label htmlFor="content" className="block mb-1 font-medium">
                    Konten
                </label>
                <textarea
                    id="content"
                    rows={6}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    disabled={loading}
                />
            </div>

            <div>
                <label htmlFor="category" className="block mb-1 font-medium">
                    Kategori
                </label>
                <select
                    id="category"
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                    disabled={loading}
                >
                    <option value="" disabled>
                        Pilih kategori
                    </option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>

            <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-50"
            >
                {loading ? "Menyimpan..." : "Simpan Postingan"}
            </button>
        </form>
    );
}
