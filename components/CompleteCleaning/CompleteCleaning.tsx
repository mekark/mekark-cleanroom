import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';

const CompleteCleanRoomSolutionsEngineeredEndToEnd: NextPage = () => {
	return (
		<div className={styles.completeEotCraneSolutionsWrapper}>
			<div className={styles.completeEotCraneSolutions}>
				<div className={styles.leftStickyOuter}>
					<div className={styles.leftSticky}>
						<b className={styles.completeEotCrane}>Complete Clean Room Solutions, Engineered End-to-End</b>
						<div className={styles.asALeading}>As a leading clean room manufacturer in South India, Mekark designs, fabricates, and installs modular clean rooms tailored to your facility&apos;s cleanliness class, process requirements, and regulatory standards.</div>
					</div>
				</div>
				<div className={styles.rightScrollable}>
					<div className={styles.frameParentScale}>
						<div className={styles.frameParent}>
							<Image className={styles.timelineLine} src="/images/complete-eot/timeline.svg" width={397.4} height={1320.9} sizes="100vw" alt="" unoptimized />
							<div className={styles.frameContainer}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/modular-clean-room-panels.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>Modular Clean Room Panels:</b>
									<div className={styles.economicalOverheadCrane}>Wall and ceiling panels, pre-manufactured and factory finished for rapid clean room construction.</div>
								</div>
							</div>
							<div className={styles.rectangleContainer}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/pharmaceutical-clean-rooms.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>Pharmaceutical Clean Rooms:</b>
									<div className={styles.economicalOverheadCrane}>Compliance with ISO 14644 and GMP for drug manufacturing, formulation, and packaging in clean rooms.</div>
								</div>
							</div>
							<div className={styles.rectangleParent}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/cleanroom-hvac-systems.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>Cleanroom HVAC Systems:</b>
									<div className={styles.economicalOverheadCrane}>Air handling, filtration with HEPA filters, and pressure control systems for contaminant-free environments.</div>
								</div>
							</div>
							<div className={styles.rectangleParent2}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/biotechnology-laboratory-clean-rooms.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>{`Biotechnology & Laboratory Clean Rooms:`}</b>
									<div className={styles.economicalOverheadCrane}>Environmentally controlled facilities designed for research purposes, diagnostic applications, and biotechnological manufacturing.</div>
								</div>
							</div>
							<div className={styles.rectangleGroup}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/electronics-semiconductor-clean-rooms.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>{`Electronics & Semiconductor Clean Rooms:`}</b>
									<div className={styles.economicalOverheadCrane}>Static-controlled clean rooms used for assembly, testing, and packaging of sensitive electronics.</div>
								</div>
							</div>
							<div className={styles.rectangleParent3}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/food-beverage-clean-rooms.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<b className={styles.overheadSingleGirder}>{`Food & Beverage Clean Rooms:`}</b>
									<div className={styles.economicalOverheadCrane}>Clean rooms that are hygienic and easy to clean through modular clean room solutions.</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.overlayborder}>
				<div className={styles.strongEveryContainer}>
					<span className={styles.strongEveryContainer2}>
						<b className={styles.everyEotCrane}>Every clean room is custom-engineered</b>
						<span className={styles.aroundYourLoadRequirements}>
							<span className={styles.span}>{` `}</span>
							<span className={styles.everyEotCrane}>around your cleanliness class, room dimensions, and process workflow — ensuring maximum contamination control and long-term reliability for industries across South India.</span>
						</span>
					</span>
				</div>
			</div>
		</div>
	);
};

export default CompleteCleanRoomSolutionsEngineeredEndToEnd;
