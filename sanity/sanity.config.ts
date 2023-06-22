import { defineConfig, isDev } from 'sanity';
import { visionTool } from '@sanity/vision';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemas';
import { myStructure } from './deskStructure';
import { getStartedPlugin } from './plugins/sanity-plugin-tutorial';

if (!process.env.SANITY_STUDIO_PROJECT_ID) {
	throw new Error('SANITY_STUDIO_PROJECT_ID is not set');
}

const devOnlyPlugins = [getStartedPlugin()];

export default defineConfig({
	name: 'default',
	title: 'UtahJS-v3',
	projectId: process.env.SANITY_STUDIO_PROJECT_ID,
	dataset: 'production',
	plugins: [
		deskTool({
			structure: myStructure,
		}),
		visionTool(),
		...(isDev ? devOnlyPlugins : []),
	],
	schema: {
		types: schemaTypes,
	},
});
