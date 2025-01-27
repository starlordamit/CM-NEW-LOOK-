import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import BreadCumb from "@/components/portfolio/BreadCumb";

import PortfolioDetails from "@/components/portfolio/PortfolioDetails";
import { allPortfolios } from "@/data/portfolio";
import React from "react";

export const metadata = {
  title:
    "Portfolio Details || Creatorsmela - India's Leading Talent Management Company",
  description: "Creatorsmela - India's Leading Talent Management Company",
};
export default function page({ params }) {
  const portfolio =
    allPortfolios.filter((elm) => elm.id == params.id)[0] || allPortfolios[0];
  return (
    <>
      <Topbar />
      <Header4 />
      <BreadCumb title={portfolio.title} />
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      <PortfolioDetails portfolio={portfolio} />
      <Footer3 />
    </>
  );
}
