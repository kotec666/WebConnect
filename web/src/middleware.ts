import { authRoutes, publicRoutes, DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
	const { nextUrl } = request
	const response = NextResponse.next()

	const cookieStore = cookies()
	const token = cookieStore.get("accessToken")

	const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
	const isAuthRoute = authRoutes.includes(nextUrl.pathname)

	const isLoggedIn = token?.value === "undefined"

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
		}
		return null
	}

	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL("/auth", nextUrl))
	}

	return response
}

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
