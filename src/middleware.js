import { NextResponse } from "next/server";

export function middleware(request) {
    const headers = new Headers(request.headers);
    headers.set("x-current-path", request.nextUrl.pathname);
    headers.set('next-url', request.nextUrl);
    return NextResponse.next({ headers });
}

export const config = { matcher: ["/dashboard/:path*", "/((?!api|_next/static|_next/image|favicon.ico).*)"] };
