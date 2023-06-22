import { Metadata } from 'next';
import Link from 'next/link';
import '../styles/main.scss';
import styles from './layout.module.scss';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={styles.body}>
				<header>
					<div className="container">
						<h1>UtahJS - JavaScript Engineers of Utah</h1>
						<nav>
							<ul>
								<li>
									<Link href="/">Home</Link>
								</li>
								<li>
									<Link href="/conference">Conference</Link>
								</li>
								<li>
									<Link href="/schedule">2023 Schedule</Link>
								</li>
								<li>
									<Link href="/conduct">Code of Conduct</Link>
								</li>
								<li>
									<Link href="/speakers">Speakers</Link>
								</li>
							</ul>
						</nav>
					</div>
				</header>
				<main>{children}</main>
				<footer>
					<p>
						© 2022 UtahJS Built by Alex Puhl, John Bowser, Justin Howard and Steven Saunders as part of
						FreeCodeCamp SLC
					</p>
				</footer>
			</body>
		</html>
	);
}
