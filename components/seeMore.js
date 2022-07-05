import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/style.module.css'

export const SeeMore = () => {
  return(
    <div className={styles.section_see_more}>
      <div className={styles.button_see_more}>See More</div>	
    </div>
  )
}