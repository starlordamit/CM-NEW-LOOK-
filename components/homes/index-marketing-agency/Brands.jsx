"use client"; // Add this at the top to mark it as a Client Component

import React from "react";
import Image from "next/image";
import { brandImages } from "@/data/brands";

export default function Brands() {
  return (
    <div className="rainbow-brand-area rainbow-section-gap">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div
              className="section-title text-center"
              data-sal="slide-up"
              data-sal-duration={700}
              data-sal-delay={100}
            >
              <h4 className="subtitle">
                <span className="theme-gradient">Awesome Clients</span>
              </h4>
              <h2 className="title w-600 mb--20">
                Our Trusted Clients & Partners
              </h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 mt--10">
            <ul className="brand-list brand-style-2">
              {brandImages.map((image, index) => (
                <li key={index} className="brand-item">
                  <a href="#" className="brand-link">
                    <div className="brand-image-wrapper">
                      <Image
                        alt={image.alt}
                        src={image.src}
                        layout="fill"
                        objectFit="contain"
                        className="brand-image"
                      />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .brand-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .brand-item {
          position: relative;
          width: 150px;
          height: 80px;
          overflow: hidden;
          transition: background-color 0.3s;
          border-radius: 8px;
        }

        .brand-item:hover {
          background-color: transparent;
        }

        .brand-link {
          display: block;
          width: 100%;
          height: 100%;
        }

        .brand-image-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          filter: grayscale(100%);
          transition: filter 0.3s ease;
        }

        .brand-item:hover .brand-image-wrapper {
          filter: grayscale(0%);
        }
      `}</style>
    </div>
  );
}
