"use client";

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface ArtikelBreadcrumbProps {
    category?: {
        name: string;
        slug: string;
    };
    postTitle: string;
}

export default function ArtikelBreadcrumb({
    category,
    postTitle,
}: ArtikelBreadcrumbProps) {
    return (
        <div className="max-w-3xl mx-auto px-4 pt-6">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/">Beranda</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link href="/artikel">Artikel</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    {category && (
                        <>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink asChild>
                                    <Link href={`/kategori/${category.slug}`}>
                                        {category.name}
                                    </Link>
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </>
                    )}
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>{postTitle}</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
