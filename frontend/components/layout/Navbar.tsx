"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { NavLinks } from "@/components/layout/NavLinks";
import { NavMobile } from "@/components/layout/NavMobile";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow sticky top-0 z-50 transition-shadow duration-300">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Nama Situs */}
                <Link href="/" className="text-xl font-semibold text-blue-600">
                    {process.env.NEXT_PUBLIC_KAMPUNG_NAMA}
                </Link>

                {/* Navigasi Desktop */}
                <NavigationMenu className="hidden md:flex">
                    <NavLinks />
                </NavigationMenu>

                {/* Ikon Hamburger */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Navigasi Mobile */}
            <NavMobile open={menuOpen} onClose={() => setMenuOpen(false)} />
        </header>
    );
}