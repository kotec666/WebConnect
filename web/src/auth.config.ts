import type { NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"
import { LoginSchema } from "@/schemas"
import kyFetcher from "@/api/ky"

export default {
	providers: [
		Credentials({
			async authorize(credentials) {
				const validatedFields = LoginSchema.safeParse(credentials)

				if (validatedFields.success) {
					console.log("SUCCESS", validatedFields.data)

					const data = await kyFetcher
						.post(`auth/login`, {
							json: validatedFields.data,
						})
						.json()

					return data
					// get user by email
					// const user = await getUserByEmail(email)
					// if (!user || !user.password) return null

					// passwordsMatch
					// if (passwordsMatch) return user

					//return { email } // return user
				}

				return null
			},
		}),
	],
	secret: process.env.AUTH_SECRET,
} satisfies NextAuthConfig
