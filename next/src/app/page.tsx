import styles from './page.module.scss';
import Link from 'next/link';
//find real links for <Link>

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Home Page</h1>
			<div className={styles.homeUTJS}>
				<h2>UtahJS</h2>
				<p>JavaScript Engineers of Utah</p>
				<p>Lets learn together.</p>
				<Link href="/conference" className={styles.btn} id={styles.btnConf0}>
					CONFERENCES
				</Link>
				<Link href="/" className={styles.btn} id={styles.btnSlack0}>
					JOIN SLACK
				</Link>
			</div>
			<div className={styles.centerContent}>
				<div className={styles.homeGetInvolved}>
					<h2>Get involved in JavaScript in Utah</h2>
					<div className={styles.getInvolvedSection}>
						<Link href="/conference" className={styles.btn} id={styles.btnConf1}>
							CONFERENCES
						</Link>
						<p>
							We have a conference every year! Our latest conference details are at utahjs.com/conference.
						</p>
					</div>
					<div className={styles.getInvolvedSection}>
						<Link href="/" className={styles.btn} id={styles.btnSlack1}>
							JOIN SLACK
						</Link>
						<p>
							Join our Slack discussions here. Ask the community JavaScript questions and make
							announcements.
						</p>
					</div>
					<div className={styles.getInvolvedSection}>
						<Link href="/" className={styles.btn} id={styles.btnEvent}>
							EVENT EMAIL
						</Link>
						<p>Sign up to receive email about UtahJS conferences and special events here.</p>
					</div>
					<div className={styles.getInvolvedSection}>
						<Link href="/" className={styles.btn} id={styles.btnLehi}>
							LEHI MEETUP
						</Link>
						<p>Join us the first Thursday of every month at Jane in Lehi. Schedule on Meetup.com.</p>
					</div>
					<div className={styles.getInvolvedSection}>
						<Link href="/" className={styles.btn} id={styles.btnSlc}>
							SLC MEETUP
						</Link>
						<p>
							Join us the third Tuesday of every month at O.C. Tanner in Salt Lake City. Schedule on
							Meetup.com.
						</p>
					</div>
					<div className={styles.getInvolvedSection}>
						<Link href="/" className={styles.btn} id={styles.btnOgden}>
							OGDEN MEETUP
						</Link>
						<p>Join us the first Thursday of every month at Startup Ogden. Schedule on Meetup.com.</p>
					</div>
					<div className={styles.getInvolvedSection}>
						<Link href="/" className={styles.btn} id={styles.btnLearners}>
							LEARNERS MEETUP
						</Link>
						<p>
							Presentations immediately proceeding the SLC meetup, as well as monthly study groups.
							Schedule on Meetup.com.
						</p>
					</div>
					<div className={styles.getInvolvedSection}>
						<Link href="/" className={styles.btn} id={styles.btnLinkedin}>
							LINKEDIN
						</Link>
						<p>Get to know us, connect with us and network with us on our LinkedIn Group.</p>
					</div>
					<div className={styles.getInvolvedSection}>
						<Link href="/" className={styles.btn} id={styles.btnTwitter}>
							TWITTER
						</Link>
						<p>Get updates, join the conversation and follow us on Twitter.</p>
					</div>
					<div className={styles.getInvolvedSection}>
						<Link href="/" className={styles.btn} id={styles.btnVideos}>
							VIDEOS
						</Link>
						<p>Watch meetup presentations and conference talks on YouTube.</p>
					</div>
				</div>
				<div className={styles.homeOtherWebTech}>
					<h2>Other Web Technology Meetups in Utah</h2>
					<p>Angular</p>
					<p>Lunch.Js</p>
					<p>Node.js SLC</p>
					<p>ReactJS</p>
					<p>Ember.JS</p>
					<p>Ionic</p>
					<p>Vue.js</p>
					<p>Downtown Coding</p>
				</div>
			</div>
			<p>
				UtahJS is a 501(c)(3) organization and contributions are tax deductible. We are run by a passionate
				group of volunteers. To help out or make a donation or sponsor this site or an event please contact Ken
				Snyder at ken@utahjs.com.
			</p>
		</main>
	);
}
