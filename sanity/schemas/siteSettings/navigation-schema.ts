const menu = {
	name: `menu`,
	title: `Menu`,
	type: `document`,
	fields: [
		{
			name: `menuTitle`,
			title: `Menu Title`,
			type: `string`,
		},
		{
			name: `links`,
			title: `Links`,
			type: `array`,
			of: [
				{
					type: `object`,
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
							name: `nestedLinks`,
							title: `Nested Links`,
							type: `array`,
							of: [
								{
									type: `object`,
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
									],
								},
							],
						},
					],
				},
			],
		},
	],
	preview: {
		select: {
			title: `menuTitle`,
		},
	},
};

export default menu;
