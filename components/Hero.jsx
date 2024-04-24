'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { AiOutlineMedium } from 'react-icons/ai'
import { IoMailOutline } from 'react-icons/io5'
import { SlSocialLinkedin } from 'react-icons/sl'
import { VscGithubAlt } from 'react-icons/vsc'
import { SocialIcon } from './SocialIcon'

export const Hero = () => {
	const { resolvedTheme } = useTheme()

	const src =
		{
			light: '/my-photo-light.png',
			dark: '/my-photo.png',
		}[resolvedTheme] || '/my-photo.png'

	const [text] = useTypewriter({
		words: ['web interfaces.', 'responsive websites.', 'reusable code components.'],
		loop: 0,
		typeSpeed: 70,
		deleteSpeed: 50,
	})

	return (
		<section
			id='hero'
			className='md:flex-row flex-col gap-10 sm:gap-20 md:gap-5 lg:py-0 py-28 bg-circle-responsive md:bg-circle bg-no-repeat bg-bottom md:bg-right-top bg-[length:450px_550px] lg:bg-contain'>
			{/* Left Column */}
			<div className='w-full lg:basis-3/5 xl:basis-1/2'>
				<p className='text-gray-600 dark:text-gray-400'>Front End Developer</p>
				<h1 className='text-3xl md:text-4xl text-font font-semibold py-3 leading-[45px] md:leading-[55px]'>
					Hi There, I&apos;m <br />
					<span className='text-primary'>Kader Biral</span>
				</h1>
				<div className='h-16 lg:h-auto'>
					<code className='text-yellow-500 dark:text-secondary text-base md:text-xl'>
						{`<code>`}
						<span className='text-gray-800 dark:text-gray-300'> I build </span>
						<span className='text-primary'>{text}</span>
						<Cursor />
						{`</code>`}
					</code>
				</div>
				{/* Social Icons */}
				<ul className='flex items-center gap-5 mt-2 md:mt-8 z-10'>
					<SocialIcon
						title='LinkedIn'
						icon={SlSocialLinkedin}
						size={26}
						link='https://www.linkedin.com/in/kader-biral26'
					/>
					<SocialIcon
						title='GitHub'
						icon={VscGithubAlt}
						size={25}
						link='https://github.com/kaderbrl'
					/>
					<SocialIcon
						title='Medium'
						icon={AiOutlineMedium}
						size={29}
						link='https://kaderbiral26.medium.com'
					/>
					<SocialIcon
						title='Gmail'
						icon={IoMailOutline}
						size={26}
						link='mailto:kaderbiral26@gmail.com'
					/>
				</ul>
			</div>
			{/* Right Column */}
			<div className='w-full lg:basis-2/5 xl:basis-1/2 h-full flex items-center justify-center'>
				<div className='mt-14 min-w-xs w-1/2 rounded-tr-[18%] rounded-bl-[18%] bg-grey/10 border-2 border-t-primary border-r-primary border-b-secondary border-l-secondary shadow-md overflow-hidden'>
					<Image
						src={src}
						sizes='100vw'
						width={500}
						height={600}
						alt='Kader Biral'
						className='w-full h-auto'
					/>
				</div>
			</div>
		</section>
	)
}
