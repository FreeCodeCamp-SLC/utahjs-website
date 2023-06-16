export default {
	name: 'homePage',
	title: 'Home Page',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
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
		},
		{
			title: 'Hero Button Text 2',
			name: 'hero_button_text_2',
			type: 'string',
		},
	],
};
