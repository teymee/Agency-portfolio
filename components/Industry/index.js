import React, { useRef, useEffect, useLayoutEffect } from "react";
import styles from "./industry.module.scss";
import { BiBroadcast } from "react-icons/bi";
import { BiStoreAlt } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { CiBank } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiStethoscope } from "react-icons/ci";
import { CiPlane } from "react-icons/ci";
import { CiBeaker1 } from "react-icons/ci";
import { motion, useInView } from "framer-motion";
import useWindowSize from "../../utils/WindowsSize";

export default function Industry() {
	const ref = useRef();
	const isInView = useInView(ref, { margin: "-200px 0px 0px 0px" });
	const { width } = useWindowSize();

	let industries = [
		{
			name: "Technology",
			icon: <BiBroadcast />,
			delay: 0.1,
		},

		{
			name: "E-commerce",
			icon: <BiStoreAlt />,
			delay: 0.2,
		},
		{
			name: "Banking",
			icon: <CiBank />,
			delay: 0.3,
		},
		{
			name: "Logistics and Shipping",
			icon: <CiDeliveryTruck />,
			delay: 0.4,
		},

		{
			name: "Health care",
			icon: <CiStethoscope />,
			delay: 0.5,
		},

		{
			name: "Travel",
			icon: <CiPlane />,
			delay: 0.6,
		},

		{
			name: "Education",
			icon: <BiBook />,
			delay: 0.7,
		},

		{
			name: "Manufacturing",
			icon: <CiBeaker1 />,
			delay: 0.8,
		},
	];
	// useEffect(() => {
	// 	console.log("Element is in view: ", isInView);
	// }, [isInView]);
	return (
		<motion.section className={styles.industry}>
			<h1 id="Industry" className="text-center">
				Industries
			</h1>
			<div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
				{industries.map((item, index) => {
					return (
						<motion.div
							className={`text-center ${styles.industryList} `}
							key={index}
						>
							<div>{item.icon}</div>
							<h4>{item.name}</h4>
						</motion.div>
					);
				})}
			</div>
		</motion.section>
	);
}
