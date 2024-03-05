const header = {
	name: 'header',
	title: 'Header',
	type: 'document',
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
		},
		{
			name: `logo`,
			title: `Logo`,
			type: `image`,
			fields: [
				{
					name: `alt`,
					title: `Alt Text`,
					type: `string`,
				},
			],
		},
	],
};

export default header;
