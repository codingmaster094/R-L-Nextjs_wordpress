

import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import Fancybox from "../component/FancyBox";

const ServiceSection = ({
main_title,
sub_title,
home_all_offers
}) => {
  const router = useParams();
  const slug = router.slug;

  return (
    <section className="service py">
      <div className="container">
        <div className="service-wrapper">
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
            <h2 dangerouslySetInnerHTML={{
                  __html: main_title
                }}>
              
            </h2>
        </div>
      </div>
      <div className="service-boxs">
        <Fancybox group="gallery">
        {
         home_all_offers && 
         home_all_offers.map((val,i)=>(
            <div className="service-box">
            <Image src={val.home_all_offers_image.url} alt="service 1" width={300} height={200} />
            <a
              href={val.home_all_offers_image.url}
              data-fancybox="gallery"
              data-caption="Carton Boxes"
              className="service-content"
            >
              <div className="plus">
                <svg
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.5 5.33301C16.8537 5.33301 17.1928 5.47348 17.4429 5.72353C17.6929 5.97358 17.8334 6.31272 17.8334 6.66634V14.6663H25.8334C26.187 14.6663 26.5261 14.8068 26.7762 15.0569C27.0262 15.3069 27.1667 15.6461 27.1667 15.9997C27.1667 16.3533 27.0262 16.6924 26.7762 16.9425C26.5261 17.1925 26.187 17.333 25.8334 17.333H17.8334V25.333C17.8334 25.6866 17.6929 26.0258 17.4429 26.2758C17.1928 26.5259 16.8537 26.6663 16.5 26.6663C16.1464 26.6663 15.8073 26.5259 15.5572 26.2758C15.3072 26.0258 15.1667 25.6866 15.1667 25.333V17.333H7.16671C6.81309 17.333 6.47395 17.1925 6.2239 16.9425C5.97385 16.6924 5.83337 16.3533 5.83337 15.9997C5.83337 15.6461 5.97385 15.3069 6.2239 15.0569C6.47395 14.8068 6.81309 14.6663 7.16671 14.6663H15.1667V6.66634C15.1667 6.31272 15.3072 5.97358 15.5572 5.72353C15.8073 5.47348 16.1464 5.33301 16.5 5.33301Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h3>{val.home_all_offers_title}</h3>
              <p
                dangerouslySetInnerHTML={{
                  __html: val?.home_all_offers_discription
                    ?.replace(/<p>/g, "")
                    .replace(/<\/p>/g, ""),
                }}
              />
            </a>
          </div>
          ))
        }
        </Fancybox>
      </div>
    </section>
  );
};

export default ServiceSection;
