import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getPastSpeakersData } from '@/utils/sanityFetch-utils';
import { Speaker } from '@/types/types';
import { getData } from '@/utils/fetch';
import styles from './speakers.module.scss';

import type { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
	const sessionizeUrls = await getPastSpeakersData();
	const currentYear = new Date(sessionizeUrls[0].date).getFullYear();
	return {
		title: `UtahJS | ${currentYear} Speakers`,
	};
}

export default async function Speakers() {
	const sessionizeUrls = await getPastSpeakersData();
	if (!sessionizeUrls) {
		return (
			<div className={styles.container}>
				<h1>Past Conference Speakers</h1>
				<p>No Data</p>
			</div>
		);
	}

	const currentYear = sessionizeUrls[0].date;
	const sessionizeUrl = sessionizeUrls.filter((speaker) => speaker.date === currentYear);
	const selectedYearSpeakersUrl = sessionizeUrl[0].speakersUrl;
	const speakers = await getData(selectedYearSpeakersUrl);

	return (
		<div className={styles.container}>
			<h1>Conference Speakers</h1>
			<nav>
				<p>Year:</p>
				<ul>
					{sessionizeUrls.map((session) => {
						const year = new Date(session.date).getFullYear();
						return (
							<li key={session._id}>
								<Link
									href={session.date === currentYear ? `/speakers` : `/speakers/${year}`}
									className={session.date === currentYear ? styles.active : ``}
								>
									{year}
								</Link>
							</li>
						);
					})}
				</ul>
			</nav>
			<div className={styles.speakerList}>
				{speakers.map((speaker: Speaker) => (
					<article key={speaker.id}>
						<div>
							{speaker.profilePicture ? (
								<Image src={speaker.profilePicture} alt={speaker.fullName} width={96} height={96} />
							) : (
								<p>Missing Image</p>
							)}
							<div>
								<h2>{speaker.fullName}</h2>
								<p className={styles.tagline}>{speaker.tagLine}</p>
							</div>
						</div>
						<p>{speaker.bio}</p>
						<p className={styles.presentation}>Presentation: {speaker.sessions.map((session) => session.name)}</p>
					</article>
				))}
			</div>
		</div>
	);
}
