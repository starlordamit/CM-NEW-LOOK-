import Buttons from "@/components/elements/Buttons";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import React from "react";

export const metadata = {
  title:
    "Button || Doob Business and Consulting React Nextjs Bootstrap5 Template",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
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
      <Buttons />

      <Footer3 />
    </>
  );
}