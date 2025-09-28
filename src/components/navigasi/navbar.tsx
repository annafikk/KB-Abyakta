"use client";

import Image from "next/image";
import Link from "next/link";
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
    const menu = [
        { title: "Beranda", url: "/" },
        { title: "Kategori", url: "/kategori" },
        { title: "Tentang Kami", url: "/tentang-kami" },
    ];

    return (
        <section className="border-b bg-white sticky top-0 z-50">
            <div className="container max-w-7xl mx-auto px-6 md:px-8">
                {/* Desktop */}
                <nav className="hidden justify-between items-center lg:flex py-4">
                    {/* Logo & Menu */}
                    <div className="flex items-center gap-10">
                        <Link href="/" className="flex items-center gap-2">
                            <Image
                                src="/logo-abyakta.svg"
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

                    {/* Search */}
                    <div>
                        <Link href="/masuk">
                            <Button size="sm">Masuk</Button>
                        </Link>
                    </div>

                </nav>

                {/* Mobile */}
                <div className="flex items-center justify-between lg:hidden py-3">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/logo-abyakta.svg"
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
                                            src="/logo-abyakta.svg"
                                            alt="Logo Abyakta"
                                            width={28}
                                            height={28}
                                        />
                                        <span className="font-semibold text-base">Abyakta</span>
                                    </Link>
                                </SheetTitle>
                            </SheetHeader>

                            <div className="flex flex-col gap-4 mt-6">
                                {menu.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.url}
                                        className="text-md font-medium hover:text-primary"
                                    >
                                        {item.title}
                                    </Link>
                                ))}

                                <div className="mt-4">
                                    <Link href="/masuk" className="w-full">
                                        <Button size="sm" className="w-full">Masuk</Button>
                                    </Link>
                                </div>

                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </section>
    );
};

export default Navbar;
