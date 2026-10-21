import { NextResponse } from "next/server";
import { auth } from "./lib/auth";

export default auth((req) => {

    const { nextUrl } = req;

    const isLoggedIn = !!req.auth?.user;
    const isAdminRoute = nextUrl.pathname.startsWith("/admin");

    if (isAdminRoute && !isLoggedIn) {
        return NextResponse.redirect(
            new URL("/login", nextUrl)
        );
    }

    const response = NextResponse.next();

    if (isAdminRoute) {
        response.headers.set(
            "Cache-Control",
            "no-store, no-cache, must-revalidate, proxy-revalidate"
        );
    }

    return response;

});

export const config = {
    matcher: ["/admin/:path*"],
};