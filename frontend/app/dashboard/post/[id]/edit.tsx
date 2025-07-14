"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function PostEdit() {
    const router = useRouter();
    const params = useParams();
    const postId = params.id;

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [content, setContent] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        async function fetchPost() {
            try {
                const res = await fetch(`/api/posts/${postId}`);
                if (!res.ok) throw new Error("Gagal mengambil data postingan");
                const data = await res.json();
                setTitle(data.title);
                setCategory(data.category);
                setContent(data.content);
            } catch (e) {
                setError("Gagal mengambil data postingan");
            } finally {
                setLoading(false);
            }
        }
        fetchPost();
    }, [postId]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");

        try {
            const res = await fetch(`/api/posts/${postId}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, category, content }),
            });

            if (!res.ok) {
                const err = await res.json();
                setError(err.message || "Gagal update postingan");
                return;
            }

            router.push("/dashboard/post");
        } catch (err) {
            setError("Terjadi kesalahan saat update postingan");
            console.error(err);
        }
    }

    if (loading) return <p>Loading data...</p>;

    return (
        <div>
            <h1 className="text-2xl font-bold mb-6">Edit Postingan</h1>
            {error && <p className="mb-4 text-red-600">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
                <div>
                    <label htmlFor="title" className="block font-semibold mb-1">
                        Judul
                    </label>
                    <input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block font-semibold mb-1">
                        Kategori (ID)
                    </label>
                    <input
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label htmlFor="content" className="block font-semibold mb-1">
                        Konten
                    </label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        rows={6}
                        className="w-full border border-gray-300 rounded px-3 py-2"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Simpan Perubahan
                </button>
            </form>
        </div>
    );
}
