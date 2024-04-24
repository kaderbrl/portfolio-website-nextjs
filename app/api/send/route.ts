'use server'
import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

import { ContactFormEmail } from '@/email/contact-form-email'

const resend = new Resend(process.env.RESEND_API_KEY)

export const POST = async (req: NextRequest) => {
	const body = await req.json()
	const { name, email, message } = body

	if (!message || !email || !message) {
		return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
	}

	try {
		const { data, error } = await resend.emails.send({
			from: `Contact Form <${process.env.FROM_EMAIL}>`,
			to: `${process.env.TO_EMAIL}`,
			reply_to: email,
			subject: '🎉 New submission to your contact form!',
			react: ContactFormEmail({ name, email, message }) as React.ReactElement,
		})

		if (error) {
			return NextResponse.json({ message: 'Email sending failed', error }, { status: 400 })
		}

		return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 })
	} catch (error) {
		console.error('Error sending email:', error)
		return NextResponse.json({ message: 'Failed to send email', error }, { status: 500 })
	}
}
