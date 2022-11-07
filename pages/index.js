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
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
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
