interface EnvConfig {
	SANITY_PROJECT_ID: string;
	SANITY_DATASET: string;
}

const envConfig: EnvConfig = {
	SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || `qn5czer2`,
	SANITY_DATASET: process.env.NEXT_PUBLIC_SANITY_DATASET || `dev`,
};

export default envConfig;
