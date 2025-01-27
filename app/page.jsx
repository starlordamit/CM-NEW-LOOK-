import Pricing3 from "@/components/common/Pricing3";
import Footer4 from "@/components/footers/Footer4";
import Header4 from "@/components/headers/Header4";
import Topbar2 from "@/components/headers/Topbar2";
import Brands from "@/components/homes/index-marketing-agency/Brands";
import Features from "@/components/homes/index-marketing-agency/Features";
import Hero from "@/components/homes/index-marketing-agency/Hero";
import Service from "@/components/homes/index-marketing-agency/Service";
import React from "react";
import { Analytics } from "@vercel/analytics/react";

import Team from "@/components/elements/TeamHome";

export const metadata = {
  title:
    "CreatorsMela - India's Top Leading Influencer Marketing and Talent Management Agency ",
  description:
    "India's Top Leading Influencer Marketing and Talent Management Agency",
};

export default function page() {
  return (
    <>
      <Analytics />
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
      <Footer4 />
    </>
  );
}
