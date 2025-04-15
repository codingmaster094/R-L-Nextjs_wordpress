
import React from "react";
import Product from "@/app/[slug]/Product"
import Services from "@/app/[slug]/Services"
import About from "@/app/[slug]/About"
import Industries from "@/app/[slug]/Industries"
import Faq from "@/app/[slug]/Faq"   
import Contact from "@/app/[slug]/Contact"    
import  Home  from '@/app/home/page';
import { fetchHomedata, GetPrivacyPage, GetProductsPost } from "../../../untils/Fetchdata";

const Page = async ({params}) => {
  const { slug }  = await params
  let currentPage;
  let Data;
  let Newslater;
  let ProductsPost;
  let Privacy_policy;

  try {
    const result = await fetchHomedata(slug);
    const response = await GetProductsPost();
    const response_Privacy = await GetPrivacyPage(slug);
    Data = result.page_acf_fields;
    Newslater = result.global_acf_options;
    Privacy_policy = response_Privacy;
    ProductsPost = response;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data.</div>;
  }
  
try {
 if (slug === "product") {
   currentPage = (
     <Product slug={slug} Data={Data} ProductsPost={ProductsPost} />
   );
 } else if (slug === "services") {
   currentPage = <Services slug={slug} Data={Data} Newslater={Newslater} />;
 } else if (slug === "about") {
   currentPage = <About slug={slug} Data={Data} Newslater={Newslater}/>
 } else if (slug === "industries") {
   currentPage = <Industries slug={slug} Data={Data} Newslater={Newslater}/>
 } else if (slug === "faq") {
   currentPage = <Faq slug={slug} Data={Data} Newslater={Newslater} />;
 } else if (slug === "contact") {
   currentPage = <Contact slug={slug} Data={Data} Newslater={Newslater}/>
 } else if (slug === "privacy-policy") {
   currentPage = <Privacy_policy PrivacypolicyData={Privacy_policy} />;
 } else {
   currentPage = <Home slug={slug} />;
 }
} catch (error) {
  console.error("Error fetching data:", error);
  return <div>Error loading data.</div>;
}

if (!currentPage) {
  return <div>No data available.</div>;
}

  return (
    <>
      {currentPage}
    </>
  )
}

export default Page