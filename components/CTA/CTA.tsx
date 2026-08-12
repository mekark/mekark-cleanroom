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
						<div className={styles.ourEngineeringTeam}>Our engineers can evaluate your process needs, cleanliness level, and space limitations in order to determine the best clean room system for you, at no cost.</div>
						<div className={styles.notSureWhichContainer}>
							<span className={styles.notSureWhichContainer2}>
								<span className={styles.notSureWhich}>{`Not Sure Which Clean Room Classification `}</span>
								<span className={styles.fitsYourFacility}>Fits Your Facility?</span>
							</span>
						</div>
					</div>
					<div className={styles.sectionChild} />
					<div className={styles.cta2}>
						<b className={styles.talkToOur}>Talk to Our Experts</b>
						<div className={styles.component4}>
							<Image className={styles.vectorIcon} src="/images/cta/arrow.svg" width={20.2} height={16.1} sizes="100vw" alt="" />
						</div>
					</div>
					<Image className={styles.sectionItem} src="/images/cta/grid-circle.svg" width={180} height={180} sizes="100vw" alt="" />
					<Image className={styles.sectionInner} src="/images/cta/glow-blob.svg" width={317} height={213} sizes="100vw" alt="" />
					<Image className={styles.eotCta1} src="/images/cta/eot-cta-1.png" width={443} height={292} sizes="100vw" alt="" />
				</div>
				<div className={styles.image12Parent}>
					<div className={styles.image12Crop}>
						<Image className={styles.image12Icon} src="/images/cta/cleanroom-facility.png" width={1282} height={569} sizes="100vw" alt="" />
					</div>
					<div className={styles.frameChild} />
				</div>
				<div className={styles.frameParent}>
					<div className={styles.component22Parent}>
						<div className={styles.component22}>
							<div className={styles.frameGroup}>
								<div className={styles.turnkeyWarehouseConstructionWrapper}>
									<b className={styles.turnkeyWarehouseConstruction}>Custom-Engineered Design</b>
								</div>
								<div className={styles.singlePointResponsibilityFrWrapper}>
									<div className={styles.singlePointResponsibilityFr}>Your clean room is designed specifically to meet your particular requirements regarding cleanliness, process flow, and plant layout.</div>
								</div>
							</div>
							<div className={styles.divsvcIcon}>
								<DraftingCompass size={25.9} color="#c4161c" />
							</div>
						</div>
						<div className={styles.component26}>
							<div className={styles.frameContainer}>
								<div className={styles.higherLoadEfficiencyWrapper}>
									<b className={styles.higherLoadEfficiency}>Superior Contamination Control</b>
								</div>
								<div className={styles.theOptimisedGirderDesignEnWrapper}>
									<div className={styles.theOptimisedGirder}>Optimised HVAC design and HEPA filtration ensure consistent particle counts and stable pressure cascades across your clean room facility.</div>
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
									<div className={styles.singlePointResponsibilityFr}>The factory-fabricated modular panels guarantee airtight seals and structure and eliminate the contamination problems associated with site-built clean rooms.</div>
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
									<div className={styles.weProvideMaintenance}>Clean Room Validation, Requalification, and AMC are provided throughout South India, ensuring that your controlled environments are compliant years after installation.</div>
								</div>
							</div>
							<div className={styles.divsvcIcon}>
								<Wrench size={25.9} color="#c4161c" />
							</div>
						</div>
						<div className={styles.component25}>
							<div className={styles.frameGroup}>
								<div className={styles.safetyCompliantWrapper}>
									<b className={styles.safetyCompliant}>Regulatory Compliant</b>
								</div>
								<div className={styles.singlePointResponsibilityFrWrapper}>
									<div className={styles.singlePointResponsibilityFr}>Our clean room systems meet ISO 14644, GMP, and WHO-GMP specifications for cleanliness class, air change rates, and pressure differentials.</div>
								</div>
							</div>
							<div className={styles.divsvcIcon}>
								<ShieldCheck size={25.9} color="#c4161c" />
							</div>
						</div>
						<div className={styles.component29}>
							<div className={styles.frameParent4}>
								<div className={styles.longLastingCranesWrapper}>
									<b className={styles.longLastingCranes}>Long-lasting Clean Room Systems</b>
								</div>
								<div className={styles.mekarksEotCranesAreEngineWrapper}>
									<div className={styles.mekarksEotCranes}>The clean rooms at Mekark are designed to guarantee cleanliness performance under continuous industrial and pharmaceutical operations for more than X+ years.</div>
								</div>
							</div>
							<div className={styles.divsvcIcon}>
								<ClockCheck size={25.9} color="#c4161c" />
							</div>
						</div>
					</div>
					<div className={styles.frameParent5}>
						<div className={styles.whyEotCranesFromMekarkAreWrapper}>
							<b className={styles.whyEotCranes}>Why Clean Rooms from Mekark are the Better Choice</b>
						</div>
						<div className={styles.mekarkIsA}>Mekark is one of the best clean room manufacturers in South India. They manufacture modular clean rooms and contamination control equipment.</div>
					</div>
					<div className={styles.overlayborder}>
						<div className={styles.strongEveryContainer}>
							<i className={styles.theDifferenceIsnt}>{`The difference isn't just how a clean room performs on day one; `}</i>
							<b className={styles.howLongIt}>it&apos;s how long it stays compliant</b>
							<i className={styles.theDifferenceIsnt}>. That&apos;s the engineering standard Mekark builds to.</i>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CTA;
