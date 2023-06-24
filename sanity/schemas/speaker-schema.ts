// schemas/pet.js
const speaker = {
	name: `speaker`,
	title: `Speaker`,
	type: `document`,
	fields: [
		{
			name: `name`,
			title: `Name`,
			type: `string`,
		},
		{
			name: `role`,
			title: `Role`,
			type: `string`,
		},
		{
			name: `presentation`,
			title: `Presentation`,
			type: `string`,
		},
		{
			name: `description`,
			title: `Description`,
			type: `string`,
		},
		{
			name: `date_time`,
			title: `Date & Time`,
			type: `datetime`,
		},
		{
			name: `duration`,
			title: `Duration`,
			type: `number`,
			description: `Length of the presentation in minutes`,
		},
		{
			name: `twitter`,
			title: `Twitter`,
			type: `url`,
		},
		{
			name: `github`,
			title: `Github`,
			type: `url`,
		},
		{
			name: `linkedin`,
			title: `LinkedIn`,
			type: `url`,
		},
		{
			name: `website`,
			title: `Website`,
			type: `url`,
		},
		{
			name: `image`,
			title: `Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
		},
	],
	orderings: [
		{
			name: `date_time`,
			title: `Date/Time`,
			by: [
				{
					field: `date_time`,
					direction: `asc`,
				},
			],
		},
	],
};

export default speaker;
