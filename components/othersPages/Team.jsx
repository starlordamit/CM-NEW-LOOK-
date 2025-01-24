// File path: /pages/contact.js
"use client";
import React, { useRef, useState } from "react";
import { FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

// Popup Component
const Popup = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <p>{message}</p>
        <button onClick={onClose} className="popup-close-button">
          Close
        </button>
      </div>
      <style jsx>{`
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
        }
        .popup-content {
          background: #fff;
          padding: 20px 30px;
          border-radius: 8px;
          text-align: center;
          max-width: 400px;
          width: 90%;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .popup-close-button {
          margin-top: 15px;
          padding: 8px 16px;
          background-color: #4caf50;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .popup-close-button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

// Loading Spinner Component
const LoadingSpinner = () => {
  return (
    <div className="spinner">
      {/* Simple CSS Spinner */}
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
      <style jsx>{`
        .spinner {
          width: 40px;
          height: 40px;
          position: relative;
          margin: 0 auto;
        }
        .double-bounce1,
        .double-bounce2 {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background-color: #4caf50;
          opacity: 0.6;
          position: absolute;
          top: 0;
          left: 0;
          animation: bounce 2s infinite ease-in-out;
        }
        .double-bounce2 {
          animation-delay: -1s;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: scale(0);
          }
          50% {
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

// Success Message Component (Optional, if you still want to show it in the form)
const Result = () => {
  return (
    <p className="success-message">
      Your message has been successfully sent. We will contact you soon.
    </p>
  );
};

// Error Message Component
const ErrorMessage = ({ message }) => {
  return <p className="error-message">{message}</p>;
};

export default function Contact() {
  const [loading, setLoading] = useState(false); // Loading state
  const [popup, setPopup] = useState({ show: false, message: "" }); // Popup state
  const [error, setError] = useState(null); // Error state
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error state
    setLoading(true); // Start loading

    const formData = new FormData(formRef.current);

    const formObject = {
      Name: formData.get("contact-name"),
      PhoneNumber: formData.get("contact-phone"),
      Email: formData.get("contact-email"),
      ProfileLinks: formData.get("subject"),
      Description: formData.get("contact-message"),
      formtype: "contact",
    };

    // If ProfileLinks is not collected from the form, set it programmatically
    const payload = {
      data: {
        ...formObject,
        ProfileLinks: "https://example.com/profile", // Set your desired ProfileLinks here
      },
    };

    try {
      const response = await fetch(
        "https://cms.creatorsmela.com/api/join-uses",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        // Handle HTTP errors
        const errorData = await response.json();
        throw new Error(errorData.message || "Something went wrong!");
      }

      // Optionally, parse the response data
      const resultData = await response.json();
      console.log("API Response:", resultData);

      setLoading(false); // Stop loading
      formRef.current.reset(); // Reset the form

      // Show success popup
      setPopup({
        show: true,
        message:
          "Your message has been successfully sent. We will contact you soon.",
      });
    } catch (err) {
      console.error("Submission Error:", err);
      setLoading(false); // Stop loading
      setError(err.message);
    }
  };

  const closePopup = () => {
    setPopup({ show: false, message: "" });
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
                      disabled={loading} // Disable button while loading
                    >
                      {loading ? (
                        <>
                          <LoadingSpinner /> {/* Show spinner */}
                          <span style={{ marginLeft: "10px" }}>
                            Submitting...
                          </span>
                        </>
                      ) : (
                        <span>Submit Now</span>
                      )}
                    </button>
                  </div>
                  <div className="form-group">
                    {error ? <ErrorMessage message={error} /> : null}
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-5">
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

                {/* Contact Information Section */}
                <div className="contact-info">
                  <div className="contact-item mb--10 flex-align-center gap--10">
                    <FaEnvelope
                      className="contact-icon"
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "10px",
                        gap: "10px",
                      }}
                    />
                    <a href="mailto:contact@creatorsmela.com">
                      contact@creatorsmela.com
                    </a>
                  </div>
                  <div className="contact-item">
                    <FaPhone
                      className="contact-icon"
                      style={{
                        fontSize: "1.5rem",
                        marginRight: "10px",
                        gap: "10px",
                      }}
                    />
                    <a href="tel:+916377033934">+91 6377033934</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {popup.show && <Popup message={popup.message} onClose={closePopup} />}

      {/* Optional: Existing Success Message in Form */}
      {/* {result ? <Result /> : null} */}

      <style jsx>{`
        /* Optional: Style for success and error messages */
        .success-message {
          color: green;
          margin-top: 10px;
          text-align: center;
        }
        .error-message {
          color: red;
          margin-top: 10px;
          text-align: center;
        }
      `}</style>
    </div>
  );
}
