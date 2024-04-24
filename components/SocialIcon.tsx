'use client'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface SocialIconType {
	icon: IconType
	title: string
	size?: number
	link: string
}

export const SocialIcon = ({ icon, title, size, link }: SocialIconType) => {
	const Icon = icon

	return (
		<li
			className='text-primary hover:text-secondary hover:scale-125 transition ease-in duration-300'
			title={title}>
			<Link href={link} target='_blank'>
				<Icon size={size && size} />
			</Link>
		</li>
	)
}
