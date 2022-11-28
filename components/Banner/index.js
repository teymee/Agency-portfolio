import React from "react";
import styles from './banner.module.scss'
import BannerSlide from "./BannerSlide";


function Banner() {
	let data = [
		{
		
		badge:"Mobile app dev",
		text:"Mobile App Development ",
		description: "Duis officia enim sit aliqua cillum. Laborum cupidatat labore tempor id labore officia cupidatat consectetur officia incididunt. Magna fugiat in minim nostrud sit labore officia. Elit culpa nostrud proident commodo nisi nisi incididunt adipisicing nulla commodo id ut officia cillum.", 
		image: "svg/web2.svg",
	},

	{
		
		badge:"Web dev",
		text:"Website App Development ",
		description: "Duis officia enim sit aliqua cillum. Laborum cupidatat labore tempor id labore officia cupidatat consectetur officia incididunt. Magna fugiat in minim nostrud sit labore officia. Elit culpa nostrud proident commodo nisi nisi incididunt adipisicing nulla commodo id ut officia cillum.", 
		image: "svg/app1.svg",
	
	}
]
	return (
		<section className={`${styles.banner}`}>
			<BannerSlide data={data} />
		</section>
	);
}

export default Banner;
