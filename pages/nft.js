import HeadNav from '../components/nav';
import { RankColumn } from '../components/ranking/rankColumn';
import { SectionTitle } from '../components/sectionTitle';
import { SeeMore } from '../components/seeMore';
import { VerticalItem } from '../components/verticalItem';
import styles from '../styles/style.module.css'

export default function NftMainPage() {
	return (
		<div>
				<HeadNav />
				<SectionTitle>TOP COLLECTIONS</SectionTitle>
				<div className={styles.section_vertical_cards}>
					<VerticalItem 
						title="한국 알앤비를 상징하는 음악 레이블" 
						subtitle="올해 상반기, 음악계에서 가장 눈에 띄는 지점이 있다면 앨범다운 앨범을 들고 나오며 그 어느 때보다 음악으로 정면 승부를 보고 있는 아티스트가 많다는 점이다." 
						floorprice="0.35" 
						price="0.35" 
						percentage="100"
					></VerticalItem>
          <VerticalItem 
						title="한국 알앤비를 상징하는 음악 레이블" 
						subtitle="올해 상반기, 음악계에서 가장 눈에 띄는 지점이 있다면 앨범다운 앨범을 들고 나오며 그 어느 때보다 음악으로 정면 승부를 보고 있는 아티스트가 많다는 점이다." 
						floorprice="0.35" 
						price="0.35" 
						percentage="100"
					></VerticalItem>
          <VerticalItem 
						title="한국 알앤비를 상징하는 음악 레이블" 
						subtitle="올해 상반기, 음악계에서 가장 눈에 띄는 지점이 있다면 앨범다운 앨범을 들고 나오며 그 어느 때보다 음악으로 정면 승부를 보고 있는 아티스트가 많다는 점이다." 
						floorprice="0.35" 
						price="0.35" 
						percentage="100"
					></VerticalItem>
        </div>

        <div className={styles.section_ranking}>
				  <RankColumn></RankColumn>
					<RankColumn></RankColumn>
				</div>
				<SeeMore />
		</div>
	)
}