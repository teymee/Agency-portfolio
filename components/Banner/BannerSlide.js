import React, { useState, useEffect } from "react";
import styles from "./banner.module.scss";
import { motion, AnimatePresence } from "framer-motion";

export default function BannerSlide({ data, position }) {
	const [curPosition, setCurPosition] = useState(0);

	const autoSlide = () => {
		console.log(curPosition);
		console.log(data.length);
		if (curPosition >= data.length - 1) {
			setCurPosition(0);
		} else {
			setCurPosition((curPosition) => curPosition + 1);
		}
	};
	useEffect(() => {
		const interval = setInterval(() => {
			autoSlide();
			console.log(curPosition);
		}, 4000);

		return () => {
			clearInterval(interval);
		};
	}, [curPosition]);

	return (
		<AnimatePresence>
			<motion.div
				key={curPosition}
				initial={{ x: 100, opacity: 0 }}
				animate={{ x: 0, opacity: 1 }}
				transition={{ duration: 2, type: "ease" }}
				exit={{ x: -500, opacity: 0 }}
				className={`${styles.bannerSlide}`}
			>
				<motion.div className={styles.bannerText}>
					<span> {data[curPosition].badge} </span>
					<h1>{data[curPosition].text} </h1>
					<p>{data[curPosition].description}</p>
				</motion.div>

				<div className={styles.bannerImg}> {data[curPosition].image}</div>
			</motion.div>
		</AnimatePresence>
	);
}
