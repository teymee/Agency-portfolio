import React from "react";
import styles from "./process.module.scss";
import VanillaTilt from "vanilla-tilt";
import { motion } from "framer-motion";
import useWindowSize from "../../utils/WindowsSize";

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
	const { width } = useWindowSize();
	let data = [
		{
			title: "Plan requirement gathering",
			details:
				" We follow the first and foremost priority of gathering requirements, resources, and information to begin our project.",
			delay: 0.05,
		},
		{
			title: "UI/UX",
			details:
				" We create catchy and charming designs with the latest tools of designing to make it a best user-friendly experience.",
			delay: 0.1,
		},
		{
			title: "Prototype",
			details:
				" After designing, you will get your prototype, which will be sent ahead for the development process for the product.",
			delay: 0.15,
		},
		{
			title: "Development",
			details:
				"Development of mobile application/web/blockchain started using latest tools and technologies with transparency.",
			delay: 0.2,
		},

		{
			title: "Quality Assuarance",
			details:
				"Hyperlink values quality and provides 100% bug free application with no compromization in it.",

			delay: 0.25,
		},

		{
			title: "Deployment",
			details:
				"After trial and following all processes, your app is ready to launch on the App store or Play Store.",
			delay: 0.3,
		},
	];

	return (
		<motion.section className={`${styles.process} lg:mb-40`} id="process">
			<h1 className="text-center">Process we follow</h1>
			<div
				className={`${styles.processes} grid grid-cols-1  lg:grid-cols-3 gap-6`}
			>
				{data.map((item, index) => {
					return (
						<>
							<motion.div className={`${styles.list} mt-5`} key={index}>
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
