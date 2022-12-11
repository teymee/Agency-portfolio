import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./works.module.scss";

import useWindowSize from "../../utils/WindowsSize";

export default function Project({ details, number }) {
	const { width } = useWindowSize();


	return (
		<motion.div
			initial={{ y: 400, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			viewport={{ once: true }}
			transition={width > 600 ? { delay: details.delay, duration: 1.3 } : { delay: details.delay, duration: 0 }}
			className={styles.project}
		>
			<h2>0{number}</h2>
			<div>
				<h5>{details.name}</h5>
				<p>{details.description}</p>
				<img src={details.img} alt={details.name} />
			</div>
		</motion.div>
	);
}
