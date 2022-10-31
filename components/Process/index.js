import React from "react";
import styles from "./process.module.scss";
import VanillaTilt from 'vanilla-tilt';

export default function Process() {
	return (
		<section className={styles.process}>
			<h1 className="text-center">Process we follow</h1>
			<div className={styles.processes}>
				<div className={styles.planDev}>
					<div className={styles.plan} data-tilt data-tilt-max="60" data-tilt-speed="1000" data-tilt-perspective="500">
						<h3>Plan requirement gathering</h3>
						
					</div>
					<div data-tilt data-tilt-max="60" data-tilt-speed="1000" data-tilt-perspective="500"className={styles.dev}>Development</div>
				</div>
				<div  data-tilt data-tilt-max="60" data-tilt-speed="1000" data-tilt-perspective="500" className={styles.uiux}>UI/UX</div>
				<div>
					<div data-tilt data-tilt-max="60" data-tilt-speed="1000" data-tilt-perspective="500" className={styles.prototype}>Prototype</div>
					<div data-tilt data-tilt-max="60" data-tilt-speed="1000" data-tilt-perspective="500" className={styles.QA}>Quality Assurance & Maintenance</div>
				</div>
			</div>
		</section>
	);
}
