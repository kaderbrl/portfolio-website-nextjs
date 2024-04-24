'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Grid, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import { VscGithubAlt, VscRunAll } from 'react-icons/vsc'

import { MY_PORTFOLIO } from '@/lib/data'
import { Title } from '@/components'

export const MyPortfolio = () => {
	return (
		<section id='my-portfolio'>
			<Title name='My Portfolio' />

			<Swiper
				slidesPerView={1}
				spaceBetween={15}
				grid={{
					rows: 2,
					fill: 'row',
				}}
				pagination={{
					clickable: true,
				}}
				modules={[Grid, Pagination]}
				className='w-full h-[420px] mx-auto'
				breakpoints={{
					576: {
						slidesPerView: 2,
					},
					768: {
						slidesPerView: 3,
					},
					1290: {
						slidesPerView: 4,
					},
				}}>
				{MY_PORTFOLIO.slice()
					.reverse()
					.map((portfolio) => (
						<SwiperSlide
							key={portfolio.id}
							className='bg-grey/10 dark:bg-background rounded-lg shadow-md p-4'>
							<figure>
								<div className='relative w-full h-32 bg-grey rounded-lg overflow-hidden mb-3 dark:border border-transparent/10'>
									<Image
										src={portfolio.imageUrl}
										fill
										alt={portfolio.name}
										title={portfolio.name}
										className='object-cover'
									/>
								</div>
								<figcaption className='flex justify-between items-center gap-2'>
									<span
										className='text-center text-font/80 text-sm font-thin truncate'
										title={portfolio.name}>
										{portfolio.name}
									</span>
									<div className='flex items-center gap-2'>
										<Link href={portfolio.codeUrl} target='_blank'>
											<VscGithubAlt
												className='text-primary hover:text-secondary'
												size={18}
												title='GitHub Code'
											/>
										</Link>
										<Link href={portfolio.previewUrl} target='_blank'>
											<VscRunAll
												className='text-primary hover:text-secondary'
												size={18}
												title='Live Demo'
											/>
										</Link>
									</div>
								</figcaption>
							</figure>
						</SwiperSlide>
					))}
			</Swiper>
		</section>
	)
}
