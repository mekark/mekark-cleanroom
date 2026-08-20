import type { NextPage } from 'next';
import Image from "next/image";
import { useState } from 'react';
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 1000;

const faqs = [
	{
		q: "What is a clean room and how does it work?",
		a: "A clean room is a controlled, contamination-free environment engineered to maintain low levels of airborne particulates, using HEPA filtration, controlled air changes, and pressure differentials. Mekark's modular clean room systems are designed to protect sensitive products and processes across pharmaceutical, electronics, and industrial applications."
	},
	{
		q: "What cleanliness classes do Mekark's clean rooms support?",
		a: "Mekark designs and manufactures modular clean rooms across a wide range of ISO cleanliness classes, from ISO Class 5 to ISO Class 8, tailored to your facility's process requirements, particulate control needs, and regulatory compliance standards."
	},
	{
		q: "Are Mekark's clean rooms compliant with regulatory standards?",
		a: "Yes. All Mekark clean room systems are engineered in full compliance with ISO 14644, GMP, and WHO-GMP standards, incorporating validated air change rates, pressure differentials, and HEPA filtration to ensure consistent contamination control and regulatory compliance."
	},
	{
		q: "What industries commonly use clean room systems?",
		a: "Clean rooms are widely used across pharmaceutical, biotechnology, electronics, semiconductor, healthcare, food processing, cosmetics, and aerospace industries — anywhere airborne particle control and contamination-free environments are operationally critical."
	},
	{
		q: "Does Mekark provide STP, WTP, and ETP solutions along with clean room services?",
		a: "Yes. Alongside clean room systems, Mekark offers turnkey design, fabrication, and installation of Sewage Treatment Plants (STP), Water Treatment Plants (WTP), and Effluent Treatment Plants (ETP) — delivering integrated infrastructure for facilities requiring both contamination control and water/wastewater management across South India."
	},
	{
		q: "What is the difference between STP, WTP, and ETP?",
		a: "A Sewage Treatment Plant (STP) treats domestic sewage for safe disposal or reuse; a Water Treatment Plant (WTP) purifies raw water for industrial or drinking use; and an Effluent Treatment Plant (ETP) treats industrial wastewater and effluent before discharge or recycling — each playing a distinct role in water and wastewater management."
	},
	{
		q: "Are Mekark's STP, WTP, and ETP systems compliant with pollution control regulations?",
		a: "Yes. Mekark's Sewage Treatment Plant, Water Treatment Plant, and Effluent Treatment Plant systems are engineered to comply with CPCB (Central Pollution Control Board) norms and applicable state pollution control board regulations, ensuring safe discharge, resource recovery, and environmental compliance."
	},
	{
		q: "Can existing clean rooms or treatment systems be reconfigured or expanded instead of replaced?",
		a: "Yes. Mekark offers modification, reconfiguration, and expansion services for modular clean rooms, HVAC systems, and STP/WTP/ETP infrastructure — helping facilities extend usable life, improve capacity, and enhance contamination control or treatment efficiency without full replacement."
	},
	{
		q: "Does Mekark supply and install clean room and water treatment systems across South India?",
		a: "Yes. Mekark manufactures, supplies, and installs modular clean room systems, Sewage Treatment Plants, Water Treatment Plants, and Effluent Treatment Plants across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, with on-site installation and AMC (Annual Maintenance Contract) support throughout Chennai, Coimbatore, Bengaluru, Hyderabad, and Kochi."
	},
	{
		q: "What does Mekark's AMC (Annual Maintenance Contract) include?",
		a: "Mekark's AMC covers scheduled preventive maintenance, HEPA filter checks and replacement, airflow and pressure differential validation, HVAC servicing, and performance testing for clean rooms — along with routine inspection, servicing, and compliance checks for STP, WTP, and ETP systems — ensuring your systems remain safe, efficient, and audit-ready throughout the year."
	}
];

const Chevron = ({ isOpen }: { isOpen: boolean }) => (
	<div className={`${styles.component1} ${isOpen ? styles.iconOpen : styles.iconClosed}`}>
		<Image className={styles.vectorIcon} src="/images/faq/chevron.svg" width={16.6} height={16.6} sizes="100vw" alt="" unoptimized />
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
