
import React from "react";
import ContactFormSection from '../../../component/ContactFormSection';
import HeroSection from '../../../component/HeroSection';
import NewsletterSection from '../../../component/NewsletterSection';
import ServiceSection from '../../../component/ServiceSection';
import SkillTeamSection from '../../../component/SkillTeamSection';
import SpecializationSection from '../../../component/SpecializationSection';
import WorkProcessSection from '../../../component/WorkProcessSection';
import { fetchHomedata } from "../../../untils/Fetchdata";



export default async function Page() {
let homepage;
let Newslater;

try {
     const result =  await fetchHomedata("home");
        homepage = result.page_acf_fields;
        Newslater = result.global_acf_options;
   } catch (error) {
     console.error("Error fetching data:", error);
     return <div>Error loading data.</div>;
   }

  
  return (
    <>
      <HeroSection  
        bg_image={homepage?.home_hero_banner_background_image}
        logo={homepage?.home_hero_banner_logo.url}
        main_title={homepage?.home_hero_banner_main_title}
        sub_title={homepage?.home_hero_banner_sub_title}
        button1_title={homepage?.home_hero_banner_get_started_button.title}
        button1_url={homepage?.home_hero_banner_get_started_button.url}
        button2_title={homepage?.home_hero_banner_read_more_button.title}
        button2_url={homepage?.home_hero_banner_read_more_button.url}
        content={homepage?.home_hero_banner_content}
        images={homepage?.home_hero_banner_images}
      />
      <WorkProcessSection 
        home_all_processes={homepage?.home_all_processes}
      />
      <ServiceSection 
        main_title={homepage?.home_all_offers_main_title}
        sub_title={homepage?.home_all_offers_sub_title}
        home_all_offers={homepage?.home_all_offers} 
      />
      <SpecializationSection
        main_title={homepage?.home_specialize_main_title}
        sub_title={homepage?.home_specialize_sub_title}
        home_all_specializations={homepage?.home_all_specializations}
      />
      <SkillTeamSection 
        main_title={homepage?.home_who_we_are_main_title}
        sub_title={homepage?.home_who_we_are_sub_title}
        home_who_we_are_discover_more_button={homepage?.home_who_we_are_discover_more_button}
        home_who_we_are_images={homepage?.home_who_we_are_images}
        years_experience_group={homepage?.years_experience_group}
        content={homepage?.home_who_we_are_content}
        ceo_details_group={homepage?.ceo_details_group}
        home_who_we_are_skills_listing={homepage?.home_who_we_are_skills_listing}
        expert_team_group={homepage?.expert_team_group}
      />
      <ContactFormSection 
        main_title={homepage?.home_get_in_touch_form_main_title}
        sub_title={homepage?.home_get_in_touch_form_sub_title}
        home_get_in_touch_title={homepage?.home_get_in_touch_title}
        content={homepage?.home_get_in_touch_content}
        home_get_in_touch_client_detail_group={homepage?.home_get_in_touch_client_detail_group}
        home_get_in_touch_call_label={homepage?.home_get_in_touch_call_label}
        home_get_in_touch_email_label={homepage?.home_get_in_touch_email_label}
      />
      <NewsletterSection 
        global_acf_options={Newslater}
        container="container" 
      /> 
    </>
  )}