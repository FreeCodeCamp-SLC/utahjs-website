const codeOfConduct = {
	name: `codeOfConduct`,
	title: `Code of Conduct`,
	type: `document`,
	fields: [
		{
			name: `content`,
			title: `Content`,
			type: `array`,
			of: [
				{
					type: `block`,
				},
			],
		},
	],
};

export default codeOfConduct;
