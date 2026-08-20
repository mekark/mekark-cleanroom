import type { NextPage } from 'next';
import Image from "next/image";
import { useState } from 'react';
import { useDesignScale } from "@/hooks/useDesignScale";
import styles from './index.module.css';

const DESIGN_HEIGHT = 881.8;

const faqs = [
	{
		q: "What is a clean room and how does it work?",
		a: "A clean room is a controlled environment engineered to maintain low levels of airborne particulates, using HEPA filtration, controlled air changes, and pressure differentials to prevent contamination of sensitive products and processes."
	},
	{
		q: "Who is the best clean room manufacturer in South India?",
		a: "Mekark is a leading clean room manufacturer in South India, designing and installing modular clean rooms and contamination-control systems across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala."
	},
	{
		q: "What cleanliness classes do Mekark's clean rooms support?",
		a: "Mekark designs and manufactures clean rooms across a wide range of ISO cleanliness classes, from ISO Class 5 to ISO Class 8, based on your facility's specific process and regulatory requirements."
	},
	{
		q: "How long does it take to install a modular clean room?",
		a: "Installation timelines depend on clean room size, cleanliness class, and site readiness, but our integrated design-to-commissioning process significantly reduces lead times compared to multi-vendor execution."
	},
	{
		q: "Are Mekark's clean rooms compliant with regulatory standards?",
		a: "Yes. All our clean room systems are engineered in compliance with ISO 14644, GMP, and WHO-GMP standards, incorporating validated air change rates, pressure differentials, and HEPA filtration."
	},
	{
		q: "Can existing clean rooms be reconfigured or expanded instead of replaced?",
		a: "Yes. We offer clean room modification and expansion services, reconfiguring layouts, HVAC capacity, and panel systems to extend usable life and improve contamination control."
	},
	{
		q: "How is the right clean room classification determined for my facility?",
		a: "Our engineers assess your process requirements, product sensitivity, occupancy, and airflow needs to recommend the optimal cleanliness class and clean room configuration for your operations."
	},
	{
		q: "Does Mekark provide clean rooms for pharmaceutical applications?",
		a: "Yes. We manufacture GMP-compliant modular clean rooms specifically engineered for pharmaceutical manufacturing, formulation, and packaging environments."
	},
	{
		q: "What industries commonly use clean room systems?",
		a: "Clean rooms are widely used across pharmaceuticals, biotechnology, electronics, healthcare, food processing, cosmetics, and aerospace, anywhere contamination-controlled environments are a core operational need."
	},
	{
		q: "Does Mekark supply and install clean room systems across South India?",
		a: "Yes. Mekark manufactures, supplies, and installs modular clean room systems across Tamil Nadu, Karnataka, Andhra Pradesh, Telangana, and Kerala, with on-site installation and AMC support throughout Chennai, Coimbatore, Bengaluru, Hyderabad, and Kochi."
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
