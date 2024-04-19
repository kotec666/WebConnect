import React from "react"
import ChatsPanel from "@/components/ChatsPanel"
import Layout from "@/components/Layout"
import useAuth from "@/hooks/useAuth"
import PrivateChatUsers from "@/app/(protected)/private-chats/components/PrivateChatUsers"

const Page = async () => {
	const user = await useAuth()
	return (
		<Layout user={user}>
			<ChatsPanel>
				<PrivateChatUsers />
				<div className='flex justify-center items-start w-full pt-[10vh]'>
					<span className='text-3xl text-center max-w-[700px]'>
						Выберите чат с вашим другом или добавьте пользователя в друзья
					</span>
				</div>
			</ChatsPanel>
		</Layout>
	)
}

export default Page
