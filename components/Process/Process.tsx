import type { NextPage } from 'next';
import Image from "next/image";
import { DraftingCompass, Factory, HardHat, BadgeCheck, Wrench } from "lucide-react";
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 607;
const ICON_COLOR = "#e50818";

const Process: NextPage = () => {
	const scale = useDesignScale();

	return (
		<div className={styles.grid1ParentWrapper} style={{ height: DESIGN_HEIGHT * scale }}>
			<div className={styles.grid1Parent} style={{ transform: `scale(${scale})` }}>
				<Image className={styles.grid1Icon} src="/images/process/grid-1.png" width={1917.8} height={390.7} sizes="100vw" alt="" />
				<div className={styles.frameParent}>
					<div className={styles.howWeDeliverYourProjectWrapper}>
						<b className={styles.howWeDeliver}>How We Deliver Your Project</b>
					</div>
					<div className={styles.frameGroup}>
						<div className={styles.rectangleParent}>
							<div className={styles.frameChild} />
							<div className={styles.container}>
								<div className={styles.container2}>
									<b className={styles.siteAssessment}>{`Site Assessment & Load Analysis`}</b>
								</div>
								<div className={styles.container3}>
									<div className={styles.weEvaluateYour}>We evaluate your facility&apos;s span, load capacity, and duty cycle to determine the ideal EOT crane specification.</div>
								</div>
							</div>
							<Image className={styles.frameItem} src="/images/process/line.svg" width={66.7} height={19.6} sizes="100vw" alt="" />
							<Image className={styles.tablerclipboardSearchIcon} src="/images/process/clipboard-search.svg" width={40} height={40} sizes="100vw" alt="" />
						</div>
						<div className={styles.rectangleParent}>
							<div className={styles.frameChild} />
							<div className={styles.container}>
								<div className={styles.container2}>
									<b className={styles.siteAssessment}>{`Custom Design & Engineering`}</b>
								</div>
								<div className={styles.container3}>
									<div className={styles.weEvaluateYour}>Structural modelling ensures a crane system optimised for load efficiency, safety, and durability.</div>
								</div>
							</div>
							<Image className={styles.frameItem} src="/images/process/line.svg" width={66.7} height={19.6} sizes="100vw" alt="" />
							<div className={styles.tablerclipboardSearchIcon}>
								<DraftingCompass size={40} color={ICON_COLOR} />
							</div>
						</div>
						<div className={styles.rectangleParent}>
							<div className={styles.frameChild} />
							<div className={styles.container}>
								<div className={styles.container2}>
									<b className={styles.siteAssessment}>{`Fabrication & Quality Testing`}</b>
								</div>
								<div className={styles.container9}>
									<div className={styles.weEvaluateYour}>Every component is CNC-fabricated and tested for structural integrity and load performance.</div>
								</div>
							</div>
							<Image className={styles.frameChild2} src="/images/process/line.svg" width={66.7} height={19.6} sizes="100vw" alt="" />
							<div className={styles.tablerclipboardSearchIcon}>
								<Factory size={40} color={ICON_COLOR} />
							</div>
						</div>
						<div className={styles.rectangleParent}>
							<div className={styles.frameChild} />
							<div className={styles.container}>
								<div className={styles.container2}>
									<b className={styles.siteAssessment}>{`Installation & Commissioning`}</b>
								</div>
								<div className={styles.container3}>
									<div className={styles.weEvaluateYour}>Certified teams handle on-site erection and commissioning across South India with strict safety protocols.</div>
								</div>
							</div>
							<Image className={styles.frameItem} src="/images/process/line.svg" width={66.7} height={19.6} sizes="100vw" alt="" />
							<div className={styles.tablerclipboardSearchIcon}>
								<HardHat size={40} color={ICON_COLOR} />
							</div>
						</div>
						<div className={styles.rectangleParent}>
							<div className={styles.frameChild} />
							<div className={styles.container}>
								<div className={styles.container2}>
									<b className={styles.siteAssessment}>{`Testing, Certification & Handover`}</b>
								</div>
								<div className={styles.container3}>
									<div className={styles.weEvaluateYour}>Each crane undergoes load testing and safety certification per IS standards before handover.</div>
								</div>
							</div>
							<Image className={styles.frameItem} src="/images/process/line.svg" width={66.7} height={19.6} sizes="100vw" alt="" />
							<div className={styles.tablerclipboardSearchIcon}>
								<BadgeCheck size={40} color={ICON_COLOR} />
							</div>
						</div>
						<div className={styles.rectangleParent}>
							<div className={styles.frameChild} />
							<div className={styles.container}>
								<div className={styles.container2}>
									<b className={styles.siteAssessment}>{`Maintenance & AMC Support`}</b>
								</div>
								<div className={styles.container3}>
									<div className={styles.weEvaluateYour}>AMC support across South India keeps your EOT crane running safely for years to come.</div>
								</div>
							</div>
							<div className={styles.tablerclipboardSearchIcon}>
								<Wrench size={40} color={ICON_COLOR} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Process;
