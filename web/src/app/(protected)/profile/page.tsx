import React from "react"
import Layout from "@/components/Layout"
import ProfileLayout from "@/app/(protected)/profile/components/ProfileLayout"
import useAuth from "@/hooks/useAuth"
import UserProvider from "@/components/providers/UserProvider"

const Page = async () => {
	const user = await useAuth()

	return (
		<Layout user={user}>
			<UserProvider user={user} />
			<ProfileLayout user={user} />
		</Layout>
	)
}

export default Page
