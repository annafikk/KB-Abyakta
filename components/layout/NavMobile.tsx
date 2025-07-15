"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    open: boolean;
    onClose: () => void;
};

const links = [
    { name: "Beranda", href: "/beranda" },
    { name: "Artikel", href: "/artikel" },
    { name: "Tentang Kami", href: "/tentang-kami" },
];

export function NavMobile({ open, onClose }: Props) {
    const pathname = usePathname();

    if (!open) return null;

    return (
        <nav className="md:hidden px-4 pb-4">
            <div className="flex flex-col space-y-3">
                {links.map(({ name, href }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            onClick={onClose}
                            className={`font-medium transition-colors ${isActive
                                ? "text-blue-600 font-semibold"
                                : "text-gray-700 hover:text-blue-600"
                                }`}
                        >
                            {name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}
