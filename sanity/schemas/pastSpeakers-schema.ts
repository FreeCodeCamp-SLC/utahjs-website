const pastSpeakers = {
	name: `pastSpeakers`,
	title: `Past Speakers`,
	type: `document`,
	fields: [
		{
			name: `year`,
			title: `Year`,
			type: `number`,
		},
		{
			name: `sessionizeUrl`,
			title: `Sessionize URL`,
			type: `url`,
		},
	],
	orderings: [
		{
			name: `yearAsc`,
			title: `Year Descending`,
			by: [
				{
					field: `year`,
					direction: `desc`,
				},
			],
		},
	],
};

export default pastSpeakers;
