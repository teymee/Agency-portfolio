import React from "react";
import styles from "./contact.module.scss";

function Contact() {
	return (
		<section className={styles.contact}>
			<div className={styles.header}>
				<h1 className={styles.first}>Contact us</h1>
				<h1 className={styles.second}>Have a project?</h1>
			</div>

			<div className={styles.form}>
				<form>
					<div className="flex justify-between">
						<input placeholder="Your name" />
						<input placeholder="Your email" />
					</div>

					<input placeholder="Project details" />
				</form>

				<div className={styles.text}>
					<p>
						{" "}
						Officia non nulla tempor nostrud duis esse consectetur. Et cillum
						irure mollit amet id mollit commodo. Et sint eu nulla aliqua nostrud
						veniam
					</p>
				</div>
			</div>
		</section>
	);
}

export default Contact;
