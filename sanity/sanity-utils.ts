import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
import { CodeOfConduct, Conference, Footer, Navigation, PastSpeakers } from '@/types/SanityFetches';

export async function getConductData(): Promise<CodeOfConduct> {
	return createClient(clientConfig).fetch(groq`*[_type == "codeOfConduct"][0]{
		_id,
		_createdAt,
		_updatedAt,
		content
	}`);
}

export async function getConferenceData(): Promise<Conference> {
	return createClient(clientConfig).fetch(groq`*[_type == "conference"][0]{
		_id,
		_createdAt,
		_updatedAt,
		heroSection,
		bodyContent
	}`);
}

export async function getFooterData(): Promise<Footer> {
	return createClient(clientConfig).fetch(groq`*[_type == "footer"][0]{
		_id,
		_createdAt,
		_updatedAt,
		content
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
	return createClient(clientConfig).fetch(groq`*[_type == "pastSpeakers"] {
		_id,
		_createdAt,
		_updatedAt,
		year,
		sessionizeUrl
	} | order(year desc)`);
}
