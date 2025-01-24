// File path: /pages/contact.js
"use client";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Result = () => {
  return (
    <p className="success-message">
      Your message has been successfully sent. We will contact you soon.
    </p>
  );
};

export default function Contact() {
  const [result, showResult] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const captchaRef = useRef(null); // reCAPTCHA reference
  const formRef = useRef();

  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaVerified) {
      alert("Please complete the CAPTCHA verification.");
      return;
    }

    // Simulating form submission for a showcase
    const formData = new FormData(formRef.current);

    console.log("Form Submitted Data:", {
      Name: formData.get("contact-name"),
      PhoneNumber: formData.get("contact-phone"),
      Email: formData.get("contact-email"),
      ProfileLinks: formData.get("subject"),
      Description: formData.get("contact-message"),
    });

    // Simulate success message
    showResult(true);
    setTimeout(() => showResult(false), 5000);

    // Reset form and CAPTCHA
    e.target.reset();
    captchaRef.current.reset();
    setCaptchaVerified(false);
  };

  return (
    <div className="main-content">
      <div className="rainbow-contact-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <div className="section-title text-center">
                <h4 className="subtitle">
                  <span className="theme-gradient">Contact Form</span>
                </h4>
                <h2 className="title w-600 mb--20">
                  Our Contact Address Here.
                </h2>
              </div>
            </div>
          </div>
          <div className="row row--15">
            <div className="col-lg-7">
              <form
                ref={formRef}
                className="contact-form-1 rainbow-dynamic-form"
                onSubmit={handleSubmit}
              >
                <div className="form-group">
                  <input
                    type="text"
                    name="contact-name"
                    id="contact-name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="contact-phone"
                    id="contact-phone"
                    placeholder="Phone Number"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    id="contact-email"
                    name="contact-email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Your Subject or Profile Links"
                    required
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="contact-message"
                    id="contact-message"
                    placeholder="Your Message"
                    required
                  />
                </div>
                <div className="form-group">
                  <ReCAPTCHA
                    ref={captchaRef}
                    sitekey="6LeKusEqAAAAAFlgV-BjyXMcdykjjjspVpHiJN7G" // Use your correct v2 Checkbox site key
                    onChange={handleCaptchaChange}
                  />
                </div>
                <div className="form-group">
                  <button
                    name="submit"
                    type="submit"
                    id="submit"
                    className="btn-default btn-large rainbow-btn"
                  >
                    <span>Submit Now</span>
                  </button>
                </div>
                <div className="form-group">{result ? <Result /> : null}</div>
              </form>
            </div>
            <div className="col-lg-5 mt_md--30 mt_sm--30">
              <div className="google-map-style-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16318479.620454589!2d72.1025874717887!3d20.73620678619067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e1!3m2!1sen!2sin!4v1736277285797!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
