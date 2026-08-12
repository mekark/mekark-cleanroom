import type { NextPage } from 'next';
import Image from "next/image";
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 900;

const Solutions: NextPage = () => {
	const scale = useDesignScale();

	return (
		<div className={styles.solutionsWrapper} style={{ height: DESIGN_HEIGHT * scale }}>
			<div className={styles.solutions} style={{ transform: `scale(${scale})` }}>
				<div className={styles.whereverYoureLocatedContainer}>
					<span className={styles.whereverYoureLocated}>{`Irrespective of where you are located in South India – whether in Chennai, Coimbatore, Bengaluru, Hyderabad, or Kochi – `}</span>
					<b className={styles.mekarkEngineersEot}>Mekark clean room system engineering is specifically customized to suit your requirements.</b>
				</div>
				<Image className={styles.grid1Icon} src="/images/solutions/grid-1.png" width={1917.8} height={390.7} sizes="100vw" alt="" />
				<div className={styles.frameParent}>
					<div className={styles.frameGroup}>
						<div className={styles.eotCraneSolutionsAcrossSouWrapper}>
							<b className={styles.eotCraneSolutions}>{`Clean Room Solutions Across South India's Industrial Sectors`}</b>
						</div>
						<div className={styles.ourEotCranesServeDiverseIWrapper}>
							<div className={styles.ourEotCranes}>Our clean room systems serve diverse industries across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala:</div>
						</div>
					</div>
					<div className={styles.frameContainer}>
						<div className={styles.rectangleParent}>
							<Image className={styles.frameChild} src="/images/solutions/pharmaceuticals-life-sciences.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.card1Text}>
								<div className={styles.container2}>
									<b className={styles.steelMetal}>{`Pharmaceuticals & Life Sciences:`}</b>
								</div>
								<div className={styles.card1Desc}>
									<div className={styles.heavyDutyCranesFor}>GMP-compliant clean rooms for drug manufacturing, formulation, and packaging.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleGroup}>
							<Image className={styles.frameChild} src="/images/solutions/biotechnology-research.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container4}>
								<div className={styles.container2}>
									<b className={styles.automotiveManufacturing}>{`Biotechnology & Research:`}</b>
								</div>
								<div className={styles.card2Desc}>
									<div className={styles.heavyDutyCranesFor}>Controlled laboratory clean rooms for research, diagnostics, and biotech production.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleContainer}>
							<Image className={styles.frameChild} src="/images/solutions/electronics-semiconductors.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.card3Text}>
								<div className={styles.container2}>
									<b className={styles.powerPlants}>{`Electronics & Semiconductors:`}</b>
								</div>
								<div className={styles.card3Desc}>
									<div className={styles.heavyDutyCranesFor}>Static-controlled clean rooms for assembly, testing, and quality control.</div>
								</div>
							</div>
						</div>
						<div className={styles.frameDiv}>
							<Image className={styles.frameChild} src="/images/solutions/food-beverage-processing.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.card1Text}>
								<div className={styles.container2}>
									<b className={styles.steelMetal}>{`Food & Beverage Processing:`}</b>
								</div>
								<div className={styles.card1Desc}>
									<div className={styles.heavyDutyCranesFor}>Hygienic clean room environments for processing, filling, and packaging.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleParent2}>
							<Image className={styles.frameChild2} src="/images/solutions/cosmetics-personal-care.png" width={258.7} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container13}>
								<div className={styles.container14}>
									<b className={styles.steelMetal}>{`Cosmetics & Personal Care:`}</b>
								</div>
								<div className={styles.card5Desc}>
									<div className={styles.heavyDutyCranesFor}>Contamination-controlled clean rooms for formulation and filling lines.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleParent3}>
							<Image className={styles.frameChild} src="/images/solutions/aerospace-precision-manufacturing.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.card3Text}>
								<div className={styles.container2}>
									<b className={styles.powerPlants}>{`Aerospace & Precision Manufacturing:`}</b>
								</div>
								<div className={styles.card6Desc}>
									<div className={styles.heavyDutyCranesFor}>Particle-controlled clean rooms for sensitive component assembly.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Solutions;
