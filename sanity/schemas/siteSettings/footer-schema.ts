const footer = {
	name: `footer`,
	title: `Footer`,
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

export default footer;
