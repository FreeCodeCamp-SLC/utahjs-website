import { getFooterData } from '@/utils/sanityFetch-utils';
import styles from './footer.module.scss';
import { PortableText } from '@portabletext/react';

export default async function Footer() {
	const footerData = await getFooterData();
	if (!footerData) {
		return (
			<footer className={styles.footer}>
				<p>No Footer Data</p>
			</footer>
		);
	}

	return (
		<footer className={styles.footer}>
			<PortableText value={footerData.content} />
		</footer>
	);
}
