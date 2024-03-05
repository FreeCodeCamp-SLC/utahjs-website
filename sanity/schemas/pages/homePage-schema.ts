type UriRuleOptions = {
	allowRelative: boolean;
	scheme: string[];
};

interface RuleType {
	custom: (validator: (input: string) => boolean | string) => RuleType;
	uri: (options: UriRuleOptions) => RuleType;
}

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
							validation: (rule: RuleType) =>
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
							validation: (rule: RuleType) =>
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
			name: `videoSection`,
			title: `Video Section`,
			type: `object`,
			fields: [
				{
					name: `sectionTitle`,
					title: `Section Title`,
					type: `string`,
				},
				{
					name: `paragraph`,
					title: `Paragraph`,
					type: `array`, // Use an array of blocks to allow rich text
					of: [{ type: `block` }],
				},
				{
					name: `youtubeShareLink`,
					title: `YouTube Share Link`,
					type: `url`,
					description: `Please provide the YouTube video link in the embed format, e.g., "https://www.youtube.com/embed/K1lB9AHUdY4".`,
					validation: (Rule: RuleType) =>
						Rule.custom((url) => {
							// Ensure the url matches exactly the required structure, with no extra segments
							const pattern = /^https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+$/;
							return pattern.test(url)
								? true
								: 'URL must be in the exact format: https://www.youtube.com/embed/[videoId]';
						}).uri({
							allowRelative: false,
							scheme: [`http`, `https`],
						}),
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
									validation: (rule: RuleType) =>
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
									validation: (rule: RuleType) =>
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
	],
};

export default homePage;
