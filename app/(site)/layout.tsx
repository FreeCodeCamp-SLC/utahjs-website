import { Metadata } from 'next';
import styles from './layout/layout.module.scss';
import Header from './layout/header';
import Footer from './layout/footer';
import '../styles/main.scss';

export const metadata: Metadata = {
	title: `UtahJS - JavaScript Engineers of Utah`,
	description: `Get involved in JavaScript in Utah! Let's learn together`,
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
