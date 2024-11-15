"use client";
import React, { useState, useEffect } from "react";
import Testimonial_Caraousel from "../../../component/Testimonial_Caraousel";
import Image from "next/image";
import { useParams } from "next/navigation";
import { fetchHomedata } from "../../../untils/Fetchdata";
import HeroSection from "../../../component/HeroSection";

const Page = () => {
  const [about, setabout] = useState(null);
  const [Newslater, setNewslater] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("");

  useEffect(() => {
    if (
      about?.about_all_specialties_2 &&
      about.about_all_specialties_2.length > 0
    ) {
      setActiveTab(
        about.about_all_specialties_2[0].about_all_specialties_2_title
      );
    }
  }, [about]);

  // Function to handle tab click
  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const router = useParams();
  const slug = router.slug;

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const result = await fetchHomedata(slug);
        setabout(result.page_acf_fields);
        setNewslater(result.global_acf_options);
      } catch (err) {
        setError("Failed to load home page data.");
      }
    };
    loadHomeData();
  }, [slug]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <HeroSection
        bg_image={about?.about_hero_background_image.url}
        main_title={about?.about_hero_main_title}
        sub_title={about?.about_hero_sub_title}
        content={about?.about_hero_content}
        placeholder_title={about?.about_hero_placeholder_title}
        about_hero_box_left_section={about?.about_hero_box_left_section}
        about_hero_box_right_section={about?.about_hero_box_right_section}
        about_hero_box_center_image={about?.about_hero_box_center_image}
      />

      <section className="about-us py">
        <div className="container">
          <div className="about-us-wrapper">
            <div className="tag">
              <div className="tag-a">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
              <span>{about?.about_detail_sub_title}</span>
              <div className="tag-b">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
            <h2>
              <span>{about?.about_detail_main_title}</span>
            </h2>

            <div className="sub-text">
              <p
                dangerouslySetInnerHTML={{
                  __html: about?.about_detail_content
                    ?.replace(/<p>/g, "")
                    .replace(/<\/p>/g, ""),
                }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="specialties-about py py-b">
        <div className="container">
          <Image
            src={about?.about_specialties_background_image.url}
            width={about?.about_specialties_background_image.width}
            height={about?.about_specialties_background_image.height}
            alt={about?.about_specialties_background_image.title}
            className="sp-about-bg"
          />
          <div className="sp-about-wrapper">
            <div className="tag">
              <div className="tag-a">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
              <span>{about?.about_specialties_sub_title}</span>
              <div className="tag-b">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
            </div>
            {/* <p
                dangerouslySetInnerHTML={{
                  __html: about?.about_detail_content
                    ?.replace(/<p>/g, "")
                    .replace(/<\/p>/g, ""),
                }}
              /> */}
            <h2
              dangerouslySetInnerHTML={{
                __html: about?.about_specialties_main_title,
              }}
            ></h2>
            <div className="sp-about-boxs">
              {about?.about_all_specialties &&
                about?.about_all_specialties.map((val, i) => {
                  return (
                    <div className="sp-about-box" key={i}>
                      <div className="sp-about-b">
                        <div
                          className="sp-about-icon"
                          dangerouslySetInnerHTML={{
                            __html: val.about_all_specialties_icon,
                          }}
                        ></div>
                        <div className="sp-title">
                          <h3>{val.about_all_specialties_title}</h3>
                          <p
                            dangerouslySetInnerHTML={{
                              __html: val.about_all_specialties_content
                                ?.replace(/<p>/g, "")
                                .replace(/<\/p>/g, ""),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>

      <section className="py specialties-tab">
        <div className="container">
          <div className="specialties-tab-wrapper">
            <div className="tag">
              <div className="tag-a">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
              <span>{about?.about_specialties_2_sub_title}</span>
            </div>
            <h2
              dangerouslySetInnerHTML={{
                __html: about?.about_specialties_2_main_title,
              }}
            />
            <div className="tabs sp-tabs">
              {/* Tab Links */}
              <div className="tab-links">
                {about?.about_all_specialties_2 &&
                  about.about_all_specialties_2.map((tab, i) => (
                    <a
                      key={tab.about_all_specialties_2_title}
                      href={`#${tab.about_all_specialties_2_title}`}
                      className={`tab-link ${
                        activeTab === tab.about_all_specialties_2_title
                          ? "active"
                          : ""
                      }`}
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        handleTabClick(tab.about_all_specialties_2_title);
                      }}
                    >
                      {i + 1}.{tab.about_all_specialties_2_title}
                    </a>
                  ))}
              </div>

              {/* Tab Content */}
              <div className="tab-content">
                {about?.about_all_specialties_2 &&
                  about.about_all_specialties_2.map((tab) => (
                    <div
                      key={tab.about_all_specialties_2_title}
                      id={tab.about_all_specialties_2_title}
                      className={`tab-pane ${
                        activeTab === tab.about_all_specialties_2_title
                          ? "active"
                          : ""
                      }`}
                    >
                      <div className="tab-pane-b">
                        <div className="title">
                          <h3>{tab.about_all_specialties_2_title}</h3>
                        </div>
                        <div
                          className="sub-text"
                          dangerouslySetInnerHTML={{
                            __html: tab.about_all_specialties_2_content,
                          }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pr-testimonal py">
        <div className="container">
          <div className="pr-testimonal-wrapper">
            <div className="tag">
              <div className="tag-a">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
              </div>
              <span>{about?.about_testimonial_sub_title}</span>
            </div>
            <h2
              dangerouslySetInnerHTML={{
                __html: about?.about_testimonial_main_title,
              }}
            />
          </div>
          <Testimonial_Caraousel
            AboutAllTestimonial={about?.about_all_testimonial}
          />
        </div>
      </section>

      <section
        className="about-team py"
        style={{
          background: `url(${about?.about_team_background_image}) center/cover no-repeat`,
        }}
      >
        <div className="container">
          <div className="about-team-wrapper">
            <div className="about-team-text">
              <div className="title">
                <div className="tag">
                  <div className="tag-a">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                  <span>{about?.about_team_sub_title}</span>
                </div>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: about?.about_team_main_title,
                  }}
                ></h2>
              </div>
              <div className="sub-text">
                <p
                  dangerouslySetInnerHTML={{
                    __html: about?.about_team_content,
                  }}
                ></p>
              </div>
              <a href={about?.about_team_button.url} className="btn">
                {about?.about_team_button.title}
                <svg
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.01886 0.825924L4.03969 0.808372L4.06692 0.808277L10.7091 0.78484C14.3579 0.770786 17.4795 0.766031 17.6374 0.775589L17.6386 0.775682C17.823 0.789873 17.9839 0.828171 18.0781 0.90436C18.1481 0.959566 18.9028 1.59247 19.7578 2.31667L19.7579 2.31674L21.3142 3.63861L21.3407 3.66111L21.3406 3.69586L21.3313 12.2037V12.2037L21.3172 20.7115L21.3172 20.7284L21.3099 20.7437L21.1602 21.0571C21.1601 21.0572 21.1601 21.0573 21.16 21.0574C20.9604 21.4857 20.6103 21.8358 20.1821 22.0355C20.1819 22.0355 20.1818 22.0356 20.1817 22.0356L19.8683 22.1853L19.853 22.1926L19.8361 22.1926L11.0704 22.2067L11.0704 22.2067C6.79801 22.2114 4.6049 22.2137 3.44721 22.2038C2.29605 22.1939 2.15897 22.1724 2.0135 22.1231C1.47677 21.9425 1.07747 21.571 0.821181 21.0199L0.690056 20.7436L0.68284 20.7284L0.682813 20.7115L0.66875 12.2037L0.66875 12.2037L0.659375 3.69586L0.659337 3.661L0.685966 3.63849L2.35003 2.23224L2.35011 2.23217L4.01886 0.825924ZM1.40016 20.8254L1.40017 20.8254L1.40085 20.8267C1.55763 21.1268 1.75242 21.3171 2.04291 21.4646L2.31276 21.5973H11H19.6872L19.9563 21.465C19.9565 21.4649 19.9567 21.4648 19.9569 21.4647C20.2617 21.3077 20.4693 21.0992 20.6069 20.8018L20.6985 20.6013L20.7125 12.3301V12.33L20.7218 4.12234H11H1.27821L1.2875 12.3535L1.2875 12.3535L1.30153 20.6453L1.40016 20.8254ZM1.83301 3.48076L6.31264 3.49421C8.89067 3.4989 13.1093 3.4989 15.6921 3.49421L20.18 3.48076L19.0141 2.49686L19.0141 2.49684L17.7179 1.40359H11H4.28678L2.99076 2.49667L2.99054 2.49686L1.83301 3.48076Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.15"
                  />
                  <path
                    d="M16.7082 13.0031L16.7079 13.0035C16.636 13.1062 16.4465 13.2897 16.2844 13.4137C16.1518 13.516 15.3445 14.155 14.3507 14.9416C14.1163 15.1271 13.8715 15.3209 13.6227 15.5177C12.3257 16.5441 11.1905 17.4402 11.0928 17.5077M16.7082 13.0031L11.0496 17.4464M16.7082 13.0031C16.8594 12.7842 16.8762 12.5344 16.7601 12.3076L16.76 12.3073C16.7542 12.2961 16.7462 12.287 16.7424 12.2827C16.7373 12.2768 16.7311 12.2705 16.7244 12.2638C16.711 12.2505 16.6929 12.2336 16.671 12.2139C16.627 12.1742 16.565 12.1204 16.4879 12.0549C16.3336 11.9238 16.1171 11.744 15.8586 11.5319C15.3416 11.1077 14.6559 10.5533 13.9635 9.99862C13.2711 9.44392 12.5717 8.8887 12.0271 8.46271C11.7548 8.24974 11.5211 8.0689 11.3462 7.93651C11.2587 7.87035 11.1857 7.81605 11.1297 7.77581C11.0763 7.73733 11.0338 7.70828 11.0096 7.69569C10.9002 7.63711 10.7685 7.61174 10.6447 7.61559C10.5218 7.61942 10.3977 7.65241 10.3068 7.72034M16.7082 13.0031L10.3068 7.72034M11.0928 17.5077C11.0925 17.5079 11.0922 17.5081 11.092 17.5083L11.0496 17.4464M11.0928 17.5077C11.093 17.5076 11.0932 17.5074 11.0935 17.5073L11.0496 17.4464M11.0928 17.5077C10.9783 17.59 10.8346 17.6324 10.6954 17.6362C10.5566 17.6401 10.4149 17.6058 10.3069 17.5257M11.0496 17.4464C10.848 17.5917 10.534 17.6011 10.3512 17.4652M10.3069 17.5257C10.3071 17.5258 10.3072 17.5259 10.3074 17.5261L10.3512 17.4652M10.3069 17.5257C10.3067 17.5256 10.3066 17.5255 10.3064 17.5254L10.3512 17.4652M10.3069 17.5257L10.3512 17.4652M5.26231 10.7227C5.23687 10.763 5.21613 10.8037 5.20095 10.8682C5.18637 10.9301 5.1772 11.0127 5.17099 11.1368C5.15857 11.3853 5.15742 11.8178 5.15742 12.623C5.15742 13.4281 5.15857 13.8607 5.17099 14.1091C5.1772 14.2333 5.18637 14.3158 5.20095 14.3778C5.21613 14.4423 5.23687 14.483 5.26231 14.5233L7.8293 10.4292C9.45586 10.4199 9.99492 10.4011 10.023 10.3589M5.26231 10.7227C5.26248 10.7224 5.26264 10.7222 5.26281 10.7219L5.32617 10.762L5.26186 10.7235C5.26201 10.7232 5.26216 10.723 5.26231 10.7227ZM5.26231 10.7227C5.26801 10.7132 5.27362 10.7037 5.27921 10.6942C5.31794 10.6284 5.35599 10.5638 5.41745 10.5149C5.49062 10.4567 5.58965 10.4243 5.74514 10.4035C6.03641 10.3646 6.57306 10.3615 7.63473 10.3554C7.69758 10.355 7.76227 10.3546 7.82886 10.3542H7.82886C8.64218 10.3495 9.18267 10.3425 9.52314 10.3314C9.69363 10.3259 9.81246 10.3193 9.88982 10.3117C9.91908 10.3089 9.94114 10.306 9.95717 10.3032M9.95717 10.3032C9.95666 10.3079 9.95616 10.3121 9.95566 10.316C9.95463 10.324 9.95375 10.3292 9.95315 10.3321C9.9528 10.3337 9.9526 10.3344 9.95261 10.3343C9.95264 10.3339 9.95406 10.3285 9.95793 10.3217L10.023 10.3589M9.95717 10.3032C9.95875 10.2886 9.96038 10.2702 9.96202 10.2478C9.96631 10.1888 9.97037 10.1066 9.97387 10.0065C9.98087 9.80654 9.98555 9.53789 9.98555 9.24798C9.98555 8.67465 9.99106 8.34707 10.0321 8.13949C10.0531 8.03319 10.0842 7.95322 10.1317 7.88577C10.1786 7.81917 10.2381 7.76976 10.3068 7.72034M9.95717 10.3032C9.9625 10.3023 9.96715 10.3013 9.97119 10.3004C9.97507 10.2996 9.97796 10.2988 9.98004 10.2982C9.98218 10.2976 9.98296 10.2973 9.98277 10.2973C9.98275 10.2973 9.98045 10.2983 9.97706 10.3006C9.97396 10.3026 9.96697 10.3078 9.96064 10.3173L10.023 10.3589M10.023 10.3589L10.3068 7.72034M9.95717 14.9428C9.9625 14.9437 9.96715 14.9446 9.97119 14.9455C9.97507 14.9464 9.97796 14.9471 9.98004 14.9477C9.98065 14.9479 9.98115 14.9481 9.98155 14.9482C9.98255 14.9485 9.98291 14.9487 9.98277 14.9486C9.98275 14.9486 9.98045 14.9477 9.97706 14.9454C9.97396 14.9433 9.96697 14.9381 9.96064 14.9286L10.023 14.887L9.95793 14.9243C9.95396 14.9173 9.95257 14.9117 9.95262 14.9117C9.95263 14.9117 9.95283 14.9124 9.95315 14.9139C9.95375 14.9168 9.95463 14.922 9.95566 14.93C9.95616 14.9338 9.95666 14.9381 9.95717 14.9428ZM10.277 10.8593L10.277 10.8593L10.2779 10.8588C10.3475 10.8161 10.4088 10.7714 10.4571 10.706C10.5057 10.6403 10.5369 10.5598 10.5578 10.4517C10.5988 10.2402 10.6043 9.8986 10.6043 9.29954C10.6043 8.79637 10.6055 8.5293 10.6164 8.38222C10.6219 8.30765 10.6295 8.27245 10.6365 8.25494C10.6394 8.24776 10.6414 8.2457 10.6416 8.24547L10.6416 8.24546L10.6416 8.24545C10.6419 8.24516 10.643 8.24391 10.648 8.24121C10.6714 8.22966 10.6853 8.22796 10.6978 8.22958C10.7127 8.23152 10.7352 8.23955 10.773 8.26465C10.8371 8.3096 12.0921 9.29861 13.567 10.4692C14.4646 11.1817 15.1345 11.7204 15.5798 12.0879C15.8026 12.2717 15.9686 12.4122 16.0786 12.51C16.1338 12.559 16.174 12.5965 16.1999 12.6228C16.2003 12.6233 16.2008 12.6237 16.2012 12.6241C16.1778 12.6486 16.1419 12.6829 16.0925 12.7275C15.9922 12.818 15.8408 12.9471 15.6377 13.1154C15.2317 13.4518 14.6217 13.9424 13.8061 14.5892L13.8061 14.5892C13.6652 14.701 13.5307 14.8078 13.4023 14.9098C12.0382 15.9925 11.3571 16.5332 11.0058 16.797C10.8107 16.9434 10.7246 16.9987 10.6821 17.0164C10.6777 17.0183 10.6744 17.0194 10.6721 17.0201C10.672 17.0201 10.672 17.0201 10.6719 17.02C10.6682 17.0179 10.6604 17.0134 10.6536 17.0099C10.6429 17.0038 10.6412 17.0018 10.6376 16.9936C10.6307 16.9776 10.6227 16.9446 10.617 16.871C10.6055 16.7259 10.6043 16.4591 10.6043 15.9464C10.6043 15.3474 10.5988 15.0058 10.5578 14.7943C10.5369 14.6862 10.5057 14.6056 10.4571 14.5399C10.4088 14.4746 10.3475 14.4299 10.2779 14.3872L10.2779 14.3872L10.277 14.3866C10.2348 14.3616 10.194 14.3407 10.1229 14.3255C10.0556 14.3112 9.96176 14.3021 9.81288 14.2959C9.51441 14.2835 8.97679 14.2824 7.94648 14.2824C7.14956 14.2824 6.61373 14.2788 6.27204 14.2701C6.10098 14.2657 5.97998 14.26 5.89969 14.253C5.863 14.2498 5.83639 14.2464 5.81807 14.2431C5.81789 14.2419 5.8177 14.2408 5.81751 14.2395C5.8136 14.2146 5.80973 14.1783 5.80604 14.1314C5.79871 14.0379 5.79253 13.9076 5.78756 13.7519C5.77763 13.4408 5.77266 13.0321 5.77266 12.623C5.77266 12.2139 5.77763 11.8052 5.78756 11.4941C5.79253 11.3384 5.79871 11.208 5.80604 11.1145C5.80973 11.0676 5.8136 11.0314 5.81751 11.0064C5.8177 11.0052 5.81789 11.004 5.81807 11.0029C5.83639 10.9996 5.863 10.9962 5.89969 10.993C5.97998 10.9859 6.10098 10.9803 6.27204 10.9759C6.61373 10.9671 7.14956 10.9636 7.94648 10.9636C8.97679 10.9636 9.51441 10.9624 9.81288 10.9501C9.96176 10.9439 10.0556 10.9348 10.1229 10.9204C10.194 10.9053 10.2348 10.8844 10.277 10.8593Z"
                    fill="white"
                    stroke="white"
                    stroke-width="0.15"
                  />
                </svg>
              </a>
            </div>
            <div className="about-team-img">
              <Image
                src={about?.about_team_image.url}
                width={about?.about_team_image.width}
                height={about?.about_team_image.height}
                alt={about?.about_team_image.title}
              />
            </div>
          </div>
        </div>
      </section>

      <section class="pr-form py py-b"> 
        <div class="container">
          <div class="pr-form-wrapper">
            <div class="cf-form">
              <div class="tag">
                <div class="tag-a">
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                </div>
                <span>Get In Touch</span> 
              </div>{" "}
              <h2>
                Free <span>Consultation</span>
              </h2>
              <div class="wpcf7 js" id="wpcf7-f702-o1" lang="en-US" dir="ltr">
                <div class="screen-reader-response">
                  <p role="status" aria-live="polite" aria-atomic="true"></p>{" "}
                  <ul></ul>
                </div>
                <form
                  action="/about/#wpcf7-f702-o1"
                  method="post"
                  class="wpcf7-form init"
                  aria-label="Contact form"
                  novalidate="novalidate"
                  data-status="init"
                >
                  <div style={{display: 'none'}}>
                    <input type="hidden" name="_wpcf7" value="702" />
                    <input type="hidden" name="_wpcf7_version" value="5.9.8" />
                    <input type="hidden" name="_wpcf7_locale" value="en_US" />
                    <input
                      type="hidden"
                      name="_wpcf7_unit_tag"
                      value="wpcf7-f702-o1"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_container_post"
                      value="0"
                    />
                    <input
                      type="hidden"
                      name="_wpcf7_posted_data_hash"
                      value=""
                    />
                  </div>
                  <div class="f-fild">
                    <p>
                      <span
                        class="wpcf7-form-control-wrap"
                        data-name="your-name"
                      >
                        <input
                          size="40"
                          maxlength="400"
                          class="wpcf7-form-control wpcf7-text wpcf7-validates-as-required"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Name"
                          value=""
                          type="text"
                          name="your-name"
                        />
                      </span>
                    </p>
                  </div>
                  <div class="f-fild">
                    <p>
                      <span
                        class="wpcf7-form-control-wrap"
                        data-name="your-email"
                      >
                        <input
                          size="40"
                          maxlength="400"
                          class="wpcf7-form-control wpcf7-email wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-email"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Email Address"
                          value=""
                          type="email"
                          name="your-email"
                        />
                      </span>
                    </p>
                  </div>
                  <div class="f-fild">
                    <p>
                      <span class="wpcf7-form-control-wrap" data-name="phone">
                        <input
                          size="40"
                          maxlength="400"
                          class="wpcf7-form-control wpcf7-tel wpcf7-validates-as-required wpcf7-text wpcf7-validates-as-tel"
                          aria-required="true"
                          aria-invalid="false"
                          placeholder="Phone number"
                          value=""
                          type="tel"
                          name="phone"
                        />
                      </span>
                    </p>
                  </div>
                  <div class="f-fild">
                    <p>
                      <span class="wpcf7-form-control-wrap" data-name="message">
                        <textarea
                          cols="40"
                          rows="4"
                          maxlength="2000"
                          class="wpcf7-form-control wpcf7-textarea"
                          aria-invalid="false"
                          placeholder="Message"
                          name="message"
                        ></textarea>
                      </span>
                    </p>
                  </div>
                  <div class="f-fild-btn">
                    <p>
                      <input
                        class="wpcf7-form-control wpcf7-submit has-spinner btn"
                        type="submit"
                        value="Request Now"
                      />
                      <span class="wpcf7-spinner"></span>
                    </p>
                  </div>
                  <div class="wpcf7-response-output" aria-hidden="true"></div>
                </form>
              </div>
            </div>
            <div class="pr-form-map">
              <div class="map" dangerouslySetInnerHTML={{__html: Newslater?.single_footer_iframe_link}}></div>{" "}
              <div class="pr-form-info form-info">
                <div class="call">
                  <div class="icon">
                    <svg
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_192_2808)">
                        <path
                          d="M15.5009 14.8715C18.2126 14.8715 20.4188 12.6657 20.4188 9.9543C20.4188 7.24293 18.2126 5.03711 15.5009 5.03711C12.7892 5.03711 10.583 7.24293 10.583 9.9543C10.583 12.6657 12.7892 14.8715 15.5009 14.8715ZM15.5009 6.79469C17.2434 6.79469 18.661 8.21213 18.661 9.9543C18.661 11.6965 17.2434 13.114 15.5009 13.114C13.7584 13.114 12.3408 11.6965 12.3408 9.9543C12.3408 8.21213 13.7584 6.79469 15.5009 6.79469Z"
                          fill="#EE0000"
                        ></path>
                        <path
                          d="M10.1453 18.7889C11.4775 20.5923 10.9423 19.891 14.7793 25.3692C15.128 25.869 15.8696 25.8714 16.2204 25.3699C20.0747 19.8657 19.5444 20.5629 20.8549 18.7889C22.1823 16.9917 23.555 15.1333 24.3073 12.9556C25.396 9.80322 24.9254 6.6841 22.9822 4.17277C22.9822 4.17277 22.9822 4.17272 22.9821 4.17272C21.2021 1.87297 18.4051 0.5 15.5001 0.5C12.5951 0.5 9.79804 1.87297 8.01802 4.17283C6.07488 6.68416 5.60425 9.80334 6.69304 12.9557C7.44515 15.1334 8.81788 16.9917 10.1453 18.7889ZM9.40822 5.24838C10.8577 3.37566 13.1351 2.25758 15.5001 2.25758C17.8651 2.25758 20.1425 3.37566 21.592 5.24838L21.5918 5.24832C23.1602 7.2752 23.5344 9.80867 22.6457 12.382C21.9813 14.3055 20.6898 16.0539 19.4409 17.7447C18.4684 19.0612 18.7595 18.6585 15.5001 23.3306C12.2441 18.6632 12.5314 19.0607 11.5593 17.7447C10.3104 16.0539 9.01892 14.3055 8.35452 12.382C7.46577 9.80861 7.83995 7.2752 9.40822 5.24838Z"
                          fill="#EE0000"
                        ></path>
                        <path
                          d="M10.8676 22.599C10.6084 22.1888 10.0655 22.0661 9.65516 22.3254L7.15614 23.9037C6.61098 24.248 6.61045 25.045 7.15614 25.3897L15.0311 30.3636C15.3178 30.5447 15.6832 30.5446 15.9699 30.3636L23.8449 25.3897C24.3901 25.0454 24.3906 24.2484 23.8449 23.9037L21.3458 22.3254C20.9353 22.0662 20.3926 22.1888 20.1334 22.599C19.8741 23.0094 19.9967 23.5521 20.4071 23.8113L21.7298 24.6467L15.5005 28.5812L9.27119 24.6467L10.5939 23.8113C11.0043 23.5522 11.1268 23.0094 10.8676 22.599Z"
                          fill="#EE0000"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_192_2808">
                          <rect
                            width="30"
                            height="30"
                            fill="white"
                            transform="translate(0.5 0.5)"
                          ></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="call-info-text">
                    <p>{Newslater?.single_footer_location_label}</p>
                    <h3>{Newslater?.address.title}</h3>
                  </div>
                </div>{" "}
                <div class="call">
                  <div class="icon">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_86_3978)">
                        <path
                          d="M23.7095 18.583C23.0953 17.9435 22.3545 17.6016 21.5694 17.6016C20.7906 17.6016 20.0434 17.9372 19.4039 18.5767L17.4031 20.5712C17.2385 20.4826 17.0739 20.4002 16.9156 20.3179C16.6876 20.204 16.4723 20.0963 16.2887 19.9823C14.4145 18.792 12.7113 17.2407 11.0777 15.2336C10.2863 14.2332 9.75441 13.391 9.36817 12.5363C9.88737 12.0614 10.3686 11.5675 10.8371 11.0926C11.0144 10.9153 11.1917 10.7317 11.369 10.5544C12.6987 9.22478 12.6987 7.50256 11.369 6.1729L9.64044 4.44434C9.44415 4.24806 9.24154 4.04545 9.05159 3.84283C8.67169 3.45027 8.27279 3.04504 7.86123 2.66514C7.24705 2.05729 6.51258 1.73438 5.74011 1.73438C4.96764 1.73438 4.2205 2.05729 3.58733 2.66514C3.581 2.67147 3.581 2.67147 3.57466 2.6778L1.42188 4.84957C0.611426 5.66003 0.149212 6.64778 0.0479046 7.79382C-0.104056 9.64268 0.44047 11.3649 0.858363 12.4919C1.8841 15.2589 3.41637 17.8232 5.70212 20.5712C8.4754 23.8827 11.8122 26.4977 15.6239 28.3402C17.0802 29.0304 19.024 29.8471 21.1958 29.9864C21.3288 29.9928 21.4681 29.9991 21.5947 29.9991C23.0573 29.9991 24.2857 29.4736 25.2481 28.4288C25.2544 28.4162 25.2671 28.4098 25.2734 28.3972C25.6027 27.9983 25.9826 27.6374 26.3815 27.2511C26.6537 26.9915 26.9323 26.7193 27.2046 26.4344C27.8314 25.7822 28.1607 25.0224 28.1607 24.2436C28.1607 23.4585 27.8251 22.705 27.1856 22.0718L23.7095 18.583ZM25.9762 25.2503C25.9699 25.2503 25.9699 25.2567 25.9762 25.2503C25.7293 25.5163 25.476 25.7569 25.2038 26.0228C24.7922 26.4154 24.3743 26.8269 23.9818 27.2891C23.3422 27.973 22.5888 28.2959 21.601 28.2959C21.5061 28.2959 21.4047 28.2959 21.3098 28.2895C19.4293 28.1692 17.6817 27.4348 16.371 26.8079C12.7873 25.073 9.64044 22.61 7.02544 19.4885C4.86633 16.8861 3.4227 14.4801 2.46662 11.8968C1.87777 10.3202 1.66249 9.09182 1.75747 7.93311C1.82078 7.19231 2.10571 6.57813 2.63124 6.0526L4.79035 3.89349C5.10061 3.60223 5.42985 3.44394 5.75277 3.44394C6.15167 3.44394 6.47459 3.68454 6.6772 3.88715C6.68353 3.89349 6.68986 3.89982 6.6962 3.90615C7.08243 4.26706 7.44967 4.64063 7.8359 5.03953C8.03218 5.24214 8.2348 5.44475 8.43741 5.6537L10.166 7.38226C10.8371 8.05342 10.8371 8.67392 10.166 9.34509C9.98235 9.5287 9.80506 9.71232 9.62144 9.88961C9.08958 10.4341 8.58304 10.9407 8.03219 11.4345C8.01952 11.4472 8.00686 11.4535 8.00053 11.4662C7.456 12.0107 7.55731 12.5426 7.67128 12.9035C7.67761 12.9225 7.68394 12.9415 7.69027 12.9605C8.13982 14.0495 8.77299 15.0753 9.73541 16.2973L9.74175 16.3036C11.4893 18.4564 13.3318 20.1343 15.3643 21.4196C15.6239 21.5843 15.8898 21.7172 16.1431 21.8439C16.371 21.9578 16.5863 22.0655 16.7699 22.1795C16.7953 22.1921 16.8206 22.2111 16.8459 22.2238C17.0612 22.3314 17.2638 22.3821 17.4728 22.3821C17.9983 22.3821 18.3275 22.0528 18.4352 21.9452L20.6006 19.7797C20.8159 19.5645 21.1578 19.3049 21.5567 19.3049C21.9493 19.3049 22.2722 19.5518 22.4685 19.7671C22.4748 19.7734 22.4748 19.7734 22.4811 19.7797L25.9699 23.2685C26.6221 23.9143 26.6221 24.5792 25.9762 25.2503Z"
                          fill="#EE0000"
                        ></path>
                        <path
                          d="M16.2127 7.13708C17.8717 7.41568 19.3786 8.20081 20.5816 9.40383C21.7846 10.6069 22.5634 12.1138 22.8484 13.7727C22.918 14.1906 23.2789 14.4819 23.6905 14.4819C23.7411 14.4819 23.7855 14.4755 23.8361 14.4692C24.3047 14.3932 24.6149 13.95 24.5389 13.4815C24.197 11.4743 23.2473 9.64444 21.7973 8.19448C20.3474 6.74452 18.5175 5.79476 16.5103 5.45285C16.0418 5.37687 15.6049 5.68712 15.5226 6.14934C15.4403 6.61155 15.7442 7.0611 16.2127 7.13708Z"
                          fill="#EE0000"
                        ></path>
                        <path
                          d="M29.9652 13.2336C29.4016 9.92848 27.844 6.92092 25.4507 4.52754C23.0573 2.13415 20.0497 0.576553 16.7446 0.0130316C16.2823 -0.0692806 15.8455 0.247305 15.7631 0.709519C15.6872 1.17807 15.9974 1.61495 16.466 1.69727C19.4165 2.19747 22.1075 3.59678 24.2476 5.73056C26.3877 7.87068 27.7807 10.5617 28.2809 13.5122C28.3506 13.9301 28.7115 14.2214 29.123 14.2214C29.1737 14.2214 29.218 14.215 29.2687 14.2087C29.7309 14.1391 30.0475 13.6958 29.9652 13.2336Z"
                          fill="#EE0000"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_86_3978">
                          <rect width="30" height="30" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="call-info-text">
                    <p>{Newslater?.single_footer_emergency_help_label}</p>
                    <h3>
                      <a
                        href={Newslater?.phone_number.url}
                        title={Newslater?.phone_number.title}
                        aria-label={Newslater?.phone_number.title}
                      >
                        {Newslater?.phone_number.title}
                      </a>
                    </h3>
                  </div>
                </div>{" "}
                <div class="call">
                  <div class="icon">
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_86_3991)">
                        <path
                          d="M29.8593 10.3115L25.5148 7.24279V2.76041C25.4713 2.31639 25.1292 1.96001 24.6873 1.89844H5.65467C5.21283 1.96008 4.8707 2.31639 4.82715 2.76041V7.20828L0.310313 10.3114C0.131398 10.4413 0.0180829 10.6428 0 10.8631V27.2408C0.0587364 27.6903 0.412475 28.0441 0.861974 28.1028H29.48C29.8593 28.1028 29.9972 27.6546 29.9972 27.2408V10.8631C29.9972 10.6562 30.0317 10.4493 29.8593 10.3115ZM25.5148 8.89778L28.4801 10.932L25.5148 13.1732V8.89778ZM6.20633 3.27762H24.1357V14.2421L15.171 21.0001L6.20626 14.2421V3.27762H6.20633ZM4.82715 8.86333V13.2078L1.86188 10.9321L4.82715 8.86333ZM1.37918 12.3457L11.0335 19.6554L1.37918 26.172V12.3457ZM3.03423 26.7237L12.2058 20.5519L14.6538 22.4138C14.7924 22.5209 14.9614 22.5813 15.1365 22.5861C15.2744 22.5861 15.3434 22.5172 15.4813 22.4138L18.0327 20.4484L27.3078 26.7237H3.03423ZM28.618 25.9307L19.1706 19.5864L28.618 12.3457V25.9307Z"
                          fill="#EE0000"
                        ></path>
                        <path
                          d="M9.65431 7.76004H12.7574C13.1383 7.76004 13.447 7.45131 13.447 7.07045C13.447 6.68959 13.1383 6.38086 12.7574 6.38086H9.65431C9.27345 6.38086 8.96472 6.68959 8.96472 7.07045C8.96472 7.45131 9.27345 7.76004 9.65431 7.76004Z"
                          fill="#EE0000"
                        ></path>
                        <path
                          d="M9.65431 10.8636H20.6878C21.0687 10.8636 21.3774 10.5548 21.3774 10.174C21.3774 9.7931 21.0687 9.48438 20.6878 9.48438H9.65431C9.27345 9.48438 8.96472 9.7931 8.96472 10.174C8.96472 10.5548 9.27345 10.8636 9.65431 10.8636Z"
                          fill="#EE0000"
                        ></path>
                        <path
                          d="M21.3773 13.2775C21.3773 12.8966 21.0686 12.5879 20.6877 12.5879H9.65431C9.27345 12.5879 8.96472 12.8966 8.96472 13.2775C8.96472 13.6583 9.27345 13.9671 9.65431 13.9671H20.6878C21.0686 13.9671 21.3773 13.6583 21.3773 13.2775Z"
                          fill="#EE0000"
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_86_3991">
                          <rect width="30" height="30" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <div class="call-info-text">
                    <p>{Newslater?.single_footer_emergency_help_label}</p>
                    <h3>
                      {" "}
                      <a href={Newslater?.email_address.url}>
                      {Newslater?.email_address.title}{" "}
                      </a>
                    </h3>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
