export default {
	name: 'home',
	title: 'Home',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Hero Background Image',
			name: 'hero_background_image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Hero Image',
			name: 'hero_image',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Hero Text',
			name: 'hero_text',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Hero Subtext 1',
			name: 'hero_subtext_1',
			type: 'string',
		},
		{
			title: 'Hero Subtext 2',
			name: 'hero_subtext_2',
			type: 'string',
		},
		{
			title: 'Hero Button Text 1',
			name: 'hero_button_text_1',
			type: 'string',
		},
		{
			title: 'Hero Button 1 Internal Link',
			name: 'hero_button_1_internal_link',
			type: 'url',
			validation: (rule) => rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
		},
		{
			title: 'Hero Button 1 External Link',
			name: 'hero_button_1_external_link',
			type: 'url',
			validation: (rule) => rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
		},
		{
			title: 'Open Hero Button 1 New Tab',
			name: 'open_hero_button_1_new_tab',
			type: 'boolean',
			description: 'Open Hero Button 1 in a new tab',
		},
		{
			title: 'Hero Button Text 2',
			name: 'hero_button_text_2',
			type: 'string',
		},
		{
			title: 'Hero Button 2 Internal Link',
			name: 'hero_button_2_internal_link',
			type: 'url',
			validation: (rule) => rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
		},
		{
			title: 'Hero Button 2 External Link',
			name: 'hero_button_2_external_link',
			type: 'url',
			validation: (rule) => rule.uri({ scheme: ['http', 'https', 'mailto', 'tel'] }),
		},
		{
			title: 'Open Hero Button 2 New Tab',
			name: 'open_hero_button_2_new_tab',
			type: 'boolean',
			description: 'Open Hero Button 2 in a new tab',
		},
		{
			title: 'Other Meetup Header',
			name: 'otherMeetupHeader',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Angular Anchor Text',
			name: 'angularAnchorText',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Angular Url',
			name: 'angularUrl',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Angular Image',
			name: 'angularImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Lunch Anchor Text',
			name: 'lunchAnchorText',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Lunch Url',
			name: 'lunchUrl',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Lunch Image',
			name: 'lunchImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Node Anchor Text',
			name: 'nodeAnchorText',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Node Url',
			name: 'nodeUrl',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Node Image',
			name: 'nodeImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'React Anchor Text',
			name: 'reactAnchorText',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'React Url',
			name: 'reactUrl',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'React Image',
			name: 'reactImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Ember Anchor Text',
			name: 'emberAnchorText',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Ember Url',
			name: 'emberUrl',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Ember Image',
			name: 'emberImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Ionic Anchor Text',
			name: 'ionicAnchorText',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Ionic Url',
			name: 'ionicUrl',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Ionic Image',
			name: 'ionicImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Vue Anchor Text',
			name: 'vueAnchorText',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Vue Url',
			name: 'vueUrl',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Vue Image',
			name: 'vueImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Downtown Coding Anchor Text',
			name: 'downtownCodingAnchorText',
			type: 'string',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Downtown Coding Url',
			name: 'downtownCodingUrl',
			type: 'url',
			validation: (Rule) => Rule.required(),
		},
		{
			title: 'Downtown Coding Image',
			name: 'downtownCodingImage',
			type: 'image',
			options: {
				hotspot: true,
			},
		},
		{
			title: 'Home Page Footer',
			name: 'homePageFooter',
			type: 'array',
			of: [
				{
					type: 'block',
				},
			],
		},
	],
};
