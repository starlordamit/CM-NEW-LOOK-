// file: app/components/Team/Team.tsx line:1
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
// ${API_URL}
export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allCreatorsLoaded, setAllCreatorsLoaded] = useState(false);
  const ITEMS_PER_PAGE = 10;

  function formatNumber(num) {
    if (num >= 1_000_000_000) return (num / 1_000_000_000).toFixed(1) + "B";
    if (num >= 1_000_000) return (num / 1_000_000).toFixed(1) + "M";
    if (num >= 1_000) return (num / 1_000).toFixed(1) + "K";
    return num.toString();
  }

  useEffect(() => {
    async function fetchTeamMembers() {
      setLoading(true);
      try {
        const response = await fetch(
          `${API_URL}/talent-descriptions?pagination[pageSize]=${ITEMS_PER_PAGE}&pagination[page]=${currentPage}&populate[0]=Handels&populate=images`,
          { cache: "no-store" }
        );
        const json = await response.json();
        setTotalPages(json.meta.pagination.pageCount);

        const fetchedMembers = (json.data || []).map((member) => {
          const imageData =
            member?.images?.[0]?.formats?.large?.url ||
            "/uploads/default_avatar_photo_placeholder_profile_icon_vector_d60b794566.jpg";
          const imageUrl = imageData.startsWith("http")
            ? imageData
            : `${API_URL.replace("/api", "")}${imageData}`;

          const titleString = member.Tagline || "";
          const categories = titleString ? titleString.split(",") : [];

          return {
            id: member.id,
            name: member.CreatorName || "Team Member",
            categories,
            location: member.Location || "Unknown",
            imgSrc: imageUrl,
            slug: member.slug,
            Reach: formatNumber(
              (member.Handels || [])
                .map((h) => h.Followers)
                .reduce((acc, curr) => acc + parseInt(curr, 10), 100000)
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

        if (currentPage >= json.meta.pagination.pageCount) {
          setAllCreatorsLoaded(true);
        }
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
              // key={member.id}
              key={member.slug}
              className="card"
              onClick={() => (window.location.href = `/talents/${member.slug}`)}
            >
              <div className="card-redirect-icon">
                <FaArrowRight />
              </div>
              <div className="card-image">
                <div className="reach-badge">{member.Reach}+ Reach</div>
                <Image
                  alt={member.name}
                  src={member.imgSrc}
                  layout="fill"
                  objectFit="cover"
                  className="image"
                />
                <div className="card-overlay always-visible">
                  {member.categories.map((cat, index) => (
                    <span key={index} className="category-item">
                      {cat.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {loading &&
            Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
              <div key={idx} className="card skeleton">
                <div className="skeleton-image" />
                <div className="skeleton-text"></div>
              </div>
            ))}

          {/* {!loading && (
            <div className="card extra-card bg-color-blackest theme-shape">
              <div className="card-overlay center-content">
                <p className="title  ">
                  Become part of our exclusive creators community.
                </p>
                <button
                  className="btn-default btn-icon"
                  onClick={() => alert("Redirect to Join Page")}
                >
                  Apply Here
                  <i className="feather-arrow-right" />
                </button>
              </div>
            </div>
          )} */}
        </div>
      </div>

      {loading && <></>}

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
        .card-container {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 2.5rem;
          justify-content: center;
        }
        .card {
          border-radius: 35px;
          overflow: hidden;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          aspect-ratio: 9 / 16;
          animation: fadeIn 0.6s ease-out;
          background: #16213e;
        }
        .card:hover {
          transform: translateY(-10px) scale(1.01);
          border: 2px solid #fff;
          border-radius: 35px;
        }
        .card.extra-card:hover {
          transform: none;
          border: none;
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
          padding: 1rem;
          display: flex;
          flex-wrap: wrap;
          align-items: flex-end;
          gap: 0.5rem;
          z-index: 2;
          height: auto;
          transition: transform 0.4s ease;
        }
        .center-content {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          bottom: 0;
          top: 0;
        }
        .always-visible {
          transform: translateY(0) !important;
        }
        .category-item {
          border: 1px solid #fff;
          background: transparent;
          color: #fff;
          padding: 0.3rem 0.7rem;
          border-radius: 9px;
          font-size: 1rem;
          font-weight: 500;
        }
        .card-redirect-icon {
          position: absolute;
          top: 0.8rem;
          right: 0.8rem;
          font-size: 1.5rem;
          color: #fff;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 3;
        }
        .card:hover .card-redirect-icon {
          opacity: 1;
        }
        .card.extra-card .card-redirect-icon {
          display: none;
        }
        .reach-badge {
          position: absolute;
          top: 0.6rem;
          left: 0.6rem;
          background: transparent;
          color: #fff;
          padding: 0.4rem 0.8rem;
          border-radius: 10px;
          font-size: 1.4rem;
          font-weight: 600;
          z-index: 4;
        }
        .subtitle {
          margin-bottom: 1rem;
          line-height: 1.5;
          color: #fff;
          opacity: 0.9;
          text-align: center;
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

        /* Loading overlay */
        .loading-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.7);
          z-index: 9999;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .spinner {
          width: 50px;
          height: 50px;
          border: 6px solid #b5b5b5;
          border-top-color: #ffffff;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .card-redirect-icon {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
