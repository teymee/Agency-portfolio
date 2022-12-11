import React from "react";
import styles from "./whoweserve.module.scss";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import useWindowSize from "../../utils/WindowsSize";

export default function Whoweserve() {
	const { width } = useWindowSize();
	return (
		<motion.section
			initial={{ opacity: 0, y: 400 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 1 }}
			viewport={{ once: true }}
			className={`${styles.process} lg:my-40`}
		>
			<h1 className="text-center">Who We Serve</h1>
			<motion.div className={styles.processes}>
				<motion.div className={styles.planDev}>
					<motion.div
						initial={
							width > 600 ? { opacity: 0, x: -400 } : { opacity: 0, x: -100 }
						}
						whileInView={
							width > 600 ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
						}
						transition={
							width > 600
								? { delay: 0.2, duration: 1 }
								: { delay: 0, duration: 0.3 }
						}
						viewport={{ once: true }}
						className={styles.plan}
						data-tilt
						data-tilt-max="40"
						data-tilt-speed="1000"
						data-tilt-perspective="500"
					>
						<h3>Startup Businesses</h3>
					</motion.div>
					<motion.div
						initial={
							width > 600 ? { opacity: 0, x: -400 } : { opacity: 0, x: -100 }
						}
						whileInView={
							width > 600 ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
						}
						transition={
							width > 600
								? { delay: 0.25, duration: 1 }
								: { delay: 0.05, duration: 0.3 }
						}
						viewport={{ once: true }}
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
					initial={
						width > 600 ? { opacity: 0, y: 400 } : { opacity: 0, y: 100 }
					}
					whileInView={{ opacity: 1, y: 0 }}
					transition={
						width > 600
							? { delay: 0.3, duration: 1 }
							: { delay: 0.1, duration: 0.3 }
					}
					viewport={{ once: true }}
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
						initial={
							width > 600 ? { opacity: 0, x: 400 } : { opacity: 0, x: 100 }
						}
						whileInView={
							width > 600 ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
						}
						transition={
							width > 600
								? { delay: 0.35, duration: 1 }
								: { delay: 0.15, duration: 0.3 }
						}
						viewport={{ once: true }}
						data-tilt
						data-tilt-max="40"
						data-tilt-speed="1000"
						data-tilt-perspective="500"
						className={styles.prototype}
					>
						Enterprises
					</motion.div>
					<motion.div
						initial={
							width > 600 ? { opacity: 0, x: 400 } : { opacity: 0, x: 100 }
						}
						whileInView={
							width > 600 ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }
						}
						transition={
							width > 600
								? { delay: 0.4, duration: 1 }
								: { delay: 0.2, duration: 0.3 }
						}
						viewport={{ once: true }}
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
