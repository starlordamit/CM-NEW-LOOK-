/* app/Brands/page.jsx */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Brands() {
  const [logos, setLogos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API_URL}/Brands?populate=*`);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.statusText}`);
        const data = await res.json();
        const logoData = data?.data?.[0]?.Logo || [];
        setLogos(Array.isArray(logoData) ? logoData : []);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="rainbow-advance-tab-area rainbow-section mt--40">
      <div
        className="section-title text-center"
        data-sal="slide-up"
        data-sal-duration={700}
        data-sal-delay={100}
      >
        <h4 className="subtitle">
          <span className="theme-gradient">
            Our Official Clients & Partners
          </span>
        </h4>
        {/* <h2 className="title w-600 mb--20">Our Exclusive Talents</h2> */}
      </div>

      <div className="logo-grid">
        {logos.map((logo, idx) => {
          const imageUrl = logo?.url
            ? API_URL.replace("/api", "") + logo.url
            : "/placeholder-logo.png";

          return (
            <div className="logo-item" key={idx}>
              <Image
                src={imageUrl}
                alt={logo?.name || "Brand Logo"}
                width={120}
                height={60}
                className="logo-img"
              />
            </div>
          );
        })}
      </div>

      <style jsx>{`
        .simple-logos {
          // background: #f8f8f8;
          padding: 2rem;
          border-radius: 0.5rem;
          text-align: center;
        }
        .title {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: #333;
        }
        .logo-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }
        .logo-item {
          // background: #fff;
          // border: 1px solid #ddd;
          padding: 1rem;
          border-radius: 0.25rem;
          transition: transform 0.2s;
        }
        .logo-item:hover {
          transform: scale(0.95);
        }
        .logo-img {
          object-fit: contain;
        }
      `}</style>
    </div>
  );
}
