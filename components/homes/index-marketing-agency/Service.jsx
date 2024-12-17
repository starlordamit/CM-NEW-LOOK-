import React from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/service";
export default function Service() {
  return (
    <div className="main-content">
      {/* Start Service-5 Area  */}
      <div className="rainbow-service-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={100}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">What we can do for you</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Services provide for you.
                </h2>
                {/* <p className="description b1">
                  There are many variations of passages of Lorem Ipsum
                  available,
                  <br />
                  but the majority have suffered alteration.
                </p> */}
              </div>
            </div>
          </div>
          <div className="row row--15 service-wrapper">
            {services.map((service, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12"
                key={index}
                data-sal="slide-up"
                data-sal-delay={service.delay}
                data-sal-duration={800}
              >
                <div className="service service__style--1 icon-circle-style text-center">
                  <div className="icon">
                    <i className={service.icon} />
                  </div>
                  <div className="content">
                    <h4 className="title w-600">
                      <a href="#">{service.title}</a>
                    </h4>
                    <p className="description b1 color-gray mb--0">
                      {service.description}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Start Service-5 Area  */}
      {/* Start Seperator Area  */}
      <div className="rbt-separator-mid">
        <div className="container">
          <hr className="rbt-separator m-0" />
        </div>
      </div>
      {/* End Seperator Area  */}
    </div>
  );
}
