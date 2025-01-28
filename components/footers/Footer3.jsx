"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { footerSections, socialLinks } from "@/data/footerLinks";
const API_URL = process.env.NEXT_PUBLIC_API_URL;
export default function Footer3() {
  return (
    <footer className="rainbow-footer footer-style-default footer-style-1">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="rainbow-footer-widget">
                <div className="logo">
                  <Link href={`/`}>
                    <Image
                      className="logo-light"
                      alt="Creatorsmela"
                      src={
                        API_URL.replace("/api", "") +
                        "/uploads/Creators_3436d4ebcf.svg"
                      }
                      width={288}
                      height={100}
                    />
                    <Image
                      className="logo-dark"
                      alt="Creatorsmela"
                      src={
                        API_URL.replace("/api", "") +
                        "/uploads/Creators_3436d4ebcf.svg"
                      }
                      width={288}
                      height={100}
                    />
                  </Link>
                </div>
                <h3 className="text-big">
                  India's Leading Talanet Management Agency
                </h3>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <div className="widget-menu-top">
                  <h4 className="title">Our Stars</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {footerSections[0].links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="widget-menu-bottom">
                  <h4 className="title">Contact Us</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {footerSections[1].links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-6 col-12">
              <div className="rainbow-footer-widget">
                <div className="widget-menu-top">
                  <h4 className="title">Company</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {footerSections[2].links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="widget-menu-bottom">
                  <h4 className="title">Solutions</h4>
                  <div className="inner">
                    <ul className="footer-link link-hover">
                      {footerSections[3].links.map((link, i) => (
                        <li key={i}>
                          <Link href={link.href}>{link.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="rainbow-footer-widget">
                <h4 className="title">Socials & Work</h4>
                <div className="inner">
                  <h6 className="subtitle">
                    2000+ Our clients are subscribe Around the World
                  </h6>
                  <ul className="social-icon social-default justify-content-start">
                    {socialLinks.map((link, index) => (
                      <li key={index}>
                        <a href={link.href}>
                          <i className={link.iconClass} />
                        </a>
                      </li>
                    ))}
                  </ul>
                  {/* <form
                    className="newsletter-form"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="form-group">
                      <input type="email" placeholder="Enter Your Email Here" />
                    </div>
                    <div className="form-group">
                      <button className="btn-default" type="submit">
                        Submit Now
                      </button>
                    </div>
                  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
