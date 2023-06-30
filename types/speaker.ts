export type Speaker = {
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
};
