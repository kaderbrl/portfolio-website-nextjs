'use client'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { FaMoon } from 'react-icons/fa'
import { IoIosSunny } from 'react-icons/io'

export const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false)
	const { theme, setTheme } = useTheme()

	useEffect(() => setMounted(true), [])

	if (!mounted) return null

	return (
		<button
			type='button'
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			aria-label={theme === 'light' ? 'Toggle Dark Theme' : 'Toggle Light Theme'}
			className='bg-primary dark:bg-gray-900 w-14 h-6 xl:w-16 xl:h-8 rounded-full p-1 flex justify-between items-center transition duration-300 ease-out'>
			{theme === 'light' && <FaMoon className='text-white' size={18} />}
			<div className='bg-white w-4 h-4 xl:w-5 xl:h-5 rounded-full shadow-md'></div>
			{theme === 'dark' && <IoIosSunny className='text-secondary' size={20} />}
		</button>
	)
}
