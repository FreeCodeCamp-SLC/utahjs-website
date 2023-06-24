const home = {
	name: `home`,
	title: `Home`,
	type: `document`,
	fields: [
		{
			name: `title`,
			title: `Title`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `hero_background_image`,
			title: `Hero Background Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
		},
		{
			name: `hero_image`,
			title: `Hero Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
		},
		{
			name: `hero_text`,
			title: `Hero Text`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `hero_subtext_1`,
			title: `Hero Subtext 1`,
			type: `string`,
		},
		{
			name: `hero_subtext_2`,
			title: `Hero Subtext 2`,
			type: `string`,
		},
		{
			name: `hero_button_text_1`,
			title: `Hero Button Text 1`,
			type: `string`,
		},
		{
			name: `hero_button_1_internal_link`,
			title: `Hero Button 1 Internal Link`,
			type: `url`,
			validation: (rule) => rule.uri({ scheme: [`http`, `https`, `mailto`, `tel`] }),
		},
		{
			name: `hero_button_1_external_link`,
			title: `Hero Button 1 External Link`,
			type: `url`,
			validation: (rule) => rule.uri({ scheme: [`http`, `https`, `mailto`, `tel`] }),
		},
		{
			name: `open_hero_button_1_new_tab`,
			title: `Open Hero Button 1 New Tab`,
			type: `boolean`,
			description: `Open Hero Button 1 in a new tab`,
		},
		{
			name: `hero_button_text_2`,
			title: `Hero Button Text 2`,
			type: `string`,
		},
		{
			name: `hero_button_2_internal_link`,
			title: `Hero Button 2 Internal Link`,
			type: `url`,
			validation: (rule) => rule.uri({ scheme: [`http`, `https`, `mailto`, `tel`] }),
		},
		{
			name: `hero_button_2_external_link`,
			title: `Hero Button 2 External Link`,
			type: `url`,
			validation: (rule) => rule.uri({ scheme: [`http`, `https`, `mailto`, `tel`] }),
		},
		{
			name: `open_hero_button_2_new_tab`,
			title: `Open Hero Button 2 New Tab`,
			type: `boolean`,
			description: `Open Hero Button 2 in a new tab`,
		},
		{
			name: `otherMeetupHeader`,
			title: `Other Meetup Header`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `angularAnchorText`,
			title: `Angular Anchor Text`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `angularUrl`,
			title: `Angular Url`,
			type: `url`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `angularImage`,
			title: `Angular Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
		},
		{
			name: `lunchAnchorText`,
			title: `Lunch Anchor Text`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `lunchUrl`,
			title: `Lunch Url`,
			type: `url`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `lunchImage`,
			title: `Lunch Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
		},
		{
			name: `nodeAnchorText`,
			title: `Node Anchor Text`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `nodeUrl`,
			title: `Node Url`,
			type: `url`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `nodeImage`,
			title: `Node Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
		},
		{
			name: `reactAnchorText`,
			title: `React Anchor Text`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `reactUrl`,
			title: `React Url`,
			type: `url`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `reactImage`,
			title: `React Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
		},
		{
			name: `emberAnchorText`,
			title: `Ember Anchor Text`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `emberUrl`,
			title: `Ember Url`,
			type: `url`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `emberImage`,
			title: `Ember Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
		},
		{
			name: `ionicAnchorText`,
			title: `Ionic Anchor Text`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `ionicUrl`,
			title: `Ionic Url`,
			type: `url`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `ionicImage`,
			title: `Ionic Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
		},
		{
			name: `vueAnchorText`,
			title: `Vue Anchor Text`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `vueUrl`,
			title: `Vue Url`,
			type: `url`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `vueImage`,
			title: `Vue Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
		},
		{
			name: `downtownCodingAnchorText`,
			title: `Downtown Coding Anchor Text`,
			type: `string`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `downtownCodingUrl`,
			title: `Downtown Coding Url`,
			type: `url`,
			validation: (Rule) => Rule.required(),
		},
		{
			name: `downtownCodingImage`,
			title: `Downtown Coding Image`,
			type: `image`,
			options: {
				hotspot: true,
			},
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

export default home;
