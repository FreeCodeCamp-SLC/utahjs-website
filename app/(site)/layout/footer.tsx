import { getFooterData } from '@/utils/sanityFetch-utils';
import { PortableText } from '@portabletext/react';

export default async function Footer() {
	const footerData = await getFooterData();
	if (!footerData) {
		return (
			<footer className="footer">
				<p>No Footer Data</p>
			</footer>
		);
	}

	return (
		<footer className="footer">
			<PortableText value={footerData.content} />
		</footer>
	);
}
