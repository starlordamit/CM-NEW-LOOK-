import ProgressBars from "@/components/elements/ProgressBars";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import React from "react";

export const metadata = {
  title:
    "Progressbar || Creatorsmela - India's Leading Talent Management Company",
  description: "Creatorsmela - India's Leading Talent Management Company",
};
export default function page() {
  return (
    <>
      <Topbar />
      <Header4 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <ProgressBars />

      <Footer3 />
    </>
  );
}
