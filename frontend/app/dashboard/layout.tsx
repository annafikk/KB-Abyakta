"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const menuItems = [
        { label: "Postingan", href: "/dashboard/post" },
        { label: "Kategori", href: "/dashboard/kategori" },
        { label: "Profil", href: "/dashboard/profil" },
    ];

    return (
        <div className="flex min-h-screen bg-gray-50">
            <nav className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
                <h2 className="text-xl font-bold mb-8">Dashboard</h2>
                <ul className="space-y-4 flex flex-col">
                    {menuItems.map(({ label, href }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`block px-4 py-2 rounded ${pathname.startsWith(href)
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-700 hover:bg-blue-100"
                                    }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <main className="flex-1 p-6 bg-white">{children}</main>
        </div>
    );
}