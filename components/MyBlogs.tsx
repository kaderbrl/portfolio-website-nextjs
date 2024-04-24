'use client'
import Image from 'next/image'
import Link from 'next/link'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { LiaChevronRightSolid } from 'react-icons/lia'
import { CiCalendar, CiTimer } from 'react-icons/ci'

import { MY_BLOGS } from '@/lib/data'
import { formatDate } from '@/lib/utils'
import { Title } from '@/components'

export const MyBlogs = () => {
	return (
		<section id='my-blogs'>
			<Title name='My Blogs' />

			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 45,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: false,
				}}
				pagination={{
					clickable: true,
				}}
				modules={[EffectCoverflow, Pagination]}
				initialSlide={3}
				className='blog-swiper'>
				{MY_BLOGS.map((blog) => (
					<SwiperSlide
						key={blog.id}
						className='bg-grey/10 dark:bg-grey rounded-lg shadow-md p-4'>
						<figure>
							<Image
								src={blog.imageUrl}
								width={300}
								height={100}
								alt={blog.name}
								title={blog.name}
								className='rounded-lg'
							/>
							<div className='flex justify-between items-center gap-2 font-thin text-font/60 py-2'>
								<small className='flex items-start gap-1'>
									<CiCalendar size={16} /> {formatDate(blog.date)}
								</small>
								<small className='flex items-center gap-1'>
									<CiTimer size={16} /> {blog.duration} min read
								</small>
							</div>
							<figcaption className='line-clamp-2 text-primary text-sm font-thin pb-2'>
								{blog.name}
							</figcaption>
						</figure>
						<p className='line-clamp-2 text-font/80 text-xs'>{blog.description}</p>
						<Link href={blog.href} target='_blank'>
							<button className='flex justify-between items-center gap-1 text-sm font-extralight my-3 text-secondary hover:text-primary transition ease-in duration-300'>
								Read More
								<LiaChevronRightSolid size={15} />
							</button>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	)
}
