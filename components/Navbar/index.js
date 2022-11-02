import React from "react";
import styles from "./navbar.module.scss";

export default function Navbar() {
	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
			<div>Logo</div>
			<div>
				<ul>
					<li>About</li>
					<li>Services</li>
					<li>Technologies</li>
					<li>Our Works</li>
				</ul>
			</div>
			</div>
	
		</nav>
	);
}
