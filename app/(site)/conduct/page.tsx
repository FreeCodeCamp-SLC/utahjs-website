import { PortableText } from '@portabletext/react';
import { getConductData } from '@/sanity/sanityFetch-utils';
import styles from './conduct.module.scss';

export async function generateMetadata() {
	return {
		title: `UtahJS | Code of Conduct`,
	};
}

export default async function Conduct() {
	const conductData = await getConductData();
	if (!conductData) {
		return (
			<div className={styles.container}>
				<h1>Code of Conduct Page</h1>
				<p>No Data</p>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<PortableText value={conductData.content} />
		</div>
	);
}
