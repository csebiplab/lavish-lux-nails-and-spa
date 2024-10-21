"use client";

import { useEffect } from "react";

export default function AosSetup() {
  useEffect(() => {
    import("aos").then((AOS) =>
      AOS.init({
        duration: 1200,
      })
    );
  }, []);

  return <></>;
}
