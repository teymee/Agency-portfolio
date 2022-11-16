import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import styles from "./works.module.scss";

export default function Project({ details, number }) {
	return (
		<motion.div
		initial={{ y: 400, opacity: 0 }}
		whileInView={{ y: 0, opacity: 1 }}
		transition={{ delay: details.delay, duration: 1.3 }} className={styles.project}>
			<h2>0{number}</h2>
			<div>
				<h5>{details.name}</h5>
				<p>{details.description}</p>
				<img src={details.img} alt={details.name} />
			</div>
		</motion.div>
	);
}
