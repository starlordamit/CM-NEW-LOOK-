/* app/Brands/page.jsx line 1 */
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default function Brands() {
  const [logos, setLogos] = useState([]);
  const [loading, setLoading] = useState(true);

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
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const [loadedIndexes, setLoadedIndexes] = useState({});

  return (
    <div className="rainbow-advance-tab-area rainbow-section mt--40">
      <div className="section-title text-center">
        <h4 className="subtitle">
          <span className="theme-gradient">
            Our Official Clients & Partners
          </span>
        </h4>
      </div>

      {loading ? (
        <div className="logo-grid">
          {Array(6)
            .fill(null)
            .map((_, idx) => (
              <div className="logo-item" key={idx}>
                <div className="skeleton" />
              </div>
            ))}
        </div>
      ) : (
        <div className="logo-grid">
          {logos.map((logo, idx) => {
            const imageUrl = logo?.url
              ? API_URL.replace("/api", "") + logo.url
              : "/placeholder-logo.png";
            return (
              <div className="logo-item" key={idx}>
                {!loadedIndexes[idx] && <div className="skeleton" />}
                <Image
                  src={imageUrl}
                  alt={logo?.name || "Brand Logo"}
                  width={120}
                  height={60}
                  className="logo-img"
                  onLoadingComplete={() =>
                    setLoadedIndexes((prev) => ({ ...prev, [idx]: true }))
                  }
                />
              </div>
            );
          })}
        </div>
      )}

      <style jsx>{`
        .rainbow-advance-tab-area {
          padding: 60px 0;
        }
        .section-title .subtitle {
          font-size: 18px;
          margin-bottom: 30px;
        }
        .logo-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
        }
        .logo-item {
          padding: 1rem;
          transition: all 0.3s ease;
          position: relative;
        }
        .logo-img {
          filter: grayscale(100%) brightness(90%);
          opacity: 0.9;
          transition: all 0.3s ease;
          object-fit: contain;
        }
        .logo-item:hover .logo-img {
          filter: grayscale(0%) brightness(100%);
          opacity: 1;
          cursor: pointer;
        }
        .skeleton {
          width: 120px;
          height: 60px;
          background: #ccc;
          border-radius: 4px;
        }
        @media (max-width: 768px) {
          .logo-grid {
            gap: 1rem;
            padding: 10px;
          }
          .logo-item {
            padding: 0.5rem;
          }
        }
      `}</style>
    </div>
  );
}
