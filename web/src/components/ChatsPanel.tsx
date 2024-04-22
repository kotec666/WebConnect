"use client"
import React, { PropsWithChildren } from "react"
import Image from "next/image"
import useOutsideClick from "@/hooks/useOutsideClick"
import Link from "next/link"

interface IProps extends PropsWithChildren {}

const ChatsPanel = (props: IProps) => {
	const [data, setData] = React.useState({
		contextAction: false,
	})

	const groupRef = React.useRef<HTMLAnchorElement>(null)
	useOutsideClick(groupRef, () => {
		return setData(s => ({ ...s, contextAction: false }))
	})

	return (
		<main className=''>
			<div className='flex w-full h-[calc(100vh-70px)]'>
				<aside className='h-full'>
					<div className='grid grid-cols-[90px,_80%] w-full h-full'>
						<div className='bg-grey-313 flex flex-col justify-start items-center pt-[10px] custom__scrollbar max-h-[calc(100vh-70px)]'>
							<Link href='/private-chats'>
								<div className='min-h-[55px] min-w-[55px] bg-grey-1e relative flex justify-center items-center rounded-[100%] border-[1px] border-green-main h-[55px] w-[55px] cursor-pointer'>
									<Image
										width={25}
										height={25}
										src='/svg/user.svg'
										alt='user'
									/>
									<div className='absolute bottom-0 right-0 flex justify-center items-center w-[20px] h-[20px] bg-red-main rounded-[100%]'>
										<div className='w-[10px] h-[10px] bg-white rounded-[100%]' />
									</div>
								</div>
							</Link>
							<div className='w-full px-[20px]'>
								<div className='h-[1px] border-b-[1px] border-b-white w-full my-[20px]' />
							</div>
							<div className='flex flex-col gap-y-[20px]'>
								<Link
									href='/servers/1'
									className='relative min-h-[55px] min-w-[55px] bg-grey-1e border-blue-main flex justify-center items-center rounded-[100%] border-[1px]  h-[55px] w-[55px] cursor-pointer'
									onContextMenu={e => {
										e.preventDefault()
										return setData(s => ({ ...s, contextAction: true }))
									}}
									ref={groupRef}
								>
									<span>ds</span>
									<div className='absolute bottom-0 right-0 flex justify-center items-center w-[20px] h-[20px] bg-red-main rounded-[100%]'>
										<div className='w-[10px] h-[10px] bg-white rounded-[100%]' />
									</div>
									{data.contextAction && (
										<div className='absolute bottom-0 right-[-100px] z-100 flex flex-col gap-y-[2px] bg-grey-2B p-[5px] rounded-[4px] '>
											<div className='cursor-pointer rounded-[4px] px-[12px] py-[5px] border-[1px] border-grey-616 hover:border-grey-B6 duration-300'>
												<span className='text-xs text-blue-main'>
													Добавить людей
												</span>
											</div>
											<div className='cursor-pointer rounded-[4px] px-[12px] py-[5px] border-[1px] border-grey-616 hover:border-grey-B6 duration-300'>
												<span className='text-xs text-blue-main'>
													Удалить людей
												</span>
											</div>
										</div>
									)}
								</Link>
								<Link
									href='/servers/2'
									className='min-h-[55px] min-w-[55px] bg-grey-1e border-0 relative flex justify-center items-center rounded-[100%] h-[55px] w-[55px] cursor-pointer'
								>
									<span>ds</span>
									<div className='absolute bottom-0 right-0 flex justify-center items-center w-[20px] h-[20px] bg-red-main rounded-[100%]'>
										<div className='w-[10px] h-[10px] bg-white rounded-[100%]' />
									</div>
								</Link>
							</div>
							<div className='w-full px-[20px]'>
								<div className='h-[1px] border-b-[1px] border-b-white w-full my-[20px]' />
							</div>
							<div className='min-h-[55px] min-w-[55px] bg-grey-1e relative flex justify-center items-center rounded-[100%] border-[1px] border-green-main h-[55px] w-[55px] cursor-pointer'>
								<Image
									width={25}
									height={25}
									src='/svg/green-plus.svg'
									alt='user'
								/>
							</div>
						</div>
					</div>
				</aside>
				<div className=' w-full grid grid-cols-[20%,_80%] '>
					{props.children}
				</div>
			</div>
		</main>
	)
}

export default ChatsPanel
