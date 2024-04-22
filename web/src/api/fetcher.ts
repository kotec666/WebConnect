import config from "@/helpers/config"

export const fetcher = <T>(url: string, init?: RequestInit) => {
	return fetch(config.NEXT_PUBLIC_API_URL + url, {
		...init,
		credentials: "include",
	}).then((res): T => res.json() as T)
}

export default fetcher
