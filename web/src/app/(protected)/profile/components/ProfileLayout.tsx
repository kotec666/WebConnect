"use client"
import React from "react"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import { logout } from "@/api/user"

const ProfileLayout = () => {
	const handleLogout = async () => {
		try {
			await logout()
			return (window.location.href = "/auth")
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<div className=' flex justify-center flex-col items-center h-[calc(100vh-100px)]'>
			<div className='max-w-[650px]'>
				<div className='flex justify-center mb-[40px]'>
					<span className='font-normal text-3xl'>
						Личный профиль пользователя kotec666
					</span>
				</div>
				<form className='flex flex-col'>
					<div className='flex flex-col gap-y-[25px] mb-[40px]'>
						<Input placeholder='Почта' />
						<Input placeholder='Логин' />
						<Input placeholder='Пароль' />
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
