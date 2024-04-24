import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import { Footer, Navbar } from '@/components'
import { ThemeProvider } from 'next-themes'

const poppins = Poppins({
	weight: ['300', '400', '700'],
	subsets: ['latin'],
})

export const metadata: Metadata = {
	title: 'Kader Biral | Portfolio',
	description:
		'Hello, I am Kader Biral, a front end developer who is passionate about making dynamic, user-friendly and responsive websites. Welcome to my portfolio website. Discover my projects and learn more about my expertise!',
	icons: {
		icon: '/favicon.png',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	)
}
