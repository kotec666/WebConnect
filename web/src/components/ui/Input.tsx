import React from "react"

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const Input = (props: Props) => {
	return (
		<input
			placeholder={props.placeholder}
			className='border-[1px] border-white placeholder-white/50 bg-transparent rounded-[12px] py-[17px] px-[13px] h-[50px]'
			onChange={props.onChange}
			value={props.value}
			{...props}
		/>
	)
}

export default Input
