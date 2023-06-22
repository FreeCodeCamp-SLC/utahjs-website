export default {
	name: 'footer',
	title: 'Footer',
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
