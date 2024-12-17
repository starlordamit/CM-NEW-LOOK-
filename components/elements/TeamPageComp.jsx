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

  useEffect(() => {
    async function fetchTeamMembers() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://cms.dev80.tech/api/talent-descriptions?sort[0]=srno:asc&pagination[page]=${currentPage}&pagination[pageSize]=${ITEMS_PER_PAGE}&populate=*`,
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
    <>
      <div className="main-content">
        <div
          className="section-title text-center"
          data-sal="slide-up"
          data-sal-duration={700}
          data-sal-delay={100}
        >
          <h4 className="subtitle">
            <span className="theme-gradient">Creator's Club</span>
          </h4>
          <h2 className="title w-600 mb--20">Our Exclusive Talents</h2>
        </div>
        <div className="card-container">
          {teamMembers.map((member) => (
            <div key={member.id} className="card">
              <div className="card-image">
                <Image
                  alt={member.name}
                  src={member.imgSrc}
                  layout="fill"
                  objectFit="cover"
                  className="image"
                />
                <div className="card-overlay">
                  <div className="social-icons">
                    {member.socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span className="icon-wrapper">
                          {renderSocialIcon(link)}
                        </span>
                      </a>
                    ))}
                  </div>
                  <h2 className="title1">{member.name}</h2>
                  {/* <p className="member-title">{member.title}</p> */}
                  {/* <p className="member-location">{member.location}</p> */}

                  <button
                    className=" btn-default btn-small"
                    onClick={() =>
                      (window.location.href = `/talents/${member.slug}`)
                    }
                  >
                    View <i className="feather-arrow-right" />
                  </button>
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
            // box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            transition: all 0.4s ease;
            cursor: pointer;
            position: relative;
            aspect-ratio: 9 / 16;
            animation: fadeIn 0.6s ease-out;
          }

          .card:hover {
            transform: translateY(-10px) scale(1.02);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.4);
          }

          .card-image {
            position: relative;
            width: 100%;
            height: 100%;
          }

          .image {
            transition: transform 0.4s ease;
          }

          .card:hover .image {
            transform: scale(1.1);
          }

          .card-overlay {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(
              to top,
              rgba(22, 33, 62, 0.95) 10%,
              rgba(22, 33, 62, 0.8) 20%,
              rgba(22, 33, 62, 0) 70%
            );
            padding: 2rem;
            transform: translateY(100%);
            transition: transform 0.4s ease;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            height: 100%;
          }

          .card:hover .card-overlay {
            transform: translateY(0);
          }

          .name {
            font-size: 2.2rem;
            font-weight: 700;
            margin: 0 0 0.5rem;
            background: white;
            background-size: 200% 200%;
            animation: gradientFlow 3s ease infinite;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
          }

          .member-title {
            font-size: 1.4rem;
            font-weight: 600;
            opacity: 0.9;
            margin: 0 0 0.5rem;
            text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
          }

          .member-location {
            font-size: 1.1rem;
            opacity: 0.8;
            margin: 0 0 1.5rem;
            font-style: italic;
          }

          .social-icons {
            display: flex;
            gap: 1.2rem;
            // margin-bottom: 2rem;
          }

          .social-icon {
            color: #e0e0e0;
            font-size: 1.8rem;
            transition: transform 0.3s ease, color 0.3s ease;
          }

          .icon-wrapper {
            display: inline-block;
            padding: 0.6rem;
            border-radius: 50%;
            transition: all 0.5s ease;
          }

          .social-icon:hover .icon-wrapper {
            // font-size: 2rem;
            animation: pulse 2s infinite;
          }

          .view-profile-btn {
            background: linear-gradient(45deg, #9d4edd, #c77dff);
            color: #ffffff;
            border: none;
            padding: 1rem 1.5rem;
            border-radius: 25px;
            font-weight: 700;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .view-profile-btn:hover {
            background: linear-gradient(45deg, #c77dff, #e0aaff);
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(157, 78, 221, 0.4);
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

            .member-location {
              font-size: 1rem;
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
      </div>
      {/* Start Main Counter up-3 Area  */}
      <div className="rainbow-counterup-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="section-title text-center"
                data-sal="slide-up"
                data-sal-duration={700}
                data-sal-delay={200}
              >
                <h4 className="subtitle">
                  <span className="theme-gradient">Customizable counters</span>
                </h4>
                <h2 className="title w-600 mb--20">Counters Custom Elements</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {countersData.map((elm, i) => (
              <div key={i} className="col-lg-4 col-md-6 col-sm-6 col-12">
                <div className="count-box counter-style-2 color-variation text-center">
                  <div>
                    <div className="count-number">
                      <span className="counter">
                        <CounterComponent max={elm.number} />
                      </span>
                    </div>
                  </div>
                  <h5 className="title">{elm.title}</h5>
                  <p className="description">{elm.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* End Main Counter up-3 Area  */}
    </>
  );
}
