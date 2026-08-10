import type { NextPage } from 'next';
import Image from "next/image";
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 840;

const Solutions: NextPage = () => {
	const scale = useDesignScale();

	return (
		<div className={styles.solutionsWrapper} style={{ height: DESIGN_HEIGHT * scale }}>
			<div className={styles.solutions} style={{ transform: `scale(${scale})` }}>
				<div className={styles.whereverYoureLocatedContainer}>
					<span className={styles.whereverYoureLocated}>{`Wherever you're located across South India, `}</span>
					<b className={styles.mekarkEngineersEot}>Mekark engineers EOT cranes matched to your operational needs.</b>
				</div>
				<Image className={styles.grid1Icon} src="/images/solutions/grid-1.png" width={1917.8} height={390.7} sizes="100vw" alt="" />
				<div className={styles.frameParent}>
					<div className={styles.frameGroup}>
						<div className={styles.eotCraneSolutionsAcrossSouWrapper}>
							<b className={styles.eotCraneSolutions}>EOT Crane Solutions Across South India&apos;s Industrial Sectors</b>
						</div>
						<div className={styles.ourEotCranesServeDiverseIWrapper}>
							<div className={styles.ourEotCranes}>Our EOT cranes serve diverse industries across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala:</div>
						</div>
					</div>
					<div className={styles.frameContainer}>
						<div className={styles.rectangleParent}>
							<Image className={styles.frameChild} src="/images/solutions/steel-metal.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container}>
								<div className={styles.container2}>
									<b className={styles.steelMetal}>{`Steel & Metal Fabrication:`}</b>
								</div>
								<div className={styles.container3}>
									<div className={styles.heavyDutyCranesFor}>Heavy-duty cranes for continuous, high-load lifting.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleGroup}>
							<Image className={styles.frameChild} src="/images/solutions/automotive.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container4}>
								<div className={styles.container2}>
									<b className={styles.automotiveManufacturing}>Automotive Manufacturing:</b>
								</div>
								<div className={styles.container3}>
									<div className={styles.heavyDutyCranesFor}>Precision cranes for assembly line efficiency.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleContainer}>
							<Image className={styles.frameChild} src="/images/solutions/power-plants.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container7}>
								<div className={styles.container2}>
									<b className={styles.powerPlants}>{`Power Plants & Energy:`}</b>
								</div>
								<div className={styles.container9}>
									<div className={styles.heavyDutyCranesFor}>Robust systems for turbine halls and heavy equipment.</div>
								</div>
							</div>
						</div>
						<div className={styles.frameDiv}>
							<Image className={styles.frameChild} src="/images/solutions/warehousing.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container}>
								<div className={styles.container2}>
									<b className={styles.steelMetal}>{`Warehousing & Logistics:`}</b>
								</div>
								<div className={styles.container3}>
									<div className={styles.heavyDutyCranesFor}>Single-girder cranes for storage and dispatch.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleParent2}>
							<Image className={styles.frameChild2} src="/images/solutions/cement.png" width={258.7} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container13}>
								<div className={styles.container14}>
									<b className={styles.steelMetal}>{`Cement & Heavy Industries:`}</b>
								</div>
								<div className={styles.container15}>
									<div className={styles.heavyDutyCranesFor}>High-capacity cranes for harsh operating environments.</div>
								</div>
							</div>
						</div>
						<div className={styles.rectangleParent3}>
							<Image className={styles.frameChild} src="/images/solutions/shipbuilding.png" width={257.3} height={257.3} sizes="100vw" alt="" />
							<div className={styles.container7}>
								<div className={styles.container2}>
									<b className={styles.powerPlants}>{`Shipbuilding & Ports:`}</b>
								</div>
								<div className={styles.container9}>
									<div className={styles.heavyDutyCranesFor}>Goliath cranes for outdoor, heavy-load handling.</div>
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
