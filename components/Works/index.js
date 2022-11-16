import { motion } from "framer-motion";
import React from "react";
import Project from "./Project";
import styles from "./works.module.scss";

export default function Works() {
	let data = [
		{
			name: "Something",
			description:
				" Lorem aute tempor nisi sit commodo adipisicing qui culpa veniam eiusmod dolore mollitt.",
			img: "/image/first.jpg",
			delay: 0.1,
		},

		{
			name: "Something",
			description:
				" Lorem aute tempor nisi sit commodo adipisicing qui culpa veniam eiusmod dolore mollitt.",
			img: "/image/second.jpg",
			delay: 0.2,
		},

		{
			name: "Something",
			description:
				" Lorem aute tempor nisi sit commodo adipisicing qui culpa veniam eiusmod dolore mollitt.",
			img: "/image/third.jpg",
			delay: 0.3,
		},

		{
			name: "Something",
			description:
				" Lorem aute tempor nisi sit commodo adipisicing qui culpa veniam eiusmod dolore mollitt.",
			img: "/image/fifth.jpg",
			delay: 0.4,
		},
	];
	return (
		<motion.section
			className={styles.works}
			initial={{ opacity: 0, y: 400 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.1, duration: 1 }}
		>
			<h1 className="text-center">Works</h1>
			<div className="grid lg:grid-cols-3  grid-cols-1 gap-4">
				{data.map((item, index) => (
					<Project number={++index} details={item} key={index} />
				))}
			</div>
		</motion.section>
	);
}
