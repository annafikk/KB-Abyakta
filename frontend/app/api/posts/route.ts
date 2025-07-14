import { NextRequest, NextResponse } from "next/server";
import { getPosts, createPost } from "@/lib/api/posts";

export async function GET() {
    try {
        const posts = await getPosts();
        return NextResponse.json(posts);
    } catch (error) {
        console.error("GET /api/posts error:", error);
        return NextResponse.json({ error: "Gagal mengambil postingan" }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const token = req.headers.get("authorization")?.replace("Bearer ", "");
        if (!token) {
            return NextResponse.json({ error: "Unauthorized, token tidak ditemukan" }, { status: 401 });
        }

        const newPost = await createPost(body, token);
        return NextResponse.json(newPost);
    } catch (error) {
        console.error("POST /api/posts error:", error);
        return NextResponse.json({ error: "Gagal membuat postingan" }, { status: 500 });
    }
}
