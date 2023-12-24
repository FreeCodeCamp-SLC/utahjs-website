import Link from 'next/link';
import Image from 'next/image';
import { getNavigationData } from '@/utils/sanityFetch-utils';
import styles from './header.module.scss';

export default async function Header() {
	const navigationData = await getNavigationData();
	if (!navigationData) {
		return (
			<header className={styles.header}>
				<div className={styles.title_row}>
					<div className={styles.container}>
						<Link href="/">
							<Image src="/logo.png" alt="UtahJS Logo" width={51} height={65} />
						</Link>
						<h1>UtahJS - JavaScript Engineers of Utah</h1>
					</div>
				</div>
			</header>
		);
	}

	return (
		<header className={styles.header}>
			<div className={styles.title_row}>
				<div className={styles.container}>
					<Link href="/">
						<Image src="/logo.png" alt="UtahJS Logo" width={51} height={65} />
					</Link>
					<h1>UtahJS - JavaScript Engineers of Utah</h1>
				</div>
			</div>
			<nav>
				<ul>
					{navigationData.map((item) => {
						return (
							<li key={item._id}>
								<Link target={item.openInNewTab ? `_blank` : ``} href={item.slug.current}>
									{item.title}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
		</header>
	);
}
