import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { myStructure } from './sanity/deskStructure';
import schemas from './sanity/schemas';

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
	throw new Error(`SANITY_STUDIO_PROJECT_ID is not set`);
}

export default defineConfig({
	title: `UtahJS-v3`,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	dataset: `production`,
	apiVersion: `2023-06-22`,
	basePath: `/admin`,
	plugins: [
		deskTool({
			structure: myStructure,
		}),
		visionTool(),
	],
	schema: {
		types: schemas,
	},
});
