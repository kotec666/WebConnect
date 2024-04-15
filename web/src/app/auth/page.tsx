import React from "react"
import Layout from "@/components/Layout"
import LoginFormsWrapper from "@/app/auth/components/LoginFormsWrapper"
import OAuthButtons from "@/app/auth/components/OAuthButtons"

const Page = () => {
	return (
		<Layout>
			<div className='flex flex-col gap-y-[30px] justify-center items-center h-[calc(100vh-70px)]'>
				<LoginFormsWrapper />
				<OAuthButtons />
			</div>
		</Layout>
	)
}

export default Page
