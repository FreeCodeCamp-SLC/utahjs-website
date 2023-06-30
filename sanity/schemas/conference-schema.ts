const conference = {
	name: `conference`,
	title: `Conference`,
	type: `document`,
	fields: [
		{
			name: `heroSection`,
			title: `Hero Section`,
			type: `object`,
			fields: [
				{
					name: `heroImage`,
					title: `Hero Image`,
					type: `image`,
				},
				{
					name: `heroImageAltText`,
					title: `Hero Image Alt Text`,
					type: `string`,
				},
				{
					name: `title`,
					title: `Title`,
					type: `string`,
				},
				{
					name: `subtitle`,
					title: `Subtitle`,
					type: `string`,
				},
				{
					name: `heroPrimaryButton`,
					title: `Hero Primary Button`,
					type: `object`,
					fields: [
						{
							name: `text`,
							title: `Text`,
							type: `string`,
						},
						{
							name: `link`,
							title: `Link`,
							type: `url`,
						},
						{
							name: `newTab`,
							title: `Open in new tab`,
							type: `boolean`,
						},
					],
				},
				{
					name: `heroSecondaryButton`,
					title: `Hero Secondary Button`,
					type: `object`,
					fields: [
						{
							name: `text`,
							title: `Text`,
							type: `string`,
						},
						{
							name: `link`,
							title: `Link`,
							type: `url`,
						},
						{
							name: `newTab`,
							title: `Open in new tab`,
							type: `boolean`,
						},
					],
				},
			],
		},
		{
			name: `bodyContent`,
			title: `Body Content`,
			type: `array`,
			of: [
				{
					type: `block`,
				},
			],
		},
	],
};

export default conference;
