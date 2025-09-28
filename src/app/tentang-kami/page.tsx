"use client";

import Image from "next/image";

export default function TentangKamiPage() {
    return (
        <section className="p-20">
            <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2 lg:items-center">
                {/* Kolom kiri: teks */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        Tentang Kami
                    </h1>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Desa Abyakta adalah desa yang berkomitmen untuk menghadirkan informasi
                        terbaru secara transparan dan mudah diakses masyarakat.
                        Website ini dibuat untuk menyajikan berita, informasi, dan kegiatan desa
                        dalam satu platform modern.
                    </p>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Visi</h2>
                        <p className="text-muted-foreground">
                            Mewujudkan desa yang maju, transparan, dan berdaya melalui
                            teknologi informasi.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Misi</h2>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2">
                            <li>Menyediakan berita dan informasi desa secara cepat dan akurat.</li>
                            <li>Mendorong partisipasi masyarakat dalam pembangunan desa.</li>
                            <li>Memanfaatkan teknologi untuk pelayanan publik yang lebih baik.</li>
                        </ul>
                    </div>
                </div>

                {/* Kolom kanan: gambar */}
                <div className="relative aspect-[4/3] w-full">
                    <Image
                        src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-dark-1.svg"
                        alt="Ilustrasi Desa Abyakta"
                        fill
                        className="object-cover rounded-lg shadow-lg"
                        priority
                    />
                </div>
            </div>
        </section>
    );
}
