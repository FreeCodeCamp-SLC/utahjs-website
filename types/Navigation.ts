export type Navigation = {
	_id: string;
	_createdAt: Date;
	_updatedAt: Date;
	title: string;
	slug: {
		current: string;
	};
	openInNewTab: boolean;
	order: number;
};
