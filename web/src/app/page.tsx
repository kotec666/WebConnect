import ChatsPanel from "@/components/ChatsPanel"
import React from "react"

export default async function Home() {
	return (
		<ChatsPanel>
			<div className='bg-grey-1e'>
				<div className='flex justify-between h-[35px] bg-grey-1f px-[18px] py-[10px]'>
					<div className='flex flex-col gap-y-[5px]'>
						<span>Голосовые чаты</span>
						<div className='h-[1px] border-[1px] border-b-white w-full my-[20px]' />
					</div>
					<div>
						<span>Участники сервера</span>
					</div>
				</div>
			</div>
			<div className='border-2 border-red-500'>2</div>
		</ChatsPanel>
	)
}
