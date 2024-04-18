"use client"
import { useUserStore } from "@/store/user"
import { useEffect } from "react"
import { User } from "@/types"

const UserProvider = (props: { user: User | undefined }) => {
	const setUser = useUserStore(state => state.setUser)
	useEffect(() => {
		if (props.user) {
			setUser(props.user)
		}
	}, [])
	return <></>
}

export default UserProvider
