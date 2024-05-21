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
		password: z.string().min(8, "Пароль должен быть не менее 8 символов"),
	},
	{ required_error: "Обязательное поле" },
)

export const UpdateUserDataSchema = z.object(
	{
		email: z.string().email({ message: "Неправильный формат email" }),
		name: z
			.string()
			.min(3, { message: "Никнейм должен быть не менее 3 символов" }),
		password: z
			.string()
			.min(8, "Пароль должен быть не менее 8 символов")
			.optional()
			.or(z.literal("")),
	},
	{ required_error: "Обязательное поле" },
)

export const FriendRequestSchema = z.object({
	login: z.string().min(1, "Обязательное поле"),
})
