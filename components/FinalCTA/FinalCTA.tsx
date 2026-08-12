import type { NextPage } from 'next';
import Image from "next/image";
import { Phone } from "lucide-react";
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 280;

const FinalCTA: NextPage = () => {
	const scale = useDesignScale();

	return (
		<div className={styles.sectionWrapper} style={{ height: DESIGN_HEIGHT * scale }}>
			<div className={styles.section} style={{ transform: `scale(${scale})` }}>
				<div className={styles.phoneIcon}>
					<Phone size={38.4} color="#8b0c11" />
				</div>
				<div className={styles.readyToEngineerYourIdealEParent}>
					<div className={styles.readyToEngineer}>Ready to Engineer Your Ideal Clean Room Facility?</div>
					<div className={styles.partnerWithMekarkSouth}>
						Partner with Mekark, South India&apos;s trusted clean room manufacturer, for precision-<br />
						engineered, compliance-certified modular clean room solutions built for your industry&apos;s<br />
						toughest contamination-control demands.
					</div>
				</div>
				<div className={styles.cta}>
					<b className={styles.requestAFree}>Request a Free Site Assessment</b>
					<div className={styles.component4}>
						<Image className={styles.vectorIcon} src="/images/footer/arrow.svg" width={25} height={20.1} sizes="100vw" alt="" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default FinalCTA;
