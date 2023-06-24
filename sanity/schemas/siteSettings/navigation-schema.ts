const navigation = {
	name: `navigation`,
	title: `Navigation`,
	type: `document`,
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `slug`,
			title: `Slug`,
			type: `slug`,
			options: {
				source: `title`,
			},
		},
	],
};

export default navigation;
