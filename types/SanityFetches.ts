import { PortableTextBlock } from 'sanity';

export type CodeOfConduct = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	content: PortableTextBlock[];
};

export type Conference = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	heroSection: {
		heroImage: {
			asset: {
				_ref: string;
			};
		};
		heroImageAltText: string;
		title: string;
		subtitle: string;
		heroPrimaryButton: {
			link: string;
			text: string;
			newTab: boolean;
		};
		heroSecondaryButton: {
			link: string;
			text: string;
			newTab: boolean;
		};
	};
	bodyContent: PortableTextBlock[];
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
