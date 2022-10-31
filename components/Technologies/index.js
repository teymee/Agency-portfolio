import React from "react";
import Technology from "./Technology";
import styles from "./tech.module.scss";
export default function Technologies() {
	let data = [
		{
			header: "Native stack",
			stack: ["kotlin", "swift"],
		},
		{
			header: "Frontend stack",
			stack: ["React js", "Vue js", "Angular js", "next js"],
		},

		{
			header: "Cross platform stack",
			stack: ["flutter", "React native"],
		},

		{
			header: "Backend stack",
			stack: ["Node js", "Django", "Laravel", "ASP.net"],
		},
	];
	return (
		<section className={styles.tech}>
			<h1>Technologies</h1>
			<div className="grid grid-cols-4 gap-4">
				{data.map((item, index) => (
					<Technology header={item.header} stack={item.stack} key={index} />
				))}
			</div>
		</section>
	);
}
