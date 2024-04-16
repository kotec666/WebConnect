import { cookies, headers } from "next/headers"
import { redirect, RedirectType } from "next/navigation"
import { User } from "@/types"
import { auth } from "@/api/user"

const useAuth = async (url?: string): Promise<undefined | User> => {
	const cookieStore = cookies()
	const token = cookieStore.get("token")

	try {
		const user = (await auth(`accessToken=${token?.value}`)) as User
		return user
	} catch (e) {
		const headersList = headers()
		// read the custom x-url header
		const header_url = headersList.get("x-url") || ""

		// if (AUTHORIZED_ROUTES[header_url] && url) {
		//     redirect(url, RedirectType.push)
		// }
		return undefined
	}
}

export default useAuth
