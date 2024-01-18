import { createClient, groq } from 'next-sanity';
import clientConfig from '../sanity/config/client-config';
import {
	CodeOfConductPageData,
	ConferencePageData,
	ConferenceScheduleUrl,
	ConferenceData,
	Footer,
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
		_id,
		_createdAt,
		_updatedAt,
		content
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
		"pageTitle": page_title,
		"heroSection": {
			"heroBackgroundImageUrl": hero_section.hero_background_image.asset->url,
			"heroImageUrl": hero_section.hero_image.asset->url,
			"heroHeader": hero_section.hero_header,
			"heroSubtext1": hero_section.hero_subtext_1,
			"heroSubtext2": hero_section.hero_subtext_2,
			"heroPrimaryButton": {
				"primaryButtonText": hero_section.hero_primary_button.primary_button_text,
				"primaryButtonLink": hero_section.hero_primary_button.primary_button_link,
				"primaryButtonNewTab": hero_section.hero_primary_button.primary_button_new_tab
			},
			"heroSecondaryButton": {
				"secondaryButtonText": hero_section.hero_secondary_button.secondary_button_text,
				"secondaryButtonLink": hero_section.hero_secondary_button.secondary_button_link,
				"secondaryButtonNewTab": hero_section.hero_secondary_button.secondary_button_new_tab
			}
		},
		"getInvolvedSection": {
            "getInvolvedHeader" : get_involved_section.get_involved_header,
			"getInvolvedLinks": get_involved_section.get_involved_links
		},
		"otherMeetupsSection": {
			"otherMeetupsHeader": other_meetups_section.other_meetups_header,
			"otherMeetups": other_meetups_section.other_meetups
		},
		"homePageFooter": home_page_footer
	}`);
}

export async function getPrimaryMenuData(): Promise<Menu> {
	return createClient(clientConfig).fetch(groq`*[_type == "menu" && menuTitle == 'Primary Menu'][0] {
		menuTitle,
		"headerLogo": {
			"url": headerLogo.asset->url,
			"alt": headerLogo.alt
		},
		headerTitle,
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
