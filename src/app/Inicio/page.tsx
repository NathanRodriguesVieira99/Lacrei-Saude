"use client";

import { lazy } from "react";

const LazyHomePage = lazy(() => import("@/components/Home/HomePage"));



export default function Inicio() {
  return <LazyHomePage />;
}
