import React from "react"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"

type Props = {
	toRegister: () => void
}
const AuthorizeForm = (props: Props) => {
	return (
		<div className='flex justify-center flex-col items-center h-[calc(100vh-70px)]'>
			<div className='mb-[20px]'>
				<span className='text-base'>Войти</span>
			</div>
			<div className='max-w-[250px]'>
				<form>
					<div className='flex flex-col gap-y-[20px] mb-[40px]'>
						<Input placeholder='Почта' />
						<Input placeholder='Пароль' />
					</div>
					<Button>Войти</Button>
				</form>
				<Button onClick={props.toRegister} className='mt-[10px]'>
					Зарегистрироваться
				</Button>
			</div>
		</div>
	)
}

export default AuthorizeForm
