import Image from 'next/image';
import Link from 'next/link';
import { PortableText } from '@portabletext/react';
import { getHomePageData } from '@/utils/sanityFetch-utils';
import { getImageDimensions } from '@/utils/helperFunctions';
import styles from './page.module.scss';

export default async function Home() {
	const homePageData = await getHomePageData();
	const heroSection = homePageData.heroSection;
	const videoSection = homePageData.videoSection;
	const otherMeetupsSection = homePageData.otherMeetupsSection;
	return (
		<>
			<section
				className={styles.hero_section}
				style={{ background: `url(${heroSection.backgroundImageUrl}) 50% 100% / cover no-repeat` }}
			>
				<div className={styles.wrapper}>
					<h1>UtahJS</h1>
					<p>{heroSection.header}</p>
					<div className={styles.links}>
						<Link className={styles.primary_button} href={heroSection.primaryButton.url}>
							{heroSection.primaryButton.text}
						</Link>
						<Link className={styles.secondary_button} href={heroSection.secondaryButton.url}>
							{heroSection.secondaryButton.text}
						</Link>
					</div>
				</div>
			</section>

			<section className={styles.video_section}>
				<div className={styles.container}>
					<div className="content">
						<h2>{videoSection.sectionTitle}</h2>
						<PortableText value={videoSection.paragraph} />
					</div>
					<iframe
						className={styles.video_iframe}
						src={videoSection.youtubeShareLink}
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
			</section>

			<section className={styles.meetups_section}>
				<div className="container">
					<h2>Other Web Technology Meetups in Utah</h2>
					<div className={styles.meetups}>
						{otherMeetupsSection.otherMeetups.map((meetup) => {
							const meetupLogoDimensions = getImageDimensions(meetup.imageUrl);
							return (
								<a className={styles.meetup} key={meetup._key} href={meetup.url}>
									<Image
										src={meetup.imageUrl}
										alt={meetup.imageAlt}
										width={meetupLogoDimensions.width}
										height={meetupLogoDimensions.height}
									/>
									<h3>{meetup.name}</h3>
								</a>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
}
