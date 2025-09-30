"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/navigasi/footer/footer";

export default function FooterWrapper() {
    const pathname = usePathname();

    if (pathname === "/masuk" || pathname === "/daftar" || pathname === "/dashboard/maintenance") {
        return null;
    }

    return <Footer />;
}
