export default {
	name: 'codeOfConduct',
	title: 'Code of Conduct',
	type: 'document',
	fields: [
		{
			name: 'Content',
			title: 'Content',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
	],
};
