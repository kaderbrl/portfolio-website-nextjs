'use client'
import { BsFillSuitHeartFill } from 'react-icons/bs'

export const Footer = () => {
	return (
		<footer className='flex items-center justify-center gap-1 font-normal dark:font-thin text-xs sm:text-sm text-center text-black/80 dark:text-white/60 p-3'>
			&copy; 2024 | Designed and coded with{' '}
			<BsFillSuitHeartFill className='text-secondary animate-pulse' /> by Kader Biral
		</footer>
	)
}
