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
					<Image className={styles.generativeFill1} src="/images/hero/generative-fill-1.png" width={1722} height={901} sizes="100vw" alt="" />
					<div className={styles.divabsolute} />
				</div>
				<div className={styles.div}>
					<div className={styles.divinlineFlex}>
						<div className={styles.spanw2} />
						<div className={styles.eotCraneManufacturer}>EOT Crane Manufacturer · Chennai · India</div>
					</div>
					<div className={styles.h1text5xl}>
						<b className={styles.engineeredForLoad}>Engineered for Load. <br/>Built for Life.</b>
					</div>
					<div className={styles.rectangleParent}>
						<div className={styles.frameChild} />
						<b className={styles.eotCranesBy}>EOT Cranes by Mekark.</b>
					</div>
					<div className={styles.ptextLgWrapper}>
						<div className={styles.ptextLg}>
							<div className={styles.southIndiasTrustedContainer}>
								<span className={styles.southIndiasTrustedContainer2}>
									<span className={styles.southIndiasTrusted}>{`South India's trusted EOT crane manufacturer, delivering electric overhead travelling cranes engineered for heavy-duty industrial material handling across `}</span>
									<b className={styles.southIndiasTrusted}>Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala,</b>
									<span className={styles.southIndiasTrusted}> precision-built, safety-certified, and designed to perform under continuous load.</span>
								</span>
							</div>
						</div>
					</div>
					<div className={styles.cta}>
						<div className={styles.component5}>
							<div className={styles.text}>Get a Free EOT Crane Consultation</div>
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
