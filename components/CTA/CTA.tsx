import type { NextPage } from 'next';
import Image from "next/image";
import { DraftingCompass, Gauge, Factory, Wrench, ShieldCheck, ClockCheck } from "lucide-react";
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 1324;

const CTA: NextPage = () => {
	const scale = useDesignScale();

	return (
		<div className={styles.ctaWrapper} style={{ height: DESIGN_HEIGHT * scale }}>
			<div className={styles.cta} style={{ transform: `scale(${scale})` }}>
				<div className={styles.section}>
					<div className={styles.ourEngineeringTeamCanAssesParent}>
						<div className={styles.ourEngineeringTeam}>Our engineering team can assess your load capacity,<br />span, and operational requirements to recommend the right overhead crane solution at no cost to you.</div>
						<div className={styles.notSureWhichContainer}>
							<span className={styles.notSureWhichContainer2}>
								<span className={styles.notSureWhich}>{`Not Sure Which EOT Crane `}</span>
								<span className={styles.fitsYourFacility}>Fits Your Facility?</span>
							</span>
						</div>
					</div>
					<div className={styles.sectionChild} />
					<div className={styles.cta2}>
						<b className={styles.talkToOur}>Talk to Our Crane Engineers</b>
						<div className={styles.component4}>
							<Image className={styles.vectorIcon} src="/images/cta/arrow.svg" width={31.8} height={25.3} sizes="100vw" alt="" />
						</div>
					</div>
					<Image className={styles.sectionItem} src="/images/cta/grid-circle.svg" width={180} height={180} sizes="100vw" alt="" />
					<Image className={styles.sectionInner} src="/images/cta/glow-blob.svg" width={317} height={213} sizes="100vw" alt="" />
					<Image className={styles.eotCta1} src="/images/cta/eot-cta-1.png" width={443} height={292} sizes="100vw" alt="" />
				</div>
				<div className={styles.frameParent}>
					<div className={styles.component22Parent}>
						<div className={styles.component22}>
							<div className={styles.frameGroup}>
								<div className={styles.turnkeyWarehouseConstructionWrapper}>
									<b className={styles.turnkeyWarehouseConstruction}>Custom-Engineered Design</b>
								</div>
								<div className={styles.singlePointResponsibilityFrWrapper}>
									<div className={styles.singlePointResponsibilityFr}>Each EOT crane is tailor-made for your specific load capacity, span and duty cycle.</div>
								</div>
							</div>
							<div className={styles.divsvcIcon}>
								<DraftingCompass size={25.9} color="#c4161c" />
							</div>
						</div>
						<div className={styles.component26}>
							<div className={styles.frameContainer}>
								<div className={styles.higherLoadEfficiencyWrapper}>
									<b className={styles.higherLoadEfficiency}>Higher Load Efficiency</b>
								</div>
								<div className={styles.theOptimisedGirderDesignEnWrapper}>
									<div className={styles.theOptimisedGirder}>The optimised girder design ensures<br />you get more lifting power from a<br />lighter crane design.</div>
								</div>
							</div>
							<div className={styles.divsvcIcon}>
								<Gauge size={25.9} color="#c4161c" />
							</div>
						</div>
						<div className={styles.component23}>
							<div className={styles.frameGroup}>
								<div className={styles.precisionFabricationWrapper}>
									<b className={styles.precisionFabrication}>Precision Fabrication</b>
								</div>
								<div className={styles.cncFabricatedPrecisionWeldWrapper}>
									<div className={styles.singlePointResponsibilityFr}>CNC-fabricated, precision-welded steel structures ensure consistent tolerances and structural integrity, eliminating weak points common in manually fabricated cranes.</div>
								</div>
							</div>
							<div className={styles.divsvcIcon}>
								<Factory size={25.9} color="#c4161c" />
							</div>
						</div>
						<div className={styles.component27}>
							<div className={styles.frameGroup}>
								<div className={styles.maintenanceAndAfterSalesSuWrapper}>
									<b className={styles.maintenanceAndAfterSales}>Maintenance and After-Sales Support</b>
								</div>
								<div className={styles.weProvideMaintenanceAndAmcWrapper}>
									<div className={styles.weProvideMaintenance}>We provide maintenance and AMC support across South India to ensure your EOT crane works optimally even years after installation.</div>
								</div>
							</div>
							<div className={styles.divsvcIcon}>
								<Wrench size={25.9} color="#c4161c" />
							</div>
						</div>
						<div className={styles.component25}>
							<div className={styles.frameGroup}>
								<div className={styles.safetyCompliantWrapper}>
									<b className={styles.safetyCompliant}>Safety Compliant</b>
								</div>
								<div className={styles.singlePointResponsibilityFrWrapper}>
									<div className={styles.singlePointResponsibilityFr}>Our EOT cranes meet IS 3177 and IS 807 specifications in terms of certification, interlocks, overload and emergency stop mechanisms for added safety.</div>
								</div>
							</div>
							<div className={styles.divsvcIcon}>
								<ShieldCheck size={25.9} color="#c4161c" />
							</div>
						</div>
						<div className={styles.component29}>
							<div className={styles.frameParent4}>
								<div className={styles.longLastingCranesWrapper}>
									<b className={styles.longLastingCranes}>Long-lasting Cranes</b>
								</div>
								<div className={styles.mekarksEotCranesAreEngineWrapper}>
									<div className={styles.mekarksEotCranes}>Mekark&apos;s EOT cranes are engineered<br />to operate continuously in an industrial setting for over 20 years.</div>
								</div>
							</div>
							<div className={styles.divsvcIcon}>
								<ClockCheck size={25.9} color="#c4161c" />
							</div>
						</div>
					</div>
					<div className={styles.frameParent5}>
						<div className={styles.whyEotCranesFromMekarkAreWrapper}>
							<b className={styles.whyEotCranes}>Why EOT Cranes from Mekark Are the Better Choice</b>
						</div>
						<div className={styles.mekarkIsA}>Mekark is a leading EOT crane manufacturer in South India, building electric overhead travelling cranes engineered for performance, safety, and long-term structural reliability. Below are some ways Mekark&apos;s EOT cranes differ from the traditional non-branded counterparts.</div>
					</div>
					<div className={styles.overlayborder}>
						<div className={styles.strongEveryContainer}>
							<i className={styles.theDifferenceIsnt}>{`The difference isn't just how a crane lifts; it's `}</i>
							<b className={styles.howLongIt}>how long it lasts.</b>
							<i className={styles.theDifferenceIsnt}> That&apos;s the engineering standard Mekark builds to.</i>
						</div>
					</div>
				</div>
				<div className={styles.image12Parent}>
					<Image className={styles.image12Icon} src="/images/cta/image-12.png" width={856} height={563} sizes="100vw" alt="" />
					<Image className={styles.crane1Icon} src="/images/cta/crane-1.png" width={850} height={571} sizes="100vw" alt="" />
					<div className={styles.frameChild} />
				</div>
			</div>
		</div>
	);
};

export default CTA;
