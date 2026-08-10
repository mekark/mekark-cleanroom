import type { NextPage } from 'next';
import Image from "next/image";
import styles from './index.module.css';

const CompleteEOTCraneSolutionsEngineeredEndToEnd: NextPage = () => {
	return (
		<div className={styles.completeEotCraneSolutionsWrapper}>
			<div className={styles.completeEotCraneSolutions}>
				<div className={styles.leftStickyOuter}>
					<div className={styles.leftSticky}>
						<b className={styles.completeEotCrane}>Complete EOT Crane Solutions, Engineered End-to-End</b>
						<div className={styles.asALeading}>As a leading EOT crane manufacturer in South India, Mekark designs, fabricates, installs, and commissions electric overhead travelling cranes tailored to your facility&apos;s load capacity, span, and operational demands. </div>
					</div>
				</div>
				<div className={styles.rightScrollable}>
					<div className={styles.frameParentScale}>
						<div className={styles.frameParent}>
							<div className={styles.frameGroup}>
								<Image className={styles.frameChild} src="/images/complete-eot/timeline.svg" width={648.4} height={1041} sizes="100vw" alt="" />
								<div className={styles.frameItem} />
								<div className={styles.frameInner} />
								<div className={styles.rectangleDiv} />
								<div className={styles.frameChild2} />
								<div className={styles.frameChild3} />
							</div>
							<div className={styles.frameContainer}>
								<div className={styles.frameDiv}>
									<div className={styles.overheadSingleGirderEotCraWrapper}>
										<b className={styles.overheadSingleGirder}>Overhead Single Girder EOT Cranes:</b>
									</div>
									<div className={styles.economicalOverheadCraneSystWrapper}>
										<div className={styles.economicalOverheadCrane}>Economical overhead crane system for light to medium duty applications in warehouses and manufacturing units.</div>
									</div>
								</div>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/single-girder.png" width={322.7} height={193.6} sizes="100vw" alt="" />
							</div>
							<div className={styles.rectangleParent}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/underslung.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameParent2}>
									<div className={styles.underslungEotCranesWrapper}>
										<b className={styles.overheadSingleGirder}>Underslung EOT Cranes:</b>
									</div>
									<div className={styles.overheadCraneSystemForFaciWrapper}>
										<div className={styles.overheadCraneSystem}>Overhead crane system for facilities with low headroom.</div>
									</div>
								</div>
							</div>
							<div className={styles.rectangleGroup}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/automation.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<div className={styles.overheadSingleGirderEotCraWrapper}>
										<b className={styles.overheadSingleGirder}>EOT Crane Automation and Upgrades:</b>
									</div>
									<div className={styles.economicalOverheadCraneSystWrapper}>
										<div className={styles.economicalOverheadCrane}>Upgrading existing EOT crane systems with state-of-the-art electricals and VFD controls and other safety features.</div>
									</div>
								</div>
							</div>
							<div className={styles.rectangleContainer}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/double-girder.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameDiv}>
									<div className={styles.overheadSingleGirderEotCraWrapper}>
										<b className={styles.overheadSingleGirder}>Double Girder EOT Cranes:</b>
									</div>
									<div className={styles.economicalOverheadCraneSystWrapper}>
										<div className={styles.economicalOverheadCrane}>Powerful overhead travelling crane systems for heavy-duty applications like steel plants and foundries.</div>
									</div>
								</div>
							</div>
							<div className={styles.rectangleParent2}>
								<Image className={styles.rectangleIcon} src="/images/complete-eot/goliath.png" width={322.7} height={193.6} sizes="100vw" alt="" />
								<div className={styles.frameParent2}>
									<div className={styles.overheadSingleGirderEotCraWrapper}>
										<b className={styles.overheadSingleGirder}>{`Goliath & Semi Goliath Cranes:`}</b>
									</div>
									<div className={styles.yardCranesForHeavyLiftingWrapper}>
										<div className={styles.economicalOverheadCrane}>Yard cranes for heavy lifting applications outdoors.</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.overlayborder}>
				<div className={styles.strongEveryContainer}>
					<span className={styles.strongEveryContainer2}>
						<b className={styles.everyEotCrane}>Every EOT crane is custom-engineered</b>
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

export default CompleteEOTCraneSolutionsEngineeredEndToEnd;
