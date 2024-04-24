'use client'
import { Hero, AboutMe, MySkills, MyPortfolio, MyBlogs, ContactMe, ScrollToTop } from '@/components'

export default function Home() {
	return (
		<>
			<Hero />
			<AboutMe />
			<MySkills />
			<MyPortfolio />
			<MyBlogs />
			<ContactMe />
			<ScrollToTop />
		</>
	)
}
