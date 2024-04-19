"use client"
import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import useOutsideClick from "@/hooks/useOutsideClick"
enum EPosition {
	"FRIENDS" = "FRIENDS",
	"FRIEND_REQUESTS" = "FRIEND_REQUESTS",
}

const PrivateChatUsers = () => {
	const [data, setData] = useState({
		position: EPosition.FRIENDS,
		contextAction: false,
	})

	const userRef = React.useRef<HTMLDivElement>(null)
	useOutsideClick(userRef, () => {
		return setData(s => ({ ...s, contextAction: false }))
	})

	const positionBtnsData = [
		{ id: EPosition.FRIENDS, name: "Друзья" },
		{ id: EPosition.FRIEND_REQUESTS, name: "Запросы дружбы" },
	]

	return (
		<div className='bg-grey-1e'>
			<div className='flex flex-col gap-y-[20px] h-[35px] py-[10px]'>
				<div className='flex justify-between bg-grey-1f px-[18px]'>
					{positionBtnsData.map((posBtn, i) => (
						<div
							key={posBtn.id}
							onClick={() => {
								return setData(s => ({ ...s, position: posBtn.id }))
							}}
							className='flex flex-col gap-y-[10px] cursor-pointer'
						>
							<span className='text-sm'>{posBtn.name}</span>
							{data.position === posBtn.id && (
								<div className='h-[1px] border-b-[1px] border-b-blue-main w-full' />
							)}
						</div>
					))}
				</div>
				{data.position === EPosition.FRIENDS && (
					<div className='flex flex-col gap-y-[20px]'>
						<div className='flex flex-col overflow-y-scroll custom__scrollbar min-h-[80vh] max-h-[80vh] px-[18px]'>
							<Link href='/private-chats/1'>
								<div className='flex justify-between items-center'>
									<div className='flex items-center gap-x-[10px]'>
										<div className='flex justify-center items-center border-[1px] border-blue-main w-[20px] h-[20px] rounded-full '>
											<span className='text-center text-[10px]'>d</span>
										</div>
										<div>
											<span className='text-sm'>dsavelyev</span>
										</div>
									</div>
									<div className='flex justify-center items-center w-[20px] h-[20px] bg-red-main rounded-[100%]'>
										<div className='w-[10px] h-[10px] bg-white rounded-[100%]' />
									</div>
								</div>
								<div className='h-[1px] border-b-[1px] border-b-white w-full my-[10px]' />
							</Link>
							<Link href='/private-chats/2'>
								<div className='flex gap-x-[10px] items-center'>
									<div className='flex justify-center items-center border-[1px] border-blue-main w-[20px] h-[20px] rounded-full '>
										<span className='text-center text-[10px]'>k</span>
									</div>
									<div>
										<span className='text-sm'>kotec666</span>
									</div>
								</div>
								<div className='h-[1px] border-b-[1px] border-b-white w-full my-[10px]' />
							</Link>
						</div>
					</div>
				)}
				{data.position === EPosition.FRIEND_REQUESTS && (
					<div className='flex flex-col gap-y-[20px]'>
						<div className='flex flex-col overflow-y-scroll custom__scrollbar min-h-[80vh] max-h-[80vh] px-[18px]'>
							<div className='flex flex-col gap-y-[12px] mt-[5px]'>
								<Input type='text' placeholder='Введите логин...' />
								<Button>Отправить запрос на добавление в друзья</Button>
							</div>
							<div className='h-[1px] border-b-[1px] border-b-blue-main w-full my-[30px]' />
							<div
								onContextMenu={e => {
									e.preventDefault()
									return setData(s => ({ ...s, contextAction: true }))
								}}
								ref={userRef}
								className='relative'
							>
								<div className='flex gap-x-[10px] items-center'>
									<div className='flex justify-center items-center border-[1px] border-blue-main w-[20px] h-[20px] rounded-full '>
										<span className='text-center text-[10px]'>d</span>
									</div>
									<div>
										<span className='text-sm'>dsavelyev</span>
									</div>
								</div>
								<div className='h-[1px] border-b-[1px] border-b-white w-full my-[10px]' />
								{data.contextAction && (
									<div className='absolute bottom-[-50px] right-[50px] z-100 flex flex-col gap-y-[2px] bg-grey-2B p-[5px] rounded-[4px] '>
										<div className='cursor-pointer rounded-[4px] px-[12px] py-[5px] border-[1px] border-grey-616 hover:border-grey-B6 duration-300'>
											<span className='text-xs text-blue-main'>
												Принять запрос
											</span>
										</div>
										<div className='cursor-pointer rounded-[4px] px-[12px] py-[5px] border-[1px] border-grey-616 hover:border-grey-B6 duration-300'>
											<span className='text-xs text-blue-main'>
												Отклонить запрос
											</span>
										</div>
									</div>
								)}
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
				)}
			</div>
		</div>
	)
}

export default PrivateChatUsers
