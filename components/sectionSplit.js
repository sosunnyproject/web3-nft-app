import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/style.module.css'

export const SectionSplit = () => {

  return(
    <div className={styles.section_split}>
      <div className={styles.half_text}>
        <div className={styles.half_text_wrapper}>
          <div>
            <div className={`${styles.left_top_sub} ${styles.mainBannerCtgTitle}`}>NEW ARTIST</div>
            <div className={`${styles.left_top} ${styles.mainBanner}`}>새로운 해외 아티스트를 먼저 만나보세요</div>
          </div>

          <div>
            <div className={`${styles.right_bottom} ${styles.mainBanner}`}>bbno$</div>
            <div className={`${styles.right_bottom_sub} ${styles.smallDetail}`}>42만 건의 틱톡 콘텐츠가 바이럴되며 엄청난 사랑을 받은 Lalal의 주인공 bbno$</div>
          </div>
        </div>
        </div>
      <div className={styles.half_slider}>
        <img src="/static/sample3.png" alt="split square"></img>
      </div>
    </div>
  )
}
	