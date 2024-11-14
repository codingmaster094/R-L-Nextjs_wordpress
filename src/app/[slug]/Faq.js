"use client"
import React, { useState, useEffect } from "react";
import NewsletterSection from '../../../component/NewsletterSection';
import HeroSection from "../../../component/HeroSection";
import { useParams } from "next/navigation";
import { fetchHomedata } from "../../../untils/Fetchdata";


const Page = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeFAQ, setActiveFAQ] = useState(null);
  const [faqData1, setfaqData1] = useState(null);
  const [FAQ, setFAQ] = useState(null);
  const [error, setError] = useState(null);
  const [Newslater, setNewslater] = useState(null);

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
  };

  const handleFAQClick = (idx) => {
    setActiveFAQ(activeFAQ === idx ? null : idx);
  };

  const router = useParams();
  const slug = router.slug;



  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const result = await fetchHomedata(slug);
        setFAQ(result.page_acf_fields);
        setfaqData1(result.page_acf_fields.faq_all_questions_answers)
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
      bg_image={FAQ?.faq_hero_image.url}
      main_title={FAQ?.faq_hero_main_title}
      sub_title={FAQ?.faq_hero_sub_title}
      content={FAQ?.product_hero_content}
      placeholder_title={FAQ?.faq_hero_placeholder_title}
    />

<section className="faq-tabs-section py">
      <div className="container">
        <div className="faq-tab-wrapper">
          <div className="tabs faq-tabs">
            <div className="tab-links">
              {faqData1?.map((tab, index) => (
                <button
                  className={`tab-link ${activeTabIndex === index ? "active" : ""}`}
                  onClick={() => handleTabClick(index)}
                  key={index}
                >
                  {tab.faq_main_title}
                </button>
              ))}
            </div>
            <div className="tab-content">
              {faqData1?.map((tab, index) => (
                <div
                  className={`tab-pane ${activeTabIndex === index ? "active" : ""}`}
                  key={index}
                >
                  <div className="faq-tab">
                    <h2>
                      <span>{tab.faq_main_title}</span>
                    </h2>
                    <div className="faq-section">
                      {tab.all_faqs_details.map((item, idx) => (
                        <div className="faq-item" key={idx}>
                          <div className="faq-item-b">
                            <div
                              className="faq-question"
                              onClick={() => handleFAQClick(idx)}
                            >
                              {item.faq_question}
                              <div className="icon">
                                {/* SVG Icon Here */}
                              </div>
                            </div>
                            {activeFAQ === idx && (
                              <div className="faq-answer">
                                <p dangerouslySetInnerHTML={{ __html: item.faq_answer }} />
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
      <NewsletterSection global_acf_options={Newslater}/>
    </>
  );
};

export default Page;
