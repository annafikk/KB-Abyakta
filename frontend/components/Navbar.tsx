"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export function Navbar() {
    return (
        <header className="bg-white shadow">
            <div className="max-w-5xl mx-auto px-4 py-3">
                <NavigationMenu>
                    <NavigationMenuList className="flex space-x-6">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/beranda" className="text-gray-700 hover:text-blue-600 font-medium">
                                    Beranda
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/berita" className="text-gray-700 hover:text-blue-600 font-medium">
                                    Berita
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild>
                                <Link href="/tentang-kami" className="text-gray-700 hover:text-blue-600 font-medium">
                                    Tentang Kami
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </header>
    );
}
