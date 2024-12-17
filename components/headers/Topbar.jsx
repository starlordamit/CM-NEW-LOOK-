"use client";

import { useRef } from "react";

export default function Topbar() {
  const topbarRef = useRef();
  const closeTopbar = () => {
    topbarRef.current.classList.add("deactive");
  };
  return (
    <div className="header-top-news bg-image1" ref={topbarRef}>
      <div className="wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="content">
                  <span className="rainbow-badge">Limited Time Offer</span>
                  <span className="news-text">
                    Intro price. Get Doob for Big Sale -95% off.
                  </span>
                </div>
                <div className="right-button">
                  <a
                    className="btn-read-more"
                    target="_blank"
                    href="https://themeforest.net/user/rainbow-themes/portfolio"
                  >
                    <span>
                      Purchase Now <i className="feather-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-close " onClick={closeTopbar}>
        <button className="close-button bgsection-activation">
          <i className="feather-x" />
        </button>
      </div>
    </div>
  );
}
