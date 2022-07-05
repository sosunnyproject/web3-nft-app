import Link from 'next/link'
import styles from '../../styles/style.module.css'
import { RankBox } from './rankBox'

export const RankColumn = () => {
  return(
    <div className={styles.section_rank_column}>
      <RankBox></RankBox>
      <RankBox></RankBox>
      <RankBox></RankBox>
      <RankBox></RankBox>
      <RankBox></RankBox>
    </div>
  )
}