import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./works.module.scss";

import useWindowSize from "../../utils/WindowsSize";

export default function Project({ details, number }) {
	const { width } = useWindowSize();

	return (
		<motion.div className={styles.project}>
			<h2>0{number}</h2>
			<div>
				<h5>{details.title}</h5>
				<p>{details.description}</p>
				<img src={details.image} alt={details.title} />
			</div>
		</motion.div>
	);
}
