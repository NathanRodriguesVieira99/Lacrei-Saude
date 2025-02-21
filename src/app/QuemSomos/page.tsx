"use client";
import { lazy } from "react";

const LazyQuemSomosPage = lazy(() => import("@/components/QuemSomos"));

export default function QuemSomosPage() {
  return <LazyQuemSomosPage />;
}
