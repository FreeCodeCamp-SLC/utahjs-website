import { PortableTextBlock } from 'sanity';

export type CodeOfConductPageData = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	content: PortableTextBlock[];
};

export type ConferencePageData = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	pageTitle: string;
	metaData: {
		_id: string;
		_type: string;
		_createdAt: Date;
		_updatedAt: Date;
		_rev: string;
		description: string;
		title: string;
		openGraph: {
			description: string;
			ogImageUrl: string;
			ogImageHeight: number;
			ogImageWidth: number;
			siteName: string;
			title: string;
			type: string;
			url: string;
		};
		twitter: {
			card: string;
			creator: string;
			title: string;
			twitterImageUrl: string;
			twitterImageHeight: number;
			twitterImageWidth: number;
		};
	};
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
	fallbackMessage: PortableTextBlock[];
};

export type ConferenceScheduleUrl = {
	_id: string;
	date: Date;
	scheduleUrl: string;
};

export type ConferenceData = {
	_id: string;
	date: Date;
	featuredSpeakersSectionTitle: string;
	featuredSpeakers: [
		{
			_key: string;
			name: string;
			role: string;
			presentation: string;
			description: string;
			dateTime: string;
			duration: string;
			image: string;
		},
	];
	sponsorSectionTitle: string;
	sponsors: [
		{
			_key: string;
			name: string;
			sponsorLevel: string;
			sponsorURL: string;
			sponsorImage: string;
		},
	];
	conferenceMessage: PortableTextBlock[];
	afterConferenceMessage: PortableTextBlock[];
	newYearMessage: PortableTextBlock[];
};

export type Footer = {
	logo: {
		alt: string;
		url: string;
	};
	socialMediaLinks: [
		{
			title: string;
			logo: {
				alt: string;
				url: string;
			};
			url: string;
			openInNewTab: boolean;
		},
	];
	organizationDetails: PortableTextBlock[];
	copyrightText: PortableTextBlock[];
};

export type Header = {
	title: string;
	logo: {
		url: string;
		alt: string;
	};
};

export type HomePageData = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	title: string;
	heroSection: {
		backgroundImageUrl: string;
		header: string;
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
	videoSection: {
		sectionTitle: string;
		paragraph: PortableTextBlock[];
		youtubeShareLink: string;
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
				_key: string;
				name: string;
				url: string;
				imageUrl: string;
				imageAlt: string;
			},
		];
	};
	homePageFooter: PortableTextBlock[];
};

export type MenuLink = {
	_key: string;
	title: string;
	slug: string;
	openInNewTab: boolean;
	nestedLinks?: MenuLink[];
};

export type Menu = {
	_key: string;
	menuTitle: string;
	links: MenuLink[];
};

export type PastSpeakers = {
	_id: string;
	date: Date;
	speakersUrl: string;
};
