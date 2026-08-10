import type { NextPage } from 'next';
import Image from "next/image";
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 206.7;

const FinalCTA: NextPage = () => {
	const scale = useDesignScale();

	return (
		<div className={styles.sectionWrapper} style={{ height: DESIGN_HEIGHT * scale }}>
			<div className={styles.section} style={{ transform: `scale(${scale})` }}>
				<div className={styles.readyToEngineerYourIdealEParent}>
					<div className={styles.readyToEngineer}>Ready to Engineer Your Ideal EOT Crane?</div>
					<div className={styles.partnerWithMekarkSouth}>Partner with Mekark, South India&apos;s trusted EOT crane manufacturer, for precision-engineered, safety-certified cranes built for your industry&apos;s toughest lifting demands.</div>
				</div>
				<div className={styles.cta}>
					<b className={styles.requestAFree}>Request a Free Site Assessment</b>
					<div className={styles.component4}>
						<Image className={styles.vectorIcon} src="/images/footer/arrow.svg" width={25} height={20.1} sizes="100vw" alt="" />
					</div>
				</div>
				<Image className={styles.carenCta1} src="/images/footer/caren-cta-1.png" width={352} height={207} sizes="100vw" alt="" />
			</div>
		</div>
	);
};

export default FinalCTA;
