const metaData = {
	name: `metaData`,
	title: `Metadata`,
	type: `document`,
	fields: [
		{
			name: `title`,
			title: `Site Title`,
			type: `string`,
		},
		{
			name: `description`,
			title: `Site Description`,
			type: `text`,
		},
		{
			name: `authors`,
			title: `Site Authors`,
			type: `array`,
			of: [
				{
					type: `object`,
					name: `author`,
					fields: [{ type: `string`, name: `name`, title: `Name` }],
				},
			],
		},
		{
			name: `openGraph`,
			title: `Open Graph`,
			type: `object`,
			fields: [
				{
					name: `title`,
					title: `Title`,
					type: `string`,
				},
				{
					name: `description`,
					title: `Description`,
					type: `text`,
				},
				{
					name: `url`,
					title: `URL`,
					type: `url`,
				},
				{
					name: `type`,
					title: `Type`,
					type: `string`,
				},
				{
					name: `siteName`,
					title: `Site Name`,
					type: `string`,
				},
				{
					name: `ogImage`,
					title: `Open Graph Image`,
					type: `image`,
				},
				{
					name: `ogImageWidth`,
					title: `Open Graph Image Width`,
					type: `number`,
				},
				{
					name: `ogImageHeight`,
					title: `Open Graph Image Height`,
					type: `number`,
				},
			],
		},
		{
			name: `twitter`,
			title: `Twitter`,
			type: `object`,
			fields: [
				{
					name: `card`,
					title: `Twitter Card Size`,
					type: `string`,
					options: {
						list: [
							{ title: `Summary`, value: `summary` },
							{ title: `Summary Large Image`, value: `summary_large_image` },
							{ title: `App`, value: `app` },
							{ title: `Player`, value: `player` },
						],
					},
				},
				{
					name: `title`,
					title: `Title`,
					type: `string`,
				},
				{
					name: `creator`,
					title: `Creator`,
					type: `string`,
				},
				{
					name: `twitterImage`,
					title: `Twitter Image`,
					type: `image`,
				},
				{
					name: `twitterImageWidth`,
					title: `Open Graph Image Width`,
					type: `number`,
				},
				{
					name: `twitterImageHeight`,
					title: `Open Graph Image Height`,
					type: `number`,
				},
			],
		},
	],
};

export default metaData;
