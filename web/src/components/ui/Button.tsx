import React, { PropsWithChildren } from "react"
import classNames from "classnames"

type Props = {
	onClick?: () => void
	className?: string
	disabled?: boolean
} & PropsWithChildren
const Button = (props: Props) => {
	return (
		<button
			disabled={props.disabled}
			className={classNames(
				"bg-grey-313 rounded-[12px] py-[17px] w-full text-xs disabled:opacity-50",
				props?.className,
			)}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default Button
