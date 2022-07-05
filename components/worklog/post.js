import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/style.module.css'

export const Post = () => {

  return(
    <div className={styles.square_post}>
      <img src="/static/sample4.png" alt="square post"></img>
    </div>
  )
}
