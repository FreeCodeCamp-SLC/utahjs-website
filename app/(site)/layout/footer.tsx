import Image from 'next/image';
import Link from 'next/link';
import { getFooterData } from '@/utils/sanityFetch-utils';
import { PortableText } from '@portabletext/react';
import { getImageDimensions } from '@/utils/helperFunctions';

export default async function Footer() {
	const footerData = await getFooterData();
	console.log(footerData);
	const footerLogoDimensions = getImageDimensions(footerData.logo.url);
	if (!footerData) {
		return (
			<footer className="footer">
				<p>No Footer Data</p>
			</footer>
		);
	}

	return (
		<footer className="footer">
			<div className="container">
				<div className="top-row">
					<Link href="/">
						<Image
							src={footerData.logo.url}
							alt={footerData.logo.alt}
							width={footerLogoDimensions.width}
							height={footerLogoDimensions.height}
						/>
					</Link>
					<div className="social-media-links">
						{footerData.socialMediaLinks.map((link) => {
							const logoDimensions = getImageDimensions(link.logo.url);
							return (
								<a
									key={link.title}
									href={link.url}
									target={link.openInNewTab ? '_blank' : '_self'}
									rel={link.openInNewTab ? 'noopener noreferrer' : ''}
								>
									<Image
										src={link.logo.url}
										alt={link.logo.alt}
										width={logoDimensions.width}
										height={logoDimensions.height}
									/>
								</a>
							);
						})}
					</div>
				</div>
				<div className="organization">
					<PortableText value={footerData.organizationDetails} />
				</div>
				<PortableText value={footerData.copyrightText} />
			</div>
		</footer>
	);
}
