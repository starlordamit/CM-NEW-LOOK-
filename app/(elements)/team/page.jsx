import Testimonials from "@/components/elements/Testimonials";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Team from "@/components/elements/TeamPage";
import Topbar from "@/components/headers/Topbar";
import React from "react";

export const metadata = {
  title: "Team | Creatorsmela",
  description: "Creatorsmela Team ",
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
