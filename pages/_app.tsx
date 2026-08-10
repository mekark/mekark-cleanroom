import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Inter, Manrope, Montserrat } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  variable: "--font-montserrat",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${inter.variable} ${manrope.variable} ${montserrat.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
