import ChatsPanel from "@/components/ChatsPanel"
import React from "react"
import Image from "next/image"

export default async function Home() {
	return (
		<ChatsPanel>
			<div className='bg-grey-1e'>
				<div className='flex flex-col gap-y-[20px] h-[35px] py-[10px]'>
					<div className='flex justify-between bg-grey-1f px-[18px]'>
						<div className='flex flex-col gap-y-[10px] cursor-pointer'>
							<span className='text-sm'>Голосовые чаты</span>
							<div className='h-[1px] border-b-[1px] border-b-blue-main w-full' />
						</div>
						<div className='cursor-pointer'>
							<span className='text-sm'>Участники сервера</span>
						</div>
					</div>
					<div className='flex items-center px-[18px]'>
						<div className='flex gap-x-[10px] items-center cursor-pointer'>
							<div className=''>
								<Image
									width={20}
									height={20}
									src='svg/joinMicro.svg'
									alt='join'
								/>
							</div>
							<div>
								<span className='text-sm'>Присоединиться к чату</span>
							</div>
						</div>
					</div>
					<div className='flex flex-col overflow-y-scroll custom__scrollbar min-h-[80vh] max-h-[80vh] px-[18px]'>
						<div>
							<div className='flex gap-x-[10px] items-center'>
								<div className='flex justify-center items-center border-[1px] border-blue-main w-[20px] h-[20px] rounded-full '>
									<span className='text-center text-[10px]'>d</span>
								</div>
								<div>
									<span className='text-sm'>dsavelyev</span>
								</div>
							</div>
							<div className='h-[1px] border-b-[1px] border-b-white w-full my-[10px]' />
						</div>
						<div>
							<div className='flex gap-x-[10px] items-center'>
								<div className='flex justify-center items-center border-[1px] border-blue-main w-[20px] h-[20px] rounded-full '>
									<span className='text-center text-[10px]'>k</span>
								</div>
								<div>
									<span className='text-sm'>kotec666</span>
								</div>
							</div>
							<div className='h-[1px] border-b-[1px] border-b-white w-full my-[10px]' />
						</div>
					</div>
				</div>
			</div>
			<div className='border-2 border-red-500'>2</div>
		</ChatsPanel>
	)
}
