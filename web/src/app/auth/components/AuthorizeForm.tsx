import React from "react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema } from "@/schemas"
import * as z from "zod"
import { ErrorMessage } from "@hookform/error-message"
import { ErrorTextWrapper } from "@/components/ui/ErrorTextWrapper"
import { useTransition } from "react"
import { login } from "@/api/user"

type Props = {
	toRegister: () => void
}
const AuthorizeForm = (props: Props) => {
	const [error, setError] = React.useState<string | undefined>()
	const [isPending, startTransition] = useTransition()

	const form = useForm<z.infer<typeof LoginSchema>>({
		resolver: zodResolver(LoginSchema),
		mode: "onBlur",
		defaultValues: {
			email: "",
			password: "",
		},
	})

	const onSubmit = (data: z.infer<typeof LoginSchema>) => {
		setError("")

		startTransition(() => {
			login(data).then(data => {
				setError(data?.error)
			})
		})
	}
	return (
		<div className=''>
			<div className='mb-[20px] flex justify-center'>
				<span className='text-base '>Войти</span>
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
								name='password'
								control={form.control}
								render={({ field }) => (
									<Input
										disabled={isPending}
										{...field}
										placeholder='Пароль'
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
					</div>

					<Button disabled={isPending}>Войти</Button>
				</form>
				<Button onClick={props.toRegister} className='mt-[10px]'>
					Зарегистрироваться
				</Button>
			</div>
		</div>
	)
}

export default AuthorizeForm
