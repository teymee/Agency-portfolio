import React from "react";
import styles from "./whoweserve.module.scss";
import VanillaTilt from "vanilla-tilt";

export default function Whoweserve() {
	return (
		// <section className={styles.whoweserve}>
		// 	<h1 className="text-center">Who We Serve </h1>
		// 	<div className={`grid grid-cols-3 gap-4 ${styles.container}`}>
		// 		<div> Startup Businesses </div>
		// 		<div> Individual  </div>
		// 		<div> Small, medium and large business </div>
		// 		<div> Enterprises </div>
		// 		<div> Agencies </div>
		// 	</div>
		// </section>

		<section className={styles.process}>
			<h1 className="text-center">Who We Serve</h1>
			<div className={styles.processes}>
				<div className={styles.planDev}>
					<div
						className={styles.plan}
						data-tilt
						data-tilt-max="40"
						data-tilt-speed="1000"
						data-tilt-perspective="500"
					>
						<h3>Startup Businesses</h3>
					</div>
					<div
						data-tilt
						data-tilt-max="40"
						data-tilt-speed="1000"
						data-tilt-perspective="500"
						className={styles.dev}
					>
						Individuals
					</div>
				</div>
				<div
					data-tilt
					data-tilt-max="40"
					data-tilt-speed="1000"
					data-tilt-perspective="500"
					className={styles.uiux}
				>
					Small, medium and large business
				</div>
				<div>
					<div
						data-tilt
						data-tilt-max="40"
						data-tilt-speed="1000"
						data-tilt-perspective="500"
						className={styles.prototype}
					>
						Enterprises
					</div>
					<div
						data-tilt
						data-tilt-max="40"
						data-tilt-speed="1000"
						data-tilt-perspective="500"
						className={styles.QA}
					>
						Agencies
					</div>
				</div>
			</div>
		</section>
	);
}
