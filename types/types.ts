export interface featuredSpeakers {
	_key: string;
	name: string;
	role: string;
	presentation: string;
	description: string;
	dateTime: string;
	duration: string;
	image: string;
}

export type featuredSpeakersArray = featuredSpeakers[];

export interface Speaker {
	id: string;
	firstName: string;
	lastName: string;
	fullName: string;
	bio: string;
	tagLine: string;
	profilePicture: string;
	sessions: [
		{
			id: number;
			name: string;
		},
	];
}

export interface Sponsor {
	_key: string;
	name: string;
	sponsorLevel: string;
	sponsorURL: string;
	sponsorImage: string;
}

export type SponsorArray = Sponsor[];
