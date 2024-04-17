import React, { useTransition } from "react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import * as z from "zod"
import { RegisterSchema } from "@/schemas"
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { ErrorMessage } from "@hookform/error-message"
import { ErrorTextWrapper } from "@/components/ui/ErrorTextWrapper"
import { register } from "@/api/user"

type Props = {
	toLogin: () => void
}
const RegisterForm = (props: Props) => {
	const [error, setError] = React.useState<string | undefined>()
	const [success, setSuccess] = React.useState<string | undefined>()
	const [isPending, startTransition] = useTransition()

	const form = useForm<z.infer<typeof RegisterSchema>>({
		resolver: zodResolver(RegisterSchema),
		mode: "onBlur",
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = (data: z.infer<typeof RegisterSchema>) => {
		setError("")

		startTransition(() => {
			register(data).then(data => {
				setError(data?.error)
				setSuccess(data?.success)
			})
		})
	}
	return (
		<div className=''>
			<div className='mb-[20px] flex justify-center'>
				<span className='text-base'>Регистрация</span>
			</div>
			<div className='max-w-[250px]'>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className='flex flex-col gap-y-[20px] mb-[40px]'>
						<div>
							<Controller
								name='email'
								control={form.control}
								render={({ field }) => (
									<Input
										disabled={isPending}
										{...field}
										placeholder='Почта'
										name='email'
									/>
								)}
							/>
							<div>
								<ErrorMessage
									errors={form.formState.errors}
									name='email'
									render={({ message }) => (
										<ErrorTextWrapper>{message}</ErrorTextWrapper>
									)}
								/>
							</div>
						</div>
						<div>
							<Controller
								name='name'
								control={form.control}
								render={({ field }) => (
									<Input
										placeholder='Логин'
										disabled={isPending}
										{...field}
										name='name'
									/>
								)}
							/>
							<div>
								<ErrorMessage
									errors={form.formState.errors}
									name='name'
									render={({ message }) => (
										<ErrorTextWrapper>{message}</ErrorTextWrapper>
									)}
								/>
							</div>
						</div>
						<div>
							<Controller
								name='password'
								control={form.control}
								render={({ field }) => (
									<Input
										placeholder='Пароль'
										disabled={isPending}
										{...field}
										name='password'
										type='password'
									/>
								)}
							/>
							<div>
								<ErrorMessage
									errors={form.formState.errors}
									name='password'
									render={({ message }) => (
										<ErrorTextWrapper>{message}</ErrorTextWrapper>
									)}
								/>
							</div>
						</div>
						<ErrorTextWrapper>{error}</ErrorTextWrapper>
						<span>{success}</span>
					</div>
					<Button>Зарегистрироваться</Button>
				</form>
				<Button onClick={props.toLogin} className='mt-[10px]'>
					Уже есть аккаунт
				</Button>
			</div>
		</div>
	)
}

export default RegisterForm
