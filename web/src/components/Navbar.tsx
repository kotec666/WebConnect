import React, { PropsWithChildren } from "react"
import Image from "next/image"
import Link from "next/link"
import { User } from "@/types"

interface IProps {
	user: User | undefined
}

const Navbar = (props: IProps) => {
	return (
		<div className='bg-grey-313 h-[70px] flex justify-between items-center px-[20px]'>
			<Link href='/'>
				<Image src='/svg/logo.svg' alt='logo' width={55} height={55} />
			</Link>
			<div className='flex items-center gap-x-[15px]'>
				<span className='text-sm'>{props.user?.name}</span>
				<Link href='/profile'>
					<Image src='/svg/user.svg' alt='logo' width={30} height={30} />
				</Link>
			</div>
		</div>
	)
}

export default Navbar
