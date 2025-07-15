"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";

const links = [
    { name: "Beranda", href: "/beranda" },
    { name: "Artikel", href: "/artikel" },
    { name: "Tentang Kami", href: "/tentang-kami" },
];

export function NavLinks() {
    const pathname = usePathname();

    return (
        <NavigationMenuList className="space-x-6">
            {links.map(({ name, href }) => {
                const isActive = pathname === href;
                return (
                    <NavigationMenuItem key={href}>
                        <NavigationMenuLink asChild>
                            <Link
                                href={href}
                                className={`font-medium transition-colors ${isActive
                                    ? "text-blue-600 font-semibold"
                                    : "text-gray-700 hover:text-blue-600"
                                    }`}
                            >
                                {name}
                            </Link>
                        </NavigationMenuLink>
                    </NavigationMenuItem>
                );
            })}
        </NavigationMenuList>
    );
}
