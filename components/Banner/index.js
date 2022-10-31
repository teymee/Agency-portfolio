import React from "react";
import styles from './banner.module.scss'

function Banner() {
	return (
		<section className={styles.banner}>
			<div className={styles.bannerText}>
				<span> Mobile app dev </span>
				<h1>Mobile App Development </h1>
				<p>
					Occaecat ullamco officia ut adipisicing cupidatat elit consectetur
					elit dolore occaecat ut cillum. Aliquip Lorem commodo exercitation
					eiusmod tempor id nulla proident minim do in. Occaecat irure ea veniam
					aute cillum dolore proident sint eiusmod.
				</p>
			</div>

                  <div className={styles.bannerImg}>
                        Image
                  </div>
		</section>
	);
}

export default Banner;
