import * as z from "zod"
import { LoginSchema, RegisterSchema } from "@/schemas"
import kyFetcher from "@/api/ky"
import { User } from "@/types"

export const register = async (data: z.infer<typeof RegisterSchema>) => {
	const validatedFields = RegisterSchema.safeParse(data)

	if (!validatedFields.success) {
		return { error: "Ошибка валидации полей" }
	}

	try {
		await kyFetcher
			.post(`users`, {
				json: validatedFields.data,
			})
			.json()

		return { success: "Пользователь успешно зарегистрирован" }
	} catch (e) {
		return { error: "Ошибка регистрации" }
	}

	// return пользователь зарегистрирован

	// mutate("api/auth/login")
}

export const login = async (data: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(data)

	if (!validatedFields.success) {
		return { error: "Ошибка валидации полей" }
	}

	try {
		const data = (await kyFetcher
			.post(`auth/login`, {
				json: validatedFields.data,
			})
			.json()) as { user: User; accessToken: string }
	} catch (e) {
		return { error: "Неверные данные для авторизации" }
	}

	// mutate("auth/login")
}

export const auth = async (token?: string): Promise<User> => {
	return (
		await kyFetcher.get("auth", {
			cache: "no-store",
			headers: {
				cookie: `accessToken=${token}`,
			},
		})
	).json()
}

export const logout = async (): Promise<boolean> => {
	return (await kyFetcher.delete("auth")).json()
}
