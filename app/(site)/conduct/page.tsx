import { PortableText } from '@portabletext/react';
import { getConductData } from '@/sanity/sanity-utils';
import styles from './page.module.scss';

export default async function conduct() {
	const conductData = await getConductData();
	return (
		<div className={styles.container}>
			<PortableText value={conductData.content} />
		</div>
	);
}
