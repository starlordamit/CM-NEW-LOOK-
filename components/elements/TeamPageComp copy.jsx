// src/components/Team.js:1
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaYoutube, FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";
import { Button } from "bootstrap";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [allCreatorsLoaded, setAllCreatorsLoaded] = useState(false);
  const ITEMS_PER_PAGE = 25;

  useEffect(() => {
    async function fetchTeamMembers() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://cms.dev80.tech/api/talent-descriptions?pagination[page]=${currentPage}&pagination[pageSize]=${ITEMS_PER_PAGE}&populate=*`,
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
          const socialLinksArray = (attributes.socialslinks || "")
            .split(",")
            .map((link) => link.trim());

          return {
            id: member.id,
            name: attributes.CreatorName || "Team Member",
            title: attributes.Tagline || "Talented Individual",
            location: attributes.Location || "Unknown",
            imgSrc: imageUrl,
            socialLinks: socialLinksArray,
            slug: attributes.slug,
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

  const renderSocialIcon = (link) => {
    if (link.includes("instagram.com")) return <FaInstagram />;
    if (link.includes("youtube.com")) return <FaYoutube />;
    if (link.includes("twitter.com")) return <FaTwitter />;
    if (link.includes("facebook.com")) return <FaFacebook />;
    return null;
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
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
    <div className="main-content" data-theme="light">
      <style jsx>{`
        :root {
          --bg-light: #f5f5f5;
          --text-light: #333;
          --card-light: #fff;
          --skeleton-bg-light: #ddd;
          --skeleton-highlight-light: #eee;
          --shadow-light: rgba(0, 0, 0, 0.1);
          --accent-light: #e91e63;

          --bg-dark: #111;
          --text-dark: #eee;
          --card-dark: #222;
          --skeleton-bg-dark: #333;
          --skeleton-highlight-dark: #444;
          --shadow-dark: rgba(0, 0, 0, 0.5);
          --accent-dark: #e91e63;
        }

        [data-theme="light"] {
          --bg-color: var(--bg-light);
          --text-color: var(--text-light);
          --card-bg: var(--card-light);
          --skeleton-bg: var(--skeleton-bg-light);
          --skeleton-highlight: var(--skeleton-highlight-light);
          --shadow-color: var(--shadow-light);
          --accent-color: var(--accent-light);
        }

        [data-theme="dark"] {
          --bg-color: var(--bg-dark);
          --text-color: var(--text-dark);
          --card-bg: var(--card-dark);
          --skeleton-bg: var(--skeleton-bg-dark);
          --skeleton-highlight: var(--skeleton-highlight-dark);
          --shadow-color: var(--shadow-dark);
          --accent-color: var(--accent-dark);
        }

        .main-content {
          background: var(--bg-color);
          color: var(--text-color);
          padding: 40px 20px;
          transition: background 0.4s ease, color 0.4s ease;
        }

        .title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 50px;
          transition: color 0.4s ease;
        }

        .title .theme-gradient {
          background: linear-gradient(
            45deg,
            #ff6b6b,
            #f94d91,
            var(--accent-color)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .card-container {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        }

        .card {
          width: 250px;
          height: 360px;
          background: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          position: relative;
          transition: transform 0.4s ease, box-shadow 0.4s ease,
            background 0.4s ease;
          box-shadow: 0 8px 15px var(--shadow-color);
        }

        .card:hover {
          transform: translateY(-10px) scale(1.05);
          box-shadow: 0 12px 20px var(--shadow-color);
        }

        .card-image {
          position: relative;
          flex: 1;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .image {
          transition: transform 0.6s ease;
        }

        .card:hover .image {
          transform: scale(1.2);
        }

        .card-hover-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          color: #fff;
          padding: 20px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.4s ease, transform 0.4s ease;
          text-align: center;
        }

        .card:hover .card-hover-content {
          opacity: 1;
          transform: translateY(0);
        }

        .name {
          font-size: 1.4rem;
          font-weight: 700;
          margin: 0 0 10px;
          color: #fff;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-icon {
          font-size: 1.3rem;
          color: #fff;
          background: var(--accent-color);
          padding: 8px;
          border-radius: 50%;
          transition: background 0.4s ease, transform 0.4s ease;
        }

        .social-icon:hover {
          background: #fff;
          color: var(--accent-color);
          transform: scale(1.2) rotate(10deg);
        }

        .skeleton-visible {
          background: var(--card-bg);
          border-radius: 15px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 4px 6px var(--shadow-color);
        }

        .skeleton-image {
          width: 100%;
          height: 200px;
          background: linear-gradient(
            270deg,
            var(--skeleton-highlight),
            var(--skeleton-bg),
            var(--skeleton-highlight)
          );
          animation: shimmer 1.5s infinite linear;
        }

        .skeleton-text {
          height: 20px;
          margin: 10px;
          background: linear-gradient(
            270deg,
            var(--skeleton-highlight),
            var(--skeleton-bg),
            var(--skeleton-highlight)
          );
          border-radius: 5px;
          animation: shimmer 1.5s infinite linear;
        }

        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
      <h1 className="title">
        <span className="theme-gradient">Our Amazing Talents</span>
      </h1>
      <div className="card-container">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="card"
            href={`/talents/${member.slug}`}
          >
            <div className="card-image">
              <Image
                alt={member.name}
                src={member.imgSrc}
                layout="fill"
                objectFit="cover"
                className="image"
              />
              <div className="card-hover-content">
                <h2 className="name">{member.name}</h2>
                <div className="social-icons">
                  {member.socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                    >
                      {renderSocialIcon(link)}
                    </a>
                  ))}
                  <button
                    onClick={() => {
                      window.location.href = `/talents/${member.slug}`;
                    }}
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        {loading &&
          Array.from({ length: ITEMS_PER_PAGE }).map((_, idx) => (
            <div key={idx} className="card skeleton-visible">
              <div className="skeleton-image" />
              <div className="skeleton-text"></div>
            </div>
          ))}
      </div>
    </div>
  );
}
