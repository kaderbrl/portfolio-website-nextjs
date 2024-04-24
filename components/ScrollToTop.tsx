'use client'
import { useEffect, useState } from 'react'
import { IoChevronUp } from 'react-icons/io5'

export const ScrollToTop = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const toggleVisibility = () => (window.scrollY > 300 ? setIsVisible(true) : setIsVisible(false))

	const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)

		return () => {
			window.removeEventListener('scroll', toggleVisibility)
		}
	}, [])

	return (
		<button
			type='button'
			onClick={scrollToTop}
			className={`${
				isVisible ? 'opacity-100' : 'opacity-0'
			} fixed bottom-2 right-2 bg-primary/50 hover:bg-primary/60 focus:ring-secondary/60 inline-flex items-center rounded-full p-3 text-secondary/80 shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2`}>
			<IoChevronUp size={24} />
		</button>
	)
}
