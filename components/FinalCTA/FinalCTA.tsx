import type { NextPage } from 'next';
import Image from "next/image";
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 280;

const FinalCTA: NextPage = () => {
	const scale = useDesignScale();

	return (
		<div className={styles.sectionWrapper} style={{ height: DESIGN_HEIGHT * scale }}>
			<div className={styles.section} style={{ transform: `scale(${scale})` }}>
				<div className={styles.readyToEngineerYourIdealEParent}>
					<div className={styles.readyToEngineer}>Ready to Engineer Your Ideal Heavy Duty Racking System?</div>
					<div className={styles.partnerWithMekarkSouth}>
						Partner with Mekark, South India&apos;s trusted heavy-duty racking manufacturer, for <br />
						precision-engineered, safety-certified pallet racking systems built for your <br />
						industry&apos;s toughest load demands.
					</div>
				</div>
				<div className={styles.cta}>
					<b className={styles.requestAFree}>Request a Free Site Assessment</b>
					<div className={styles.component4}>
						<Image className={styles.vectorIcon} src="/images/footer/arrow.svg" width={25} height={20.1} sizes="100vw" alt="" />
					</div>
				</div>
				<Image className={styles.carenCta1} src="/images/footer/caren-cta-1.png" width={388} height={281} sizes="100vw" alt="" />
			</div>
		</div>
	);
};

export default FinalCTA;
