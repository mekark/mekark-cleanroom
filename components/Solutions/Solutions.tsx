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
					<span className={styles.whereverYoureLocated}>{`Wherever you're located across South India- Chennai, Coimbatore, Bengaluru, Hyderabad, or Kochi - `}</span>
					<b className={styles.mekarkEngineersEot}>Mekark engineers heavy-duty racking systems matched to your operational needs.</b>
				</div>
				<Image className={styles.grid1Icon} src="/images/solutions/grid-1.png" width={1917.8} height={390.7} sizes="100vw" alt="" />
				<div className={styles.frameParent}>
					<div className={styles.frameGroup}>
						<div className={styles.eotCraneSolutionsAcrossSouWrapper}>
							<b className={styles.eotCraneSolutions}>{`Heavy Duty Racking & Pallet Racking Systems Across South India's Industrial Sectors`}</b>
						</div>
						<div className={styles.ourEotCranesServeDiverseIWrapper}>
							<div className={styles.ourEotCranes}>Our industrial racking systems serve diverse industries across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala:</div>
						</div>
					</div>
					<div className={styles.frameContainer}>
						<div className={styles.rectangleParent}>
							<Image className={styles.frameChild} src="/images/solutions/warehousing.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container}>
								<div className={styles.container2}>
									<b className={styles.steelMetal}>{`Warehousing & Logistics:`}</b>
								</div>
								<div className={styles.container3}>
									<div className={styles.heavyDutyCranesFor}>High-density selective and drive-in pallet racking systems for storage and dispatch.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleGroup}>
							<Image className={styles.frameChild} src="/images/solutions/manufacturing-plants.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container4}>
								<div className={styles.container2}>
									<b className={styles.automotiveManufacturing}>Manufacturing Plants:</b>
								</div>
								<div className={styles.container3}>
									<div className={styles.heavyDutyCranesFor}>Combined pallet racking and mezzanine floor systems for raw material and finished goods.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleContainer}>
							<Image className={styles.frameChild} src="/images/solutions/steel-metal.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container7}>
								<div className={styles.container2}>
									<b className={styles.powerPlants}>{`Steel & Metal Fabrication:`}</b>
								</div>
								<div className={styles.container9}>
									<div className={styles.heavyDutyCranesFor}>Cantilever racking for long, heavy-duty stock.</div>
								</div>
							</div>
						</div>
						<div className={styles.frameDiv}>
							<Image className={styles.frameChild} src="/images/solutions/ecommerce-retail.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container}>
								<div className={styles.container2}>
									<b className={styles.steelMetal}>{`E-commerce & Retail Distribution:`}</b>
								</div>
								<div className={styles.container3Tall}>
									<div className={styles.heavyDutyCranesFor}>High-turnover selective pallet racks for fast order fulfilment.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleParent2}>
							<Image className={styles.frameChild2} src="/images/solutions/cold-storage.png" width={258.7} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container13}>
								<div className={styles.container14}>
									<b className={styles.steelMetal}>{`Cold Storage & FMCG:`}</b>
								</div>
								<div className={styles.container15}>
									<div className={styles.heavyDutyCranesFor}>Drive-in racking optimised for bulk, temperature-controlled storage.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleParent3}>
							<div className={styles.frameChildPlaceholder} />
							<div className={styles.container7}>
								<div className={styles.container2}>
									<b className={styles.powerPlants}>{`Pharmaceuticals & Chemicals:`}</b>
								</div>
								<div className={styles.container9Tall}>
									<div className={styles.heavyDutyCranesFor}>Compliant industrial storage racks for regulated, high-density storage.</div>
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
