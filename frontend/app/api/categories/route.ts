import { NextRequest, NextResponse } from "next/server";
import { getCategories } from "@/lib/api/categories";

export async function GET() {
    try {
        const categories = await getCategories();

        if (!Array.isArray(categories)) {
            return NextResponse.json({ error: "Data kategori tidak valid" }, { status: 500 });
        }

        return NextResponse.json(categories);
    } catch (error) {
        console.error("GET /api/categories error:", error);
        return NextResponse.json({ error: "Gagal mengambil kategori" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const res = await fetch("https://berita-desa-api2.vercel.app/api/category", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });

        if (!res.ok) {
            const error = await res.json();
            return NextResponse.json({ error: error.message || "Gagal menambah kategori" }, { status: res.status });
        }

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("POST /api/categories error:", error);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
