import type { NextPage } from 'next';
import Image from "next/image";
import { useState } from 'react';
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 881.8;

const faqs = [
	{
		q: "What is an EOT crane and how does it work?",
		a: "An EOT (Electric Overhead Travelling) crane is a material handling system mounted on an elevated runway, using electrically powered hoists and trolleys to lift and move heavy loads horizontally and vertically across a facility."
	},
	{
		q: "What load capacities do Mekark's EOT cranes support?",
		a: "Mekark designs and manufactures EOT cranes across a wide range of load capacities, from light-duty 1-ton cranes to heavy-duty systems exceeding 100 tons, based on your facility's specific requirements."
	},
	{
		q: "How long does it take to install an EOT crane?",
		a: "Installation timelines depend on crane capacity, span, and site readiness, but our integrated design-to-commissioning process significantly reduces lead times compared to multi-vendor execution."
	},
	{
		q: "Are Mekark's EOT cranes compliant with safety standards?",
		a: "Yes. All our EOT cranes are engineered in compliance with IS 3177 and IS 807 standards, incorporating certified safety interlocks, overload protection, and emergency stop systems."
	},
	{
		q: "Can an existing overhead crane be upgraded instead of replaced?",
		a: "Yes. We offer crane modernisation and retrofitting services, upgrading electricals, VFDs, and safety systems on existing overhead cranes to extend operational life and improve efficiency."
	},
	{
		q: "What maintenance does an EOT crane require?",
		a: "Regular maintenance includes wire rope inspection, hoist motor servicing, brake system checks, and structural inspections. Mekark offers AMC packages across South India to keep your crane operating safely and efficiently."
	},
	{
		q: "How is the right EOT crane capacity determined for my facility?",
		a: "Our engineers assess your maximum load requirements, lifting frequency, span, headroom, and duty cycle to recommend the optimal crane capacity and configuration for your operations."
	},
	{
		q: "Does Mekark provide EOT cranes for outdoor applications?",
		a: "Yes. We manufacture Goliath and semi-Goliath cranes specifically engineered for outdoor, yard-based, and heavy fabrication environments."
	},
	{
		q: "What industries commonly use EOT cranes?",
		a: "EOT cranes are widely used across steel and metal fabrication, automotive manufacturing, power plants, warehousing, cement industries, shipbuilding, and foundries, anywhere heavy material handling is a core operational need."
	},
	{
		q: "Does Mekark supply and install EOT cranes across South India?",
		a: "Yes. Mekark manufactures, supplies, and installs EOT cranes across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, with on-site installation and AMC support throughout South India's major industrial hubs."
	}
];

const Chevron = ({ isOpen }: { isOpen: boolean }) => (
	<div className={`${styles.component1} ${isOpen ? styles.iconOpen : styles.iconClosed}`}>
		<Image className={styles.vectorIcon} src="/images/faq/chevron.svg" width={16.6} height={16.6} sizes="100vw" alt="" />
	</div>
);

const FAQ: NextPage = () => {
	const scale = useDesignScale();
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggleFaq = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	const leftColFaqs = faqs.slice(0, 5);
	const rightColFaqs = faqs.slice(5, 10);

	const formatIndex = (index: number) => (index + 1).toString().padStart(2, '0');

	return (
		<div className={styles.faqWrapper} style={{ height: DESIGN_HEIGHT * scale }}>
			<div className={styles.faq} style={{ transform: `scale(${scale})` }}>
				<div className={styles.frameParent}>
					<div className={styles.frequentlyAskedQuestionsWrapper}>
						<b className={styles.frequentlyAskedQuestions}>Frequently Asked Questions</b>
					</div>
					<div className={styles.divspaceY3Parent}>
						<div className={styles.divrevealParent}>
							{leftColFaqs.map((faq, index) => {
								const isOpen = openIndex === index;
								return (
									<div key={index} className={styles.divreveal}>
										<div className={styles.buttonradixRDaaq} onClick={() => toggleFaq(index)}>
											<div className={styles.spanflex}>
												<b className={styles.b}>{formatIndex(index)}</b>
												<div className={styles.whatIsAn}>{faq.q}</div>
											</div>
											<Chevron isOpen={isOpen} />
										</div>
										{isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
									</div>
								);
							})}
						</div>
						<div className={styles.divrevealParent}>
							{rightColFaqs.map((faq, idx) => {
								const index = idx + 5;
								const isOpen = openIndex === index;
								return (
									<div key={index} className={styles.divreveal}>
										<div className={styles.buttonradixRDaaq} onClick={() => toggleFaq(index)}>
											<div className={styles.spanflex}>
												<b className={styles.b}>{formatIndex(index)}</b>
												<div className={styles.whatIsAn}>{faq.q}</div>
											</div>
											<Chevron isOpen={isOpen} />
										</div>
										{isOpen && <div className={styles.faqAnswer}>{faq.a}</div>}
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FAQ;
