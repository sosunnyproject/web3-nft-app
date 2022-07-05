import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/style.module.css'
import { Post } from './post'

export const GridRow = () => {

  return(
    <div className={styles.grid_row}>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}