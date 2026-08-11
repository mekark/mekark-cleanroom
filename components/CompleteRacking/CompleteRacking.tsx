import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';

const CompleteRackingSolutionsEngineeredEndToEnd: NextPage = () => {
	return (
		<div className={styles.completeEotCraneSolutionsWrapper}>
			<div className={styles.completeEotCraneSolutions}>
				<div className={styles.leftStickyOuter}>
					<div className={styles.leftSticky}>
						<b className={styles.completeEotCrane}>Complete Heavy Duty Racking Solutions, Engineered End-to-End</b>
						<div className={styles.asALeading}>As a leading pallet racking system manufacturer in South India, Mekark designs, fabricates, and installs heavy-duty industrial storage racks tailored to your facility&apos;s load capacity, storage density, and material handling requirements.</div>
					</div>
				</div>
				<div className={styles.rightScrollable}>
					<div className={styles.frameParentScale}>
						<div className={styles.frameParent}>
							<Image className={styles.timelineLine} src="/images/complete-eot/timeline.svg" width={397.4} height={1320.9} sizes="100vw" alt="" />
							<div className={styles.frameContainer}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/selective-pallet.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>Selective Pallet Racking:</b>
									<div className={styles.economicalOverheadCrane}>Direct access to every pallet, ideal for high-turnover warehousing.</div>
								</div>
							</div>
							<div className={styles.rectangleContainer}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/double-deep.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>Double Deep Racking:</b>
									<div className={styles.economicalOverheadCrane}>Two-deep pallet storage for higher density per aisle.</div>
								</div>
							</div>
							<div className={styles.rectangleParent}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/drive-in.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>{`Drive-In & Drive-Through Racking:`}</b>
									<div className={styles.economicalOverheadCrane}>High-density bulk storage with fewer aisles.</div>
								</div>
							</div>
							<div className={styles.rectangleParent2}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/cantilever.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>Cantilever Racking:</b>
									<div className={styles.economicalOverheadCrane}>For long, bulky loads like steel bars, pipes, and timber.</div>
								</div>
							</div>
							<div className={styles.rectangleGroup}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/mezzanine.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>{`Mezzanine & Multi-Tier Storage:`}</b>
									<div className={styles.economicalOverheadCrane}>Maximises vertical space for parts and cartons.</div>
								</div>
							</div>
							<div className={styles.rectangleParent3}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/slotted-angle.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>Slotted Angle Racks:</b>
									<div className={styles.economicalOverheadCrane}>Economical, adjustable storage for light-to-medium loads.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.overlayborder}>
				<div className={styles.strongEveryContainer}>
					<span className={styles.strongEveryContainer2}>
						<b className={styles.everyEotCrane}>Every racking system is custom-engineered</b>
						<span className={styles.aroundYourLoadRequirements}>
							<span className={styles.span}>{` `}</span>
							<span className={styles.everyEotCrane}>around your load requirements, bay dimensions, and duty cycle — ensuring maximum efficiency and long-term structural reliability for industries across South India.</span>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default CompleteRackingSolutionsEngineeredEndToEnd;
