import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { myStructure } from './sanity/deskStructure';
import envConfig from './env-config';
import schemas from './sanity/schemas';

const { SANITY_PROJECT_ID, SANITY_DATASET } = envConfig;

export default defineConfig({
	title: `UtahJS-v3`,
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
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
