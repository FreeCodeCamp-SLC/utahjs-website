// schemas/pet.js
const speaker = {
	name: `featuredSpeakers`,
	title: `Featured Speakers`,
	type: `document`,
	fields: [
		{
			name: `name`,
			title: `Name`,
			type: `string`,
		},
		{
			name: `image`,
			title: `Image`,
			type: `image`,
			fields: [
				{
					name: `alt`,
					title: `Alt Text`,
					type: `string`,
				},
			],
			options: {
				hotspot: true,
			},
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
			name: `dateTime`,
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
	],
	orderings: [
		{
			name: `dateTime`,
			title: `Date/Time`,
			by: [
				{
					field: `dateTime`,
					direction: `asc`,
				},
			],
		},
	],
};

export default speaker;
