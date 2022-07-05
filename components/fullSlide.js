import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/style.module.css'

function FullSlide({ img, title, subtitle }) {
	return(
		<div className={styles.full_slide}>
			<img src={img} alt="wide slide image" width="100%" />	
			<div className={styles.mainSlideText}>
				<div className={styles.mainSlide}>{title}</div>
				<div className={styles.mainSlideDetail}>{subtitle}</div>
			</div>
		</div>
	)
}

export default FullSlide;