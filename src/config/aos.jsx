"use client";

import { useEffect } from "react";
import "aos/dist/aos.css";

export default function AosSetup() {
  useEffect(() => {
    import("aos").then((AOS) =>
      AOS.init({
        duration: 1200,
        once: true,
      })
    );
  }, []);

  return <></>;
}
