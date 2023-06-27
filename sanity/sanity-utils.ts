import { createClient, groq } from 'next-sanity';
import { CodeOfConduct } from '@/types/CodeOfConduct';
import { Footer } from '@/types/Footer';
import { Navigation } from '@/types/Navigation';
import clientConfig from './config/client-config';

export async function getConductData(): Promise<CodeOfConduct> {
	return createClient(clientConfig).fetch(groq`*[_type == "codeOfConduct"][0]{
		_id,
		_createdAt,
		_updatedAt,
		content
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
