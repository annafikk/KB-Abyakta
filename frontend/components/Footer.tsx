"use client";

import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-100 border-t mt-12">
            <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                {/* Nama */}
                <p className="text-gray-700 font-semibold">Kampung KB Abyakta</p>

                {/* Copyright */}
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Kampung KB Abyakta
                </p>
            </div>
        </footer>
    );
}