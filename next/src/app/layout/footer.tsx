import styles from './footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<p>
				© 2022 UtahJS Built by Alex Puhl, John Bowser, Justin Howard and Steven Saunders as part of FreeCodeCamp
				SLC
			</p>
		</footer>
	);
}
