import React from "react";
import Image from "next/image";
import NewsletterSection from "../../../component/NewsletterSection";
import HeroSection from "../../../component/HeroSection";
const Page = async ({ Data, Newslater }) => {
  return (
    <>
      <HeroSection
        bg_image={Data?.services_hero_background_image.url}
        main_title={Data?.services_hero_main_title}
        sub_title={Data?.services_hero_sub_title}
        content={Data?.services_hero_content}
        placeholder_title={Data?.services_hero_placeholder_title}
      />

      <section className="service-pg">
        <div className="container">
          <div className="service-title py py-b">
            {Data?.service_section_sub_title && (
              <div className="tag">
                <div className="tag-a">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
                <span>{Data?.service_section_sub_title}</span>
                <div className="tag-b">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
              </div>
            )}
            <h2
              dangerouslySetInnerHTML={{
                __html: Data?.service_section_main_title,
              }}
            />
          </div>
        </div>
        {Data?.service_section_details &&
          Data?.service_section_details.map((item, i) => {
            return (
              <div className="service-wrapper py" key={i}>
                <div className="container">
                  <div className="service-wrapper-box">
                    <div className="service-img">
                      <Image
                        src={item.service_section_details_image.url}
                        width={item.service_section_details_image.width}
                        height={item.service_section_details_image.height}
                        alt={item.service_section_details_image.title}
                      />
                    </div>
                    <div className="service-content">
                      <h3>{item.service_section_details_title}</h3>
                      <div className="sub-text">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: item.service_section_details_content
                              ?.replace(/<p>/g, "")
                              .replace(/<\/p>/g, ""),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </section>

      <NewsletterSection
        industries_newsletter_background_image={
          Data?.services_newsletter_background_image.url
        }
        global_acf_options={Newslater}
      />
    </>
  );
};

export default Page;
