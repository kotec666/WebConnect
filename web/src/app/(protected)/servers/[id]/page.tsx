import React from "react"
import ChatsPanel from "@/components/ChatsPanel"
import Layout from "@/components/Layout"
import useAuth from "@/hooks/useAuth"
import ServerChatUsers from "@/app/(protected)/servers/[id]/components/ServerChatUsers"

const Page = async (props: { params: { id: string } }) => {
	console.log(props.params.id)
	const user = await useAuth()
	return (
		<Layout user={user}>
			<ChatsPanel>
				<ServerChatUsers />
				<div className='border-2 border-red-500'>2</div>
			</ChatsPanel>
		</Layout>
	)
}

export default Page
