import React from "react"
import Link from "next/link"
import ProfileLayout from "@/app/profile/components/ProfileLayout"
import Layout from "@/components/Layout"

const Page = () => {
	return (
		<Layout>
			<ProfileLayout />
			<Link href={"/auth"}>TO AUTH</Link>
		</Layout>
	)
}

export default Page
