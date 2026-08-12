import type { NextPage } from 'next';
import Image from "next/image";
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 901;

const Hero: NextPage = () => {
	const scale = useDesignScale();

	return (
		<div className={styles.heroWrapper} style={{ height: DESIGN_HEIGHT * scale }}>
			<div className={styles.hero} style={{ transform: `scale(${scale})` }}>
				<div className={styles.image}>
					<Image className={styles.generativeFill1} src="/images/hero/generative-fill-1.png" width={1814} height={900} sizes="100vw" alt="" />
					<div className={styles.divabsolute} />
				</div>
				<div className={styles.div}>
					<div className={styles.divinlineFlex}>
						<div className={styles.spanw2} />
						<div className={styles.eotCraneManufacturer}>Clean Room Manufacturer · Chennai · India</div>
					</div>
					<div className={styles.h1text5xl}>
						<b className={styles.engineeredForLoad}>Leading Clean Room Manufacturer in South India</b>
					</div>
					<div className={styles.rectangleParent}>
						<div className={styles.frameChild} />
						<b className={styles.eotCranesBy}>Modular Clean Room Solutions by Mekark</b>
					</div>
					<div className={styles.ptextLgWrapper}>
						<div className={styles.ptextLg}>
							<div className={styles.southIndiasTrustedContainer}>
								<span className={styles.southIndiasTrustedContainer2}>
									<span className={styles.southIndiasTrusted}>{`Mekark is a trusted clean room manufacturer in South India, delivering modular clean rooms, cleanroom panels, HVAC systems, and turnkey cleanroom solutions engineered for pharmaceutical, biotechnology, electronics, and precision manufacturing in south india. ISO 14644 compliant, contamination-controlled, and built for consistent performance.`}</span>
								</span>
							</div>
						</div>
					</div>
					<div className={styles.cta}>
						<div className={styles.component5}>
							<div className={styles.text}>  Get a Free Consultation</div>
							<div className={styles.component4}>
								<Image className={styles.vectorIcon} src="/images/hero/component-4.svg" width={24.9} height={20} sizes="100vw" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
