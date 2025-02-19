"use client";
import { GlobalStyle } from "@/styles/global";
import { redirect } from "next/navigation";

export default function Page() {
  redirect("/Home");
  return (
    <>
      <GlobalStyle />
    </>
  );
}
