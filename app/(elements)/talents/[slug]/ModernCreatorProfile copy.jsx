"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Blogs from "@/components/common/Blogs";
import Footer3 from "@/components/footers/Footer3";
import Header3 from "@/components/headers/Header3";
import About from "@/components/homes/index-personal-portfolio/About";
import Brands from "@/components/homes/index-personal-portfolio/Brands";
import Hero from "@/components/homes/index-personal-portfolio/Hero";
import Portfolio from "@/components/homes/index-personal-portfolio/Portfolio";
import Skills from "@/components/homes/index-personal-portfolio/Skills";
import Testimonials from "@/components/homes/index-personal-portfolio/Testimonials";
import ReactMarkdown from "react-markdown";
import { progressData } from "@/data/progress";

// import { Progress } from "@nextui-org/react";
// import { useEffect } from "react";

import ProgressLine from "@/components/common/ProgressLine";
// import CircularProgress from "@/components/common/CirculerProgress";
import CirculerProgress from "@/components/common/CirculerProgress";
import {
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaLink,
  FaWhatsapp,
} from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { number } from "prop-types";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ModernCreatorProfile({ creator }) {
  const [activeTab, setActiveTab] = useState("about");

  // Default image URL
  const imageUrl = creator.images?.[0]?.formats?.large?.url
    ? creator.images[0].formats.large.url
    : "/uploads/default_avatar_photo_placeholder_profile_icon_vector_d60b794566.jpg";

  const socialLinksArray = (creator.socialslinks || "")
    .split(",")
    .map((link) => link.trim())
    .filter((l) => l);

  const getSocialDetails = (url) => {
    const trimmedUrl = url.trim();
    if (trimmedUrl.includes("instagram.com")) {
      return {
        platform: "Instagram",
        icon: <FaInstagram />,
        username: trimmedUrl.split(".com/")[1],
      };
    }
    if (trimmedUrl.includes("facebook.com")) {
      return {
        platform: "Facebook",
        icon: <FaFacebook />,
        username: trimmedUrl.split(".com/")[1],
      };
    }
    if (trimmedUrl.includes("youtube.com")) {
      return {
        platform: "YouTube",
        icon: <FaYoutube />,
        username: trimmedUrl.split(".com/")[1],
      };
    }
    if (trimmedUrl.includes("twitter.com")) {
      return {
        platform: "Twitter",
        icon: <FaTwitter />,
        username: trimmedUrl.split(".com/")[1],
      };
    }
    return { platform: "Link", icon: <FaLink />, username: trimmedUrl };
  };

  const ageGroups = creator.AudienceStats || [];

  const [unmutedIndex, setUnmutedIndex] = useState(null);

  const toggleMute = (index) => {
    setUnmutedIndex((prevIndex) => {
      // If we click on the same video that's already unmuted, mute it
      if (prevIndex === index) {
        return null;
      } else {
        // Otherwise, unmute this one and mute all others
        return index;
      }
    });
  };

  return (
    <>
      {" "}
      {/* Start Advance Tab-1  */}
      <div className="rainbow-advance-tab-area rainbow-section-gap">
        <div className="container">
          {/* Start Section Title  */}
          <div className="row mb--40">
            <div className="col-lg-12">
              <div className="section-title text-center sal-animate">
                <h4 className="subtitle">
                  <span className="theme-gradient">Exclusive Talent</span>
                </h4>
                {/* <h2 className="title w-600">
                  Use your data without touching it.
                </h2> */}
              </div>
            </div>
          </div>
          {/* End Section Title  */}

          {/* Start tab  */}
          <div
            className="advance-tab-four bg-color-blackest theme-shape"
            data-tabs="true"
          >
            <div className="row row--30 gy-5">
              {/* Start tab Button  */}
              <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 d-flex flex-column justify-content-between order-2 order-lg-1">
                <div className="advance-tab-top">
                  <h5 className="subtitle">
                    <span className="theme-gradient">Overview</span>
                  </h5>
                  <h3 className="title">{creator.CreatorName}</h3>
                  <ReactMarkdown>{creator.Description}</ReactMarkdown>
                  <p className="description"></p>
                </div>
                <div className="advance-tab-bottom">
                  <div className="advance-tab-button advance-tab-button-1">
                    <ul
                      className="nav nav-tabs tab-button-list"
                      id="myTab"
                      role="tablist"
                    >
                      {creator.Handel.map((url) => {
                        {
                          console.log(url);
                        }
                        <li className="nav-item" role="presentation">
                          <a
                            href="#"
                            className="nav-link tab-button tab-with-icon bg-color-white-off active"
                            id="case-tab"
                            data-bs-toggle="tab"
                            data-bs-target="#case"
                            role="tab"
                            aria-controls="case"
                            aria-selected="true"
                          >
                            <div className="tab">
                              <div className="icon">
                                <i className="feather-zap" />
                              </div>
                              <div className="content">
                                <h4 className="title">Online Verification</h4>
                                <p className="description">
                                  Use Doob template you can build a corporate
                                  website a short time.
                                </p>
                              </div>
                            </div>
                          </a>
                        </li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
              {/* End tab Button  */}

              {/* Start tab Content  */}
              <div className="col-lg-4 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
                <div className="tab-content">
                  <div
                    className="row row--0 about-wrapper   "
                    id="case"
                    role="tabpanel"
                    aria-labelledby="case-tab"
                  >
                    <div className="col-lg-12" justify-content-center>
                      <Image
                        className="thumbnail"
                        style={{ borderRadius: 10, alignContent: "center" }}
                        alt="advance-tab-image"
                        src={`https://cms.dev80.tech/${creator.images?.[0]?.formats?.large?.url}`}
                        width={400}
                        height={106}
                      />
                    </div>
                  </div>
                  <div
                    className="tab-pane fade advance-tab-content-1 bg-primary-gradient radius"
                    id="casetabtwo"
                    role="tabpanel"
                    aria-labelledby="casetabtwo-tab"
                  >
                    <div className="thumbnail">
                      <Image
                        className="radius"
                        alt="advance-tab-image"
                        src="/assets/images/advance-tab/tab-5.png"
                        width={1000}
                        height={1060}
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* End tab Content  */}
            </div>
          </div>
          {/* End tab  */}

          {/* Start tab  */}
          <div
            className="advance-tab-four bg-color-blackest theme-shape mt--40"
            data-tabs="true"
          >
            <div className="row row--30 gy-5">
              {/* Start tab Button  */}
              <h5 className="Title responsive-align">
                <span className="theme-gradient"> Top Brand Collabs</span>
              </h5>
              <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 d-flex flex-column justify-content-between order-2 order-lg-1">
                <div className="advance-tab-top">
                  {/* <h3 className="title">{creator.CreatorName}</h3>
        <p className="description">{creator.Description}</p> */}
                </div>
              </div>
              {/* End tab Button  */}
              <div className="col-lg-12 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
                <div
                  className="tab-content11 no-scrollbar responsive-align"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "10px",
                    whiteSpace: "nowrap",
                    maxWidth: "100%",
                    alignContent: "center",

                    overflowX: "scroll",
                  }}
                >
                  {creator.Videos.map((v, index) => {
                    const isUnmuted = unmutedIndex === index;
                    return (
                      <div
                        key={index}
                        style={{
                          display: "inline-block",
                          position: "relative",
                        }}
                        className="thumbnail"
                      >
                        <video
                          width="auto"
                          height="550"
                          muted={!isUnmuted}
                          autoPlay
                          loop
                          style={{
                            borderRadius: 15,
                          }}
                        >
                          <source src={`https://cms.dev80.tech/${v.url}`} />
                          Your browser does not support the video tag.
                        </video>

                        {/* Mute/Unmute Button */}
                        <button
                          onClick={() => toggleMute(index)}
                          style={{
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            padding: "5px 10px",
                            backgroundColor: "rgba(0,0,0,0.2)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "30px",
                            cursor: "pointer",
                          }}
                        >
                          {/* Show unmute icon if muted, mute icon if unmuted */}
                          {isUnmuted ? " 🔊" : "🔇"}
                        </button>
                      </div>
                    );
                  })}
                </div>

                <style>
                  {`
          .no-scrollbar {
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE and Edge */
          }

          .no-scrollbar::-webkit-scrollbar {
            display: none; /* Chrome, Safari, and Opera */
          }
            /* Default: On mobile (small screens), no justify-content: center */
  .responsive-align {
    justify-content: flex-start;
  }

  /* On larger screens (e.g., desktop), apply justify-content: center */
  @media (min-width: 992px) {
    .responsive-align {
      justify-content: center;
    }
  }
        `}
                </style>
              </div>
            </div>
          </div>
          {/* End tab  */}

          {/* Start Service Box  */}
          <div className="row row--20 ">
            <div
              className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              {/* advance-tab-four bg-color-blackest theme-shape mt--40 */}
              <div className="service service__style--1 bg-color-blackest radius mt--40 text-left overflow-hidden theme-shape">
                <div className="content">
                  <h6 className="subtitle">
                    <span className="theme-gradient">Audience Age Details</span>
                  </h6>
                  {/* <h4 className="title w-600">
                    <a href="#">Friendly Interface</a>
                  </h4>
                  <p className="description b1 color-gray mb--0">
                    There are many variations variations of passages of Lorem
                    Ipsum available, but the majority have suffered.
                  </p> */}
                </div>
                <div className="container">
                  <div className="rbt-progress-style-3 ">
                    {ageGroups.map((elm, i) => (
                      <div key={i} className="single-progress">
                        <h6 className="title">{elm.title}</h6>
                        <div className="progress">
                          <ProgressLine
                            progress={elm.value}
                            className={`progress-bar wow fadeInLeft ${elm.colorClass}`}
                          />
                          <span className="progress-number">{elm.value}%</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <div className="service service__style--1 bg-color-blackest radius mt--40 text-left overflow-hidden theme-shape">
                <div className="content">
                  <h6 className="subtitle">
                    <span className="theme-gradient">
                      Audience Gender Details
                    </span>
                  </h6>
                </div>
                <div className="rbt-progress-style-3 mb-30 ">
                  {creator.GenderDistribution.map((elm, i) => (
                    <div key={i} className="single-progress">
                      <h6 className="title">{elm.title}</h6>
                      <div className="progress">
                        <ProgressLine
                          progress={elm.value}
                          className={`progress-bar wow fadeInLeft ${elm.colorClass}`}
                        />
                        <span className="progress-number">{elm.value}%</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* {creator.Tags.map((tag, i) => (
                  <div className="content">
                    <h6 className="subtitle">
                      <span className="theme-gradient">{tag}</span>
                    </h6>
                  </div>
                ))} */}

                <div className="rainbow-callto-action-area rainbow-section-gap-10">
                  <div className="wrapper">
                    <div className="rainbow-callto-action clltoaction style-5 mt--130">
                      <div className="container">
                        <div className="row row--0 align-items-center content-wrapper ">
                          <div className="col-lg-12">
                            <div className="inner">
                              <div className="content text-center">
                                <h5
                                  className="subtitle"
                                  data-sal="slide-up"
                                  data-sal-duration={400}
                                  data-sal-delay={200}
                                >
                                  Looks Great to work with us ?
                                </h5>
                                <h6
                                  className="subtitle"
                                  data-sal="slide-up"
                                  data-sal-duration={400}
                                  data-sal-delay={300}
                                >
                                  Finest choice for your Campaign
                                </h6>
                                <div
                                  className="call-to-btn"
                                  data-sal="slide-up"
                                  data-sal-duration={400}
                                  data-sal-delay={350}
                                >
                                  <a
                                    className="btn-default btn-icon"
                                    // open in new tab
                                    target="_blank"
                                    href={`https://api.whatsapp.com/send/?phone=${creator.Phnum}&text=Hey%2C+We+have+a+brand+deal+for+${creator.CreatorName}&type=phone_number&app_absent=0`}
                                  >
                                    Personal Manager <FaWhatsapp></FaWhatsapp>
                                    {/* <i className="feather-arrow-right" /> */}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* End Service Box  */}
        </div>
      </div>
      {/* End Advance Tab-1  */}
    </>
  );
}
