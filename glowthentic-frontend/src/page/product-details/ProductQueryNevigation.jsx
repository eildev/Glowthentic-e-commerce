import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const tabs = [
  { id: "details", label: "Product Details" },
  { id: "apply", label: "How to Apply" },
  { id: "ingredients", label: "Ingredient" },
  { id: "advance", label: "What Makes It Advance" },
  { id: "specs", label: "Product Specification" }
];

const productDetails = (
  <p>Beautya's 1st revitalizing serum that concentrates the double power of the Rose de Granville from the stem to the flower to revitalize the skin twice as fast (1) and visibly rejuvenate. <br />
  Created after 20 years of research, the 10,000 (2) micro-pearls rich in revitalizing rose micro-nutrients are now completed by the power of the Rose sap. The next-generation, 92% natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum is twice as concentrated,(4) combining the nourishing richness of an oil with the deep penetration of a serum.
  <br />
  <br />
  From the first application of the serum, the skin appears plumped. In 3 weeks, 2x improvement in the look or feel of skin elasticity.(5) With regular use, skin looks and feels transformed.
  <br />
  <br />
  As if replenished from within, the skin seems denser and firmer, and wrinkles appear noticeably reduced. As if lifted, facial contours appear enhanced.
  <br />
  <br />
  Reveal your extraordinary beauty with Beautya Prestige.
  <br />
  <br />
  (1) Instrumental test, 32 panelists, after 30 min. <br />
  (2) In a 30 ml bottle. <br />
  (3) Amount calculated based on the ISO 16128-1 and ISO 16128-2 standard. Water percentage included. The remaining 8% of ingredients contribute to the formula’s performance, sensory appeal and stability. <br />
  (4) In Rose de Granville micro-nutrients compared to the previous formula. <br />
  (5) Clinical assessment by a dermatologist on the evolution of the product’s performance on the skin elasticity, comparison between the effect after 7 days and 28 days on 34 women.</p>
);

const apply = (
  <p>
    <b>Step 1:</b> Dispense two to three pumps into the palm of your hand. Then, using the pads of the fingers, apply the serum to the entire face from the center outwards. <br />
    <b>Step 2:</b> Use gentle pressure to make the serum penetrate deeply. <br />
    <b>Step 3:</b> Finally, to enhance contours, hold the chin between the index and middle fingers and move up the jawline.
  </p>
);

const ingredients = (
 
    <p className="pl-5 list-disc">
    <li>Lactobacillus/bean fermented extract: improved moisturizing power, excellent skin penetration</li>
    <li>Portulaca extract: skin soothing effect, providing excellent moisturizing power</li>
    <li>Gulden Extract: Provides melanin pigment suppression effect and trouble suppression effect</li>
    <li>Lactobacillus/bean fermented extract: improved moisturizing power, excellent skin penetration</li>
    <li>Portulaca extract: skin soothing effect, providing excellent moisturizing power</li>
    <li>Gulden Extract: Provides melanin pigment suppression effect and trouble suppression effect</li>
  </p>
  
  
);

const advance = (
  <p>
    OVER 11 AWARDS WON! <br />
    BIONYMPH PEPTIDE: peptide blend that helps to condition for smoother, plumper looking skin <br />
    VITAMINS C & E: work in harmony to BRIGHTEN the look of your complexion and EVEN the appearance of the skin tone
  </p>
);

const specification = (
  <p>
    Product Code-46000701 <br />
    Key Ingredients-Hyaluronic Acid, Vitamin C <br />
    Beauty Effect-Brightening
  </p>)
const truncateText = (element, length) => {

  const textArray = React.Children.toArray(element.props.children);

 
  const text = textArray
    .map(child => (typeof child === "string" ? child : " ")) 
    .join("")
    .trim(); 
  
  return text.length > length ? text.substring(0, length) + "..." : text;
};
const contentData = {
  details: {
    short: truncateText(productDetails, 100),
    full: productDetails
  },
  apply: {
    short: truncateText(apply, 80),
    full: apply
  },
  ingredients: {
    short: truncateText(ingredients, 80),
    full: ingredients
  },
  advance: {
    short: truncateText(advance, 80),
    full: advance
  },
  specs: {
    short: truncateText(specification, 80),
    full: specification
  }
};


export default function ProductQueryNavigation() {
  const [selectedTab, setSelectedTab] = useState("details");
  const [expandedTabs, setExpandedTabs] = useState({});
  const sectionRefs = useRef({});

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    setExpandedTabs(prev => ({
      ...prev,
      [tabId]: [tabId]
    }))
  };

  const handleSeeMoreClick = (tabId) => {
    setExpandedTabs(prev => ({
      ...prev,
      [tabId]: !prev[tabId]
    }));
  };

  useEffect(() => {
    Object.keys(sectionRefs.current).forEach(key => {
      if (sectionRefs.current[key]) {
        sectionRefs.current[key].style.transition = "height 0.5s ease-in-out";
      }
    });
  }, [expandedTabs]);

  const getTotalHeight = (tabId) => {
    const index = tabs.findIndex(tab => tab.id === tabId);
    let totalHeight = 0;
    for (let i = 0; i < index; i++) {
      const ref = sectionRefs.current[tabs[i].id];
      if (ref) {
        totalHeight += ref.offsetHeight;
      }
    }
    return totalHeight;
  };

  return (
    <div className="max-w-full  mx-auto ">
      <div className="flex justify-between border-b border-[#606060]">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex  py-2 text-start ${
              selectedTab === tab.id ? "border-b-2 borde-[#0C0C0C] text-[#0C0C0C] text-xl font-bold" : "text-[#606060] text-xl font-bold"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="mt-4 overflow-hidden relative">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: -getTotalHeight(selectedTab) }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="space-y-0.5"
        >
          {tabs.map((tab) => (
            <motion.div
              key={tab.id}
              layout
              className="p-4  shadow-sm bg-white"
              ref={el => (sectionRefs.current[tab.id] = el)}
            >
              <h2 className="text-xl text-[#0C0C0C] font-bold">{tab.label}</h2>
              <p className="mt-4 text-lg font-normal text-[#0C0C0C]">
              {expandedTabs[tab.id] ? contentData[tab.id].full : contentData[tab.id].short}
              </p>
              <button
  className="text-[#0C0C0C] text-base font-normal mt-4 flex items-center gap-2"
  onClick={() => handleSeeMoreClick(tab.id)}
>
  {expandedTabs[tab.id] ? (
    <>
      Read Less  <IoIosArrowBack className="text-2xl"/>
    </>
  ) : (
    <>
      Read More <IoIosArrowForward className="text-2xl"/>
    </>
  )}
</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
