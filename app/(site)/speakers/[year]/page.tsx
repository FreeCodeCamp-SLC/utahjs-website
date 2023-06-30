import React from 'react';
import Link from 'next/link';
import { getPastSpeakersData } from '@/sanity/sanity-utils';
import styles from '../speakers.module.scss';
import Image from 'next/image';
import { Speaker } from '@/types/speaker';
import { getData } from '@/utils/fetch';

export async function generateMetadata({ params }: { params: { year: string } }) {
	const year = Number(params.year);
	return {
		title: `UtahJS | ${year} Speakers `,
	};
}

export default async function Speakers({ params }: { params: { year: string } }) {
	const sessionizeUrls = await getPastSpeakersData();
	const year = Number(params.year);
	const currentYear = sessionizeUrls[0].year;
	const sessionizeUrl = sessionizeUrls.filter((speaker) => speaker.year === year);
	const url = sessionizeUrl[0].sessionizeUrl;
	const speakers = await getData(url);

	if (!sessionizeUrls) {
		return (
			<div className={styles.container}>
				<h1>Past Conference Speakers</h1>
				<p>No Data</p>
			</div>
		);
	}
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
								className={session.year === year ? styles.active : ``}
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
						<p>Presentation: {speaker.sessions.map((session) => session.name)}</p>
					</article>
				))}
			</div>
		</div>
	);
}
