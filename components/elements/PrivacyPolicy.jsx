// File: src/components/PrivacyPolicy.js

import React from "react";
// import "./PrivacyPolicy.css"; // Make sure to create and import the CSS file

export default function PrivacyPolicy() {
  return (
    <section className="privacy-policy-section">
      <div className="rainbow-gradient-circle"></div>
      <div className="rainbow-gradient-circle theme-pink"></div>

      <div className="container mt-5 mb-5 justify-content-center">
        <div className="rbt-separator-mid"></div>

        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="last-updated">Last updated: 24th January 2025</p>
        </header>

        <article className="privacy-content">
          <p>
            Creators Mela (“Creators Mela” or “Company” or “We” or “Our” or
            “Us”), including its affiliates, respects your privacy and is
            committed to protecting the personal information of its users –
            buyers, sellers, collaborators, and other visitors browsing the
            website, as well as affiliates, influencers, and other collaborators
            interacting with Creators Mela (“Users” or “You”).
          </p>
          <p>
            We believe that you have a right to know our practices regarding the
            information we collect while accessing the offerings including
            Data-driven influencer marketing, social listening, creator
            discovery, workflow management, and reporting (“Services”) on
            Creators Mela’s websites, mobile sites, or mobile applications
            (“Platform”).
          </p>

          <h2>Information Collected</h2>
          <p>
            The information collected from You by the Company may constitute
            ‘personal information’ as defined under the Information Technology
            (Reasonable Security Practices and Procedures and Sensitive Personal
            Information) Rules, 2011 (“SPI Rules”).
          </p>
          <p>
            In the course of providing Services to You through the Platform, We
            may collect the following:
          </p>
          <ul>
            <li>
              Personally Identifiable Information such as your name, phone
              number, profile picture, username, password, and e-mail address
              when You register on the Platform.
            </li>
            <li>
              Information provided by You on your social media account, which
              will be linked with the account created by You on Our Platform.
            </li>
            <li>
              With Your permission, We may automatically collect some
              information about Your hardware devices when You access the
              Platform.
            </li>
            <li>
              We may also collect information about Your activity on the
              Platform, such as information about Your account usage, as well as
              information about how You interact with the Platform.
            </li>
          </ul>

          <h2>Use of Personal Information</h2>
          <p>
            We (and third-party data processors, vendors, and hosting partners
            who may be acting on Our behalf) may collect, store, and process
            Your personal data/information for the following reasons:
          </p>
          <ul>
            <li>
              To make this Platform customized, to provide content tailored to
              individual requirements.
            </li>
            <li>
              To understand Your needs and provide You with improved products
              and Services, newsletters, and other communications.
            </li>
            <li>
              To maintain any registered accounts that You may hold with Us and
              to provide You with updates or notifications of changes to Your
              account.
            </li>
            <li>
              For Our internal record-keeping requirements including collection
              of anonymized details about visitors to Our website to compile
              aggregate statistics or produce internal reports.
            </li>
            <li>
              With Your agreement, to contact You about Our or Our business
              partners’ promotions, products and Services or other information
              which We think You may find interesting, offers, or for customer
              satisfaction purposes.
            </li>
            <li>
              For market research, analysis, testing, monitoring, risk
              management, and administrative purposes.
            </li>
          </ul>
          <p>
            For more details, please refer to our full privacy policy at{" "}
            <a
              href="https://www.creatorsmela.com/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.creatorsmela.com/privacy-policy
            </a>
            .
          </p>
        </article>
      </div>
    </section>
  );
}
