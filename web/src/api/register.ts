import kyFetcher from "@/api/ky"
import * as z from "zod"
import { RegisterSchema } from "@/schemas"

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
