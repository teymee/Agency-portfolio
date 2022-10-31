import React from "react";
import styles from "./process.module.scss";

export default function Process() {
	
	return (
		<section className={styles.process}>
			<h1 className="text-center">Process we follow</h1>
			<div className={styles.processes}>
				<div className={styles.planDev}>
					<div className={styles.plan}>Plan requirement gathering</div>
					<div className={styles.dev}>Development</div>
				</div>
				<div className={styles.uiux}>UI/UX</div>
				<div>
					<div className={styles.prototype}>Prototype</div>
					<div className={styles.QA}>Quality Assurance & Maintenance</div>
				</div>
			</div>
		</section>
	);
}
