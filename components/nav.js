import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/style.module.css'

export default function HeadNav() {
	return (
		<div className={styles.nav}>
			<Link href="/">
				<img src="../static/widtown-logo.svg"></img>
			</Link>
			<div className={styles.headerMenu_wrapper}>
				<div className={styles.headerMenu}>ARTISTS</div>
				<div className={styles.headerMenu}>WORKLOG</div>
				<Link href="/nft">
					<div className={styles.headerMenu}>NFT</div>
				</Link>

			</div>
			<img src="../static/user-logo.svg"></img>
		</div>
	)
}