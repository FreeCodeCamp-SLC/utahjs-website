import styles from './page.module.scss';

export default function Home() {
	return (
		<>
			<h1>Home Page</h1>
			<>
				<h2>UtahJS</h2>
				<p>JavaScript Engineers of Utah</p>
				<p>Lets learn together.</p>
				<button id="conferences">CONFERENCES</button>
				<button id="join-slack">JOIN SLACK</button>
			</>
			<>
				<h2>Get involved in JavaScript in Utah</h2>
				<div id="button-paragraph">
					<button id="conferences">CONFERENCES</button>
					<p>We have a conference every year! Our latest conference details are at utahjs.com/conference.</p>
				</div>
				<div id="button-paragraph">
					<button id="join-slack">JOIN SLACK</button>
					<p>Join our Slack discussions here. Ask the community JavaScript questions and make announcements.</p>
				</div>
				<div id="button-paragraph">

					<button id="event-email">EVENT EMAIL</button>
					<p>Sign up to receive email about UtahJS conferences and special events here.</p>
				</div>
				<div id="button-paragraph">
					<button id="lehi-meetup">LEHI MEETUP</button>
					<p>Join us the first Thursday of every month at Jane in Lehi. Schedule on Meetup.com.</p>
				</div>
				<div id="button-paragraph">
					<button id="slc-meetup">SLC MEETUP</button>
					<p>Join us the third Tuesday of every month at O.C. Tanner in Salt Lake City. Schedule on Meetup.com.</p>
				</div>
				<div id="button-paragraph">
					<button id="ogden-meetup">OGDEN MEETUP</button>
					<p>Join us the first Thursday of every month at Startup Ogden. Schedule on Meetup.com.</p>
				</div>
				<div id="button-paragraph">
					<button id="learners-meetup">LEARNERS MEETUP</button>
					<p>Presentations immediately proceeding the SLC meetup, as well as monthly study groups. Schedule on Meetup.com.</p>
				</div>
				<div id="button-paragraph">
					<button id="linkedin">LINKEDIN</button>
					<p>Get to know us, connect with us and network with us on our LinkedIn Group.</p>
				</div>
				<div id="button-paragraph">
					<button id="twitter">TWITTER</button>
					<p>Get updates, join the conversation and follow us on Twitter.</p>
				</div>
				<div id="button-paragraph">
					<button id="videos">VIDEOS</button>
					<p>Watch meetup presentations and conference talks on YouTube.</p>
				</div>
			</>
			<>
				<h2>Other Web Technology Meetups in Utah</h2>
				<p>Angular</p>
				<p>Lunch.Js</p>
				<p>Node.js SLC</p>
				<p>ReactJS</p>
				<p>Ember.JS</p>
				<p>Ionic</p>
				<p>Vue.js</p>
				<p>Downtown Coding</p>
			</>
			<p>UtahJS is a 501(c)(3) organization and contributions are tax deductible. We are run by a passionate group of volunteers. To help out or make a donation or sponsor this site or an event please contact Ken Snyder at ken@utahjs.com.</p>
		</>
	);
}
