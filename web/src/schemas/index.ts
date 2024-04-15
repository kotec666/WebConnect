import * as z from "zod"

export const LoginSchema = z.object({
	email: z.string().email({ message: "Неправильный формат email" }),
	password: z.string().min(1, "Обязательное поле"),
})

export const RegisterSchema = z.object(
	{
		email: z.string().email({ message: "Неправильный формат email" }),
		name: z
			.string()
			.min(3, { message: "Никнейм должен быть не менее 3 символов" }),
		password: z.string().min(8, "Пароль должен быть не менее 6 символов"),
	},
	{ required_error: "Обязательное поле" },
)