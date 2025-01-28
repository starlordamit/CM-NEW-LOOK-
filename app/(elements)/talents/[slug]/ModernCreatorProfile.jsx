// src/app/ModernCreatorProfile.jsx line 1
"use client";
import React, { useState } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import PlatformIcon from "./SvgIcons";
// import { FaArrowRight } from "react-icons/fa";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

import ProgressLine from "@/components/common/ProgressLine";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
ChartJS.register(ArcElement, Tooltip, Legend);

export default function ModernCreatorProfile({ creator }) {
  const [activeTab, setActiveTab] = useState("about");
  const [isDarkMode, setIsDarkMode] = useState(true);
  function formatNumber(num) {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  }
  const imageUrl = creator.images?.[0]?.formats?.large?.url
    ? ` ${API_URL.replace("/api", "")}${creator.images[0].formats.large.url}`
    : "/uploads/default_avatar_photo_placeholder_profile_icon_vector_d60b794566.jpg";
  const HH1 = creator.Handel || [];
  const ageGroups = creator.AudienceStats || [];
  const [unmutedIndex, setUnmutedIndex] = useState(null);
  const toggleMute = (index) =>
    setUnmutedIndex((prev) => (prev === index ? null : index));

  return (
    <>
      <div className="rainbow-advance-tab-area rainbow-section mt--40">
        {" "}
        <div className="container">
          <div
            className="advance-tab-four bg-color-blackest theme-shape"
            data-tabs="true"
          >
            <div className="row row--30 gy-5">
              <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt_md--30 mt_sm--30 d-flex flex-column justify-content-between order-2 order-lg-1">
                <div className="advance-tab-top">
                  <h5 className="subtitle">
                    <span className="theme-gradient ">Exclusive Talent</span>
                  </h5>
                  <h3 className="title">{creator.CreatorName}</h3>
                  {/* //justified text */}
                  <div
                    className="content1"
                    style={{
                      textAlign: "justify",
                    }}
                  >
                    <ReactMarkdown>{creator.Description}</ReactMarkdown>
                  </div>
                </div>
                {/* Creators Cards */}
                {/* src/components/CreatorCards.jsx line 1 */}
                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                {/* // src/components/CreatorCards.jsx line 1 */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    padding: "20px",
                    // justifyContent: "center",
                    // backgroundColor: isDarkMode ? "white" : "white",
                    transition: "background-color 0.3s ease",
                  }}
                >
                  {HH1.map((profile, index) => (
                    <div
                      key={index}
                      style={{
                        width: "240px",
                        borderRadius: "12px",
                        // backgroundColor: isDarkMode ? "#2a2a2a" : "#fff",
                        // boxShadow: isDarkMode
                        //   ? "0 0 10px rgba(0,0,0,0.5)"
                        //   : "0 2px 8px rgba(0,0,0,0.1)",
                        display: "flex",
                        alignItems: "center",
                        padding: "12px",
                        position: "relative",
                        transition:
                          "transform 0.3s ease, background-color 0.3s ease",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.transform = "translateY(-5px)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.transform = "translateY(0)")
                      }
                    >
                      <div style={{ position: "relative" }}>
                        <img
                          src={
                            `${API_URL.replace("/api", "")}` +
                            profile.ProfileImage.url
                          }
                          alt={profile.handle}
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            objectFit: "cover",
                            border: "2px solid #fff gradient",
                          }}
                        />

                        <div
                          style={{
                            position: "absolute",
                            bottom: "-5px",
                            right: "-5px",
                            borderRadius: "50%",
                            // background: isDarkMode ? "#333" : "#fff",
                            // padding: "5px",
                          }}
                        >
                          <PlatformIcon platform={profile.Platform} />
                        </div>
                      </div>
                      {/* <FaArrowRight
                        style={{
                          cursor: "pointer",
                        }}
                      /> */}
                      <div
                        style={{
                          flex: 1,
                          display: "flex",
                          flexDirection: "column",
                          marginLeft: "10px",
                        }}
                      >
                        <a href={profile.URL} target="_blank">
                          <span
                            style={{
                              fontWeight: "600",
                              fontSize: "1.7rem",

                              marginBottom: "2px",
                            }}
                          >
                            {profile.Name} 🔗
                          </span>
                        </a>
                        <div
                          style={{
                            fontSize: "1.4rem",
                          }}
                        >
                          {formatNumber(profile.Followers)}+
                          {profile.Platform === "YouTube"
                            ? " Subscribers"
                            : " Followers"}
                        </div>
                        {/* <div
                            style={{
                              fontSize: "1.4rem",
                            }}
                          >
                            {profile.Catagory}
                          </div> */}
                      </div>
                    </div>
                  ))}
                </div>
                {/* ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */}
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12 order-1 order-lg-2">
                <div className="tab-content">
                  <div
                    className="row row--0 about-wrapper"
                    id="case"
                    role="tabpanel"
                    aria-labelledby="case-tab"
                  >
                    <div className="col-lg-12">
                      <Image
                        className="thumbnail"
                        style={{ borderRadius: 10, alignContent: "center" }}
                        alt="advance-tab-image"
                        src={imageUrl}
                        width={400}
                        height={106}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ############################# RECENT BRAND COLLABS ############################# */}
          {/* <div
            className="advance-tab-four bg-color-blackest theme-shape mt--40"
            data-tabs="true"
          >
            <div className="row row--30 gy-5">
              <h4
                className="subtitle responsive-align "
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontFamily: "sans-serif",
                }}
              >
                <span className="theme-gradient"> Recent Brand Collabs</span>
              </h4>
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
                          gap: "10px",
                          marginRight: "10px",
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
                          playsInline
                          preload="metadata"
                          style={{ borderRadius: 15 }}
                        >
                          <source
                            src={`${API_URL.replace("/api", "")}${v.url}`}
                          />
                          Your browser does not support the video tag.
                        </video>
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
                          {isUnmuted ? " 🔊" : "🔇"}
                        </button>
                      </div>
                    );
                  })}
                </div>
                <style>
                  {`
                  .no-scrollbar {
                    scrollbar-width: none;
                    -ms-overflow-style: none;
                  }

                  .no-scrollbar::-webkit-scrollbar {
                    display: none;
                  }

                  .responsive-align {
                    justify-content: flex-start;
                  }

                  @media (min-width: 992px) {
                    .responsive-align {
                      justify-content: center;
                    }
                  }
                   
                `}
                </style>
              </div>
            </div>
          </div> */}

          {/* ############################# DEMOGRAPHIC STATS ################################ */}
          <div className="row row--20 mb--40 ">
            <div
              className="col-lg-6 col-md-6 col-sm-6 col-12 sal-animate"
              data-sal="slide-up"
              data-sal-duration={700}
            >
              <div className="service service__style--1 bg-color-blackest radius mt--40 text-left overflow-hidden theme-shape">
                <div className="content">
                  <h6 className="subtitle">
                    <span className="theme-gradient">Audience Age Details</span>
                  </h6>
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
                                    target="_blank"
                                    href={`https://api.whatsapp.com/send/?phone=${creator.Phnum}&text=Hey%2C+We+have+a+brand+deal+for+${creator.CreatorName}&type=phone_number&app_absent=0`}
                                  >
                                    Personal Manager
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
        </div>
      </div>
    </>
  );
}
