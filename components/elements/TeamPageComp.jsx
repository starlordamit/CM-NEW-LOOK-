"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import CounterComponent from "../common/Counter";
import { countersData, countersData2 } from "@/data/facts";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allCreatorsLoaded, setAllCreatorsLoaded] = useState(false);
  const ITEMS_PER_PAGE = 10;

  function formatNumber(num) {
    if (num >= 1_000_000_000) {
      return (num / 1_000_000_000).toFixed(1) + "B";
    } else if (num >= 1_000_000) {
      return (num / 1_000_000).toFixed(1) + "M";
    } else if (num >= 1_000) {
      return (num / 1_000).toFixed(1) + "K";
    }
    return num.toString();
  }

  useEffect(() => {
    async function fetchTeamMembers() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://cms.dev80.tech/api/talent-descriptions?pagination[pageSize]=${ITEMS_PER_PAGE}&pagination[page]=${currentPage}&populate[0]=Handels.Followers&populate=images`,
          { cache: "no-store" }
        );
        const json = await response.json();
        const data = json.data || [];
        setTotalPages(json.meta.pagination.pageCount);

        const fetchedMembers = data.map((member) => {
          const attributes = member || {};
          const imageData =
            attributes.images?.[0]?.formats?.large?.url ||
            "/uploads/default_avatar_photo_placeholder_profile_icon_vector_d60b794566.jpg";
          const imageUrl = imageData.startsWith("http")
            ? imageData
            : "https://cms.dev80.tech" + imageData;

          return {
            id: member.id,
            name: attributes.CreatorName || "Team Member",
            title: attributes.Tagline || "Talented Individual",
            location: attributes.Location || "Unknown",
            imgSrc: imageUrl,
            slug: attributes.slug,
            Reach: formatNumber(
              attributes.Handels.map((h) => h.Followers).reduce(
                (acc, curr) => acc + parseInt(curr, 10),
                100000
              )
            ),
          };
        });

        setTeamMembers((prev) => {
          const existingIds = new Set(prev.map((m) => m.id));
          return [
            ...prev,
            ...fetchedMembers.filter((m) => !existingIds.has(m.id)),
          ];
        });

        if (currentPage >= json.meta.pagination.pageCount)
          setAllCreatorsLoaded(true);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTeamMembers();
  }, [currentPage]);

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.scrollHeight / 1.5 &&
      !loading &&
      !allCreatorsLoaded
    ) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, allCreatorsLoaded]);

  return (
    <>
      <div className="main-content">
        <div
          className="section-title text-center"
          data-sal="slide-up"
          data-sal-duration={700}
          data-sal-delay={100}
        >
          <h4 className="subtitle">
            <span className="theme-gradient">Creator&apos;s Club</span>
          </h4>
          <h2 className="title w-600 mb--20">Our Exclusive Talents</h2>
        </div>
        <div className="card-container">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="card"
              onClick={() => (window.location.href = `/talents/${member.slug}`)}
            >
              <div className="card-image">
                <Image
                  alt={member.name}
                  src={member.imgSrc}
                  layout="fill"
                  objectFit="cover"
                  className="image"
                />
                <div className="card-overlay always-visible">
                  {/* <h2 className="title1 reach-text">Reach: {member.Reach}+</h2> */}
                  <p className="member-title">{member.title}</p>
                  {/* <button className="btn-default btn-icon">
                    Reach: {member.Reach}+
                    <i className="feather-arrow-right" />
                  </button> */}
                </div>
              </div>
            </div>
          ))}

          {/* Extra Card */}
          <div
            className="card extra-card bg-color-blackest theme-shape"
            onClick={() => alert("Redirect to Join Page")}
          >
            <div className="">
              <div className="card-overlay always-visible center-content">
                <h2 className="title1">Want To Join Club?</h2>
                <p className="">
                  Become part of our exclusive creators community.
                </p>
                <button className="btn-default btn-icon">
                  Join Us Now
                  <i className="feather-arrow-right" />
                </button>
              </div>
            </div>
          </div>

          {loading &&
            Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
              <div key={idx} className="card skeleton">
                <div className="skeleton-image" />
                <div className="skeleton-text"></div>
              </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .main-content {
          padding: 4rem 2rem;
          min-height: 100vh;
        }

        .title1 {
          font-size: 2rem;
        }

        .highlight {
          background: linear-gradient(45deg, #9d4edd, #c77dff, #e0aaff);
          background-size: 200% 200%;
          animation: gradientFlow 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          color: transparent;
        }

        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2.5rem;
          justify-content: center;
        }

        .card {
          border-radius: 25px;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          aspect-ratio: 9 / 16;
          animation: fadeIn 0.6s ease-out;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.01);
          border: 10px solid rgb(255, 255, 255);
          border-radius: 35px;
        }

        .card-image {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .image {
          transition: transform 0.4s ease;
          z-index: 1;
        }

        .card:hover .image {
          transform: scale(1.1);
        }

        .card-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;

          padding: 2rem;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: 100%;
          z-index: 2;
          transition: transform 0.4s ease;
        }

        /* For overlays that should always be visible above the image */
        .always-visible {
          transform: translateY(0) !important;
        }

        .reach-text {
          margin: 0 0 0.5rem;
          color: #fff;
        }

        .card.extra-card .card-image {
        }

        .center-content {
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .light-text {
          color: #f0f0f0;
          margin-bottom: 1.5rem;
        }

        .light-btn {
          background: #fff;
          color: #9d4edd;
        }

        .member-title {
          font-size: 1.4rem;
          font-weight: 600;
          opacity: 0.9;
          margin: 0 0 1rem;
          color: #fff;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }

        .btn-default.btn-small.view-more-btn {
          background: #fff;
          color: #000;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 25px;
          font-weight: 700;
          font-size: 1.1rem;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          display: flex;
          align-items: center;
          gap: 5px;
        }

        .skeleton {
          background: #16213e;
        }

        .skeleton-image {
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            #16213e 25%,
            #1f2b4e 50%,
            #16213e 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        .skeleton-text {
          height: 20px;
          margin: 10px;
          background: linear-gradient(
            90deg,
            #16213e 25%,
            #1f2b4e 50%,
            #16213e 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.5s infinite;
        }

        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }

        @media (max-width: 768px) {
          .title {
            font-size: 3rem;
          }

          .card-container {
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          }

          .name {
            font-size: 1.8rem;
          }

          .member-title {
            font-size: 1.2rem;
          }

          .social-icon {
            font-size: 1.4rem;
          }

          .view-profile-btn {
            font-size: 1rem;
            padding: 0.8rem 1.2rem;
          }
        }
      `}</style>
    </>
  );
}
