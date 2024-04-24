'use client'
import { useState } from 'react'
import Link from 'next/link'
import { CgClose, CgMenuRightAlt } from 'react-icons/cg'

import { ThemeToggle } from '@/components'
import { NAV_LINKS } from '@/lib/data'

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [activeItem, setActiveItem] = useState<string>('home')

	const toggleNavbar = () => setIsOpen(!isOpen)

	const handleItem = (id: string) => setActiveItem(id)

	return (
		<header>
			<nav className='flex items-center justify-between flex-wrap bg-background w-full fixed top-0 z-10 shadow-md py-5 lg:px-36 md:px-10 px-5'>
				{/* Logo */}
				<Link href={'/'} className='flex items-center flex-shrink-0'>
					<code className='text-primary text-2xl xl:text-3xl'>
						{'<KB'}
						<span className='text-secondary'>{'/'}</span>
						{'>'}
					</code>
				</Link>
				{/* Responsive Toggle Icon */}
				<button
					onClick={toggleNavbar}
					className='xl:hidden mr-16 lg:mr-0 flex items-center text-secondary'>
					{isOpen ? <CgClose size={22} /> : <CgMenuRightAlt size={22} />}
				</button>
				{/* Links */}
				<ul
					className={`${
						isOpen ? `flex h-screen` : `hidden`
					} w-full xl:w-auto xl:h-auto xl:flex flex-col xl:flex-row justify-center items-center gap-12`}>
					{NAV_LINKS.map((nav) => (
						<li
							key={nav.id}
							className={`text-font capitalize font-thin text-xl xl:text-base cursor-pointer xl:hover:scale-110 hover:text-teal-400 dark:hover:text-teal-400 duration-300`}>
							<Link
								href={nav.href}
								className={`${activeItem === nav.name && 'text-primary'}`}
								onClick={() => handleItem(nav.name)}>
								{nav.name}
							</Link>
						</li>
					))}
				</ul>
				{/* Dark-Light Theme Toggle */}
				<div className='absolute right-5 top-6 xl:right-0 xl:top-0 xl:relative'>
					<ThemeToggle />
				</div>
			</nav>
		</header>
	)
}
