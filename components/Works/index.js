import { motion } from "framer-motion";
import React from "react";
import Project from "./Project";
import styles from "./works.module.scss";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "../../firebase/clientApp";
import "firebase/compat/firestore";

export default function Works() {
	const [projects, projectsLoading, projectsError] = useCollection(
		firebase.firestore().collection("projects"),
		{}
	);
	let content 
	
	if (!projectsLoading) {
		
	console.log(projects)
		

	content = projects.docs.map((doc, index) => {
			let data = doc.data();
			return <Project number={++index} details={data} key={index} />;
		});
	}

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
			delay: 0,
		},
	];
	return (
		<motion.section className={styles.works} id="works">
			<h1 className="text-center">Works</h1>
			<div className="grid lg:grid-cols-3  grid-cols-1 gap-4">
				{content}
			</div>
		</motion.section>
	);
}
