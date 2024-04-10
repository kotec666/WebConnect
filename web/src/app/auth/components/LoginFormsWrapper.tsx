"use client"
import React, { useState } from "react"
import AuthorizeForm from "@/app/auth/components/AuthorizeForm"
import RegisterForm from "@/app/auth/components/RegisterForm"

enum currentFormStep {
	LOGIN = "LOGIN",
	REGISTER = "REGISTER",
}

const LoginFormsWrapper = () => {
	const [data, setData] = useState({
		currentForm: currentFormStep.LOGIN,
	})

	const toLogin = () => {
		return setData(s => ({ ...s, currentForm: currentFormStep.LOGIN }))
	}

	const toRegister = () => {
		return setData(s => ({ ...s, currentForm: currentFormStep.REGISTER }))
	}

	return (
		<div>
			{data.currentForm === currentFormStep.LOGIN && (
				<AuthorizeForm toRegister={toRegister} />
			)}
			{data.currentForm === currentFormStep.REGISTER && (
				<RegisterForm toLogin={toLogin} />
			)}
		</div>
	)
}

export default LoginFormsWrapper
