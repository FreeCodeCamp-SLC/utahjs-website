import { PortableText } from '@portabletext/react';
import { getConferencePageData, getConferenceData } from '@/utils/sanityFetch-utils';
import { generateFeaturedSpeakersSection, generateSponsorSection } from '@/utils/helperFunctions';
import styles from './conference.module.scss';

export async function generateMetadata() {
	const conferenceData = await getConferencePageData();
	return {
		title: conferenceData.metaData.title,
		description: conferenceData.metaData.description,
		openGraph: {
			title: conferenceData.metaData.openGraph.title,
			description: conferenceData.metaData.openGraph.description,
			url: conferenceData.metaData.openGraph.url,
			type: conferenceData.metaData.openGraph.type,
			siteName: conferenceData.metaData.openGraph.siteName,
			images: conferenceData.metaData.openGraph.ogImageUrl || '/logo.png',
		},
		twitter: {
			card: conferenceData.metaData.twitter.card,
			title: conferenceData.metaData.twitter.title,
			creator: conferenceData.metaData.twitter.creator,
			images: conferenceData.metaData.twitter.twitterImageUrl || '/logo.png',
		},
	};
}

export default async function Conference() {
	const conferencePageData = await getConferencePageData();
	const conferenceData = await getConferenceData();

	// Hero Section
	const heroSection = conferencePageData.heroSection;
	const primaryButton = heroSection.primaryButton;
	const secondaryButton = heroSection.secondaryButton;

	// Conference Message
	let conferenceMessage;
	const currentDate = new Date();
	const conferenceDate = new Date(conferenceData.date);

	if (currentDate < conferenceDate) {
		conferenceMessage = <PortableText value={conferenceData.conferenceMessage} />;
	} else if (currentDate.getFullYear() === conferenceDate.getFullYear()) {
		conferenceMessage = <PortableText value={conferenceData.afterConferenceMessage} />;
	} else {
		conferenceMessage = <PortableText value={conferenceData.newYearMessage} />;
	}

	const featuredSpeakersSection = generateFeaturedSpeakersSection(
		conferenceData.featuredSpeakersSectionTitle,
		conferenceData.featuredSpeakers,
	);

	const sponsorsSection = generateSponsorSection(conferenceData.sponsorSectionTitle, conferenceData.sponsors);

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
				{conferenceMessage}
				<div className={styles.row}>
					{featuredSpeakersSection}
					{sponsorsSection}
				</div>
			</section>
		</div>
	);
}
