import Team from "@/components/elements/TeamPageComp";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import React from "react";

export const metadata = {
  title: "Creator's Squad",
  description:
    "Creators Mela is a platform for creators to showcase their talent and connect with brands for collaborations.",
};
export default function page() {
  return (
    <>
      {/* <Topbar /> */}
      <Header4 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>

      <Team />

      <Footer3 />
    </>
  );
}
