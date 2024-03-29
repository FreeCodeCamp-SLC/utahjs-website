const conferencePage = {
	name: `conferencePage`,
	title: `Conference Page`,
	type: `document`,
	fields: [
		{
			name: `metaData`,
			title: `Metadata`,
			type: `reference`,
			to: [{ type: `metaData` }],
		},
		{
			name: `pageTitle`,
			title: `Page Title`,
			type: `string`,
		},
		{
			name: `heroSection`,
			title: `Hero Section`,
			type: `object`,
			fields: [
				{
					name: `backgroundImage`,
					title: `Background Image`,
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
					name: `heroImage`,
					title: `Hero Image`,
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
					name: `heroHeader`,
					title: `Hero Header`,
					type: `string`,
				},
				{
					name: `subtitle`,
					title: `Subtitle`,
					type: `string`,
				},
				{
					name: `primaryButton`,
					title: `Primary Button`,
					type: `object`,
					fields: [
						{
							name: `text`,
							title: `Text`,
							type: `string`,
						},
						{
							name: `url`,
							title: `URL`,
							type: `url`,
							validation: (rule: { uri: (arg0: { allowRelative: boolean; scheme: string[] }) => unknown }) =>
								rule.uri({
									allowRelative: true,
									scheme: [`http`, `https`, `mailto`, `tel`],
								}),
						},
						{
							name: `newTab`,
							title: `Open in new tab`,
							type: `boolean`,
						},
					],
				},
				{
					name: `secondaryButton`,
					title: `Secondary Button`,
					type: `object`,
					fields: [
						{
							name: `text`,
							title: `Text`,
							type: `string`,
						},
						{
							name: `url`,
							title: `URL`,
							type: `url`,
							validation: (rule: { uri: (arg0: { allowRelative: boolean; scheme: string[] }) => unknown }) =>
								rule.uri({
									allowRelative: true,
									scheme: [`http`, `https`, `mailto`, `tel`],
								}),
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
	],
};

export default conferencePage;
