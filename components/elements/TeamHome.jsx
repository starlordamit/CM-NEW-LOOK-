// src/components/Team.js:1
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaArrowRight,
} from "react-icons/fa";

export default function Team() {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTeamMembers() {
      try {
        const response = await fetch(
          "https://cms.dev80.tech/api/talent-descriptions?sort[0]=srno:asc&filters[onhome][$eq]=TRUE?&populate=*",
          { cache: "no-store" }
        );
        const json = await response.json();
        const data = json.data || [];
        const fetchedMembers = data.map((member, index) => {
          const attributes = member || {};
          const imageData =
            member.images?.["0"]?.formats?.large?.url ||
            "/uploads/default_avatar_photo_placeholder_profile_icon_vector_d60b794566.jpg";

          const imageUrl = imageData.startsWith("http")
            ? imageData
            : "https://cms.dev80.tech" + imageData;

          // Parse the social links
          const socialLinksArray = (attributes.socialslinks || "")
            .split(",")
            .map((link) => link.trim());

          return {
            id: member.id,
            name: attributes.CreatorName || "Team Member",
            title: attributes.Tagline || "Talented Individual",
            location: attributes.Location || "Unknown",
            imgSrc: imageUrl,
            salDelay: index * 100,
            socialLinks: socialLinksArray.slice(0, 4),
          };
        });
        setTeamMembers(fetchedMembers);
      } catch (error) {
        console.error("Error fetching team members:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchTeamMembers();
  }, []);

  const renderSocialIcon = (link) => {
    if (link.includes("instagram.com")) {
      return <FaInstagram />;
    }
    if (link.includes("youtube.com")) {
      return <FaYoutube />;
    }
    if (link.includes("twitter.com")) {
      return <FaTwitter />;
    }
    if (link.includes("facebook.com")) {
      return <FaFacebook />;
    }
    return null; // For unknown social links
  };
  const placeholderCards = new Array(teamMembers.length).fill(null);

  return (
    <div className="main-content">
      <div className="rainbow-team-area">
        <div className="wrapper">
          <div className="section-title">
            <h1 className="title">
              <span className="theme-gradient">Our Amazing Talents</span>
            </h1>
          </div>
          <div className="card-container">
            {placeholderCards.map((_, idx) => (
              <div key={idx} className="card">
                {loading ? (
                  <div className="placeholder-content">
                    <div className="placeholder-image" />
                    <div className="placeholder-text" />
                  </div>
                ) : (
                  idx < teamMembers.length && (
                    <div className="card-image">
                      <Image
                        alt={teamMembers[idx].name}
                        src={teamMembers[idx].imgSrc}
                        layout="fill"
                        objectFit="cover"
                        className="image"
                      />
                      <div className="card-hover-content">
                        <h2 className="name">{teamMembers[idx].name}</h2>
                        <div className="social-icons">
                          {teamMembers[idx].socialLinks.map((link, index) => (
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
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            ))}
            {!loading && (
              <div
                className="card explore-more-card"
                onClick={() => (window.location.href = "/talents")}
              >
                <div className="explore-icon-container">
                  <FaArrowRight className="explore-icon" />
                  <FaArrowRight className="explore-icon" />
                  <FaArrowRight className="explore-icon" />
                </div>
                <h2 className="explore-title">Explore More</h2>
                <p className="explore-subtitle">
                  Discover the rest of our team
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <style jsx>{`
        .main-content {
          background: var(--bg-color);
          color: var(--text-color);
          padding: 20px;
        }
        .section-title {
          text-align: center;
          margin-bottom: 30px;
        }
        .title {
          font-size: 2rem;
          font-weight: bold;
        }
        .card-container {
          display: flex;
          gap: 15px;
          overflow-x: auto;
          padding: 10px 0;
        }
        .card {
          position: relative;
          flex: 0 0 auto;
          width: 250px;
          height: 360px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          cursor: pointer;
          background: var(--card-bg);
          border-radius: 15px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .card:hover {
          transform: translateY(-5px);
        }
        .placeholder-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          padding: 10px;
          background: linear-gradient(135deg, #f0f0f0, #e0e0e0);
        }
        .placeholder-image {
          width: 80%;
          height: 60%;
          background: #ccc;
          border-radius: 12px;
          margin-bottom: 10px;
        }
        .placeholder-text {
          width: 60%;
          height: 10%;
          background: #ddd;
          border-radius: 5px;
        }
        .card-image {
          position: relative;
          flex: 1;
          border-radius: 15px;
          overflow: hidden;
        }
        .image {
          transition: transform 0.3s ease;
        }
        .card:hover .image {
          transform: scale(1.1);
        }
        .card-hover-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(0, 0, 0, 0.7);
          color: #fff;
          padding: 15px;
          opacity: 0;
          transition: opacity 0.3s ease;
          text-align: center;
        }
        .card:hover .card-hover-content {
          opacity: 1;
        }
        .name {
          font-size: 1.8rem;
          font-weight: bold;
          color: #fff;
          margin: 0;
        }
        .social-icons {
          margin-top: 10px;
          display: flex;
          justify-content: center;
          gap: 15px;
        }
        .social-icon {
          font-size: 1.5rem;
          color: #fff;

          padding: 10px;
          border-radius: 50%;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .social-icon:hover {
          transform: scale(1.2);
        }
        .explore-more-card {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          background-size: 300% 300%;
          color: #fff;
          animation: gradient-animation 10s ease infinite;
          padding: 25px;
          border-radius: 15px;

          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .explore-more-card:hover {
          transform: translateY(-5px);
        }

        .explore-icon-container {
          display: flex;
          justify-content: center;
          gap: 15px;
          margin-bottom: 15px;
        }

        .explore-icon {
          font-size: 2.5rem;
          color: rgba(255, 255, 255, 0.8);
          animation: bounce 1.2s ease infinite;
        }

        .explore-title {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin: 0;
          animation: text-glow 3s ease infinite;
        }

        .explore-subtitle {
          font-size: 1.2rem;
          text-align: center;
          margin-top: 10px;
          opacity: 0.9;
        }

        @keyframes gradient-animation {
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

        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes text-glow {
          0% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.4),
              0 0 20px rgba(255, 255, 255, 0.3);
          }
          50% {
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.7),
              0 0 25px rgba(255, 255, 255, 0.5);
          }
          100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.4),
              0 0 20px rgba(255, 255, 255, 0.3);
          }
        }

        :root {
          --bg-color: #f9f9f9;
          --text-color: #333;
          --card-bg: #fff;
        }

        [data-theme="dark"] {
          --bg-color: #1e1e1e;
          --text-color: #fff;
          --card-bg: #2e2e2e;
        }
      `}</style>
    </div>
  );
}
