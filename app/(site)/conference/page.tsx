import { PortableText } from '@portabletext/react';
import { getConferenceData } from '@/sanity/sanity-utils';
import styles from './conference.module.scss';

export async function generateMetadata() {
	return {
		title: `UtahJS | Conference`,
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
	const heroSectionImage = heroSection.heroImage.asset;
	const strippedRef = heroSectionImage._ref.replace(`image-`, ``).replace(`-jpg`, ``);
	const imageUrl = `https://cdn.sanity.io/images/qn5czer2/dev/${strippedRef}.jpg`;
	const primaryButton = heroSection.heroPrimaryButton;
	const secondaryButton = heroSection.heroSecondaryButton;

	return (
		<div className={styles.container}>
			<section className={styles.hero_section} style={{ backgroundImage: `url(${imageUrl})` }}>
				<div className={styles.hero_box}>
					<h1>{heroSection.title}</h1>
					<p>{heroSection.subtitle}</p>
					<div className={styles.buttons}>
						<a
							className={styles.primary_button}
							href={primaryButton.link}
							target={primaryButton.newTab ? `_blank` : ``}
							rel="noreferrer"
						>
							{primaryButton.text}
						</a>
						<a
							className={styles.secondary_button}
							href={secondaryButton.link}
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
