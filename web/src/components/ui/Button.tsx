import React, { PropsWithChildren } from "react"
import classNames from "classnames"

type Props = {
	onClick?: () => void
	className?: string
} & PropsWithChildren
const Button = (props: Props) => {
	return (
		<button
			className={classNames(
				"bg-grey-313 rounded-[12px] py-[17px] w-full text-xs",
				props?.className,
			)}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
}

export default Button
