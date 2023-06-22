import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<div className={styles.title_row}>
				<div className={styles.container}>
					<Link href="/">
						<Image src="/logo.png" alt="UtahJS Logo" width={77} height={98} />
					</Link>
					<h1>UtahJS - JavaScript Engineers of Utah</h1>
				</div>
			</div>
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
		</header>
	);
}
