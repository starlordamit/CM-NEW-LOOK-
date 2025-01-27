import PrivacyPolicy from "@/components/elements/PrivacyPolicy";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import React from "react";

export const metadata = {
  title:
    "Privacy Policy || Creatorsmela - India's Leading Talent Management Company",
  description: "Creatorsmela - India's Leading Talent Management Company",
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

      <PrivacyPolicy />

      <Footer3 />
    </>
  );
}
