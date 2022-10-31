import React from "react";
import styles from "./industry.module.scss";
import { BiBroadcast } from "react-icons/bi";
import { BiStoreAlt } from "react-icons/bi";
import { BiBook } from "react-icons/bi";
import { CiBank } from "react-icons/ci";
import { CiDeliveryTruck } from "react-icons/ci";
import { CiStethoscope } from "react-icons/ci";
import { CiPlane } from "react-icons/ci";
import { CiBeaker1 } from "react-icons/ci";
export default function Industry() {
	let industries = [
		{
			name: "Technology",
			icon: <BiBroadcast/>,
		},

    {
			name: "E-commerce",
			icon:<BiStoreAlt/>,
		},
    {
			name: "Banking",
			icon: <CiBank/>,
		},
		{
			name: "Logistics and Shipping",
			icon: <CiDeliveryTruck/>,
		},

		{
			name: "Health care",
			icon: <CiStethoscope/>,
		},

		{
			name: "Travel",
			icon: <CiPlane/>,
		},

		{
			name: "Education",
			icon: <BiBook/>,
		},

    {
			name: "Manufacturing",
			icon: <CiBeaker1/>,
		},
	];
	return (
		<section className={styles.industry}>
			<h1 className="text-center">Industries</h1>
			<div className="grid grid-cols-4 gap-4">
				{industries.map((item, index) => {
					return (
						<div className={`text-center ${styles.industryList} `} key={index}>
							<div>{item.icon}</div>
							<h4>{item.name}</h4>
						</div>
					);
				})}
			</div>
		</section>
	);
}
