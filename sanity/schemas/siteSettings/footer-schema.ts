type UriRuleOptions = {
	allowRelative: boolean;
	scheme: string[];
};
interface RuleType {
	custom: (validator: (input: string) => boolean | string) => RuleType;
	uri: (options: UriRuleOptions) => RuleType;
}

const footer = {
	name: `footer`,
	title: `Footer`,
	type: `document`,
	fields: [
		{
			name: `logo`,
			title: `Logo`,
			type: `image`,
			fields: [
				{
					name: `alt`,
					title: `Alt Text`,
					type: `string`,
				},
			],
		},
		{
			name: `socialMediaLinks`,
			title: `Social Media Links`,
			type: `array`,
			of: [
				{
					type: `object`,
					fields: [
						{
							name: `title`,
							title: `Title`,
							type: `string`,
							description: `Name of the social media platform (e.g., Facebook, Twitter, Instagram).`,
						},
						{
							name: `logo`,
							title: `Logo`,
							type: `image`,
							fields: [
								{
									name: `alt`,
									title: `Alt Text`,
									type: `string`,
								},
							],
						},
						{
							name: `url`,
							title: `URL`,
							type: `url`,
							description: `The URL to the social media page.`,
							validation: (Rule: RuleType) =>
								Rule.uri({
									allowRelative: true,
									scheme: ['http', 'https'],
								}),
						},
						{
							name: `openInNewTab`,
							title: `Open in new tab`,
							type: `boolean`,
							description: `Whether to open the link in a new tab. Default is false.`,
						},
					],
				},
			],
		},
		{
			name: `organizationDetails`,
			title: `Organization Details`,
			type: `array`,
			of: [
				{
					type: `block`,
				},
			],
		},
		{
			name: `copyrightText`,
			title: 'Copyright Text',
			type: `array`,
			of: [
				{
					type: `block`,
				},
			],
		},
	],
};

export default footer;
