import { createClient, groq } from 'next-sanity';
import clientConfig from '../sanity/config/client-config';
import {
	CodeOfConductPageData,
	ConferencePageData,
	ConferenceScheduleUrl,
	ConferenceData,
	Footer,
	Header,
	HomePageData,
	PastSpeakers,
	Menu,
} from '@/types/SanityFetches';

export async function getConductData(): Promise<CodeOfConductPageData> {
	return createClient(clientConfig).fetch(groq`*[_type == "codeOfConductPage"][0]{
		_id,
		_createdAt,
		_updatedAt,
		content
	}`);
}

export async function getConferencePageData(): Promise<ConferencePageData> {
	return createClient(clientConfig).fetch(groq`*[_type == "conferencePage"][0]{
		metaData->{
			...,
			openGraph {
				...,
				"ogImageUrl": ogImage.asset->url,
			},
			twitter {
				...,
				"twitterImageUrl": twitterImage.asset->url,
			},
		},
		"heroSection": {
			"backgroundImage": heroSection.backgroundImage.asset->url,
			"heroImage": heroSection.heroImage.asset->url,
			"heroHeader": heroSection.heroHeader,
			"subtitle": heroSection.subtitle,
			"primaryButton": {
				"text": heroSection.primaryButton.text,
				"url": heroSection.primaryButton.url,
				"newTab": heroSection.primaryButton.newTab
			},
			"secondaryButton": {
				"text": heroSection.secondaryButton.text,
				"url": heroSection.secondaryButton.url,
				"newTab": heroSection.secondaryButton.newTab
			}
		},
		bodyContent,
		fallbackMessage
	}`);
}

export async function getConferenceData(): Promise<ConferenceData> {
	return createClient(clientConfig).fetch(groq`*[_type == "conference"] {
		_id,
		date,
		"featuredSpeakersSectionTitle": featuredSpeakersSection.featuredSpeakersSectionTitle,
		"featuredSpeakers": featuredSpeakersSection.featuredSpeakers[]{
			_key,
			name,
			role,
			presentation,
			description,
			dateTime,
			duration,
            "image": image.asset->url
		},
		"sponsorSectionTitle": sponsorSection.sponsorSectionTitle,
		"sponsors": sponsorSection.sponsors[]{
			_key,
			name,
			sponsorLevel,
			sponsorUrl,
			"sponsorImage": sponsorImage.asset->url
		},
		conferenceMessage,
		afterConferenceMessage,
		newYearMessage
	} | order(date desc)[0]`);
}

export async function getConferenceScheduleData(): Promise<ConferenceScheduleUrl> {
	return createClient(clientConfig).fetch(groq`*[_type == "conference"] {
		_id,
		date,
		scheduleUrl
	} | order(date desc)[0..0]`);
}

export async function getFooterData(): Promise<Footer> {
	return createClient(clientConfig).fetch(groq`*[_type == "footer"][0]{
		"logo": {
			"alt": logo.alt,
			"url": logo.asset->url
		},
		"socialMediaLinks": socialMediaLinks[]{
			title,
			"logo": {
				"url": logo.asset->url,
				"alt": logo.alt
			},
			url,
			openInNewTab
		},
		organizationDetails,
		copyrightText,
	}`);
}

export async function getHeaderData(): Promise<Header> {
	return createClient(clientConfig).fetch(groq`*[_type == "header"][0]{
		title,
		"logo": {
			"url": logo.asset->url,
			"alt": logo.alt
		}
	}`);
}

export async function getHomePageData(): Promise<HomePageData> {
	return createClient(clientConfig).fetch(groq`*[_type == "homePage"][0]{
		_id,
		_createdAt,
		_updatedAt,
		metaData->{
          ...,
          openGraph {
            ...,
            "ogImageUrl": ogImage.asset->url,
          },
          twitter {
            ...,
            "twitterImageUrl": twitterImage.asset->url,
          },
        },
		"pageTitle": pageTitle,
		"heroSection": {
			"backgroundImageUrl": heroSection.backgroundImage.asset->url,
			"header": heroSection.header,
			"primaryButton": {
				"text": heroSection.primaryButton.text,
				"url": heroSection.primaryButton.url,
				"newTab": heroSection.primaryButton.newTab
			},
			"secondaryButton": {
				"text": heroSection.secondaryButton.text,
				"url": heroSection.secondaryButton.url,
				"newTab": heroSection.secondaryButton.newTab
			}
		},
		"videoSection": {
			"sectionTitle": videoSection.sectionTitle,
			"paragraph": videoSection.paragraph,
			"youtubeShareLink": videoSection.youtubeShareLink,
		},
		"getInvolvedSection": {
            "getInvolvedHeader" : getInvolvedSection.header,
			"getInvolvedLinks": getInvolvedSection.links
		},
		"otherMeetupsSection": {
			"otherMeetupsHeader": otherMeetupsSection.header,
			"otherMeetups": otherMeetupsSection.otherMeetups[]{
				_key,
				name,
				url,
				"imageUrl": image.asset->url,
				"imageAlt": image.alt
			}
		},
	}`);
}

export async function getPrimaryMenuData(): Promise<Menu> {
	return createClient(clientConfig).fetch(groq`*[_type == "menu" && menuTitle == 'Primary Menu'][0] {
		menuTitle,
		"links": links[]{
			_key,
			title,
			"slug": slug.current,
			openInNewTab,
			"nestedLinks": nestedLinks[]{
				_key,
				title,
				"slug": slug.current,
				openInNewTab
			},
		}
	}
	`);
}

export async function getPastSpeakersData(): Promise<PastSpeakers[]> {
	return createClient(clientConfig).fetch(groq`*[_type == "conference"] {
  		_id,
   		date,
    	speakersUrl
	} | order(date desc)`);
}
