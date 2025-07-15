import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;
    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/dashboard") && !token) {
        return NextResponse.redirect(new URL("/masuk", req.url));
    }

    if ((pathname === "/masuk" || pathname === "/daftar") && token) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/masuk", "/daftar"],
};
