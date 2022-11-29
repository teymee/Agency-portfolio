import { motion } from "framer-motion";
import React from "react";
import styles from "./services.module.scss";

export default function Services() {
	return (
		<motion.section
			className={`${styles.services} lg:my-40`}
			initial={{ opacity: 0, y: 400 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.1, duration: 1 }}
			viewport={{ once: true }}
			id="service"
		>
			<h1>Services</h1>
			<div className={styles.serviceList}>
				<p>Mobile App Development</p>
				<p>Website Development</p>
				<p>Software Architecture </p>
				<p>UI/UX Design</p>
				<p> Project Management</p>
				<p>Testing</p>
				<p>Mobile App Development</p>
				<p>Website Development</p>
				<p>Software Architecture </p>
				<p>UI/UX Design</p>
				<p> Project Management</p>
				<p>Testing</p>
			</div>
		</motion.section>
	);
}
