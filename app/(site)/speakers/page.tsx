import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { getPastSpeakersData } from '@/sanity/sanity-utils';
import { Speaker } from '@/types/speaker';
import { getData } from '@/utils/fetch';
import styles from './speakers.module.scss';

export const metadata: Metadata = {
	title: `UtahJS | 2023 Speakers`,
	description: `Get involved in JavaScript in Utah! Let's learn together`,
};

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

	const currentYear = sessionizeUrls[0].year;
	const sessionizeUrl = sessionizeUrls.filter((speaker) => speaker.year === currentYear);
	const url = sessionizeUrl[0].sessionizeUrl;
	const speakers = await getData(url);

	return (
		<div className={styles.container}>
			<h1>Conference Speakers</h1>
			<nav>
				<h2>Year:</h2>
				<ul>
					{sessionizeUrls.map((session) => (
						<li key={session._id}>
							<Link
								href={session.year === currentYear ? `/speakers` : `/speakers/${session.year}`}
								className={session.year === currentYear ? styles.active : ``}
							>
								{session.year}
							</Link>
						</li>
					))}
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
						<p className={styles.presentation}>
							Presentation: {speaker.sessions.map((session) => session.name)}
						</p>
					</article>
				))}
			</div>
		</div>
	);
}
