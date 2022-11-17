import { motion } from "framer-motion";
import React from "react";
import styles from "./contact.module.scss";

function Contact() {
	return (
		<motion.section
			initial={{ opacity: 0, y: -400 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 1 }}
			viewport={{ once: true }}
			className={styles.contact}
		>
			<div className={styles.header}>
				<h1 className={styles.first}>Contact us</h1>
				<h1 className={styles.second}>
					{" "}
					<div></div> Have a project?
				</h1>
			</div>

			<div className={styles.form}>
				<form>
					<div className={`flex justify-between  ${styles.firstSection}`}>
						<input placeholder="Your name" />
						<input placeholder="Your email" />
					</div>
					<textarea placeholder="Project details"></textarea>
					<button> Send </button>
				</form>

				<div className={styles.text}>
					<p>
						Et cillumirure mollit amet id mollit commodo. Minim sint voluptate
						est cillum laboris laborum amet mollit incididunt culpa est sunt.
						Aute magna ad duis excepteur velit non incididunt aliqua velit nulla
						aute reprehenderit exercitation qui. Ad ut sunt do in irure
						incididunt amet deserunt ipsum velit laborum. Sit ipsum sunt commodo
						sunt ea dolore nostrud. Labore tempor voluptate eiusmod excepteur
						velit amet.
					</p>
				</div>
			</div>
		</motion.section>
	);
}

export default Contact;
