import React from "react";
import Image from "next/image";
import Link from "next/link";
import TyperComponent from "@/components/common/TyperComponent";
export default function Hero() {
  return (
    <div className="slider-area slider-style-1 bg-transparent variation-2 height-750">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 order-2 order-lg-1 mt_md--40 mt_sm--40">
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
                We at the forefront of shaping the influencer landscape by
                managing top talent and crafting impactful marketing campaigns.
              </p>
              <div className="button-group">
                <Link
                  className="btn-default btn-medium round btn-icon"
                  href={`/index-marketing-agency`}
                >
                  Join CreatorsClub <i className="icon feather-arrow-right" />
                </Link>
                <Link
                  className="btn-default btn-medium btn-border round btn-icon"
                  href={`/contact`}
                >
                  Contact Us <i className="icon feather-arrow-right" />
                </Link>
              </div>
            </div>
          </div>

          <div className="col-lg-4 order-1 order-lg-2">
            <div className="thumbnail">
              <Image
                alt="Banner Images"
                src="https://app.svgator.com/assets/svgator.webapp/log-in-girl.svg"
                // src="https://cms.creatorsmela.com/uploads/Untitled_design_1_83a0bb0260.png"
                width={955}
                height={912}
              />

              {/* <video
                width="400"
                height="300"
                autoPlay
                muted
                loop
                // preload="true"
                // style={{ display: "none" }}
              >
                <source
                  src="https://influencer-videos.b-cdn.net/Influencer_HeaderAnimation_2807.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
