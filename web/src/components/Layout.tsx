import React, { PropsWithChildren } from "react"
import Navbar from "@/components/Navbar"
import { User } from "@/types"

interface IProps extends PropsWithChildren {
	user: User | undefined
}

const Layout = (props: IProps) => {
	return (
		<div>
			<Navbar user={props.user} />
			{props.children}
		</div>
	)
}

export default Layout
