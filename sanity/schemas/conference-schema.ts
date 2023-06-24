const conference = {
	name: `conference`,
	title: `Conference`,
	type: `document`,
	fields: [
		{
			name: `content`,
			title: `Content`,
			type: `array`,
			of: [
				{
					type: `block`,
				},
			],
		},
	],
};

export default conference;
