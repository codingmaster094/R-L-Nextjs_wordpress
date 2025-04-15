import React from "react";
import Image from "next/image";
import HeroSection from "../../../component/HeroSection";
import Request_icon from "../../../public/img/Request_btn.svg"
import red_request_btn from "../../../public/img/red_request_btn.svg"

const Page = async ({ Data, ProductsPost }) => {
  return (
    <>
      <HeroSection
        bg_image={Data?.product_hero_background_image}
        main_title={Data?.product_hero_main_title}
        sub_title={Data?.product_hero_sub_title}
        content={Data?.product_hero_content}
        placeholder_title={Data?.product_hero_placeholder_title}
      />

      <section className="py expriness">
        <div className="container">
          <div className="expriness-wrpper">
            <div className="tag">
              {Data?.product_experience_sub_title && (
                <>
                  <div className="tag-a">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                  <span>{Data?.product_experience_sub_title}</span>
                  <div className="tag-b">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                </>
              )}
            </div>
            <div className="title">
              {Data?.product_experience_title_logo.url && (
                <Image
                  src={Data?.product_experience_title_logo.url}
                  width={100}
                  height={100}
                  alt="title logo"
                />
              )}
              <h2>
                <span>{Data?.product_experience_main_title}</span>
              </h2>
            </div>
            <div className="expriness-boxs">
              {Data?.all_experience &&
                Data?.all_experience.map((val, i) => (
                  <div className="expriness-box" key={i}>
                    <Image
                      src={val.product_all_experience_image.url}
                      width={100}
                      height={100}
                      alt="experience"
                    />
                    <div className="expriness-content">
                      <div
                        className="ex-icon"
                        dangerouslySetInnerHTML={{
                          __html: val.product_all_experience_icon,
                        }}
                      ></div>
                      <div className="ex-title">
                        <h3>{val.product_all_experience_title}</h3>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: val?.product_all_experience_content
                              ?.replace(/<p>/g, "")
                              .replace(/<\/p>/g, ""),
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py product">
        <div className="container">
          <div className="product-wrapper">
            <div className="tag">
              {Data?.product_overview_sub_title && (
                <>
                  <div className="tag-a">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                  <span>{Data?.product_overview_sub_title}</span>
                  <div className="tag-b">
                    <div className="box"></div>
                    <div className="box"></div>
                    <div className="box"></div>
                  </div>
                </>
              )}
            </div>
            <h2
              dangerouslySetInnerHTML={{
                __html: Data?.product_overview_main_title,
              }}
            ></h2>
            <div className="product-boxs">
              {ProductsPost &&
                ProductsPost.map((val, i) => (
                  <a href={val.link} className="product-box" key={i}>
                    <Image
                      src={val.featured_image.url}
                      width={val.featured_image.width}
                      height={val.featured_image.height}
                      alt="product"
                    />
                    <div className="pr-title">
                      <h3>{val.title.rendered}</h3>
                      {/* <p>Packaging</p> */}
                    </div>
                  </a>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="order">
        <div className="container">
          <div className="order-wrapper">
            <div className="order-text">
              <h2
                dangerouslySetInnerHTML={{
                  __html: Data?.order_main_title,
                }}
              ></h2>
              <div className="order-btn">
                <a href={Data?.order_request_button.url} className="btn">
                  {Data?.order_request_button.title}
                  <Image
                    src={Request_icon}
                    alt="Request_icon"
                    width={22}
                    height={22}
                  />
                </a>
                <a href={Data?.order_apply_button.url} className="btn-b">
                  {Data?.order_apply_button.title}
                  <Image
                    src={red_request_btn}
                    alt="red_request_btn"
                    width={22}
                    height={22}
                  />
                </a>
              </div>
            </div>
            <div className="order-img">
              <Image
                src={Data?.order_images.url}
                width={Data?.order_images.width}
                height={Data?.order_images.height}
                className="./img/order.png"
                alt="order"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
