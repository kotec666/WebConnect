import ky from "ky"

const kyFetcher = ky.extend({
	prefixUrl: process.env.NEXT_PUBLIC_APP_API_URL, //  + "/api"
	credentials: "include",
})

export default kyFetcher
