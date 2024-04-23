import ChatsPanel from "@/components/ChatsPanel"
import React from "react"
import Layout from "@/components/Layout"
import useAuth from "@/hooks/useAuth"

export default async function Home() {
	const user = await useAuth()

	return (
		<Layout user={user}>
			<ChatsPanel>
				<div />
				<div className='flex pl-[25%] justify-start items-start w-full pt-[10vh]'>
					<span className='text-3xl'>Выберите чат на панели слева XYZ</span>
				</div>
			</ChatsPanel>
		</Layout>
	)
}
