import Image from "next/image";
import React from "react";
import styles from "./works.module.scss";

export default function Project({ details, number }) {
	return (
		<div className={styles.project}>
			<h2>0{number}</h2>
			<div>
				<h5>{details.name}</h5>
				<p>{details.description}</p>
				<img src={details.img} alt={details.name} />
			</div>
		</div>
	);
}
