import NextAuth from "next-auth"
import authConfig from "@/auth.config"

export const {
	handlers: { GET, POST },
	auth,
	signIn,
	signOut,
} = NextAuth({
	...authConfig,
	session: { strategy: "jwt" },
	secret: process.env.AUTH_SECRET || "123133",
})
