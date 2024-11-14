import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";

const HeroSection = ({
  bg_image,
  logo,
  main_title,
  sub_title,
  button1_title,
  button1_url,
  button2_title,
  button2_url,
  content,
  images,
  placeholder_title,
  about_hero_box_left_section,
  about_hero_box_right_section,
  about_hero_box_center_image,
}) => {
  const router = useParams();
  const slug = router.slug;

  return (
    <>
    {slug === undefined && (
        <section className="hero">
          <div className="container">
            <div className="hero-wrapper">
              <div className="hero-text">
                <span>{sub_title}</span>
                <div className="hero-title">
                {
                  logo && 
                  <Image src={logo} alt="title logo" width={50} height={50} />
                }
                  <h1>{main_title}</h1>
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: content?.replace(/<p>/g, "").replace(/<\/p>/g, ""),
                  }}
                />
                <div className="hero-btn">
                {
                  (button1_url && button2_url) && 
                  <>

                  <a href={button1_url} className="btn">
                    {button1_title}
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.01886 0.325924L4.03969 0.308372L4.06692 0.308277L10.7091 0.28484C14.3579 0.270786 17.4795 0.266031 17.6374 0.275589L17.6386 0.275682C17.823 0.289873 17.9839 0.328171 18.0781 0.40436C18.1481 0.459566 18.9028 1.09247 19.7578 1.81667L19.7579 1.81674L21.3142 3.13861L21.3407 3.16111L21.3406 3.19586L21.3313 11.7037V11.7037L21.3172 20.2115L21.3172 20.2284L21.3099 20.2437L21.1602 20.5571C21.1601 20.5572 21.1601 20.5573 21.16 20.5574C20.9604 20.9857 20.6103 21.3358 20.1821 21.5355C20.1819 21.5355 20.1818 21.5356 20.1817 21.5356L19.8683 21.6853L19.853 21.6926L19.8361 21.6926L11.0704 21.7067L11.0704 21.7067C6.79801 21.7114 4.6049 21.7137 3.44721 21.7038C2.29605 21.6939 2.15897 21.6724 2.0135 21.6231C1.47677 21.4425 1.07747 21.071 0.821181 20.5199L0.690056 20.2436L0.68284 20.2284L0.682813 20.2115L0.66875 11.7037L0.66875 11.7037L0.659375 3.19586L0.659337 3.161L0.685966 3.13849L2.35003 1.73224L2.35011 1.73217L4.01886 0.325924ZM1.40016 20.3254L1.40017 20.3254L1.40085 20.3267C1.55763 20.6268 1.75242 20.8171 2.04291 20.9646L2.31276 21.0973H11H19.6872L19.9563 20.965C19.9565 20.9649 19.9567 20.9648 19.9569 20.9647C20.2617 20.8077 20.4693 20.5992 20.6069 20.3018L20.6985 20.1013L20.7125 11.8301V11.83L20.7218 3.62234H11H1.27821L1.2875 11.8535L1.2875 11.8535L1.30153 20.1453L1.40016 20.3254ZM1.83301 2.98076L6.31264 2.99421C8.89067 2.9989 13.1093 2.9989 15.6921 2.99421L20.18 2.98076L19.0141 1.99686L19.0141 1.99684L17.7179 0.903589H11H4.28678L2.99076 1.99667L2.99054 1.99686L1.83301 2.98076Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.15"
                      />
                      <path
                        d="M16.7087 12.5031L16.7084 12.5035C16.6365 12.6062 16.447 12.7897 16.2849 12.9137C16.1523 13.016 15.345 13.655 14.3512 14.4416C14.1168 14.6271 13.872 14.8209 13.6232 15.0177C12.3262 16.0441 11.191 16.9402 11.0933 17.0077M16.7087 12.5031L11.0501 16.9464M16.7087 12.5031C16.8599 12.2842 16.8767 12.0344 16.7606 11.8076L16.7605 11.8073C16.7547 11.7961 16.7467 11.787 16.7429 11.7827C16.7378 11.7768 16.7316 11.7705 16.7249 11.7638C16.7115 11.7505 16.6934 11.7336 16.6715 11.7139C16.6275 11.6742 16.5655 11.6204 16.4884 11.5549C16.3341 11.4238 16.1175 11.244 15.8591 11.0319C15.342 10.6077 14.6564 10.0533 13.964 9.49862C13.2716 8.94392 12.5721 8.3887 12.0276 7.96271C11.7553 7.74974 11.5216 7.5689 11.3466 7.43651C11.2592 7.37035 11.1862 7.31605 11.1302 7.27581C11.0767 7.23733 11.0343 7.20828 11.0101 7.19569C10.9006 7.13711 10.769 7.11174 10.6452 7.11559C10.5223 7.11942 10.3982 7.15241 10.3073 7.22034M16.7087 12.5031L10.3073 7.22034M11.0933 17.0077C11.093 17.0079 11.0927 17.0081 11.0924 17.0083L11.0501 16.9464M11.0933 17.0077C11.0935 17.0076 11.0937 17.0074 11.094 17.0073L11.0501 16.9464M11.0933 17.0077C10.9788 17.09 10.8351 17.1324 10.6959 17.1362C10.557 17.1401 10.4153 17.1058 10.3074 17.0257M11.0501 16.9464C10.8485 17.0917 10.5345 17.1011 10.3517 16.9652M10.3074 17.0257C10.3076 17.0258 10.3077 17.0259 10.3079 17.0261L10.3517 16.9652M10.3074 17.0257C10.3072 17.0256 10.3071 17.0255 10.3069 17.0254L10.3517 16.9652M10.3074 17.0257L10.3517 16.9652M5.2628 10.2227C5.23736 10.263 5.21662 10.3037 5.20143 10.3682C5.18686 10.4301 5.17769 10.5127 5.17148 10.6368C5.15906 10.8853 5.15791 11.3178 5.15791 12.123C5.15791 12.9281 5.15906 13.3607 5.17148 13.6091C5.17769 13.7333 5.18686 13.8158 5.20143 13.8778C5.21662 13.9423 5.23736 13.983 5.2628 14.0233L7.82979 9.92923C9.45635 9.91985 9.99541 9.9011 10.0235 9.85892M5.2628 10.2227C5.26296 10.2224 5.26313 10.2222 5.2633 10.2219L5.32666 10.262L5.26235 10.2235C5.2625 10.2232 5.26265 10.223 5.2628 10.2227ZM5.2628 10.2227C5.26849 10.2132 5.2741 10.2037 5.2797 10.1942C5.31843 10.1284 5.35648 10.0638 5.41793 10.0149C5.49111 9.95666 5.59014 9.92431 5.74563 9.90352C6.0369 9.86457 6.57354 9.86148 7.63521 9.85536C7.69806 9.85499 7.76276 9.85462 7.82934 9.85423H7.82935C8.64267 9.84954 9.18316 9.84251 9.52363 9.83142C9.69412 9.82586 9.81295 9.81933 9.89031 9.81174C9.91957 9.80887 9.94163 9.80597 9.95766 9.80318M9.95766 9.80318C9.95715 9.80786 9.95665 9.81213 9.95615 9.81599C9.95511 9.824 9.95424 9.82917 9.95363 9.83207C9.95329 9.83372 9.95309 9.83437 9.9531 9.83425C9.95313 9.83395 9.95455 9.82847 9.95842 9.82171L10.0235 9.85892M9.95766 9.80318C9.95924 9.78864 9.96087 9.77015 9.9625 9.74777C9.9668 9.68885 9.97086 9.60656 9.97436 9.50649C9.98136 9.30654 9.98604 9.03789 9.98604 8.74798C9.98604 8.17465 9.99155 7.84707 10.0326 7.63949C10.0536 7.53319 10.0847 7.45322 10.1322 7.38577C10.1791 7.31917 10.2386 7.26976 10.3073 7.22034M9.95766 9.80318C9.96298 9.80225 9.96764 9.80134 9.97168 9.80044C9.97555 9.79958 9.97845 9.79883 9.98053 9.79822C9.98266 9.79759 9.98345 9.79726 9.98326 9.79734C9.98323 9.79735 9.98094 9.79828 9.97755 9.80055C9.97445 9.80264 9.96746 9.80782 9.96113 9.81731L10.0235 9.85892M10.0235 9.85892L10.3073 7.22034M9.95766 14.4428C9.96299 14.4437 9.96764 14.4446 9.97168 14.4455C9.97555 14.4464 9.97845 14.4471 9.98053 14.4477C9.98114 14.4479 9.98164 14.4481 9.98204 14.4482C9.98303 14.4485 9.9834 14.4487 9.98326 14.4486C9.98323 14.4486 9.98094 14.4477 9.97755 14.4454C9.97445 14.4433 9.96746 14.4381 9.96113 14.4286L10.0235 14.387L9.95842 14.4243C9.95445 14.4173 9.95305 14.4117 9.9531 14.4117C9.95312 14.4117 9.95331 14.4124 9.95363 14.4139C9.95424 14.4168 9.95511 14.422 9.95615 14.43C9.95665 14.4338 9.95715 14.4381 9.95766 14.4428ZM10.2775 10.3593L10.2775 10.3593L10.2784 10.3588C10.3479 10.3161 10.4092 10.2714 10.4576 10.206C10.5062 10.1403 10.5374 10.0598 10.5583 9.95169C10.5993 9.74016 10.6048 9.3986 10.6048 8.79954C10.6048 8.29637 10.606 8.0293 10.6169 7.88222C10.6224 7.80765 10.63 7.77245 10.637 7.75494C10.6399 7.74776 10.6418 7.7457 10.6421 7.74547L10.6421 7.74546L10.6421 7.74545C10.6424 7.74516 10.6435 7.74391 10.6485 7.74121C10.6719 7.72966 10.6858 7.72796 10.6983 7.72958C10.7132 7.73152 10.7357 7.73955 10.7735 7.76465C10.8376 7.8096 12.0926 8.79861 13.5675 9.96922C14.4651 10.6817 15.135 11.2204 15.5803 11.5879C15.8031 11.7717 15.9691 11.9122 16.0791 12.01C16.1343 12.059 16.1744 12.0965 16.2004 12.1228C16.2008 12.1233 16.2013 12.1237 16.2017 12.1241C16.1783 12.1486 16.1423 12.1829 16.093 12.2275C15.9927 12.318 15.8413 12.4471 15.6382 12.6154C15.2322 12.9518 14.6222 13.4424 13.8066 14.0892L13.8066 14.0892C13.6657 14.201 13.5312 14.3078 13.4028 14.4098C12.0387 15.4925 11.3576 16.0332 11.0062 16.297C10.8112 16.4434 10.7251 16.4987 10.6826 16.5164C10.6782 16.5183 10.6749 16.5194 10.6726 16.5201C10.6725 16.5201 10.6725 16.5201 10.6724 16.52C10.6687 16.5179 10.6609 16.5134 10.6541 16.5099C10.6433 16.5038 10.6417 16.5018 10.6381 16.4936C10.6312 16.4776 10.6232 16.4446 10.6174 16.371C10.606 16.2259 10.6048 15.9591 10.6048 15.4464C10.6048 14.8474 10.5993 14.5058 10.5583 14.2943C10.5374 14.1862 10.5062 14.1056 10.4576 14.0399C10.4092 13.9746 10.3479 13.9299 10.2784 13.8872L10.2784 13.8872L10.2775 13.8866C10.2353 13.8616 10.1945 13.8407 10.1234 13.8255C10.0561 13.8112 9.96224 13.8021 9.81336 13.7959C9.5149 13.7835 8.97728 13.7824 7.94697 13.7824C7.15005 13.7824 6.61422 13.7788 6.27253 13.7701C6.10147 13.7657 5.98047 13.76 5.90018 13.753C5.86349 13.7498 5.83688 13.7464 5.81856 13.7431C5.81838 13.7419 5.81819 13.7408 5.818 13.7395C5.81409 13.7146 5.81022 13.6783 5.80653 13.6314C5.7992 13.5379 5.79302 13.4076 5.78805 13.2519C5.77812 12.9408 5.77314 12.5321 5.77314 12.123C5.77314 11.7139 5.77812 11.3052 5.78805 10.9941C5.79302 10.8384 5.7992 10.708 5.80653 10.6145C5.81022 10.5676 5.81409 10.5314 5.818 10.5064C5.81819 10.5052 5.81838 10.504 5.81856 10.5029C5.83688 10.4996 5.86349 10.4962 5.90018 10.493C5.98047 10.4859 6.10147 10.4803 6.27253 10.4759C6.61422 10.4671 7.15005 10.4636 7.94697 10.4636C8.97728 10.4636 9.5149 10.4624 9.81336 10.4501C9.96224 10.4439 10.0561 10.4348 10.1234 10.4204C10.1945 10.4053 10.2353 10.3844 10.2775 10.3593Z"
                        fill="white"
                        stroke="white"
                        stroke-width="0.15"
                      />
                    </svg>
                  </a>
                  <a href={button2_url} className="btn-b">
                    {button2_title}
                  </a>
                  </>
                }
                </div>
              </div>
              <div className="hero-img">
                {images &&
                  images.map((img, i) => (
                    <Image
                      key={i}
                      src={img.url}
                      alt="hero Picture"
                      width={300}
                      height={300}
                    />
                  ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {slug === "product" && (
        <section
          className="sun-banner"
          style={{
            background: `url(${bg_image}) center / cover no-repeat`,
          }}
        >
          <div className="container">
            <div className="sub-banner-wrapper">
              <div className="sub-title">
                <p>{placeholder_title}</p>
              </div>
              <div className="tag">
              {
                sub_title &&
                <>
                <div className="tag-a">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
                <span>{sub_title}</span>
                <div className="tag-b">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
                </>
              }
              </div>
              <h1>{main_title}</h1>
              <div className="sub-text">
                <p
                  dangerouslySetInnerHTML={{
                    __html: content?.replace(/<p>/g, "").replace(/<\/p>/g, ""),
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {slug === "services" && (
        <section
          className="ser-banner"
          style={{
            background: `url(${bg_image}) center / cover no-repeat`,
          }}
        >
          <div className="container">
            <div className="ser-banner-wrapper">
              <div className="ser-banner-text">
                <div className="sub-title">
                  <p>{placeholder_title}</p>
                </div>
                <div className="tag">
                  <div className="tag-a">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                  <span>{sub_title}</span>
                </div>
                <h1>{main_title}</h1>
                <div className="text">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content
                        ?.replace(/<p>/g, "")
                        .replace(/<\/p>/g, ""),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {slug === "about" && (
        <section
          className="about-banner"
          style={{
            background: `url(${bg_image}) center / cover no-repeat`,
          }}
        >
          <div className="container">
            <div className="sub-banner-wrapper about-banner-wrapper">
              <div className="sub-title">
                <p>{placeholder_title}</p>
              </div>
              <div className="tag">
                <div className="tag-a">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
                <span>{sub_title}</span>
                <div className="tag-b">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
              <h1
                dangerouslySetInnerHTML={{
                  __html: main_title,
                }}
              ></h1>
              <div className="sub-text">
                <p
                  dangerouslySetInnerHTML={{
                    __html: content?.replace(/<p>/g, "").replace(/<\/p>/g, ""),
                  }}
                />
              </div>
            </div>
          </div>
          <div className="about-bg">
            <div className="about-bg-boxs">
              {about_hero_box_left_section?.map((item, index) => (
                <div className="about-bg-box" key={index}>
                  {item.about_hero_box_left_section_content_box_group
                    .about_hero_box_left_section_content_box_group_count &&
                    item.about_hero_box_left_section_content_box_group
                      .about_hero_box_left_section_content_box_group_description && (
                      <div
                        className={`com-box ${item.about_hero_box_left_section_content_box_group.about_hero_box_left_section_content_box_group_background_color}`}
                      >
                        <div className="com-box-b">
                          {item.about_hero_box_left_section_content_box_group
                            .about_hero_box_left_section_content_box_group_count && (
                            <span>
                              {
                                item
                                  .about_hero_box_left_section_content_box_group
                                  .about_hero_box_left_section_content_box_group_count
                              }
                            </span>
                          )}
                          {item.about_hero_box_left_section_content_box_group
                            .about_hero_box_left_section_content_box_group_description && (
                            <p>
                              {
                                item
                                  .about_hero_box_left_section_content_box_group
                                  .about_hero_box_left_section_content_box_group_description
                              }
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  {item.about_hero_box_left_section_image && (
                    <Image
                      src={item.about_hero_box_left_section_image.url}
                      alt={
                        item.about_hero_box_left_section_image.alt ||
                        "about image"
                      }
                      width={500}
                      height={500}
                    />
                  )}
                </div>
              ))}
            </div>
            <div class="about-bg-box">
              {about_hero_box_center_image && (
                <Image
                  src={about_hero_box_center_image.url}
                  alt={about_hero_box_center_image.alt || "about image"}
                  width={500}
                  height={500}
                />
              )}
            </div>
            <div className="about-bg-boxs">
              {about_hero_box_right_section?.map((item, index) => (
                <div className="about-bg-box" key={index}>
                  {item.about_hero_box_right_section_content_box_group
                    .about_hero_box_right_section_content_box_group_count &&
                    item.about_hero_box_right_section_content_box_group
                      .about_hero_box_right_section_content_box_group_description && (
                      <div
                        className={`com-box ${item.about_hero_box_right_section_content_box_group.about_hero_box_right_section_content_box_group_background_color}`}
                      >
                        <div className="com-box-b">
                          <span>
                            {
                              item
                                .about_hero_box_right_section_content_box_group
                                .about_hero_box_right_section_content_box_group_count
                            }
                          </span>
                          <p>
                            {
                              item
                                .about_hero_box_right_section_content_box_group
                                .about_hero_box_right_section_content_box_group_description
                            }
                          </p>
                        </div>
                      </div>
                    )}
                  {item.about_hero_box_right_section_image && (
                    <Image
                      src={item.about_hero_box_right_section_image.url}
                      alt={
                        item.about_hero_box_right_section_image.alt ||
                        "about image"
                      }
                      width={500}
                      height={500}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {slug === "industries" && (
        <section
          className="ser-banner"
          style={{
            background: `url(${bg_image}) center / cover no-repeat`,
          }}
        >
          <div className="container">
            <div className="ser-banner-wrapper">
              <div className="ser-banner-text">
                <div className="sub-title">
                  <p>{placeholder_title}</p>
                </div>
                <div className="tag">
                  <div className="tag-a">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                  <span>{sub_title}</span>
                </div>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: main_title,
                  }}
                ></h1>
                <div className="text">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: content
                        ?.replace(/<p>/g, "")
                        .replace(/<\/p>/g, ""),
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {slug === "faq" && (
        <section
          className="ser-banner"
          style={{
            background: `url(${bg_image}) center / cover no-repeat`,
          }}
        >
          <div className="container">
            <div className="ser-banner-wrapper">
              <div className="ser-banner-text">
                <div className="sub-title">
                  <p>{placeholder_title}</p>
                </div>
                <div className="tag">
                  <div className="tag-a">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                  <span>{sub_title}</span>
                </div>
                <h1
                  dangerouslySetInnerHTML={{
                    __html: main_title,
                  }}
                ></h1>
              </div>
            </div>
          </div>
        </section>
      )}

    </>
  );
};

export default HeroSection;
