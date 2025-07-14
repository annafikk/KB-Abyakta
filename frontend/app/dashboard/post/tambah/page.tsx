"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import JudulDanSlugForm from "@/components/dashboard/JudulSlugForm"
import UploadGambar from "@/components/dashboard/UploadGambar"
import RichTextEditor from "@/components/form/RichTextEditor"
import CategorySelect from "@/components/dashboard/CategorySelect"
import { Button } from "@/components/ui/button"

export default function TambahPostPage() {
    const [title, setTitle] = useState("")
    const [slug, setSlug] = useState("")
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [content, setContent] = useState("")
    const [category, setCategory] = useState("")
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    function handleTitleChange(value: string) {
        setTitle(value)
        const generatedSlug = value
            .toLowerCase()
            .trim()
            .replace(/[^ -~\s-]/g, "")
            .replace(/[^\w\s-]/g, "")
            .replace(/\s+/g, "-")
        setSlug(generatedSlug)
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!imageFile) return alert("Gambar belum dipilih")

        setLoading(true)

        try {
            // 1. Upload image terlebih dahulu (jika perlu)
            // Simulasi saja: misal file disimpan langsung dengan nama file di folder /uploads
            const fakeImageUrl = "/uploads/" + imageFile.name

            // 2. Submit ke backend
            const res = await fetch("https://berita-desa-api2.vercel.app/api/post/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    title,
                    slug,
                    image: fakeImageUrl,
                    content,
                    status: "published",
                    category,
                }),
            })

            if (!res.ok) throw new Error("Gagal menyimpan post")

            router.push("/dashboard/post")
        } catch (err) {
            console.error(err)
            alert("Gagal menyimpan postingan")
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold">Tambah Postingan</h1>

            <JudulDanSlugForm
                title={title}
                slug={slug}
                onTitleChange={handleTitleChange}
            />

            <UploadGambar onChange={setImageFile} />

            <div>
                <label className="text-sm font-medium">Konten</label>
                <RichTextEditor value={content} onChange={setContent} />
            </div>

            <CategorySelect value={category} onChange={setCategory} />

            <Button type="submit" disabled={loading}>
                {loading ? "Menyimpan..." : "Simpan Postingan"}
            </Button>
        </form>
    )
}
