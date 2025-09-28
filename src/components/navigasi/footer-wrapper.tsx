"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/navigasi/footer";

export default function FooterWrapper() {
    const pathname = usePathname();

    if (pathname === "/masuk" || pathname === "/daftar") {
        return null;
    }

    return <Footer />;
}
