import Link from 'next/link'
import styles from '../styles/style.module.css'

function Footer () {
  
  return(
    <div className={`${styles.nav} ${styles.footer}`}>
      <img src="/static/widtown-logo.svg"></img>
      <div className={styles.headerMenu_wrapper}>
        <div className={styles.headerMenu}>COMMUNITY</div>
        <div className={styles.headerMenu}>COMPANY</div>
      </div>	
      <div className={styles.footer_copyright}>midtown, Inc.2022 </div>
    </div>
  )
}

export default Footer;