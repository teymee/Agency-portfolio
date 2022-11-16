import React from "react";
import styles from "./whoweserve.module.scss";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

export default function Whoweserve() {
	return (
		<motion.section
			initial={{ opacity: 0, y: 400 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 1 }}
			className={`${styles.process} lg:my-40`}
		>
			<h1 className="text-center">Who We Serve</h1>
			<motion.div className={styles.processes}>
				<motion.div className={styles.planDev}>
					<motion.div
						initial={{ opacity: 0, x: -400 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 1 }}
						className={styles.plan}
						data-tilt
						data-tilt-max="40"
						data-tilt-speed="1000"
						data-tilt-perspective="500"
					>
						<h3>Startup Businesses</h3>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: -400 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.3, duration: 1 }}
						data-tilt
						data-tilt-max="40"
						data-tilt-speed="1000"
						data-tilt-perspective="500"
						className={styles.dev}
					>
						Individuals
					</motion.div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 400 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 1 }}
					data-tilt
					data-tilt-max="40"
					data-tilt-speed="1000"
					data-tilt-perspective="500"
					className={styles.uiux}
				>
					Small, medium and large business
				</motion.div>
				<motion.div>
					<motion.div
						initial={{ opacity: 0, x: 400 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 1 }}
						data-tilt
						data-tilt-max="40"
						data-tilt-speed="1000"
						data-tilt-perspective="500"
						className={styles.prototype}
					>
						Enterprises
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 400 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ delay: 0.2, duration: 1 }}
						data-tilt
						data-tilt-max="40"
						data-tilt-speed="1000"
						data-tilt-perspective="500"
						className={styles.QA}
					>
						Agencies
					</motion.div>
				</motion.div>
			</motion.div>
		</motion.section>
	);
}
