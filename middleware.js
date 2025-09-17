import { jwtDecode } from "jwt-decode";
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token")?.value;
  const path = request.nextUrl.pathname;

  if (!token && (path.startsWith("/userpanel") || path.startsWith("/adminpanel"))) {
    return NextResponse.redirect(new URL("/signin", request.url));
  }

  let decoded;
  if (token) {
    try {
      decoded = jwtDecode(token);
    } catch (err) {
      return NextResponse.redirect(new URL("/signin", request.url));
    }
  }

  if (decoded.role === "admin" && path.startsWith("/userpanel")) {
    return NextResponse.redirect(new URL("/adminpanel", request.url));
  } else if (decoded.role === "user" && path.startsWith("/adminpanel")) {
    return NextResponse.redirect(new URL("/userpanel", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/userpanel/:path*", "/adminpanel/:path*"],
};
