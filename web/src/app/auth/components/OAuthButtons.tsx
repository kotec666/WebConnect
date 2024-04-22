"use client"
import React from "react"
import config from "@/helpers/config"

const OAuthButtons = () => {
	const googleAuthHandler = () => {
		window.open(`${config.NEXT_PUBLIC_API_URL}/auth/oauth/google`, "_self")
	}

	const githubAuthHandler = () => {
		window.open(`${config.NEXT_PUBLIC_API_URL}/auth/oauth/github`, "_self")
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
