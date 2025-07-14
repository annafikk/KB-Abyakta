"use client"

import { useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"

interface Props {
    title: string
    slug: string
    onTitleChange: (value: string) => void
}

export default function JudulDanSlugForm({ title, slug, onTitleChange }: Props) {
    useEffect(() => {
    }, [title])

    return (
        <div className="space-y-4">
            <div>
                <Label htmlFor="title">Judul</Label>
                <Input
                    id="title"
                    placeholder="Masukkan judul artikel"
                    value={title}
                    onChange={(e) => onTitleChange(e.target.value)}
                />
            </div>
            <div>
                <Label htmlFor="slug">Slug</Label>
                <Input
                    id="slug"
                    value={slug}
                    readOnly
                    className="bg-gray-100 cursor-not-allowed"
                />
            </div>
        </div>
    )
}
