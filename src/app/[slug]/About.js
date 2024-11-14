"use client";
import React, { useState, useEffect } from "react";
import Testimonial_Caraousel from "../../../component/Testimonial_Caraousel";
import Image from "next/image";
import { useParams } from "next/navigation";
import { fetchHomedata } from "../../../untils/Fetchdata";
import HeroSection from "../../../component/HeroSection";

const Page = () => {
  const [about, setabout] = useState(null);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('');

  useEffect(() => {
    if (about?.about_all_specialties_2 && about.about_all_specialties_2.length > 0) {
      setActiveTab(about.about_all_specialties_2[0].about_all_specialties_2_title);
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
          <Image src={about?.about_specialties_background_image.url}  width={about?.about_specialties_background_image.width} height={about?.about_specialties_background_image.height} alt={about?.about_specialties_background_image.title} className="sp-about-bg"/>
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
            <h2 dangerouslySetInnerHTML={{
                  __html: about?.about_specialties_main_title}}>
            </h2>
            <div className="sp-about-boxs">
            {
              about?.about_all_specialties &&
              about?.about_all_specialties.map((val ,i ) => {
                return (
                  <div className="sp-about-box" key={i}>
                <div className="sp-about-b">
                  <div className="sp-about-icon" dangerouslySetInnerHTML={{
                  __html: val.about_all_specialties_icon}}>
                  </div>
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
                )
              })
            }
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
            <h2 dangerouslySetInnerHTML={{
                  __html: about?.about_specialties_2_main_title
                }}/>
            <div className="tabs sp-tabs">
      {/* Tab Links */}
      <div className="tab-links">
        {about?.about_all_specialties_2 &&
          about.about_all_specialties_2.map((tab,i) => (
            <a
              key={tab.about_all_specialties_2_title}
              href={`#${tab.about_all_specialties_2_title}`}
              className={`tab-link ${activeTab === tab.about_all_specialties_2_title ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault(); // Prevent default anchor behavior
                handleTabClick(tab.about_all_specialties_2_title);
              }}
            >
              {i+1}.{tab.about_all_specialties_2_title}
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
              className={`tab-pane ${activeTab === tab.about_all_specialties_2_title ? 'active' : ''}`}
            >
              <div className="tab-pane-b">
                <div className="title">
                  <h3>{tab.about_all_specialties_2_title}</h3>
                </div>
                <div
                  className="sub-text"
                  dangerouslySetInnerHTML={{ __html: tab.about_all_specialties_2_content }}
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
            <h2 dangerouslySetInnerHTML={{
                  __html: about?.about_testimonial_main_title
                }}/>
          </div>
          <Testimonial_Caraousel  AboutAllTestimonial={about?.about_all_testimonial}/>
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
                <h2 dangerouslySetInnerHTML={{
              __html: about?.about_team_main_title}}>
                </h2>
              </div>
              <div className="sub-text">
                <p dangerouslySetInnerHTML={{
              __html: about?.about_team_content}}>
                </p>
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
              <Image src={about?.about_team_image.url}
               width={about?.about_team_image.width} height={about?.about_team_image.height} alt={about?.about_team_image.title}
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
