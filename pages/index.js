import Head from "next/head";
import Image from "next/image";
import Banner from "../components/Banner";
import Contact from "../components/Contact";
import Industry from "../components/Industry";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Services from "../components/Services";
import Technologies from "../components/Technologies";
import Whoweserve from "../components/WhoWeServe";
import Works from "../components/Works";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Zovack — Your best Web Design, Website & App Development Agency
				</title>
				<meta
					name="description"
					content="We work on complex, short & long term projects,
						always delivering the expected results on time. We
						are open-minded and focused on solving product issues, as well as
						building great new features for the end users."
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				<meta charset="UTF-8"></meta>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<div className={styles.container}>
				<Banner />
				<Industry />
				<Process />
				<Services />
				<Works />

				<Whoweserve />

				<Contact />
			</div>
		</>
	);
}
