import React from "react";
import styles from "./tech.module.scss";
export default function Technology({ header, stack }) {
	return (
		<div className={styles.block}>
			<div className={styles.inner}>
                  <h3>{header}</h3>
			<ul>
				{stack.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
                  </div>
		</div>
	);
}
