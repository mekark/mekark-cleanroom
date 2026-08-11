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
						<div className={styles.eotCraneManufacturer}>Racking Manufacturer · Chennai · India</div>
					</div>
					<div className={styles.h1text5xl}>
						<b className={styles.engineeredForLoad}>Heavy Duty Industrial Racking Manufacturer in South India</b>
					</div>
					<div className={styles.rectangleParent}>
						<div className={styles.frameChild} />
						<b className={styles.eotCranesBy}>Pallet Racking Systems by Mekark</b>
					</div>
					<div className={styles.ptextLgWrapper}>
						<div className={styles.ptextLg}>
							<div className={styles.southIndiasTrustedContainer}>
								<span className={styles.southIndiasTrustedContainer2}>
									<span className={styles.southIndiasTrusted}>{`Mekark is a trusted heavy-duty racking manufacturer in South India, delivering pallet racking systems, industrial storage racks, and warehouse racking solutions engineered for continuous industrial loads across Chennai, Coimbatore, Bengaluru, Hyderabad, and Kochi precision-built, load-tested, and designed for maximum storage efficiency.`}</span>
								</span>
							</div>
						</div>
					</div>
					<div className={styles.cta}>
						<div className={styles.component5}>
							<div className={styles.text}>Get a Free Racking Consultation</div>
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
