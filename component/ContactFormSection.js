'use client';
import React, { useState } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Call from "../public/img/contact_call.svg";
import Mail from "../public/img/contact_mail.svg";

const ContactFormSection = ({
  main_title,
  sub_title,
  home_get_in_touch_title,
  content,
  home_get_in_touch_client_detail_group,
  home_get_in_touch_call_label,
  home_get_in_touch_email_label,
}) => {
  const router = useParams();
  const slug = router.slug;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [e.target.name]: "", // Clear specific error on change
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false);
    setErrorMessage("");
    setLoading(true);

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setLoading(false);
      return;
    }

    const endpoint = process.env.NEXT_PUBLIC_SENDER_MAIL || "";

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccess(true);
        setFormData({
          name: "",
          email: "",
          subject: "",
        });
      } else {
        setErrorMessage(
          `Message could not be sent: ${result.message || "Unknown error"}`
        );
      }
    } catch (error) {
      setErrorMessage(
        "There was an issue submitting the form. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact-form">
      <div className="container">
        <div className="contact-form-wrapper">
          <div className="cf-form">
            <div className="tag">
              <div className="tag-a">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
              <span>{sub_title}</span>
            </div>
            <h2
              dangerouslySetInnerHTML={{
                __html: main_title,
              }}
            ></h2>
            <form onSubmit={handleSubmit} method="POST">
              <div className="f-fild">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="error-message">{errors.name}</p>}
              </div>
              <div className="f-fild">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <p className="error-message">{errors.email}</p>
                )}
              </div>
              <div className="f-fild">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="f-fild-btn">
                <input
                  className="btn"
                  type="submit"
                  value="Request Now"
                  disabled={loading}
                />
                <span
                  className={`wpcf7-spinner`}
                ></span>
              </div>
                {
                  (errors.name || errors.email ) ?
                <div className="wpcf7-response-output-error">
                  One or more fields have an error. Please check and try again.
                </div>: ""
                }
            </form>
          </div>

          <div className="cf-content">
            <h3>{home_get_in_touch_title}</h3>
            <p
              dangerouslySetInnerHTML={{
                __html: content?.replace(/<p>/g, "").replace(/<\/p>/g, ""),
              }}
            />
            <div className="client-review">
              <div className="client-review-img">
                {home_get_in_touch_client_detail_group?.home_get_in_touch_client_detail_group_images &&
                  home_get_in_touch_client_detail_group?.home_get_in_touch_client_detail_group_images.map(
                    (val, i) => (
                      <Image
                        src={val.url}
                        alt="user review"
                        width={50}
                        height={50}
                      />
                    )
                  )}
              </div>
              <p>
                {
                  home_get_in_touch_client_detail_group?.home_get_in_touch_client_detail_group_text
                }
              </p>
            </div>

            <div className="form-info">
              <div className="call">
                <div className="icon">
                  <Image src={Call} alt="call" />
                </div>
                <div className="call-info-text">
                  <p>{home_get_in_touch_call_label}</p>
                  <h4>
                    <a href="tel:+604-758-6040">604-758-6040</a>
                  </h4>
                </div>
              </div>

              <div className="call">
                <div className="icon">
                  <Image src={Mail} alt="mail" />
                </div>
                <div className="call-info-text">
                  <p>{home_get_in_touch_email_label}</p>
                  <h4>
                    <a href="mailto:orders@rlpackaging.ca">
                      Sales@RLPackaging.ca
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .error-message {
          color: red;
          font-size: 1rem;
          margin-top: 0.25rem;
        }

         .wpcf7-spinner {
          visibility: ${ (!errors.name || !errors.email )? 'hidden' : 'visible'};
          display: inline-block;
          background-color: #23282d;
          opacity: 0.75;
          width: 24px;
          height: 24px;
          border: none;
          border-radius: 100%;
          margin-left: 10px;
          position: relative;
        }

        .wpcf7-spinner.visible {
          visibility: visible;
        }

        .wpcf7-spinner::before {
          content: "";
          position: absolute;
          background-color: #fbfbfc;
          top: 4px;
          left: 4px;
          width: 6px;
          height: 6px;
          border: none;
          border-radius: 100%;
          transform-origin: 8px 8px;
          animation-name: spin;
          animation-duration: 1000ms;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .wpcf7-spinner::before {
              animation-name: blink;
              animation-duration: 2000ms;
          }
        }


      `}</style>
    </section>
  );
};

export default ContactFormSection;
