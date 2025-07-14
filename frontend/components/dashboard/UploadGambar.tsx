"use client"

import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import Image from "next/image"
import { Label } from "@radix-ui/react-label"

interface UploadGambarProps {
    onChange: (file: File | null) => void
    defaultImage?: string
}

export default function UploadGambar({ onChange, defaultImage }: UploadGambarProps) {
    const [preview, setPreview] = useState<string | null>(defaultImage || null)

    const onDrop = useCallback((acceptedFiles: File[]) => {
        const file = acceptedFiles[0]
        if (file) {
            setPreview(URL.createObjectURL(file))
            onChange(file)
        }
    }, [onChange])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "image/*": [] },
        multiple: false,
    })

    return (
        <div className="space-y-2">
            <Label>Gambar Utama</Label>

            <div
                {...getRootProps()}
                className={`border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition ${isDragActive ? "bg-blue-50 border-blue-400" : "border-gray-300"
                    }`}
            >
                <input {...getInputProps()} />
                {preview ? (
                    <div className="relative w-full h-64">
                        <Image
                            src={preview}
                            alt="Preview"
                            fill
                            className="object-contain rounded"
                        />
                    </div>
                ) : (
                    <p className="text-gray-500">Drag & drop gambar, atau klik untuk memilih file</p>
                )}
            </div>
        </div>
    )
}
