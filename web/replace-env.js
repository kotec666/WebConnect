const { config } = require("dotenv")
const { replaceInFileSync } = require("replace-in-file")
const {readdirSync} = require("node:fs");

config({
	path: ".env",
})

const env = process.env
const searchKeys = []

for (const key in env) {
	if (key.startsWith("NEXT_PUBLIC")) {
		searchKeys.push(key)
	}
}

const replace = (ext = "js") => {
	let res = []

	searchKeys.map(key => {
		const r = replaceInFileSync({
			files: `./**/*.${ext}`,
			from: `$${key}$`,
			to: env[key],
			glob: {
				dot: true,
			},
		})

		console.log(key, `mapped in .${ext}`)
		console.log(res)
		res.push(r.filter(r => r.hasChanged === true))
	})

	return res
}

replace()
replace("html")
replace("rsc")
console.log("test")
