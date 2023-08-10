'use client';

import { useEffect, useState } from 'react';
import { getConferenceScheduleData } from '@/sanity/sanityFetch-utils';
import { ConferenceScheduleUrl } from '@/types/SanityFetches';
import styles from './schedule.module.scss';

export default function Schedule() {
	const [schedule, setSchedule] = useState<ConferenceScheduleUrl | null>(null);

	useEffect(() => {
		getConferenceScheduleData().then((data) => {
			setSchedule(data);
			document.title = `UtahJS | Schedule`;
		});

		// load sessionize embed
		const script = document.createElement(`script`);
		script.src = `https://sessionize.com/api/v2/uce3x9i3/view/GridSmart`;
		script.onload = () => window.sessionize.loader();

		// sessionize embed uses document.write, so we need to override it with
		// code that will insert CSS and html into the right place
		document.write = (html) => {
			const div = document.createElement(`div`);
			div.innerHTML = html;
			const embedWrapper = document.querySelector(`#EmbedWrapper`);
			if (embedWrapper) {
				embedWrapper.appendChild(div);
			}
		};
		document.body.appendChild(script);
	}, []);

	if (!schedule) {
		return (
			<div className={styles.container}>
				<h1>Conference Schedule</h1>
				<p>No Data</p>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<h1>Conference Schedule: Friday, September 15, 2023</h1>
			<div className={styles.call_to_action}>
				<a href="https://ti.to/utahjs/2023" target="_blank" rel="noopener noreferrer">
					Buy Tickets
				</a>
				<a href="https://bit.ly/3NxkDmr" target="_blank" rel="noopener noreferrer">
					Sponsor Us
				</a>
				<a href="https://goo.gl/maps/jami8aBUUy3qVhqKA" target="_blank" rel="noopener noreferrer">
					View Map
				</a>
			</div>
			<div id="EmbedWrapper" />
			<p className={styles.disclaimer}>Schedule is subject to change</p>
		</div>
	);
}
