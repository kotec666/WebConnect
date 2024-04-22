import ky from "ky"
import config from "@/helpers/config"

const kyFetcher = ky.extend({
	prefixUrl: config.NEXT_PUBLIC_API_URL, //  + "/api"
	credentials: "include",
})

export default kyFetcher
