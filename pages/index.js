import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>KYC dApp</title>
				<meta name="description" content="kyc dapp ui" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>Welcome. KYC dApp</main>
		</div>
	);
}
