/* eslint-disable @next/next/no-img-element */
import { featuredSpeakersArray, SponsorArray } from '../types/types';

export function generateFeaturedSpeakersSection(
	featuredSpeakersSectionTitle: string,
	featuredSpeakers: featuredSpeakersArray,
) {
	if (featuredSpeakers.length > 0) {
		return (
			<div className="featured-speakers">
				<h2>{featuredSpeakersSectionTitle}</h2>

				{featuredSpeakers.map((speaker) => (
					<article key={speaker._key}>
						<img src={speaker.image} alt={speaker.name} />
						<div>
							<h3>
								{speaker.name} {speaker.role}
							</h3>
							<p>{speaker.presentation}</p>
							<p>{speaker.description}</p>
						</div>
					</article>
				))}
			</div>
		);
	}
	return null;
}

export function generateSponsorSection(sponsorSectionTitle: string, sponsors: SponsorArray) {
	const levels = Array.from(new Set(sponsors.map((sponsor) => sponsor.sponsorLevel.toLowerCase())));
	return (
		<div className="sponsors-column">
			<h2>{sponsorSectionTitle}</h2>
			{levels.map((level) => {
				const sponsorLevels = sponsors.filter((sponsor) => sponsor.sponsorLevel === level);

				if (sponsorLevels.length > 0) {
					return (
						<div className={`${level.toLowerCase()}-sponsors`} key={level}>
							<h3>{level.charAt(0).toUpperCase() + level.slice(1)} Sponsors</h3>
							<ul>
								{sponsorLevels.map((sponsor) => (
									<li key={sponsor._key}>
										<img src={sponsor.sponsorImage} alt={sponsor.name} />
									</li>
								))}
							</ul>
						</div>
					);
				}

				return null;
			})}
		</div>
	);
}

export function getImageDimensions(url: string) {
	const match = url.match(/-(\d+)x(\d+)\./);
	let width = 0;
	let height = 0;
	if (match) {
		width = Number(match[1]);
		height = Number(match[2]);
	}
	return { width, height };
}
