import React, { useState } from "react";
import styles from "./navbar.module.scss";
import { motion, useScroll } from "framer-motion";

import useWindowSize from "../../utils/WindowsSize";

export default function Navbar() {
	const { scrollYProgress } = useScroll();
	const [toggle, setToggle] = useState(false);
	const { width } = useWindowSize();
	const variant = {
		open: {
			opacity: 1,
			height: "auto",
		},

		closed: {
			opacity: 0,
			height: 0,
		},
	};
	console.log(width);
	return (
		<nav className={styles.nav}>
			<motion.div
				className="progress-bar"
				style={{ scaleX: scrollYProgress }}
			/>
			<div className={styles.container}>
				<div>Logo</div>

				<div>
					{width <= 600 && (
						<motion.ul
							animate={toggle ? "open" : "closed"}
							variants={variant}
							exit={{
								opacity: 0,
								height: 0,
							}}
							transition={{ type: "tween", duration: 0.2 }}
							className={toggle ? styles.mobileNav : ""}
						>
							<li>About</li>
							<li>Services</li>
							<li>Technologies</li>
							<li>Our Works</li>
						</motion.ul>
					)}
					<ul
						className={toggle ? styles.mobileNav : ""}
					>
						<li>About</li>
						<li>Services</li>
						<li>Technologies</li>
						<li>Our Works</li>
					</ul>
				</div>

				<svg
					width="19"
					height="11"
					viewBox="0 0 19 11"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					onClick={() => setToggle((toggle) => !toggle)}
				>
					<path
						d="M16.52 2L10.5433 7.97667C9.8375 8.6825 8.6825 8.6825 7.97667 7.97667L2 2"
						stroke="black"
						stroke-width="4"
						stroke-miterlimit="10"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</div>
		</nav>
	);
}
