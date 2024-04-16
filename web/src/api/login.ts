"use server"
import kyFetcher from "@/api/ky"
import * as z from "zod"
import { LoginSchema } from "@/schemas"
import { signIn } from "@/auth"
import { DEFAULT_LOGIN_REDIRECT } from "@/routes"
import { AuthError } from "next-auth"

const enter = async (data: z.infer<typeof LoginSchema>) => {
	try {
		await signIn("credentials", {
			email: data.email,
			password: data.password,
			redirectTo: DEFAULT_LOGIN_REDIRECT, // callbackUrl ||
		})
	} catch (e) {
		if (e instanceof AuthError) {
			switch (e.type) {
				case "CredentialsSignin":
					return { error: "Неверные данные для авторизации, signIn" }
				default:
					return { error: "Что-то пошло не так" }
			}
		}

		throw e
	}
}

export const login = async (data: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(data)

	if (!validatedFields.success) {
		return { error: "Ошибка валидации полей" }
	}

	try {
		// await kyFetcher
		// 	.post(`auth/login`, {
		// 		json: validatedFields.data,
		// 	})
		// 	.json()
		//
		const { email, password } = validatedFields.data
		await enter({ email, password })
	} catch (e) {
		return { error: "Неверные данные для авторизации123132" }
	}

	// mutate("auth/login")
}
