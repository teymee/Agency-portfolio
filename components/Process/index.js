import React from "react";
import styles from "./process.module.scss";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";

{
	/* <div
className={styles.plan}
data-tilt
data-tilt-max="40"
data-tilt-speed="1000"
data-tilt-perspective="500"
>
<h3>Plan requirement gathering</h3>
</div> */
}
export default function Process() {
	let data = [
		{
			title: "Plan requirement gathering",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
			delay: 0.2,
		},
		{
			title: "UI/UX",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
			delay: 0.3,
		},
		{
			title: "Prototype",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
			delay: 0.4,
		},
		{
			title: "Development",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
			delay: 0.5,
		},

		{
			title: "Quality Assuarance",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
			delay: 0.6,
		},

		{
			title: "Maintenance",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
			delay: 0.7,
		},
	];

	return (
		<motion.section
			className={`${styles.process} lg:mb-40`}
			initial={{ opacity: 0, y: 400 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.2, duration: 1 }}
			viewport={{ once: true }}
		>
			<h1 className="text-center">Process we follow</h1>
			<div
				className={`${styles.processes} grid grid-cols-1  lg:grid-cols-3 gap-6`}
			>
				{data.map((item, index) => {
					return (
						<>
							<motion.div
								initial={{ y: 400, opacity: 0 }}
								whileInView={{ y: 0, opacity: 1 }}
								transition={{ delay: item.delay, duration: 1.3 }}
								viewport={{ once: true }}
								className={`${styles.list} mt-5`}
								key={index}
							>
								<h1>{++index}</h1>
								<div className={styles.title}>
									<h2> {item.title} </h2>
								</div>
								<p>{item.details}</p>
							</motion.div>
						</>
					);
				})}
			</div>
		</motion.section>
	);
}
