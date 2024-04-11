import kyFetcher from "@/api/ky"
import * as z from "zod"
import { LoginSchema } from "@/schemas"

export const login = async (data: z.infer<typeof LoginSchema>) => {
	const validatedFields = LoginSchema.safeParse(data)

	if (!validatedFields.success) {
		return { error: "Ошибка валидации полей" }
	}

	try {
		await kyFetcher
			.post(`auth/login`, {
				body: JSON.stringify(validatedFields.data),
			})
			.json()
	} catch (e) {
		return { error: "Неверные данные для авторизации" }
	}

	// mutate("auth/login")
}
