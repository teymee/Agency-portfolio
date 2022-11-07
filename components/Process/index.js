import React from "react";
import styles from "./process.module.scss";
import VanillaTilt from "vanilla-tilt";

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
		},
		{
			title: "UI/UX",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
		},
		{
			title: "Prototype",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
		},
		{
			title: "Development",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
		},

		{
			title: "Quality Assuarance",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
		},

		{
			title: "Maintenance",
			details:
				" Cillum irure tempor est eiusmod dolor ullamco anim est quis incididunt sint ut elit. Enim laboris anim cillum tempor id.",
		},
	];
	return (
		<section className={styles.process}>
			<h1 className="text-center">Process we follow</h1>
			<div className={`${styles.processes} grid grid-cols-3 gap-4`}>
				{data.map((item, index) => {
					return (
						<>
							<div className={styles.list}>
								<h1>{++index}</h1>
								<div className={styles.title}>
									<h2> {item.title} </h2>
								</div>
								<p>{item.details}</p>
							</div>
						</>
					);
				})}
			</div>
		</section>
	);
}
