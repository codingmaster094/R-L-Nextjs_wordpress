"use client";
import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { GetPrivacyPage } from "../../../untils/Fetchdata";
import Image from "next/image";

const Page = () => {
  const router = useParams();
  const slug = router.slug;
  console.log("slug", slug);
  const [Privacy_policy, setPrivacy_policy] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHomeData = async () => {
      try {
        const result = await GetPrivacyPage(slug);
        console.log("result", result);
        setPrivacy_policy(result);
      } catch (err) {
        setError("Failed to load home page data.");
      }
    };
    loadHomeData();
  }, [slug]);

  return (
    <>
      <section className="py privacy">
      <Image src="https://rlpackaging.ca/wp-content/uploads/2024/09/privacy.png" alt="privacy" className="privacy-img"></Image>
        <div className="container">
          <div className="privacy-content">
            <div class="title">
              <div class="tag">
                <div class="tag-a">
                  <div class="box"></div>
                  <div class="box"></div>
                  <div class="box"></div>
                </div>
                <span>Privacy</span>
              </div>
              <h1>Privacy Policy</h1>
            </div>
            {
                Privacy_policy &&
                Privacy_policy.map((val,i) => (
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
