// components/CarouselClient.tsx
"use client";

import dynamic from "next/dynamic";
import React   from "react";

const Owl = dynamic(
  // use the CJS build and grab the default export
  () => import("react-owl-carousel").then((mod: any) => mod.default),
  { ssr: false }                            // <— no server render
);

export default Owl;
