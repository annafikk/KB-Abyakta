"use client";

import { useState } from "react";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-xl font-semibold text-blue-600">
                    Kampung KB Abyakta
                </Link>

                {/* Desktop */}
                <NavigationMenu>
                    <NavigationMenuList className="hidden md:flex space-x-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/beranda"
                                    className="text-gray-700 hover:text-blue-600 font-medium"
                                >
                                    Beranda
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/berita"
                                    className="text-gray-700 hover:text-blue-600 font-medium"
                                >
                                    Berita
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link
                                    href="/tentang-kami"
                                    className="text-gray-700 hover:text-blue-600 font-medium"
                                >
                                    Tentang Kami
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Hamburger */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile */}
            {menuOpen && (
                <div className="md:hidden px-4 pb-4">
                    <div className="flex flex-col space-y-3">
                        <Link
                            href="/beranda"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 hover:text-blue-600 font-medium"
                        >
                            Beranda
                        </Link>
                        <Link
                            href="/berita"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 hover:text-blue-600 font-medium"
                        >
                            Berita
                        </Link>
                        <Link
                            href="/tentang-kami"
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-700 hover:text-blue-600 font-medium"
                        >
                            Tentang Kami
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}