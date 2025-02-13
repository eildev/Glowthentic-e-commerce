import React from "react";
import HeadTitle from "../../components/typography/HeadTitle";
import Container from "../../components/Container";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
// import aboutBanner from "../../assets/img/about/about-banner.jpg"

import Banner from "../../components/banner/Banner";
import StatasticViews from "../../components/StatasticViews";
import fire from "../../assets/img/about/fire.png"
import userCheck from "../../assets/img/about/user-check.png"
import envelope from "../../assets/img/about/envelope.png"
import flag from "../../assets/img/about/flag.png"
import AboutBannerSection from "./AboutBannerSection";
import BuildingBeautySection from "./BuildingBeautySection";
import BeautyCultureSectoin from "./BeautyCultureSectoin";
import NewestUpdate from "./NewestUpdate";



const AboutPage = () => {
  const statics = [
    {
      state: "12M",
      title: "Daily Active Users",
      icon: fire,
    },
    {
      state: "100k",
      title: "Paid Customers",
      icon: userCheck
      
    },
    {
      state: "31M+",
      title: "Message Rotation",
      icon: envelope
      
    },
    {
      state: "123",
      title: "Country Users",
      icon: flag
      
    },
    

 
  ]
  return (
    <div>
      <DynamicHelmet title="About Page " />
      <Container>
    <AboutBannerSection></AboutBannerSection>
       <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-7">
       
 {
  statics.map((statics) => (
    <StatasticViews key={statics.title} title={statics.title} value={statics.state} icon={statics.icon} />
  ))
}


       </section>
       {/* <BuildingBeautySection></BuildingBeautySection> */}
       <BeautyCultureSectoin></BeautyCultureSectoin>
      
      </Container>
      <NewestUpdate></NewestUpdate>
    </div>
  );
};

export default AboutPage;
