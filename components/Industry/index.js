import React from "react";
import styles from "./industry.module.scss";
export default function Industry() {
	let industries = [
		{
			name: "Technology",
			icon: "icon",
		},

    {
			name: "E-commerce",
			icon: "icon",
		},
    {
			name: "Banking",
			icon: "icon",
		},
		{
			name: "Logistics and Shipping",
			icon: "icon",
		},

		{
			name: "Health care",
			icon: "icon",
		},

		{
			name: "Travel",
			icon: "icon",
		},

		{
			name: "Education",
			icon: "icon",
		},

    {
			name: "Manufacturing",
			icon: "icon",
		},
	];
	return (
		<section className={styles.industry}>
			<h1 className="text-center">Industries</h1>
			<div className="grid grid-cols-4 gap-4">
				{industries.map((item, index) => {
					return (
						<div className={`text-center ${styles.industryList} `} key={index}>
							<span>{item.icon}</span>
							<h4>{item.name}</h4>
						</div>
					);
				})}
			</div>
		</section>
	);
}
