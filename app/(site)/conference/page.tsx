'use client';

import { PortableText } from '@portabletext/react';
import { getConferenceData, getConferenceFallbackMessage, getConferenceSponsors } from '@/sanity/sanityFetch-utils';
import styles from './conference.module.scss';

export async function generateMetadata() {
	return {
		title: `UtahJS | Conference`,
	};
}

export default async function Conference() {
	const conferenceData = await getConferenceData();
	console.log('conferenceData:');
	console.log(conferenceData);
	const conferenceFallbackMessage = await getConferenceFallbackMessage();
	const sponsorSection = await getConferenceSponsors();
	const todaysDate = new Date();
	console.log('todaysDate:');
	console.log(todaysDate);
	// console.log('sponsorSection:');
	// console.log(sponsorSection);
	const bronzeSponsors = sponsorSection.sponsors.filter((sponsor) => sponsor.sponsorLevel === 'bronze');
	// console.log('bronzeSponsors:');
	// console.log(bronzeSponsors);
	const silverSponsors = sponsorSection.sponsors.filter((sponsor) => sponsor.sponsorLevel === 'silver');
	// console.log('silverSponsors:');
	// console.log(silverSponsors);
	console.log('conferenceFallbackMessage:');
	console.log(conferenceFallbackMessage);
	// if (!conferenceData) {
	// 	return (
	// 		<div className={styles.container}>
	// 			<h1>Conference Page</h1>
	// 			<p>No Data</p>
	// 		</div>
	// 	);
	// }
	let silverSponsorsSection;
	if (silverSponsors.length > 0) {
		silverSponsorsSection = (
			<div className="silver-sponsors">
				<h3>Silver Sponsors</h3>
				<ul>
					{silverSponsors.map((sponsor) => (
						<li key={sponsor._key}>
							<p>{sponsor.name}</p>
						</li>
					))}
				</ul>
			</div>
		);
	}
	let bronzeSponsorsSection;
	if (bronzeSponsors.length > 0) {
		bronzeSponsorsSection = (
			<div className="bronze-sponsors">
				<h3>Bronze Sponsors</h3>
				<ul>
					{bronzeSponsors.map((sponsor) => (
						<li key={sponsor._key}>
							<p>{sponsor.name}</p>
						</li>
					))}
				</ul>
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
				<div className="conference-message-column">
					<PortableText value={conferenceData.bodyContent} />
				</div>
				<div className="sponsors-column">
					<h2>{sponsorSection.title}</h2>
					{silverSponsorsSection}
					{bronzeSponsorsSection}
				</div>
			</section>
		</div>
	);
}
