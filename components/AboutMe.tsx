'use client'
import Image from 'next/image'
import { FcGlobe, FcHeadset, FcReading, FcSportsMode, FcStackOfPhotos } from 'react-icons/fc'

import { Mark, Title } from '@/components'

export const AboutMe = () => {
	return (
		<section id='about-me'>
			<Title name='About Me' />

			<div className='flex justify-start flex-col xl:flex-row xl:justify-between items-center gap-5 xl:gap-24'>
				<div className='w-1/2 md:w-1/3 xl:w-full'>
					<div className='rounded-full bg-grey/10 dark:bg-secondary border-8 border-primary border-double overflow-hidden'>
						<Image
							src='/my-photo-transparent.png'
							sizes='100vw'
							width={800}
							height={800}
							alt='Kader Biral'
							className='w-full h-auto'
						/>
					</div>
				</div>
				<div className='text-font text-[0.813rem] md:text-sm text-justify dark:font-thin space-y-6'>
					<p>
						<span className='text-lg text-primary'>Hi! 👋</span>
						<br />
						I`&apos;`m Kader, a Front End Developer distinguished by my passion for web
						technologies. After graduating top of my class from high school, I took my
						first steps into the field of Information Technology. Later, I graduated
						from Dokuz Eylül University with a degree in Management Information Systems.
					</p>
					<p>
						I began my career during my high school years, and since then, I&apos;ve
						been experiencing the excitement of web development using technologies like{' '}
						<span className='text-primary font-medium'>HTML, CSS,</span> and
						<span className='text-primary font-medium'>JavaScript</span>. Particularly,
						leveraging modern tools such as{' '}
						<span className='text-primary font-medium'>React JS, Next JS,</span> and{' '}
						<span className='text-primary font-medium'>TypeScript </span> to develop
						user-friendly and cross-browser compatible websites has become a passion of
						mine. For each project, I strive to deliver quality solutions by adhering to
						principles of readable and well-structured coding.
					</p>
					<p>
						To keep up with the rapid changes in technology, I continuously work on
						improving myself and acquiring new skills. However, most importantly, I
						genuinely love what I do. Coding isn&apos;t just a job for me; it&apos;s
						also a passion and a way of life. Each new day increases my excitement about
						becoming a better developer.
					</p>
					<div className='flex flex-wrap items-center gap-3'>
						<code className='text-xl md:text-2xl font-medium text-secondary'>
							I Love →
						</code>
						<Mark icon={FcReading} label='Reading Novels' />
						<Mark icon={FcHeadset} label='Listening to Music' />
						<Mark icon={FcSportsMode} label='Doing Sports' />
						<Mark icon={FcStackOfPhotos} label='Painting' />
						<Mark icon={FcGlobe} label='Travelling' />
					</div>
				</div>
			</div>
		</section>
	)
}
