
import { Suspense } from "react";
import "../globals.css";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import Footer from "@/components/__layouts/Footers/Footer";
import ScrollToTopComponent from "@/components/common/ScrollToTop";
import { NavHeader } from "@/components/__layouts/Header/NavHeader";
import { Lucida_Grande, Naomi } from "../font";
import AosSetup from "@/config/aos";
import { headers } from "next/headers";
import { projectfor } from "@/constants/projectfor";


export async function generateMetadata() {

  const headerList = headers();
  const pathname = headerList.get("x-current-path");
  const clientUrlWithPath = "https://lavishluxnailsandspa.com" + pathname


  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const response = await fetch(`${apiUrl}/api/metadata?projectFor=${projectfor}&pageLink=${clientUrlWithPath}`, {
      cache: "no-store",
    });
    const data = await response.json();

    const { title, description, keywords } = data?.data[0] ?? {};

    const gglverificationResponse = await fetch(`${apiUrl}/api/site-verification`, {
      cache: "no-store",
    });

    const gVerificationData = await gglverificationResponse.json();

    const verificationContent= gVerificationData?.data?.[0]?.url

    return {
      title: title,
      description: description,
      keywords: keywords,
      openGraph: {
        title: title,
        description: description,
      },
       verification: {
        google: verificationContent,
      },
      alternates: {
        canonical: clientUrlWithPath,
      },
      robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    };
  
  } catch (error) {
    return {
      title: "Home",
      description: "Home",
      keywords: "Nails and Spa",
    }
  }
}


export default function RootLayout({ children }) {
  return (
    <>
      <AosSetup />
      <html lang="en">
        <body className={`${Lucida_Grande.variable} ${Naomi.variable}`}>

          <Suspense>
            <RoutingProgressBar />
          </Suspense>
          <>
            <NavHeader />
          </>
          {children}
          <>
            <Footer />
            <ScrollToTopComponent />
          </>
        </body>
      </html>
    </>
  );
}
