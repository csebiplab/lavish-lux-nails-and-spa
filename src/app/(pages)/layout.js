
import { Suspense } from "react";
import "../globals.css";
import RoutingProgressBar from "@/components/common/RoutingProgressBar";
import Footer from "@/components/__layouts/Footers/Footer";
import ScrollToTopComponent from "@/components/common/ScrollToTop";
import { NavHeader } from "@/components/__layouts/Header/NavHeader";
import { Lucida_Grande, Naomi } from "../font";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${Lucida_Grande.variable} ${Naomi.variable}`}>
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
