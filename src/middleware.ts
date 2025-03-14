import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/";

  //   const token = request.cookies.get("token")?.value || "";
  const token = request.cookies.get("username");

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/show-notes", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/add-notes", "/chats", "/show-notes"],
};
