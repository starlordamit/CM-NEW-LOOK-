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

  const genderChartData = {
    labels: ["Male", "Female"],
    datasets: [
      {
        data: [
          creator.AudienceStats?.GenderDistribution?.Male || 60,
          creator.AudienceStats?.GenderDistribution?.Female || 40,
        ],
        backgroundColor: ["#4CAF50", "#FF4081"],
      },
    ],
  };

  const ageGroups = [
    {
      title: "13-17 Years",
      value: creator.AudienceStats?.AgeDistribution?.["13-17"] || 0,
      colorClass: "bar-color-1",
    },
    {
      title: "18-24 Years",
      value: creator.AudienceStats?.AgeDistribution?.["18-24"] || 0,
      colorClass: "bar-color-2",
    },
    {
      title: "25-34 Years",
      value: creator.AudienceStats?.AgeDistribution?.["25-34"] || 0,
      colorClass: "bar-color-3",
    },
    {
      title: "35-44 Years",
      value: creator.AudienceStats?.AgeDistribution?.["35-44"] || 0,
      colorClass: "bar-color-4",
    },
    {
      title: "45+ Years",
      value: creator.AudienceStats?.AgeDistribution?.["45+"] || 0,
      colorClass: "bar-color-1",
    },
  ];
  const testimonials = creator.Handels;
  console.log("Testimonials" + testimonials);
  const x = testimonials.map((item) => ({
    image: "https://cms.dev80.tech/" + item.ProfileImage?.url || "/default.jpg",
    description: item.Catagory,
    title: item.Platform,
    subtitle: `${item.Followers} Followers`,
  }));

  return (
    <div className="profile-page">
      {/* Header Section */}
      <div className="section-title text-center mb--40">
        <h4 className="subtitle">
          <span className="theme-gradient">Exclusive Talent</span>
        </h4>
        <h2 className="title w-600">{creator.CreatorName}</h2>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="row g-4 align-items-center">
          <div className="col-md-5 text-center">
            <Image
              src={`https://cms.dev80.tech/${creator.images?.[0]?.formats?.medium?.url}`}
              alt={creator.CreatorName}
              width={300}
              height={400}
              style={{ borderRadius: 10 }}
              className="profile-image"
            />
          </div>
          <div className="col-md-7">
            <h4 className="title">About {creator.CreatorName}</h4>
            <p className="description">{creator.Description}</p>

            {/* Social Links */}
            <div className="social-links mt-4">
              {socialLinksArray.map((social, index) => {
                const { icon, username } = getSocialDetails(social);
                return (
                  <a
                    key={index}
                    href={social.trim()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    {icon}
                    <span>{username}</span>
                  </a>
                );
              })}
            </div>

            {/* Contact Button */}
            <Link href="/contact" className="btn-default mt-4">
              Connect with {creator.CreatorName}
            </Link>
          </div>
        </div>
      </div>
      {/* END PROFILE SECTION */}

      {/* START STATS AND WORK */}
      <div>
        <div className="rainbow-gradient-circle" />
        <div className="rainbow-gradient-circle theme-pink" />
      </div>
      {/* <Hero /> */}
      <About />
      {/* END STATS AND WORK */}

      {/* Styles */}
      <style jsx>{`
        .profile-page {
          font-family: "Inter", sans-serif;
          padding: 20px;
        }
        .profile-image {
          border-radius: 10px;
          object-fit: cover;
          width: 100%;
          max-width: 300px;
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-right: 10px;
          color: #059dff;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .social-links a:hover {
          color: #036bbd;
        }
        .btn-default {
          display: inline-block;
          padding: 10px 20px;
          background-color: #059dff;
          color: white;
          border-radius: 5px;
          text-decoration: none;
          transition: background-color 0.3s ease;
        }
        .btn-default:hover {
          background-color: #036bbd;
        }
        .chart-box {
          padding: 20px;
          border: 1px solid #e4e4e4;
          border-radius: 10px;
          background-color: #f9f9f9;
        }
        .progress-bar-container {
          margin-bottom: 15px;
        }
        .progress-bar {
          background-color: #ddd;
          border-radius: 10px;
          overflow: hidden;
          height: 20px;
        }
        .progress-bar div {
          background-color: #059dff;
          height: 100%;
          text-align: center;
          color: white;
          font-size: 0.9rem;
          line-height: 20px;
        }
      `}</style>
    </div>
  );
}
