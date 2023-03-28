import './styles/globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Swipe North',
	description: 'Hitta ditt nya jobb i Skellefteå',
	icons: {
		icon: './favicon-32x32.png',
	},
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<Link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<Link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<Link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<Link rel="manifest" href="/site.webmanifest" />
				<Link
					rel="mask-icon"
					href="/safari-pinned-tab.svg"
					color="#5bbad5"
				/>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff"></meta>
			</Head>

			<body className={inter.className}>{children}</body>
		</html>
	)
}
