import { motion } from "framer-motion";
import React, { useRef } from "react";
import styles from "./contact.module.scss";
import emailjs from "@emailjs/browser";

function Contact() {
	const form = useRef();

	const sendEmailHandler = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_SERVICE_KEY,
				process.env.NEXT_PUBLIC_TEMPLATE_KEY,
				form.current,
				process.env.NEXT_PUBLIC_KEY
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		console.log(process.env.NEXT_PUBLIC_KEY);
	};
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
					<div></div> Have a project?
				</h1>
			</div>

			<div className={styles.form}>
				<form ref={form} onSubmit={sendEmailHandler}>
					<div className={`flex justify-between  ${styles.firstSection}`}>
						<input
							placeholder="Your name"
							type="text"
							name="user_name"
							required
						/>
						<input
							placeholder="Your email"
							type="email"
							name="user_email"
							required
						/>
					</div>
					<textarea
						placeholder="Project details"
						name="message"
						required
					></textarea>
					<button type="submit"> Send </button>
				</form>

				<div className={styles.text}>
					<p>
						Our team has been working on complex, short and long term projects,
						always delivering the expected results on time, and on budget. We
						are open-minded and focused on solving product issues, as well as
						building great new features for the end users.
					</p>
				</div>
			</div>
		</motion.section>
	);
}

export default Contact;
