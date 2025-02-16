import React from 'react';
import aboutBanner from "../../assets/img/about/Rectangle.png"
const AboutBannerSection = () => {
    return (
        <section>
        <div className="text-center">
        <h1 className="text-[#0F1228] font-bold text-[56px] leading-[68px]">Our Story</h1>
        <p className="">
        Glowthentic is the collaboration hub that brings the right people, information, and tools together to get work done. From Fortune 100 companies to corner markets, millions of people around the world use Slack to connect their teams, unify their systems, and drive their business forward.


        </p>
        </div>
        <div className="mx-auto max-w-[750px]">
          <img src={aboutBanner} alt="" className="w-full h-[500px] object-cover mx-auto"/>
        </div>
       </section>
    );
};

export default AboutBannerSection;