'use client'
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
  const [success, setSuccess] = useState(false); // State to track submission success
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false); // State to track loading status


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccess(false); // Reset success state on new submission
    setErrorMessage("");
    setLoading(true); // Set loading to true when submission starts

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
          `Nachricht konnte nicht gesendet werden.: ${result.message}`
        );
      }
    } catch (error) {
      setErrorMessage(
        "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut."
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
                <input type="text" name="name" placeholder="Name"  value={formData.name} onChange={handleChange}/>
              </div>
              <div className="f-fild">
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange}/>
              </div>
              <div className="f-fild">
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="f-fild-btn">
              <input
              className="btn"
                    type="submit"
                    value=" Request Now"
                  />
              <span class="wpcf7-spinner"></span>
              </div>

              <div class="wpcf7-response-output">One or more fields have an error. Please check and try again.</div>

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
    </section>
  );
};

export default ContactFormSection;
