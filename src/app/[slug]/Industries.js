import React from "react";
import Image from "next/image";
import NewsletterSection from '../../../component/NewsletterSection';
import HeroSection from "../../../component/HeroSection";

const Page = async({Data , Newslater}) => {
  return (
    <>
<HeroSection  
      bg_image={Data?.industries_banner_background_image}
      main_title={Data?.industries_banner_main_title}
      sub_title={Data?.industries_banner_sub_title}
      content={Data?.product_hero_content}
      placeholder_title={Data?.industries_banner_placeholder_title}
    />

  <section className="industries py py-b" style={{ backgroundImage: 'url(/img/work-process.png)' }}>
      <div className="container">
        <div className="indurtries-boxs">
        {
          Data?.industries_services &&
          Data?.industries_services.map((val,i)=> (
            <a href="#e-commerice" className="indurtries-box" key={i}>
            <div className="indurtries-box-b">
              <Image src={val?.industries_services_icon.url} alt="e-commerce" width={100} height={100} />
              <div className="title">
                <p>{val.industries_services_title}</p>
              </div>
            </div>
          </a>
          ))
        }
        </div>
      </div>
    </section>


    <section className="service-pg indeurtries-service">
      <div className="container">
        <div className="service-title py py-b">
          <div className="tag">
            <div className="tag-a">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
            <span>{Data?.industries_service_sub_title}</span>
            <div className="tag-b">
              <div className="box"></div>
              <div className="box"></div>
              <div className="box"></div>
            </div>
          </div>
          
          <h2 dangerouslySetInnerHTML={{
            __html: Data?.industries_service_main_title}}></h2>
        </div>
      </div>

      {/* E-commerce */}
      {
        Data?.industries_services &&
        Data?.industries_services.map((val,i)=> (
          <div id="e-commerice" className="service-wrapper py" key={i}>
        <div className="container">
          <div className="service-wrapper-box">
            <div className="service-img">
              <Image src={val.industries_services_images.url} alt="e-commerce image" width={500} height={300} />
            </div>
            <div className="service-content">
              <h3>{val.industries_services_title}</h3>
              <div className="sub-text" dangerouslySetInnerHTML={{
            __html: val.industries_services_content}}>
                
              </div>
            </div>
          </div>
        </div>
      </div>
        ))
      }
    </section>
    <NewsletterSection industries_newsletter_background_image={Data?.industries_newsletter_background_image.url} global_acf_options={Newslater} className={'indeurtries-nl'}/>
    </>
  )
}

export default Page