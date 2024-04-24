import { Html, Head, Body, Container, Hr, Preview, Section, Text } from '@react-email/components'
import { Tailwind } from '@react-email/components'

type ContactFormEmailProps = {
	name: string
	email: string
	message: string
}

export const ContactFormEmail = ({ name, email, message }: ContactFormEmailProps) => {
	return (
		<Html>
			<Head />
			<Preview>New message from Kader Biral`&apos;`s portfolio</Preview>
			<Tailwind>
				<Body className='bg-gray-200'>
					<Container>
						<Section>
							<Text className='text-center text-teal-400 text-4xl my-5'>
								{'<KB/>'}
							</Text>
						</Section>
						<Section className='bg-white rounded-lg shadow-md border border-black mb-10 px-10 py-5'>
							<Text className='text-black text-3xl'>
								Your received the following message from the Contact Form
							</Text>
							<Text>{message}</Text>
							<Hr />
							<Text>
								<strong>The sender`&apos;`s name is:</strong> {name}
							</Text>
							<Text>
								<strong>The sender`&apos;`s email is:</strong> {email}
							</Text>
						</Section>
					</Container>
				</Body>
			</Tailwind>
		</Html>
	)
}
