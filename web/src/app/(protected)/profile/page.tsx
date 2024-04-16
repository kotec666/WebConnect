import React from "react"
import Layout from "@/components/Layout"
import ProfileLayout from "@/app/(protected)/profile/components/ProfileLayout"

const Page = async () => {
	return (
		<Layout>
			<ProfileLayout />
		</Layout>
	)
}

export default Page
