import { PortableTextBlock } from 'sanity';

export type Footer = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	content: PortableTextBlock[];
};
