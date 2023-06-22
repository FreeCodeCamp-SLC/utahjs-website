export default {
	name: 'conference',
	title: 'Conference',
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
