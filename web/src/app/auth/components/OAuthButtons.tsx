"use client"
import React from "react"

const OAuthButtons = () => {
	const googleAuthHandler = () => {
		window.open(
			`${process.env.NEXT_PUBLIC_APP_API_URL}/api/user/google`,
			"_self",
		)
	}

	const githubAuthHandler = () => {
		window.open(
			`${process.env.NEXT_PUBLIC_APP_API_URL}/api/user/github`,
			"_self",
		)
	}

	return (
		<div>
			<div className='flex items-center gap-x-[25px] w-full'>
				<img
					className='w-[50px] h-[50px] cursor-pointer'
					src='image/google.png'
					alt='googleMethod'
					onClick={googleAuthHandler}
				/>
				<img
					className='w-[50px] h-[50px] cursor-pointer'
					src='image/github.png'
					alt='githubMethod'
					onClick={githubAuthHandler}
				/>
			</div>
		</div>
	)
}

export default OAuthButtons
