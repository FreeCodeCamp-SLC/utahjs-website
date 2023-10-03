import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
import {
	CodeOfConduct,
	Conference,
	ConferenceFallbackMessage,
	ConferenceScheduleUrl,
	ConferenceSponsors,
	Footer,
	Home,
	Navigation,
	PastSpeakers,
} from '@/types/SanityFetches';

export async function getConductData(): Promise<CodeOfConduct> {
	return createClient(clientConfig).fetch(groq`*[_type == "codeOfConduct"][0]{
		_id,
		_createdAt,
		_updatedAt,
		content
	}`);
}

export async function getConferenceData(): Promise<Conference> {
	return createClient(clientConfig).fetch(groq`*[_type == "conferencePage"][0]{
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

export async function getConferenceScheduleData(): Promise<ConferenceScheduleUrl> {
	return createClient(clientConfig).fetch(groq`*[_type == "conference"] {
		_id,
		date,
		scheduleUrl
	} | order(date desc)[0..0]`);
}

export async function getConferenceSponsors(): Promise<ConferenceSponsors> {
	return createClient(clientConfig).fetch(groq`*[_type == "conference"] {
		_id,
		date,
		"title": sponsorSection.sponsorSectionTitle,
		"sponsors": sponsorSection.sponsors,
	} | order(date desc)[0]`);
}

export async function getFooterData(): Promise<Footer> {
	return createClient(clientConfig).fetch(groq`*[_type == "footer"][0]{
		_id,
		_createdAt,
		_updatedAt,
		content
	}`);
}

export async function getHomeData(): Promise<Home> {
	return createClient(clientConfig).fetch(groq`*[_type == "home"][0]{
		_id,
		_createdAt,
		_updatedAt,
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

export async function getNavigationData(): Promise<Navigation[]> {
	return createClient(clientConfig).fetch(groq`*[_type == "navigation"] {
		_id,
		_createdAt,
		_updatedAt,
		title,
		slug,
		openInNewTab,
		order
	} | order(order asc)`);
}

export async function getPastSpeakersData(): Promise<PastSpeakers[]> {
	return createClient(clientConfig).fetch(groq`*[_type == "conference"] {
  		_id,
   		date,
    	speakersUrl
	} | order(date desc)`);
}

export async function getConferenceFallbackMessage(): Promise<ConferenceFallbackMessage> {
	return createClient(clientConfig).fetch(groq`*[_type == "conference"] {
		_id,
		date,
		fallbackMessage
	} | order(date desc)[0]`);
}
