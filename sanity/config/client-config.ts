import envConfig from '../../env-config';

const { SANITY_PROJECT_ID, SANITY_DATASET } = envConfig;

const clientConfig = {
	projectId: SANITY_PROJECT_ID,
	dataset: SANITY_DATASET,
	apiVersion: `2023-06-22`,
	useCdn: false,
};

export default clientConfig;
