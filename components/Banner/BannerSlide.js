import React, { useState, useEffect } from "react";
import styles from "./banner.module.scss";

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
	
			<div className={styles.bannerSlide}>
				<div className={styles.bannerText}>
					<span> {data[curPosition].badge} </span>
					<h1>{data[curPosition].text} </h1>
					<p>{data[curPosition].description}</p>
				</div>

				<div className={styles.bannerImg}> {data[curPosition].image}</div>
			</div>
		
	);
}
