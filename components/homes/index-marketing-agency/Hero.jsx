// File: /components/homes/index-marketing-agency/Hero.jsx
"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import TyperComponent from "@/components/common/TyperComponent";
import dynamic from "next/dynamic";
// import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// import { DotLottiePlayer } from "@dotlottie/player-component";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// Dynamically import LottieAnimation to ensure it only loads on the client
const LottieAnimation = dynamic(() => import("./lottie"), { ssr: false });

export default function Hero() {
  return (
    <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40 mt-15">
            <div className="inner text-left">
              <h1 className="title theme-gradient display-two">
                Empowering Talent. Elevating Impact. <br />
                For{" "}
                <span className="header-caption">
                  <span className="cd-headline clip is-full-width">
                    <TyperComponent
                      strings={["Creators.", "Brands.", "Agencies."]}
                    />
                  </span>
                </span>
              </h1>
              <p className="description">
                We are at the forefront of shaping the influencer landscape by
                managing top talent and crafting impactful marketing campaigns.
              </p>
              <div className="button-group">
                <Link
                  className="btn-default btn-medium round btn-icon"
                  href="/contact"
                >
                  Contact Us <i className="icon feather-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4 order-1 order-lg-2">
            {/* <LottieAnimation
              lottie="https://cms.creatorsmela.com/uploads/Animation_1737898037166_1c910712dd.lottie"
              width="100%"
              height="100%"
            /> */}
            <DotLottieReact
              src="https://cms.creatorsmela.com/uploads/XX_19d93296d9.lottie"
              loop
              autoplay
            />
            <div className="thumbnail">
              {/* Additional elements if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
