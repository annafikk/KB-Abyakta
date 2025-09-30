"use client";

import Image from "next/image";
import { useState } from "react";

export default function TentangKamiPage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (

        <section className="p-10">
            <div className="container mx-auto px-4 grid gap-12 lg:grid-cols-2 lg:items-start">
                {/* Kolom kiri: teks */}
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                        Tentang Kami
                    </h1>

                    <p className="text-muted-foreground text-lg leading-relaxed">
                        Pencanangan Kampung KB Pinang Kencana dilaksanakan pada tanggal 14 Maret 2023 melalui SK Walikota.
                        Kelurahan Pinang Kencana, secara administrasi merupakan salah satu Kelurahan yang terletak di Kecamatan Tanjungpinang Timur,
                        yang memiliki 11 RW dan 64 RT. Berdasarkan RDTR Kota Tanjungpinang tahun 2018–2038, Pinang Kencana memiliki luas mencapai 1.578,367 Ha.
                    </p>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Letak dan Luas Wilayah</h2>
                        <p className="text-muted-foreground">
                            Secara umum wilayah Kelurahan Pinang Kencana masih berada dalam wilayah Kota Tanjungpinang yang dibentuk berdasarkan Undang-Undang Nomor 05 Tahun 2001,
                            dengan luas 24 km². Batas-batas wilayah Kelurahan Pinang Kencana adalah:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground mt-3 space-y-1">
                            <li><strong>Sebelah Utara:</strong> Desa Toapaya, Kecamatan Bintan Utara</li>
                            <li><strong>Sebelah Selatan:</strong> Kelurahan Batu IX, Kecamatan Tanjungpinang Timur</li>
                            <li><strong>Sebelah Barat:</strong> Kelurahan Air Raja, Kecamatan Tanjungpinang Timur</li>
                            <li><strong>Sebelah Timur:</strong> Kelurahan Gunung Lengkuas, Kecamatan Bintan Timur</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-3">Topografi</h2>
                        <ul className="text-muted-foreground space-y-2">
                            <li><strong>Ketinggian tanah dari permukaan laut:</strong> ± 400 M</li>
                            <li><strong>Curah hujan:</strong> 2000–3000 mm / tahun</li>
                            <li><strong>Topografi:</strong> Dataran Berbukit</li>
                            <li><strong>Suhu udara rata-rata:</strong> 30 – 32 °C</li>
                            <li><strong>Jarak ke Pusat Pemerintahan Kecamatan:</strong> 8 Km</li>
                            <li><strong>Jarak ke Pusat Pemerintahan Kota:</strong> 9 Km</li>
                            <li><strong>Jarak ke Ibu Kota Provinsi:</strong> 10 Km</li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-muted-foreground">
                            Keberadaan Kampung KB <strong>ABYAKTA</strong> terletak di Kampung Karang Rejo RT.001 RW.008,
                            sesuai dengan SK yang dikeluarkan oleh Lurah Pinang Kencana pada tanggal 24 Oktober 2023.
                        </p>
                    </div>
                </div>

                {/* Kolom kanan: gambar + peta */}
                <div className="space-y-6">
                    {/* Gambar yang bisa diklik */}
                    <div
                        className="relative aspect-[4/3] w-full cursor-pointer"
                        onClick={openModal}
                    >
                        <Image
                            src="/struktur-organisasi.jpg"
                            alt="Struktur Organisasi"
                            width={1200}
                            height={800}
                            className="w-full h-auto max-h-[90vh] object-contain rounded-lg shadow-xl"
                        />
                    </div>

                    {/* Peta */}
                    <div className="w-full aspect-[4/3]">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.293822603939!2d104.52353770818895!3d0.929046899297281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d96d005e3f4471%3A0x4d4d8926d415a732!2sKampung%20karang%20rejo!5e0!3m2!1sen!2sid!4v1759251636611!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="rounded-lg shadow-lg"
                        ></iframe>
                    </div>
                </div>
            </div>

            {/* Modal image preview */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full px-4"
                        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat klik di gambar
                    >
                        <button
                            className="absolute top-4 right-4 text-white text-2xl font-bold z-50"
                            onClick={closeModal}
                        >
                            ×
                        </button>
                        <Image
                            src="/struktur-organisasi.jpg"
                            alt="Struktur Organisasi"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
