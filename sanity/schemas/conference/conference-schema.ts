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
			name: `featuredSpeakers`,
			title: `Featured Speakers`,
			type: `array`,
			of: [featuredSpeakers],
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
			name: `sponsors`,
			title: `Sponsors`,
			type: `array`,
			of: [sponsorSchema],
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
