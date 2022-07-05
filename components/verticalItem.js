import Link from 'next/link'
import styles from '../styles/style.module.css'

export const VerticalItem = () => {

  return(
    <div className={styles.vertical_card}>
      <img className={styles.vertical_bg_img} src="/static/vertical.jpg"></img>
      <div className={styles.vertical_bg}></div>

      <img className={styles.vertical_image} src="/static/vertical.jpg"></img>
      <div className={styles.vertical_desc}>
        <div className={styles.midTitle}>한국 알앤비를 상징하는 음악 레이블</div>
        <div className={styles.textSmall}>
          올해 상반기, 음악계에서 가장 눈에 띄는 지점이 있다면 앨범다운 앨범을 들고 나오며 그 어느 때보다 음악으로 정면 승부를 보고 있는 아티스트가 많다는 점이다.	
        </div>
      </div>
      <div className={styles.vertical_number}>3</div>
    </div>	
  )
}