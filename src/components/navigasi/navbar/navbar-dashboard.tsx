"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
    const router = useRouter();

    const menu = [
        { title: "Dashboard", url: "/dashboard" },
        { title: "Postingan", url: "/dashboard/artikel" },
        { title: "Kategori", url: "/dashboard/kategori" },
        { title: "Komentar", url: "/dashboard/komentar" },
        { title: "Pengguna", url: "/dashboard/pengguna" },
    ];

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkLogin = () => {
            const token = localStorage.getItem("token");
            setIsLoggedIn(!!token);
        };

        checkLogin();

        window.addEventListener("storage", checkLogin);

        return () => {
            window.removeEventListener("storage", checkLogin);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/masuk");
    };

    return (
        <section className="border-b bg-white sticky top-0 z-50">
            <div className="container max-w-7xl mx-auto px-6 md:px-8">
                {/* Desktop */}
                <nav className="hidden justify-between items-center lg:flex py-4">
                    {/* Logo & Menu */}
                    <div className="flex items-center gap-10">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo.svg"
                                alt="Logo Abyakta"
                                width={36}
                                height={36}
                            />
                            <span className="text-lg font-semibold tracking-tight">
                                Abyakta
                            </span>
                        </Link>
                        <NavigationMenu>
                            <NavigationMenuList>
                                {menu.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <NavigationMenuLink
                                            asChild
                                            className="px-4 py-2 text-sm font-medium hover:text-primary transition-colors"
                                        >
                                            <Link href={item.url}>{item.title}</Link>
                                        </NavigationMenuLink>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    {/* Right side buttons */}
                    {isLoggedIn && (
                        <div className="flex items-center gap-2">
                            <Button size="sm" onClick={handleLogout} variant="destructive">
                                Keluar
                            </Button>
                        </div>
                    )}
                </nav>

                {/* Mobile */}
                <div className="flex items-center justify-between lg:hidden py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo.svg"
                            alt="Logo Abyakta"
                            width={32}
                            height={32}
                        />
                        <span className="font-semibold text-base">Abyakta</span>
                    </Link>

                    {/* Drawer */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="outline" size="icon">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="p-4">
                            <SheetHeader>
                                <SheetTitle>
                                    <Link href="/" className="flex items-center gap-2">
                                        <Image
                                            src="/logo.svg"
                                            alt="Logo Abyakta"
                                            width={28}
                                            height={28}
                                        />
                                        <span className="font-semibold text-base">Abyakta</span>
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-4 mt-6">
                                {isLoggedIn ? (
                                    <>
                                        <Button
                                            onClick={handleLogout}
                                            variant="destructive"
                                            className="w-full"
                                        >
                                            Keluar
                                        </Button>
                                        {menu
                                            .filter((item) => item.title !== "Dashboard")
                                            .map((item) => (
                                                <Link
                                                    key={item.title}
                                                    href={item.url}
                                                    className="text-md font-medium hover:text-primary"
                                                >
                                                    {item.title}
                                                </Link>
                                            ))}
                                    </>
                                ) : (
                                    <>
                                        {menu.map((item) => (
                                            <Link
                                                key={item.title}
                                                href={item.url}
                                                className="text-md font-medium hover:text-primary"
                                            >
                                                {item.title}
                                            </Link>
                                        ))}
                                        <Link href="/masuk" className="w-full">
                                            <Button size="sm" className="w-full mt-4">
                                                Masuk
                                            </Button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
