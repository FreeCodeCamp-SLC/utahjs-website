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
	pageTitle: string;
	heroSection: {
		backgroundImage: string;
		heroImage: string;
		heroHeader: string;
		subtitle: string;
		primaryButton: {
			text: string;
			url: string;
			newTab: boolean;
		};
		secondaryButton: {
			text: string;
			url: string;
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

export type Home = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	title: string;
	heroSection: {
		heroBackgroundImageUrl: string;
		heroImageUrl: string;
		heroHeader: string;
		heroSubtext1: string;
		heroSubtext2: string;
		heroPrimaryButton: {
			primaryButtonText: string;
			primaryButtonLink: string;
			primaryButtonNewTab: boolean;
		};
		heroSecondaryButton: {
			secondaryButtonText: string;
			secondaryButtonLink: string;
			secondaryButtonNewTab: boolean;
		};
	};
	getInvolvedSection: {
		getInvolvedHeader: string;
		getInvolvedLinks: [
			singleLink: {
				text: string;
				url: string;
				newTab: boolean;
				description: {
					name: `description`;
					title: `Description`;
					type: `array`;
					of: [
						{
							type: `block`;
						},
					];
				};
			},
		];
	};
	otherMeetupsSection: {
		otherMeetupsHeader: string;
		otherMeetups: [
			{
				name: string;
				url: string;
				image: {
					asset: {
						url: string;
					};
				};
			},
		];
	};
	homePageFooter: PortableTextBlock[];
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
