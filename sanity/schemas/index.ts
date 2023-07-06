import codeOfConduct from './codeOfConduct-schema';
import conference from './conference-schema';
import footer from './siteSettings/footer-schema';
import homePage from './home-schema';
import metaData from './siteSettings/metaData-schema';
import navigation from './siteSettings/navigation-schema';
import featuredSpeakers from './featuredSpeakers-schema';
import sponsor from './sponsor-schema';
import pastSpeakers from './pastSpeakers-schema';

const schemas = [
	codeOfConduct,
	conference,
	featuredSpeakers,
	footer,
	homePage,
	metaData,
	navigation,
	sponsor,
	pastSpeakers,
];

export default schemas;
