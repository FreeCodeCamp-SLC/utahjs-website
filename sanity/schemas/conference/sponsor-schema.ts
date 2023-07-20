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
			name: `sponsor`,
			title: `Sponsor`,
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
	],
};

export default sponsors;
