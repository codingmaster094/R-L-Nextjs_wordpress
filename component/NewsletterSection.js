
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import newslater_bell from "../public/img/newslater_bell.svg"
const NewsletterSection = ({className , container , industries_newsletter_background_image, global_acf_options}) => {
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
         background: `url(${industries_newsletter_background_image ? industries_newsletter_background_image : global_acf_options?.newsletter_background_image.url}) center / cover no-repeat`,
        }}>
          <div className="notifiction">
            <h2>
              <span>{global_acf_options?.newsletter_main_title}</span>
            </h2>
            <div className="noti-ball">
              <div className="noti-icon">
                <div className="noti-icon-b">
                <Image src={newslater_bell} alt="newslater_bell"/>
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
