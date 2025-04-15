
import React from "react";
import Image from "next/image";

const Page = ({PrivacypolicyData}) => {
  console.log('PrivacypolicyData', PrivacypolicyData)
  return (
    <>
    {
      isLoading && 
    <div className="load-bar">
      <div className="bar"></div>
    </div>
    }
      <section className="py privacy">
      <Image src="https://rlpackaging.ca/wp-content/uploads/2024/09/privacy.png" width={400} height={420} alt="privacy" className="privacy-img"></Image>
        <div className="container">
          <div className="privacy-content">
            <div className="title">
              <div className="tag">
                <div className="tag-a">
                  <div className="box"></div>
                  <div className="box"></div>
                  <div className="box"></div>
                </div>
                <span>Privacy</span>
              </div>
              <h1>Privacy Policy</h1>
            </div>
            {
                PrivacypolicyData &&
                PrivacypolicyData?.map((val,i) => (
                    <div key={i} className="privacy-sub-text py py-b" dangerouslySetInnerHTML={{
            __html: val.content?.rendered,
          }}></div>
                ))
            }
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
