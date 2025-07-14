"use client"

import { useEffect, useState } from "react"
import { Category } from "@/lib/types"

interface Props {
    value: string
    onChange: (val: string) => void
}

export default function CategorySelect({ value, onChange }: Props) {
    const [categories, setCategories] = useState<Category[]>([])

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await fetch("/api/categories")
                const data = await res.json()
                setCategories(data)
            } catch {
                console.error("Gagal memuat kategori")
            }
        }
        fetchCategories()
    }, [])

    return (
        <div className="space-y-4">
            <div>
                <label className="text-sm font-medium">Pilih Kategori</label>
                <select
                    className="w-full border p-2 rounded"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    <option value="">Pilih kategori</option>
                    {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                            {cat.name}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    )
}
