import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";
import { getToken } from 'next-auth/jwt';

export default withAuth(
  async function middleware(request: NextRequestWithAuth) {
    console.log("hello world");
    console.log(request.nextUrl.pathname);
    console.log(request.nextauth.token);

    if (request.nextUrl.pathname.startsWith("/admin") && request.nextauth.token?.email !== "admin") {
      return NextResponse.rewrite(new URL("/denied", request.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/admin/"] };
