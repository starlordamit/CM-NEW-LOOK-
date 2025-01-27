import Error from "@/components/elements/Error";
import Footer3 from "@/components/footers/Footer3";
import Header4 from "@/components/headers/Header4";
import Topbar from "@/components/headers/Topbar";
import React from "react";

export const metadata = {
  title: "Page Not Found | CreatorsMela",
  description: "404 Page Creatorsmela",
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
      <Error />

      <Footer3 />
    </>
  );
}
