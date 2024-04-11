import * as React from "react"

interface ErrorTextWrapperProps {
	children?: React.ReactNode
}

export const ErrorTextWrapper = ({ children }: ErrorTextWrapperProps) => {
	return (
		<>
			{children ? (
				<div className='text-red-error flex items-center mt-[4px] gap-x-[4px] overflow-hidden '>
					<div className='min-w-[13px] min-h-[13px]'>
						<img
							alt='input-error'
							height={18}
							src='/svg/input-error.svg'
							width={18}
						/>
					</div>
					<span className='text-xs font-normal mt-[2px]'>{children}</span>
				</div>
			) : (
				<div />
			)}
		</>
	)
}
