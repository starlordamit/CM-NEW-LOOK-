// File path: /pages/contact.js
"use client";
import React, { useRef, useState } from "react";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaTag,
  FaCommentDots,
} from "react-icons/fa";

const Result = () => {
  return (
    <p className="success-message">
      Your message has been successfully sent. We will contact you soon.
    </p>
  );
};

export default function Contact() {
  const [result, showResult] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(formRef.current);

    const formObject = {
      Name: formData.get("contact-name"),
      PhoneNumber: formData.get("contact-phone"),
      Email: formData.get("contact-email"),
      Subject: formData.get("subject"),
      Message: formData.get("contact-message"),
    };

    console.log("Form Submitted Data:", formObject);

    showResult(true);
    setTimeout(() => showResult(false), 5000);

    e.target.reset();
  };

  return (
    <div className="main-content">
      <div className="rainbow-contact-area rainbow-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb--40">
              <div className="section-title text-center">
                <h4 className="subtitle">
                  <span className="theme-gradient">Contact Us</span>
                </h4>
                <h2 className="title w-600 mb--20">Get in Touch with Us</h2>
                <p>We would love to hear from you. Fill out the form below!</p>
              </div>
            </div>
          </div>
          <div className="row row--15">
            <div className="col-lg-7">
              <div className="contact-card">
                <form
                  ref={formRef}
                  className="contact-form rainbow-dynamic-form"
                  onSubmit={handleSubmit}
                >
                  <div className="form-group with-icon">
                    {/* <FaUser className="input-icon" /> */}
                    <input
                      type="text"
                      name="contact-name"
                      id="contact-name"
                      placeholder="Your Full Name"
                      required
                    />
                  </div>
                  <div className="form-group with-icon">
                    {/* <FaPhone className="input-icon" /> */}
                    <input
                      type="text"
                      name="contact-phone"
                      id="contact-phone"
                      placeholder="Your Phone Number"
                      required
                    />
                  </div>
                  <div className="form-group with-icon">
                    <input
                      type="email"
                      id="contact-email"
                      name="contact-email"
                      placeholder="Your Email Address"
                      required
                    />
                  </div>
                  <div className="form-group with-icon">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group with-icon">
                    <textarea
                      name="contact-message"
                      id="contact-message"
                      placeholder="Your Message"
                      rows="5"
                      required
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
            </div>
            <div className="col-lg-5 ">
              <div className="text-content-style-1">
                <h3 className="text-title">We Value Your Voice</h3>
                <p>
                  Thank you for taking the time to reach out to us. Your
                  feedback and inquiries help us grow and provide better
                  services. Feel free to share your thoughts, and we'll ensure a
                  prompt response to address your concerns or suggestions.
                </p>
                <p>
                  Together, let's make something amazing happen. We're just a
                  message away!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
