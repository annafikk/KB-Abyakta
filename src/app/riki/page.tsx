"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Riki() {
    const handleButtonClick = () => {
        // Redirect ke URL Rickroll
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-4 mt-10">
            {/* Gambar dari folder public */}
            <Image
                src="/easter-egg.png"
                alt="Riki"
                width={100}
                height={100}
            />

            {/* Teks */}
            <p className="p-10 text-lg font-semibold text-center">Selamat! Anda berhasil menemukan Easter Egg. Klik tombol di bawah untuk mengklaim hadiah Anda!</p>

            {/* Tombol yang mengarah ke YouTube Rickroll */}
            <Button onClick={handleButtonClick}>
                Klaim Hadiah
            </Button>
        </div>
    );
}
