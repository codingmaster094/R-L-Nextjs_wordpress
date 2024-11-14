"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import NewsletterSection from "../../../component/NewsletterSection";
import { useParams } from "next/navigation";
import { fetchHomedata } from "../../../untils/Fetchdata";
import HeroSection from "../../../component/HeroSection";
const Page = () => {
  const router = useParams();
  const slug = router.slug;

  const [Services, setServices] = useState(null);
  const [Newslater, setNewslater] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const result = await fetchHomedata(slug);
        setServices(result.page_acf_fields);
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
      bg_image={Services?.services_hero_background_image.url}
      main_title={Services?.services_hero_main_title}
      sub_title={Services?.services_hero_sub_title}
      content={Services?.services_hero_content}
      placeholder_title={Services?.services_hero_placeholder_title}
    />

      <section className="service-pg">
      <div className="container">
        <div className="service-title py py-b">
          <div className="tag">
            <div className="tag-a">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <span>{Services?.service_section_sub_title}</span>
            <div className="tag-b">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
          <h2 dangerouslySetInnerHTML={{
                  __html: Services?.service_section_main_title
                }}/>
        </div>
      </div>
        {
          Services?.service_section_details &&
          Services?.service_section_details.map((item,i)=>{
            return (
            <div class="service-wrapper py" key={i}>
                <div class="container">
                    <div class="service-wrapper-box">
                        <div class="service-img">
                        <Image src={item.service_section_details_image.url} width={item.service_section_details_image.width} height={item.service_section_details_image.height} alt={item.service_section_details_image.title} />
                        </div>
                        <div class="service-content">
                            <h3>{item.service_section_details_title}</h3>
                            <div class="sub-text">
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
          )
          })
        }
      
    </section>

    <NewsletterSection 
    global_acf_options={Newslater}

    />
    </>
  );
};

export default Page;
