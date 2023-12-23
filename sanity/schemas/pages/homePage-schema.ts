type UriRuleOptions = {
	allowRelative: boolean;
	scheme: string[];
};

type Rule = {
	uri: (options: UriRuleOptions) => void; // Replace void with the actual return type if it's not void.
};

const homePage = {
	name: `homePage`,
	title: `Home Page`,
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
					name: `header`,
					title: `Header`,
					type: `string`,
				},
				{
					name: `subtext1`,
					title: `Subtext 1`,
					type: `string`,
				},
				{
					name: `subtext2`,
					title: `Subtext 2`,
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
							title: `Url`,
							type: `url`,
							validation: (rule: Rule) =>
								rule.uri({
									allowRelative: true,
									scheme: [`http`, `https`, `mailto`, `tel`],
								}),
						},
						{
							name: `newTab`,
							title: `New Tab`,
							type: `boolean`,
							description: `Open Hero Primary Button in a new tab`,
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
							title: `Url`,
							type: `url`,
							validation: (rule: Rule) =>
								rule.uri({
									allowRelative: true,
									scheme: [`http`, `https`, `mailto`, `tel`],
								}),
						},
						{
							name: `newTab`,
							title: `New Tab`,
							type: `boolean`,
							description: `Open Hero Secondary Button in a new tab`,
						},
					],
				},
			],
		},
		{
			name: `getInvolvedSection`,
			title: `Get Involved Section`,
			type: `object`,
			fields: [
				{
					name: `header`,
					title: `Header`,
					type: `string`,
				},
				{
					name: `links`,
					title: `Links`,
					type: `array`,
					of: [
						{
							name: `singleLink`,
							title: `Single Link`,
							type: `object`,
							fields: [
								{
									name: `text`,
									title: `Text`,
									type: `string`,
								},
								{
									name: `url`,
									title: `Url`,
									type: `url`,
									validation: (rule: Rule) =>
										rule.uri({
											allowRelative: true,
											scheme: [`http`, `https`, `mailto`, `tel`],
										}),
								},
								{
									name: `newTab`,
									title: `New Tab`,
									type: `boolean`,
								},
								{
									name: `description`,
									title: `Description`,
									type: `array`,
									of: [
										{
											type: `block`,
										},
									],
								},
							],
						},
					],
				},
			],
		},
		{
			name: `otherMeetupsSection`,
			title: `Other Meetups Section`,
			type: `object`,
			fields: [
				{
					name: `header`,
					title: `Header`,
					type: `string`,
				},
				{
					name: `otherMeetups`,
					title: `Other Meetups`,
					type: `array`,
					of: [
						{
							name: `singleMeetup`,
							title: `Single Meetup`,
							type: `object`,
							fields: [
								{
									name: `name`,
									title: `Name`,
									type: `string`,
								},
								{
									name: `url`,
									title: `Url`,
									type: `url`,
									validation: (rule: Rule) =>
										rule.uri({
											allowRelative: true,
											scheme: [`http`, `https`, `mailto`, `tel`],
										}),
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
							],
						},
					],
				},
			],
		},
		{
			name: `homePageFooter`,
			title: `Home Page Footer`,
			type: `array`,
			of: [
				{
					type: `block`,
				},
			],
		},
	],
};

export default homePage;
