import Link from 'next/link'
import styles from '../../styles/style.module.css'

export const RankBox = () => {
		return (
			<div className={styles.rank_row}>
				<div className={styles.rank_number}>1</div>
				<div className={styles.rank_thumbnail}>
				  <img 
						className={styles.small_circle_mask} 
						src="/static/sample7.png" 
						alt="ranking thumbnail image"
					>

					</img>
				</div>
				<div className={styles.rank_wrapper_long}>
					<div className={styles.rank_title}>BLACKPINK</div>
					<div className={styles.rank_price}>Floor Price 0.35ETH</div>
				</div>
				<div className={styles.rank_wrapper_short}>
					<div className={styles.rank_rate}>+ 98%</div>
					<div className={styles.rank_unit}>ETH</div>
				</div>
			</div>
		)
	}

