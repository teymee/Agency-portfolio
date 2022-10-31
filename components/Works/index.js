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
		},

		{
			name: "Something",
			description:
				" Lorem aute tempor nisi sit commodo adipisicing qui culpa veniam eiusmod dolore mollitt.",
			img: "/image/second.jpg",
		},

		{
			name: "Something",
			description:
				" Lorem aute tempor nisi sit commodo adipisicing qui culpa veniam eiusmod dolore mollitt.",
			img: "/image/third.jpg",
		},

		{
			name: "Something",
			description:
				" Lorem aute tempor nisi sit commodo adipisicing qui culpa veniam eiusmod dolore mollitt.",
			img: "/image/fifth.jpg",
		},
	];
	return (
		<section className={styles.works}>
			<h1 className="text-center">Works</h1>
			<div className="grid grid-cols-3 gap-4">
				{data.map((item, index) => (
					<Project number={++index} details={item} key={index} />
				))}
			</div>
		</section>
	);
}
