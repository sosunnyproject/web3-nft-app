import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/style.module.css'

export const SectionTitle = ({ children }) => {
  return(
    <div className={`${styles.section_title} ${styles.midTitle}`}>{children}</div>

  )
}