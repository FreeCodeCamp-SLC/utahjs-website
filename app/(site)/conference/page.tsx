import { PortableText } from '@portabletext/react';
import { getConferenceData } from '@/sanity/sanityFetch-utils';
import styles from './conference.module.scss';

export async function generateMetadata() {
	const conferenceData = await getConferenceData();
	return {
		title: conferenceData.heroSection.heroHeader,
		description: conferenceData.heroSection.subtitle,
		openGraph: {
			title: conferenceData.heroSection.heroHeader,
			description: conferenceData.heroSection.subtitle,
			url: `https://utahjs.com/`,
			type: 'website',
			siteName: 'UtahJS',
			images: conferenceData.heroSection?.heroImage || '/logo.png',
		},
		twitter: {
			card: 'summary_large_image',
			title: conferenceData.heroSection.heroHeader,
			creator: '@utjs',
			images: conferenceData.heroSection?.heroImage || '/logo.png',
		},
	};
}

export default async function Conference() {
	const conferenceData = await getConferenceData();
	if (!conferenceData) {
		return (
			<div className={styles.container}>
				<h1>Conference Page</h1>
				<p>No Data</p>
			</div>
		);
	}
	const heroSection = conferenceData.heroSection;
	const primaryButton = heroSection.primaryButton;
	const secondaryButton = heroSection.secondaryButton;

	return (
		<div className={styles.container}>
			<section className={styles.hero_section} style={{ backgroundImage: `url(${heroSection.backgroundImage})` }}>
				<div className={styles.hero_box}>
					<h1>{heroSection.heroHeader}</h1>
					<p>{heroSection.subtitle}</p>
					<div className={styles.buttons}>
						<a
							className={styles.primary_button}
							href={primaryButton.url}
							target={primaryButton.newTab ? `_blank` : ``}
							rel="noreferrer"
						>
							{primaryButton.text}
						</a>
						<a
							className={styles.secondary_button}
							href={secondaryButton.url}
							target={secondaryButton.newTab ? `_blank` : ``}
						>
							{secondaryButton.text}
						</a>
					</div>
				</div>
			</section>
			<section className={styles.conference_info}>
				<PortableText value={conferenceData.bodyContent} />
			</section>
		</div>
	);
}
