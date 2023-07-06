import { getHomeData } from '@/sanity/sanity-utils';
// import styles from './page.module.scss';

export default async function Home() {
	const homeData = await getHomeData();
	if (!homeData) {
		return (
			<div>
				<h1>Home Page</h1>
				<p>No Data</p>
			</div>
		);
	}
	// const heroSection = homeData.heroSection;
	// const getInvolvedSection = homeData.getInvolvedSection;
	// const otherMeetupsSection = homeData.otherMeetupsSection;
	// const homePageFooter = homeData.homePageFooter;
	return (
		<>
			<h1>Home Page</h1>
			<p>test</p>
		</>
	);
}
