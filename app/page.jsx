import Pricing3 from "@/components/common/Pricing3";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar2 from "@/components/headers/Topbar2";
import Brands from "@/components/homes/index-marketing-agency/Brands";
import Features from "@/components/homes/index-marketing-agency/Features";
import Hero from "@/components/homes/index-marketing-agency/Hero";

import Service from "@/components/homes/index-marketing-agency/Service";
import React from "react";

import Team from "@/components/elements/TeamHome";

export const metadata = {
  title: "CreatorsMela",
  description: "Doob Business and Consulting React Nextjs Bootstrap5 Template",
};
export default function page() {
  return (
    <>
      {/* <Topbar2 /> */}
      <Header4 />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <Hero />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Team />
      <Service />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Features />
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* <Pricing3 /> */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      <Brands />
      <Footer3 />
    </>
  );
}