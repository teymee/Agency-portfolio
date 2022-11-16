import React from "react";
import styles from "./navbar.module.scss";
import { motion, useScroll } from "framer-motion";

export default function Navbar() {
	const { scrollYProgress } = useScroll();
	return (
		<nav className={styles.nav}>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
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
