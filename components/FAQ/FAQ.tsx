import type { NextPage } from 'next';
import Image from "next/image";
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 881.8;

const Chevron = () => (
	<div className={styles.component1}>
		<Image className={styles.vectorIcon} src="/images/faq/chevron.svg" width={16.6} height={16.6} sizes="100vw" alt="" />
	</div>
);

const FAQ: NextPage = () => {
	const scale = useDesignScale();

	return (
		<div className={styles.faqWrapper} style={{ height: DESIGN_HEIGHT * scale }}>
			<div className={styles.faq} style={{ transform: `scale(${scale})` }}>
				<div className={styles.frameParent}>
					<div className={styles.frequentlyAskedQuestionsWrapper}>
						<b className={styles.frequentlyAskedQuestions}>Frequently Asked Questions</b>
					</div>
					<div className={styles.divspaceY3Parent}>
						<div className={styles.divrevealParent}>
							<div className={styles.divreveal}>
								<div className={styles.buttonradixRDaaq}>
									<div className={styles.spanflex}>
										<b className={styles.b}>01</b>
										<div className={styles.whatIsAn}>What is an EOT crane and how does it work?</div>
									</div>
									<Chevron />
								</div>
							</div>
							<div className={styles.divreveal}>
								<div className={styles.buttonradixRLaaq}>
									<div className={styles.spanflex2}>
										<b className={styles.b2}>02</b>
										<div className={styles.whatLoadCapacities}>What load capacities do Mekark&apos;s EOT cranes support?</div>
									</div>
									<Chevron />
								</div>
							</div>
							<div className={styles.divreveal3}>
								<div className={styles.buttonradixRTaaq}>
									<div className={styles.spanflex3}>
										<b className={styles.b3}>03</b>
										<div className={styles.howLongDoes}>How long does it take to install an EOT crane? </div>
									</div>
									<Chevron />
								</div>
							</div>
							<div className={styles.divreveal}>
								<div className={styles.buttonradixR15aaq}>
									<div className={styles.spanflex4}>
										<b className={styles.b4}>04</b>
										<div className={styles.areMekarksEot}>Are Mekark&apos;s EOT cranes compliant with safety standards?</div>
									</div>
									<Chevron />
								</div>
							</div>
							<div className={styles.divreveal}>
								<div className={styles.buttonradixR1daaq}>
									<div className={styles.spanflex5}>
										<b className={styles.b5}>05</b>
										<div className={styles.canAnExisting}>Can an existing overhead crane be upgraded instead of replaced?</div>
									</div>
									<Chevron />
								</div>
							</div>
						</div>
						<div className={styles.divrevealParent}>
							<div className={styles.divreveal6}>
								<div className={styles.buttonradixR1laaq}>
									<div className={styles.spanflex6}>
										<b className={styles.b3}>06</b>
										<div className={styles.whatMaintenanceDoes}>What maintenance does an EOT crane require?</div>
									</div>
									<Chevron />
								</div>
							</div>
							<div className={styles.divreveal7}>
								<div className={styles.buttonradixR1taaq}>
									<div className={styles.spanflex7}>
										<b className={styles.b7}>07</b>
										<div className={styles.howIsThe}>How is the right EOT crane capacity determined for my facility?</div>
									</div>
									<Chevron />
								</div>
							</div>
							<div className={styles.divreveal7}>
								<div className={styles.buttonradixR25aaq}>
									<div className={styles.spanflex8}>
										<b className={styles.b8}>08</b>
										<div className={styles.doesMekarkProvide}>Does Mekark provide EOT cranes for outdoor applications?</div>
									</div>
									<Chevron />
								</div>
							</div>
							<div className={styles.divreveal9}>
								<div className={styles.buttonradixR25aaq2}>
									<div className={styles.spanflex8}>
										<b className={styles.b9}>09</b>
										<div className={styles.whatIndustriesCommonly}>What industries commonly use EOT cranes?</div>
									</div>
									<Chevron />
								</div>
							</div>
							<div className={styles.divreveal7}>
								<div className={styles.buttonradixR25aaq}>
									<div className={styles.spanflex8}>
										<b className={styles.b10}>10</b>
										<div className={styles.doesMekarkSupply}>Does Mekark supply and install EOT cranes across South India?</div>
									</div>
									<Chevron />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
