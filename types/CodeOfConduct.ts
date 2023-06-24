import { PortableTextBlock } from 'sanity';

export type CodeOfConduct = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	content: PortableTextBlock[];
};
