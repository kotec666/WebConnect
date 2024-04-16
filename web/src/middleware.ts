import NextAuth from "next-auth"
import authConfig from "@/auth.config"
import {
	apiAuthPrefix,
	authRoutes,
	publicRoutes,
	DEFAULT_LOGIN_REDIRECT,
} from "@/routes"

const { auth } = NextAuth(authConfig)

export default auth(req => {
	const { nextUrl } = req
	const isLoggedIn = !!req.auth

	console.log(req.auth)

	const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
	const isAuthRoute = authRoutes.includes(nextUrl.pathname)

	console.log(isApiAuthRoute, isPublicRoute, isAuthRoute)

	if (isApiAuthRoute) {
		return null
	}

	if (isAuthRoute) {
		if (isLoggedIn) {
			return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
		}
		return null
	}

	if (!isLoggedIn && !isPublicRoute) {
		return Response.redirect(new URL("/auth", nextUrl))
	}

	return null
})

export const config = {
	matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
