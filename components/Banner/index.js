import React from "react";
import styles from "./banner.module.scss";
import BannerSlide from "./BannerSlide";

function Banner() {
	let data = [
		{
			badge: "Mobile app dev",
			text: "Mobile App Development ",
			description:
				"We offer native android development services for both Android and IOS. We use our innovative minds and creative thoughts to build robust, scalable and maintainable native mobile applications. If you’ve a business and want to create a tailor-made app that suits your needs, then get to us. At Zovack, we’ve professionals that make apps according to your requirements to help your business grow",

			image: "svg/web2.svg",
		},

		{
			badge: "Web dev",
			text: "Website App Development ",
			description:
				"Algorithms, RESTful API, Payments and Integrations, Machine Learning, AI, Data Analysis — our team is hands-on when it comes to building custom software. We use the best tools and frameworks to get everything right, the first time.",
			image: "svg/app1.svg",
		},
	];
	return (
		<section className={`${styles.banner}`}>
			<BannerSlide data={data} />
		</section>
	);
}

export default Banner;
