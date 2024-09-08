import { Open_Sans } from "next/font/google";

import { Suspense } from "react";
import "../globals.css";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import Footer from "@/components/__layouts/Footers/Footer";
import ScrollToTopComponent from "@/components/common/ScrollToTop";
import { NavHeader } from "@/components/__layouts/Header/NavHeader";
import { Lucida_Grande, Naomi } from "../font";


const openSans = Open_Sans({ subsets: ["latin"] });

export async function generateMetadata() {
  try {
    const [homeMetaData, googleVerificationData] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home`, { cache: "no-store" }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/verificationUrl`, { cache: "no-store" }),
    ]);

    const homeMeta = await homeMetaData.json();
    const verificationIds = await googleVerificationData.json();


    const { homeRouteAllMetaData } = homeMeta ?? {};
    const { verificationUrl } = verificationIds ?? {};



    if (homeRouteAllMetaData?.length === 0) {
      return {
        title: "Lavish Lux Nails & Spa",
        description: "Maricela's Cleaning Magnificence offers top-tier commercial & residential cleaning services in Houston. Discover the best cleaning solutions.",
        keywords: "Maricela's Cleaning Magnificence offers top-tier commercial & residential cleaning services in Houston. Discover the best cleaning solutions.",
      };
    }

    let googleConsoleKey = ""

    if (verificationUrl?.length > 0) {
      googleConsoleKey = extractGoogleConsoleKey(verificationUrl);
    }


    const {
      title,
      description,
      keywords,
    } = homeRouteAllMetaData?.[0] || {};



    return {
      title,
      description,
      keywords,
      verification: {
        google: verificationUrl?.length === 0 ? "" : googleConsoleKey,
      }
    };
  } catch (error) {
    return {
      title: "Lavish Lux Nails & Spa",
      description: "Maricela's Cleaning Magnificence offers top-tier commercial & residential cleaning services in Houston. Discover the best cleaning solutions.",
      keywords: "Maricela's Cleaning Magnificence offers top-tier commercial & residential cleaning services in Houston. Discover the best cleaning solutions.",
    };
  }
}

function extractGoogleConsoleKey(verificationUrl) {
  try {
    const metaTagContent = verificationUrl?.[0].title;
    const consoleKey = metaTagContent.split("=").pop().slice(1, -4);

    return consoleKey;
  } catch (error) {
    return "";
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ Naomi.className || Lucida_Grande.className || openSans.className}>
        <Suspense>
          <RoutingProgressBar />
        </Suspense>
        <>
          <NavHeader/>
        </>
        {children}
        <>
          <Footer />
          <ScrollToTopComponent />
        </>
      </body>
    </html>
  );
}
