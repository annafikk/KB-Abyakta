import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
    const token = req.cookies.get("token")?.value;

    const { pathname } = req.nextUrl;

    if (pathname.startsWith("/dashboard") && !token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    if ((pathname === "/login" || pathname === "/register") && token) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/login", "/register"],
};
