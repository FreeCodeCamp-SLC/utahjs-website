// schemas/pet.js
export default {
	name: 'speaker',
	title: 'Speaker',
	type: 'document',
	fields: [
		{
			title: 'Name',
			name: 'name',
			type: 'string',
		},
		{
			title: 'Role',
			name: 'role',
			type: 'string',
		},
		{
			title: 'Presentation',
			name: 'presentation',
			type: 'string',
		},
		{
			title: 'Description',
			name: 'description',
			type: 'string',
		},
		{
			title: 'Date & Time',
			name: 'date_time',
			type: 'datetime',
		},
		{
			title: 'Duration',
			name: 'duration',
			type: 'number',
			description: 'Length of the presentation in minutes',
		},
		{
			title: 'Twitter',
			name: 'twitter',
			type: 'url',
		},
		{
			title: 'Github',
			name: 'github',
			type: 'url',
		},
		{
			title: 'LinkedIn',
			name: 'linkedin',
			type: 'url',
		},
		{
			title: 'Website',
			name: 'website',
			type: 'url',
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
	],
	orderings: [
		{
			name: 'date_time',
			title: 'Date/Time',
			by: [
				{
					field: 'date_time',
					direction: 'asc',
				},
			],
		},
	],
};
