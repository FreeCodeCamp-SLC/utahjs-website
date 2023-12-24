const sponsors = {
	name: `sponsors`,
	title: `Sponsors`,
	type: `document`,
	fields: [
		{
			name: `name`,
			title: `Name`,
			type: `string`,
		},
		{
			name: `sponsorImage`,
			title: `Sponsor Image`,
			type: `image`,
			fields: [
				{
					name: `alt`,
					title: `Alt Text`,
					type: `string`,
				},
			],
			options: {
				hotspot: true,
			},
		},
		{
			name: `sponsorUrl`,
			title: `sponsor url`,
			type: `url`,
		},
		{
			name: `sponsorLevel`,
			title: `Sponsor Level`,
			type: `string`,
			options: {
				list: [
					{ title: `Platinum`, value: `platinum` },
					{ title: `Gold`, value: `gold` },
					{ title: `Silver`, value: `silver` },
					{ title: `Bronze`, value: `bronze` },
				],
			},
		},
	],
};

export default sponsors;
