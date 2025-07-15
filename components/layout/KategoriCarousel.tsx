"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";

type Category = {
    slug: string;
    name: string;
};

export default function KategoriCarousel({ categories }: { categories: Category[] }) {
    const containerRef = useRef<HTMLUListElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    function checkScrollPosition() {
        if (!containerRef.current) return;

        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
    }

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        checkScrollPosition();

        container.addEventListener("scroll", checkScrollPosition);
    }, [categories]);

    function scrollLeft() {
        containerRef.current?.scrollBy({ left: -150, behavior: "smooth" });
    }

    function scrollRight() {
        containerRef.current?.scrollBy({ left: 150, behavior: "smooth" });
    }

    return (
        <div className="relative">
            <button
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Scroll Left"
                type="button"
            >
                ◀
            </button>

            <ul
                ref={containerRef}
                className="flex space-x-4 overflow-x-auto scrollbar-none scroll-smooth py-2 px-8"
            >
                {categories.map((cat) => (
                    <li key={cat.slug} className="flex-shrink-0">
                        <Link
                            href={`/kategori/${cat.slug}`}
                            className="block bg-blue-50 border border-blue-200 rounded text-center py-3 px-4 font-medium text-gray-700 hover:bg-blue-100 transition whitespace-nowrap"
                        >
                            {cat.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <button
                onClick={scrollRight}
                disabled={!canScrollRight}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow z-10 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Scroll Right"
                type="button"
            >
                ▶
            </button>
        </div>
    );
}
