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
		{
			name: `openInNewTab`,
			title: `Open in new tab`,
			type: `boolean`,
		},
		{
			name: `order`,
			title: `Order`,
			type: `number`,
			description: `This will determine the order the links appear in the navbar`,
		},
	],
	preview: {
		select: {
			title: `title`,
			subtitle: `order`,
		},
	},
	orderings: [
		{
			name: `orderAsc`,
			title: `Order Ascending`,
			by: [
				{
					field: `order`,
					direction: `asc`,
				},
			],
		},
	],
};

export default navigation;
