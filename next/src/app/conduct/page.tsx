import styles from './page.module.scss';

export default function conduct() {
	return (
		<div className={styles.container}>
			<h1>UtahJS Conference Code of Conduct</h1>
			<p>
				All attendees, speakers, sponsors and volunteers at our conference are required to agree with the
				following code of conduct. Organizers will enforce this code throughout the event. We expect cooperation
				from all participants to help ensure a safe environment for everybody.
			</p>
			<h3>Need Help?</h3>
			<p>Please contact one of the following organizers:</p>
			<p>
				Sunny Leggett - <a href="tel:8019495421">801-949-5421</a>Ken Snyder - ken@utahjs.com
			</p>
			<h3>The Quick Version</h3>
			<p>
				Our conference is dedicated to providing a harassment-free conference experience for everyone,
				regardless of gender, gender identity and expression, age, sexual orientation, disability, physical
				appearance, body size, race, ethnicity, religion (or lack thereof), or technology choices. We do not
				tolerate harassment of conference participants in any form. Sexual language and imagery is not
				appropriate for any conference venue, including talks, workshops, parties, Twitter and other online
				media. Conference participants violating these rules may be sanctioned or expelled from the conference
				without a refund at the discretion of the conference organizers.
			</p>
			<h3>The Less Quick Version</h3>
			<p>
				Harassment includes offensive verbal comments related to gender, gender identity and expression, age,
				sexual orientation, disability, physical appearance, body size, race, ethnicity, religion (or lack
				thereof), sexual images in public spaces, deliberate intimidation, stalking, following, harassing
				photography or recording, sustained disruption of talks or other events, inappropriate physical contact,
				and unwelcome sexual attention.
			</p>
			<p>Participants asked to stop any harassing behavior are expected to comply immediately.</p>
			<p>
				Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use
				sexualized images, activities, or other material. Booth staff (including volunteers) should not use
				sexualized clothing/uniforms/costumes or otherwise create a sexualized environment.
			</p>
			<p>
				If a participant engages in harassing behavior, the conference organizers may take any action they deem
				appropriate, including warning the offender or expulsion from the conference with no refund.
			</p>
			<p>
				If you are being harassed, notice that someone else is being harassed, or have any other concerns,
				please contact a member of conference staff immediately. Conference staff can be identified as they'll
				be wearing branded t-shirts and badges.
			</p>
			<p>
				Conference staff will be happy to help participants contact venue security or local law enforcement,
				provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the
				conference.
			</p>
			<p>
				We expect participants to follow these rules at conference and workshop venues and conference-related
				social events.
			</p>
			<p>
				<strong>COVID-19 Considerations</strong>
			</p>
			<p>
				Attendees are encouraged to wear masks but masks are not required at this time. We will follow local
				health guidelines and will update all attendees should any requirements be announced before the day of
				the conference.
			</p>
			<p>
				While masks are optional, treating everyone with respect is not. Attendees agree not to harass other
				attendees for wearing or not wearing a mask. Likewise, you are welcome to keep your distance from any
				attendee, and attendees agree to respect the desires of others to keep their distance.
			</p>
			<p>
				This Code of Conduct is adapted from{` `}
				<a href="http://confcodeofconduct.com/">Conference Code of Conduct</a> and{` `}
				<a href="http://www.reactrally.com/#/conduct">React Rally Code of Conduct</a>.
			</p>
		</div>
	);
}
