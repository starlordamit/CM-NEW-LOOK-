import React from "react";
import Image from "next/image";
export default function Features() {
  return (
    <div className="rainbow-advance-tab-area rainbow-section-gap">
      <div className="container">
        <div className="row mb--40">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Case Studies</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Our Marketing Campaigns & Strategies
              </h2>
              <p className="description b1">
                We Did lots of hardwork with a smart way to get the results,{" "}
                <br />
                see how we work and what we did for our clients for best
                results.
              </p>
            </div>
          </div>
        </div>
        <div className="html-tabs">
          <div className="row row--30">
            <div className="order-2 order-lg-1 col-lg-4 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30">
              <div className="advance-tab-button advance-tab-button-1">
                <ul
                  className="nav nav-tabs tab-button-list"
                  id="myTab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link tab-button active"
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      href="#"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      <h4 className="title">Lenskart Campaign.</h4>
                      <p className="description">
                        Explore what we Did for Lenskart Campaign.
                      </p>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link tab-button"
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      href="#"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      <h4 className="title">Probo Campaign</h4>
                      <p className="description">
                        Explore what we Did for Probo Campaign.
                      </p>
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link tab-button"
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      href="#"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      <h4 className="title">Kuku Fm camapign.</h4>
                      <p className="description">Explore About our Work.</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="order-1 order-lg-2 col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show advance-tab-content-1 active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="thumbnail">
                    <Image
                      alt="advance-tab-image"
                      src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LvZwNRMo6PZf0_gBAVEjzw.png"
                      width={1000}
                      height={720}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade advance-tab-content-1"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="thumbnail">
                    <Image
                      alt="advance-tab-image"
                      src="https://static.startuptalky.com/2022/02/Funding-for-startups--2-.jpg"
                      width={1000}
                      height={720}
                    />
                  </div>
                </div>
                <div
                  className="tab-pane fade advance-tab-content-1"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <div className="thumbnail">
                    <Image
                      alt="advance-tab-image"
                      src="https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2024/10/Wtf-KUKUFM-01.png"
                      width={1000}
                      height={720}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
