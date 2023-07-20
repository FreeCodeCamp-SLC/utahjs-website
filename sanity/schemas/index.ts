import codeOfConductPage from './pages/codeOfConductPage-schema';
import conference from './conference/conference-schema';
import conferencePage from './pages/conferencePage-schema';
import featuredSpeakers from './conference/featuredSpeakers-schema';
import footer from './siteSettings/footer-schema';
import homePage from './pages/homePage-schema';
import metaData from './siteSettings/metaData-schema';
import navigation from './siteSettings/navigation-schema';
import sponsor from './conference/sponsor-schema';

const schemas = [
	codeOfConductPage,
	conference,
	conferencePage,
	featuredSpeakers,
	footer,
	homePage,
	metaData,
	navigation,
	sponsor,
];

export default schemas;
