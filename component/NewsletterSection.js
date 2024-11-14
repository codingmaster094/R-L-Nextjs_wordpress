
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
const NewsletterSection = ({className , container , global_acf_options}) => {
  const router = useParams();
  const slug = router.slug;
  return (
    <section 
      className={
        className === 'about-nl' ? 'news-letter about-nl' 
        : className === 'indeurtries-nl' ? 'news-letter indeurtries-nl' 
        : 'news-letter'
      }
    >
      <div 
      className={
        container != undefined ? 'container' : ''
      }>
        <div className="news-wrapper"  style={{
         background: `url(${global_acf_options?.newsletter_background_image.url}) center / cover no-repeat`,
        }}>
          <div className="notifiction">
            <h2>
              <span>{global_acf_options?.newsletter_main_title}</span>
            </h2>
            <div className="noti-ball">
              <div className="noti-icon">
                <div className="noti-icon-b">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.42895 2.41331C6.55502 2.26284 6.61707 2.06894 6.60178 1.87322C6.58649 1.67751 6.49508 1.49559 6.34716 1.36653C6.19924 1.23746 6.00662 1.17153 5.81064 1.1829C5.61466 1.19426 5.43095 1.28202 5.29895 1.42731L4.00695 2.90731C3.27433 3.74688 2.86018 4.81728 2.83695 5.93131L2.77995 8.65031C2.77791 8.74881 2.79529 8.84673 2.8311 8.93851C2.86691 9.03028 2.92045 9.1141 2.98866 9.18518C3.05686 9.25627 3.1384 9.31322 3.22861 9.35279C3.31883 9.39236 3.41595 9.41378 3.51445 9.41581C3.61294 9.41785 3.71086 9.40047 3.80264 9.36466C3.89441 9.32885 3.97823 9.27531 4.04932 9.2071C4.1204 9.1389 4.17735 9.05736 4.21692 8.96715C4.25649 8.87693 4.27791 8.77981 4.27995 8.68131L4.33595 5.96331C4.35199 5.20104 4.63552 4.46867 5.13695 3.89431L6.42895 2.41331Z"
                      fill="#EE0000"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.23695 7.7C6.30411 6.63014 6.77647 5.62608 7.55787 4.89224C8.33928 4.15839 9.37098 3.74993 10.4429 3.75H10.9999V3C10.9999 2.73478 11.1053 2.48043 11.2928 2.29289C11.4804 2.10536 11.7347 2 11.9999 2C12.2652 2 12.5195 2.10536 12.7071 2.29289C12.8946 2.48043 12.9999 2.73478 12.9999 3V3.75H13.5569C14.6289 3.74993 15.6606 4.15839 16.442 4.89224C17.2234 5.62608 17.6958 6.63014 17.7629 7.7L17.9839 11.234C18.0694 12.5812 18.5217 13.8794 19.2919 14.988C19.4513 15.2171 19.5487 15.4835 19.5746 15.7613C19.6005 16.0392 19.5541 16.319 19.4398 16.5736C19.3256 16.8281 19.1474 17.0488 18.9226 17.2142C18.6978 17.3795 18.434 17.4838 18.1569 17.517L14.7499 17.925V19C14.7499 19.7293 14.4602 20.4288 13.9445 20.9445C13.4288 21.4603 12.7293 21.75 11.9999 21.75C11.2706 21.75 10.5711 21.4603 10.0554 20.9445C9.53968 20.4288 9.24995 19.7293 9.24995 19V17.925L5.84295 17.516C5.56604 17.4827 5.30246 17.3784 5.0778 17.2131C4.85313 17.0478 4.67503 16.8273 4.5608 16.5729C4.44657 16.3184 4.40009 16.0388 4.42587 15.7611C4.45165 15.4834 4.54883 15.2171 4.70795 14.988C5.47819 13.8794 5.93052 12.5812 6.01595 11.234L6.23695 7.7ZM10.4429 5.25C9.75252 5.24992 9.08802 5.51297 8.58473 5.98561C8.08144 6.45825 7.7772 7.10493 7.73395 7.794L7.51395 11.328C7.41113 12.9487 6.86681 14.5105 5.93995 15.844C5.92842 15.8606 5.92137 15.8798 5.91949 15.8999C5.9176 15.92 5.92095 15.9403 5.9292 15.9587C5.93746 15.9771 5.95034 15.9931 5.96659 16.005C5.98284 16.017 6.00191 16.0246 6.02195 16.027L9.75895 16.476C11.2479 16.654 12.7519 16.654 14.2409 16.476L17.978 16.027C17.998 16.0246 18.0171 16.017 18.0333 16.005C18.0496 15.9931 18.0624 15.9771 18.0707 15.9587C18.0789 15.9403 18.0823 15.92 18.0804 15.8999C18.0785 15.8798 18.0715 15.8606 18.0599 15.844C17.1334 14.5104 16.5895 12.9486 16.4869 11.328L16.266 7.794C16.2227 7.10493 15.9185 6.45825 15.4152 5.98561C14.9119 5.51297 14.2474 5.24992 13.5569 5.25H10.4429ZM11.9999 20.25C11.3099 20.25 10.7499 19.69 10.7499 19V18.25H13.2499V19C13.2499 19.69 12.6899 20.25 11.9999 20.25Z"
                      fill="#EE0000"
                    />
                    <path
                      d="M17.643 1.35471C17.4932 1.48548 17.4015 1.6704 17.388 1.8688C17.3745 2.0672 17.4403 2.26285 17.571 2.41271L18.863 3.89271C19.3643 4.46747 19.6475 5.20022 19.663 5.96271L19.72 8.67971C19.7241 8.87862 19.8071 9.06776 19.9506 9.2055C20.0942 9.34325 20.2866 9.41832 20.4855 9.41421C20.6844 9.4101 20.8736 9.32714 21.0113 9.18358C21.1491 9.04002 21.2241 8.84762 21.22 8.64871L21.163 5.93071C21.1398 4.81668 20.7256 3.74628 19.993 2.90671L18.701 1.42671C18.5702 1.2769 18.3853 1.18516 18.1869 1.17165C17.9885 1.15815 17.7929 1.224 17.643 1.35471Z"
                      fill="#EE0000"
                    />
                  </svg>
                </div>
              </div>
              <p>{global_acf_options?.newsletter_sub_title}</p>
            </div>
          </div>

          <div className="notification-email">
            <form action="" dangerouslySetInnerHTML={{__html : global_acf_options?.newsletter_form_shortcode.post_content}} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;