import React from "react"
import Link from "next/link"
import Layout from "@/components/Layout"
import ProfileLayout from "@/app/(protected)/profile/components/ProfileLayout"
import { auth, signOut } from "@/auth"

const Page = async () => {
	const session = await auth()
	return (
		<Layout>
			{JSON.stringify(session, null, 2)}
			<ProfileLayout />
			<form
				onSubmit={async () => {
					"use server"

					await signOut()
				}}
			>
				<button>выход</button>
			</form>
		</Layout>
	)
}

export default Page
