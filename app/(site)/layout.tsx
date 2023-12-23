import styles from './layout/layout.module.scss';
import Header from './layout/header';
import Footer from './layout/footer';
import '../styles/main.scss';

import type { Metadata } from 'next';

export const metadata: Metadata = {
	authors: [{ name: 'freeCodeCamp - SLC Study Group' }],
	title: `UtahJS - JavaScript Engineers of Utah`,
	description: `Get involved in JavaScript in Utah! Let's learn together`,
	openGraph: {
		title: `UtahJS - JavaScript Engineers of Utah`,
		description: `Get involved in JavaScript in Utah! Let's learn together`,
		url: `https://utahjs.com/`,
		type: 'website',
		siteName: 'UtahJS',
		images: [
			{
				url: '/logo.png',
				width: 64,
				height: 81,
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: `UtahJS - JavaScript Engineers of Utah`,
		creator: '@utjs',
		images: [
			{
				url: '/logo.png',
				width: 64,
				height: 81,
			},
		],
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={styles.body}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
