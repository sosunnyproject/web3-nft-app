import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/style.module.css'

const SlideImage = ({ type, img }) => {

	const squareImage = (
		<div className={styles.slider_image}>
			<img src={img} alt="square slide"></img>
		</div>	
	)

	const circleImage = (
		<div className={styles.slider_image}>
			<img className={styles.circle_mask} src={img} alt="circle slide"></img>	
		</div>	
	)

	return(
		<div>
			{type == "circle" ? circleImage : squareImage}
		</div>
	)
}

const SlideCaption = ({ type }) => {

	const leftCaption = (
		<div className={styles.smallTitle}>multitude</div>	
	)

	const centerCaption = (
		<div className={`${styles.smallTitle} ${styles.center}`}>multitude</div>	
	)

	return(
		<div>
			{type == "circle" ? centerCaption : leftCaption}
		</div>
	)
}

const SlideThumbnail = ({ imageShape, img, caption }) => {
	return (
		<div className={styles.slider_thumbnail}>
			<SlideImage type={imageShape} img={img}/>
			<SlideCaption type={imageShape}>{caption}</SlideCaption>
		</div>
	)
}

const SliderIntro = ({ title, subtitle }) => {
	return(
		<div className={styles.slider_intro}>
			<div className={`${styles.intro_h1} ${styles.largeTitle}`}>{title}</div>
			<div className={`${styles.intro_h2} ${styles.xsDetail}`}>{subtitle}</div>
		</div>
	)
}

export default function SwiperSlider({ children, imageShape, title, subtitle }) {

	return(
		<div className={styles.section_slider}>
			<SliderIntro title={title} subtitle={subtitle}></SliderIntro>
			<div className={styles.swipe_container}>
				<div className={styles.swipe_wrapper}>
					<SlideThumbnail imageShape={imageShape} img="/static/sample1.png" caption="slide1" />
					<SlideThumbnail imageShape={imageShape} img="/static/sample1.png" caption="slide2" />
					<SlideThumbnail imageShape={imageShape} img="/static/sample1.png" caption="slide3" />
					<SlideThumbnail imageShape={imageShape} img="/static/sample1.png" caption="slide4" />
				</div>
			</div>
		</div>
	)
}