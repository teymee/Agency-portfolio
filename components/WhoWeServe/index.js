import React from "react";
import styles from "./whoweserve.module.scss";

export default function Whoweserve() {
	
	return (
		<section className={styles.whoweserve}>
			<h1 className="text-center">Who We Serve </h1>
			<div className={`grid grid-cols-3 gap-4 ${styles.container}`}>
				<div> Startup Businesses </div>
				<div> Individual  </div>
				<div> Small, medium and large business </div>
				<div> Enterprises </div>
				<div> Agencies </div>
			</div>
		</section>
	);
}
