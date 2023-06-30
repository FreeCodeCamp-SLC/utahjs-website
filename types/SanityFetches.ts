import { PortableTextBlock } from 'sanity';

export type CodeOfConduct = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	content: PortableTextBlock[];
};

export type Footer = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	content: PortableTextBlock[];
};

export type Navigation = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	title: string;
	slug: {
		current: string;
	};
	openInNewTab: boolean;
	order: number;
};

export type PastSpeakers = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	year: number;
	sessionizeUrl: string;
};

export type PastConferenceYears = {
	_id: string;
	year: number;
};
