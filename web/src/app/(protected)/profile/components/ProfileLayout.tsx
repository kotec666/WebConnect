"use client"
import React from "react"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { auth, logout } from "@/api/user"
import { User } from "@/types"
import { useUserStore } from "@/store/user"
import { Controller, useForm } from "react-hook-form"
import * as z from "zod"
import { UpdateUserDataSchema } from "@/schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { ErrorMessage } from "@hookform/error-message"
import { ErrorTextWrapper } from "@/components/ui/ErrorTextWrapper"

interface IProps {
	user: User | undefined
}

const ProfileLayout = (props: IProps) => {
	const user = useUserStore(state => state.user)
	const setUser = useUserStore(state => state.setUser)

	const form = useForm<z.infer<typeof UpdateUserDataSchema>>({
		resolver: zodResolver(UpdateUserDataSchema),
		mode: "onSubmit",
		reValidateMode: "onBlur",
		values: {
			email: user?.email,
			name: user?.name,
			password: "",
		},
	})

	const handleLogout = async () => {
		try {
			await logout()
			return (window.location.href = "/auth")
		} catch (e) {
			console.log(e)
		}
	}

	const onSubmit = async (data: Partial<User>) => {
		//	await saveUserData(data)
		const newUser = await auth()
		setUser(newUser)
	}

	return (
		<div className=' flex justify-center flex-col items-center h-[calc(100vh-100px)]'>
			<div className='max-w-[650px]'>
				<div className='flex justify-center mb-[40px]'>
					<span className='font-normal text-3xl'>
						Личный профиль пользователя {user?.name}
					</span>
				</div>
				<form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col'>
					<div className='flex flex-col gap-y-[25px] mb-[40px]'>
						<div className='w-full'>
							<Controller
								name='email'
								control={form.control}
								render={({ field }) => (
									<Input {...field} placeholder='Почта' name='email' />
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
						<div className='w-full'>
							<Controller
								name='name'
								control={form.control}
								render={({ field }) => (
									<Input {...field} placeholder='Логин' name='name' />
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
						<div className='w-full'>
							<Controller
								name='password'
								control={form.control}
								render={({ field }) => (
									<Input {...field} placeholder='Пароль' name='password' />
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
					</div>
					<Button>Сохранить</Button>
				</form>
				<Button onClick={handleLogout} className='mt-[15px]'>
					Выйти из аккаунта
				</Button>
			</div>
		</div>
	)
}

export default ProfileLayout
