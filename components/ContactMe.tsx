'use client'
import { ChangeEvent, FormEvent, useState } from 'react'
import { BsCheck2Circle } from 'react-icons/bs'
import { FiSend } from 'react-icons/fi'
import { IoIosCloseCircleOutline } from 'react-icons/io'
import { RiLoader3Line } from 'react-icons/ri'

import { Title } from '@/components'

type FormDataProps = {
	name: string
	email: string
	message: string
}

export const ContactMe = () => {
	const [formData, setFormData] = useState<FormDataProps>({
		name: '',
		email: '',
		message: '',
	})
	const [isSending, setIsSending] = useState<boolean>(false)
	const [responseMessage, setResponseMessage] = useState<string>('')

	// #region Styles
	const labelStyle = 'text-sm font-light text-primary'
	const inputStyle =
		'bg-grey/10 dark:bg-background rounded-lg shadow-md md:p-3 p-2 text-font text-sm font-light caret-primary border border-transparent dark:border-black/20 dark:border-transparent focus:outline-none focus:border-secondary dark:focus:border-secondary'
	const responseStyle = 'text-sm px-2 py-2 flex justify-center items-center gap-2'
	// #endregion Styles

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target
		setFormData((prev: FormDataProps) => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		// Confirm that all fields are not empty
		if (!formData.name || !formData.email || !formData.message) {
			setResponseMessage('All fields are required!')
			return
		}

		try {
			setIsSending(true)
			const response = await fetch('/api/send', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: formData.name,
					email: formData.email,
					message: formData.message,
				}),
			})

			// Handle success
			if (response.ok) {
				setResponseMessage('Email Sent Successfully!')
				setFormData({
					name: '',
					email: '',
					message: '',
				})
			} else {
				setResponseMessage('There was a problem sending email. Please try again!')
			}
		} catch (error) {
			console.error('Error sending email:', error)
			setResponseMessage('There was a problem sending email. Please try again!')
		} finally {
			setIsSending(false)
		}
	}

	return (
		<section id='contact-me'>
			<Title name='Contact Me' />

			{/* Form */}
			<form className='mx-auto w-full sm:w-3/4 lg:w-1/2 space-y-6' onSubmit={handleSubmit}>
				{/* Your Name */}
				<div className='relative flex flex-col space-y-1'>
					<label htmlFor='name' className={labelStyle}>
						Your Name <span className='text-secondary'>*</span>
					</label>
					<input
						name='name'
						type='text'
						id='name'
						required
						value={formData.name}
						onChange={handleChange}
						className={inputStyle}
						maxLength={50}
					/>
				</div>
				{/* Your Email */}
				<div className='relative flex flex-col space-y-1'>
					<label htmlFor='email' className={labelStyle}>
						Your Email <span className='text-secondary'>*</span>
					</label>
					<input
						name='email'
						type='email'
						id='email'
						required
						value={formData.email}
						onChange={handleChange}
						className={inputStyle}
						maxLength={50}
					/>
				</div>
				{/* Your Message */}
				<div className='relative flex flex-col space-y-1'>
					<label htmlFor='message' className={labelStyle}>
						Your Message <span className='text-secondary'>*</span>
					</label>
					<textarea
						name='message'
						id='message'
						required
						cols={10}
						rows={5}
						value={formData.message}
						onChange={handleChange}
						className={`${inputStyle} resize-none`}
						maxLength={1000}
					/>
				</div>
				{/* Submit Button */}
				<button
					type='submit'
					className='mx-auto w-2/5 bg-secondary rounded-full shadow-md py-2 md:py-3 text-black/80 text-sm flex justify-center items-center gap-1 [&>svg]:text-black/80 [&>svg]:text-[16px] hover:bg-primary transition ease-in duration-500 border-4 border-double border-primary hover:border-secondary'>
					{isSending ? (
						<>
							Sending <RiLoader3Line size={18} className='animate-spin' />
						</>
					) : (
						<>
							Send <FiSend size={16} />
						</>
					)}
				</button>
				{/* Response Message */}
				{responseMessage && (
					<>
						{responseMessage.includes('Successfully') ? (
							<p className={`${responseStyle} text-green-400`}>
								<BsCheck2Circle size={20} /> {responseMessage}
							</p>
						) : (
							<p className={`${responseStyle} text-red-400`}>
								<IoIosCloseCircleOutline size={22} /> {responseMessage}
							</p>
						)}
					</>
				)}
			</form>
		</section>
	)
}
