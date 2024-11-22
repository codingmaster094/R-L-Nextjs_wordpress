"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import newslater_bell from "../public/img/newslater_bell.svg";
import infoDesk from "../public/img/infidesk.svg";

const NewsletterSection = ({
  className,
  container,
  industries_newsletter_background_image,
  global_acf_options,
}) => {
  const router = useParams();
  const slug = router.slug;

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
    setError("");
    setSuccess(false);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Simulate API call or handle subscription
    console.log("Subscribed with email:", email);
    setSuccess(true);
    setEmail(""); // Clear the input
  };

  return (
    <section
      className={
        className === "about-nl"
          ? "news-letter about-nl"
          : className === "indeurtries-nl"
          ? "news-letter indeurtries-nl"
          : "news-letter"
      }
    >
      <div className={container !== undefined ? "container" : ""}>
        <div
          className="news-wrapper"
          style={{
            background: `url(${
              industries_newsletter_background_image
                ? industries_newsletter_background_image
                : global_acf_options?.newsletter_background_image.url
            }) center / cover no-repeat`,
          }}
        >
          <div className="notifiction">
            <h2>
              <span>{global_acf_options?.newsletter_main_title}</span>
            </h2>
            <div className="noti-ball">
              <div className="noti-icon">
                <div className="noti-icon-b">
                  <Image src={newslater_bell} alt="newslater_bell" />
                </div>
              </div>
              <p>{global_acf_options?.newsletter_sub_title}</p>
            </div>
          </div>

          <div className="notification-email">
            <form onSubmit={handleSubmit}>
              <div className="f-fild">
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={email}
                  onChange={handleChange}
                />
                <button type="submit" className="btn">
                  Subscribe now
                  <Image
                    className="Newslater_image"
                    src={infoDesk}
                    alt="infoDesk icon"
                  />
                </button>
              </div>
            </form>
              {error && <div className="error-message">{error}</div>}
              {/* {success && (
                <div className="success-message">
                  Successfully subscribed to the newsletter!
                </div>
              )} */}
          </div>
        </div>
      </div>
      <style jsx>{`
        .error-message {
          color: red;
          font-size: 1rem;
          margin-top: 8px;
        }
        .success-message {
          color: green;
          font-size: 0.9rem;
          margin-top: 8px;
        }
      `}</style>
    </section>
  );
};

export default NewsletterSection;
