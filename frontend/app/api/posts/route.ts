import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    const { title, content, category } = await req.json();

    const res = await fetch("https://berita-desa-api2.vercel.app/api/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content, category }),
    });

    if (!res.ok) {
        return NextResponse.json({ error: "Gagal membuat post" }, { status: 500 });
    }

    const data = await res.json();
    return NextResponse.json(data);
}
