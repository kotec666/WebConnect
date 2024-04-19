import React, { PropsWithChildren } from "react"
import Layout from "@/components/Layout"
import Image from "next/image"
import useAuth from "@/hooks/useAuth"

interface IProps extends PropsWithChildren {}

const ChatsPanel = async (props: IProps) => {
	const user = await useAuth()

	return (
		<Layout user={user}>
			<main className=''>
				<div className='flex w-full h-[calc(100vh-70px)]'>
					<aside className='h-full'>
						<div className='grid grid-cols-[90px,_80%] w-full h-full'>
							<div className='bg-grey-313 flex flex-col justify-start items-center pt-[10px] overflow-y-scroll custom__scrollbar max-h-[calc(100vh-70px)]'>
								<div>
									<div className='min-h-[60px] min-w-[60px] bg-grey-1e relative flex justify-center items-center rounded-[100%] border-[1px] border-green-main h-[60px] w-[60px] cursor-pointer'>
										<Image
											width={25}
											height={25}
											src='svg/user.svg'
											alt='user'
										/>
										<div className='absolute bottom-0 right-0 flex justify-center items-center w-[20px] h-[20px] bg-red-main rounded-[100%]'>
											<div className='w-[10px] h-[10px] bg-white rounded-[100%]' />
										</div>
									</div>
									<div className='h-[1px] border-[1px] border-b-white w-full my-[20px]' />
								</div>
								<div className='flex flex-col gap-y-[20px]'>
									<div className='min-h-[60px] min-w-[60px] bg-grey-1e border-blue-main relative flex justify-center items-center rounded-[100%] border-[1px]  h-[60px] w-[60px] cursor-pointer'>
										<span>ds</span>
										<div className='absolute bottom-0 right-0 flex justify-center items-center w-[20px] h-[20px] bg-red-main rounded-[100%]'>
											<div className='w-[10px] h-[10px] bg-white rounded-[100%]' />
										</div>
									</div>
									<div className='min-h-[60px] min-w-[60px] bg-grey-1e border-0 relative flex justify-center items-center rounded-[100%] h-[60px] w-[60px] cursor-pointer'>
										<span>ds</span>
										<div className='absolute bottom-0 right-0 flex justify-center items-center w-[20px] h-[20px] bg-red-main rounded-[100%]'>
											<div className='w-[10px] h-[10px] bg-white rounded-[100%]' />
										</div>
									</div>
								</div>
								<div className='w-full px-[10px]'>
									<div className='h-[1px] border-[1px] border-b-white w-full my-[20px]' />
								</div>
								<div className='min-h-[60px] min-w-[60px] bg-grey-1e relative flex justify-center items-center rounded-[100%] border-[1px] border-green-main h-[60px] w-[60px] cursor-pointer'>
									<Image
										width={25}
										height={25}
										src='svg/green-plus.svg'
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
		</Layout>
	)
}

export default ChatsPanel
