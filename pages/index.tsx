import Head from "next/head";
import Hero from "@/components/Hero/Hero";
import CompleteEOT from "@/components/CompleteEOT/CompleteEOT";
import CTA from "@/components/CTA/CTA";
import Solutions from "@/components/Solutions/Solutions";
import Process from "@/components/Process/Process";
import FAQ from "@/components/FAQ/FAQ";
import FinalCTA from "@/components/FinalCTA/FinalCTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mekark | EOT Crane Manufacturer</title>
        <meta
          name="description"
          content="South India's trusted EOT crane manufacturer, delivering electric overhead travelling cranes engineered for heavy-duty industrial material handling."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <CompleteEOT />
      <CTA />
      <Solutions />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
