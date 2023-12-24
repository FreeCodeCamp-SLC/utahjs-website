import featuredSpeakers from './featuredSpeakers-schema';
import sponsorSchema from './sponsor-schema';

const conference = {
	name: `conference`,
	title: `Conference`,
	type: `document`,
	fields: [
		{
			name: `name`,
			title: `Name`,
			type: `string`,
		},
		{
			name: `date`,
			title: `Date`,
			type: `datetime`,
		},
		{
			name: `location`,
			title: `Location`,
			type: `string`,
		},

		{
			name: `speakersUrl`,
			title: `Speakers URL`,
			type: `url`,
			validation: (rule: { uri: (arg0: { allowRelative: boolean; scheme: string[] }) => any }) =>
				rule.uri({
					allowRelative: true,
					scheme: [`http`, `https`, `mailto`, `tel`],
				}),
		},
		{
			name: `scheduleUrl`,
			title: `Schedule URL`,
			type: `url`,
			validation: (rule: { uri: (arg0: { allowRelative: boolean; scheme: string[] }) => any }) =>
				rule.uri({
					allowRelative: true,
					scheme: [`http`, `https`, `mailto`, `tel`],
				}),
		},
		{
			name: `featuredSpeakersSection`,
			title: `Featured Speakers Section`,
			type: `object`,
			fields: [
				{
					name: `featuredSpeakersSectionTitle`,
					title: `Featured Speakers Section Title`,
					type: `string`,
				},
				{
					name: `featuredSpeakers`,
					title: `Featured Speakers`,
					type: `array`,
					of: [featuredSpeakers],
				},
			],
		},
		{
			name: `sponsorSection`,
			title: `Sponsor Section`,
			type: `object`,
			fields: [
				{
					name: `sponsorSectionTitle`,
					title: `Sponsor Section Title`,
					type: `string`,
				},
				{
					name: `sponsors`,
					title: `Sponsors`,
					type: `array`,
					of: [sponsorSchema],
				},
			],
		},
		{
			name: `conferenceMessage`,
			title: `Conference Message`,
			type: `array`,
			of: [
				{
					type: `block`,
				},
			],
		},
		{
			name: `afterConferenceMessage`,
			title: `After Conference Message`,
			type: `array`,
			of: [
				{
					type: `block`,
				},
			],
		},
		{
			name: `newYearMessage`,
			title: `New Year Message`,
			type: `array`,
			of: [
				{
					type: `block`,
				},
			],
		},
	],
	preview: {
		select: {
			title: `name`,
			date: `date`,
		},
		prepare(selection: { title: any; date: any }) {
			const { title, date } = selection;
			return {
				title: title,
				subtitle: date ? new Date(date).getFullYear() : ``,
			};
		},
	},
	orderings: [
		{
			name: `dateDesc`,
			title: `Date new->old`,
			by: [
				{
					field: `date`,
					direction: `desc`,
				},
			],
		},
	],
};

export default conference;
