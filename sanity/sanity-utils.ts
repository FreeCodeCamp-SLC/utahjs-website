import { createClient, groq } from 'next-sanity';
import { CodeOfConduct } from '@/types/CodeOfConduct';
import clientConfig from './config/client-config';

export async function getConductData(): Promise<CodeOfConduct> {
	return createClient(clientConfig).fetch(groq`*[_type == "codeOfConduct"][0]{
    _id,
	_createdAt,
	_updatedAt,
    content
	}`);
}
