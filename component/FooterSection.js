
"use client"
import React, { useState , useEffect } from "react";
import { useParams } from "next/navigation";
import { fetchHomedata } from "../untils/Fetchdata";

const Footer = () => {
  const router = useParams();
  const slug = router.slug;
  const [FooterData, setFooterData] = useState(null);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const result = await fetchHomedata(slug || 'home');
        setFooterData(result.global_acf_options);
      } catch (err) {
        setError("Failed to load home page data.");
      }
    };
    loadHomeData();
  }, []);

  return (
    <footer>
      <div className="container">
        <div className="f-wrapper ns-footer py">
          {/* Logo and Description */}
          <div className="logo-text">
            <div className="f-logo">
              <img src="/img/title-logo.png" alt="footer logo" />
            </div>
            <p dangerouslySetInnerHTML={{__html: FooterData?.footer_content}}>
            </p>
          </div>

          {/* Contact Information */}
          <div className="f-info">
            <div className="f-info-box">
              <p>{FooterData?.call_us_label}</p>
              <a href={FooterData?.phone_number.url}>{FooterData?.phone_number.title}</a>
            </div>
            <div className="f-info-box">
              <p>{FooterData?.email_us_label}</p>
              <a href={FooterData?.email_address.url}>{FooterData?.email_address.title}</a>
            </div>
            <div className="f-info-box">
              <p>{FooterData?.head_office_label}</p>
              <p>
                <span>{FooterData?.address.title}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright and Social Media Links */}
      <div className="copy-right">
        <div className="container">
          <div className="copy-right-wrapper">
            <p>
              ©2024 <span>R&L Packaging</span>
            </p>
            <div className="social-media">
              <a href={FooterData?.google_link.url} aria-label="Visit Twitter">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.1857 8.49756C18.2849 9.05686 18.3343 9.62356 18.3334 10.1913C18.3334 12.7266 17.4089 14.8703 15.8 16.3213H15.8022C14.3952 17.5952 12.4612 18.3327 10.168 18.3327C7.91331 18.3327 5.75099 17.4547 4.1567 15.892C2.56241 14.3292 1.66675 12.2097 1.66675 9.9996C1.66675 7.78953 2.56241 5.66997 4.1567 4.10722C5.75099 2.54446 7.91331 1.66651 10.168 1.66651C12.2781 1.64348 14.3157 2.42047 15.8553 3.8352L13.4282 6.21429C12.5507 5.39479 11.3799 4.94591 10.168 4.96433C7.95022 4.96433 6.06613 6.43095 5.39453 8.40589C5.03907 9.44087 5.03907 10.5615 5.39453 11.5964H5.39772C6.07251 13.5682 7.9534 15.0349 10.1712 15.0349C11.3167 15.0349 12.3007 14.7474 13.0637 14.2391H13.0605C13.5036 13.9514 13.8827 13.5788 14.1747 13.1435C14.4668 12.7083 14.6658 12.2196 14.7597 11.7068H10.168V8.4986L18.1857 8.49756Z"
                    fill="black"
                  />
                </svg>
              </a>
              <a href={FooterData?.instagram_link.url} aria-label="Visit Instagram">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_86_5292)">
                    <path
                      d="M14.1667 1.66602H5.83341C3.53223 1.66602 1.66675 3.5315 1.66675 5.83268V14.166C1.66675 16.4672 3.53223 18.3327 5.83341 18.3327H14.1667C16.4679 18.3327 18.3334 16.4672 18.3334 14.166V5.83268C18.3334 3.5315 16.4679 1.66602 14.1667 1.66602Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M14.5835 5.41602H14.5918M13.3335 9.47435C13.4363 10.1679 13.3179 10.8762 12.995 11.4985C12.672 12.1209 12.1611 12.6255 11.5349 12.9407C10.9086 13.256 10.1989 13.3657 9.50665 13.2543C8.81443 13.1429 8.17496 12.8161 7.6792 12.3203C7.18343 11.8245 6.85661 11.1851 6.74522 10.4929C6.63383 9.80064 6.74355 9.09093 7.05877 8.46466C7.37399 7.83839 7.87865 7.32747 8.50098 7.00455C9.12332 6.68163 9.83162 6.56317 10.5252 6.66602C11.2326 6.77092 11.8875 7.10057 12.3932 7.60627C12.8989 8.11197 13.2286 8.76691 13.3335 9.47435Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_86_5292">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
