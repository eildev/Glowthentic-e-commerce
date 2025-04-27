import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const tabs = [
  { id: "details", label: "Product Details" },
  { id: "apply", label: "How to Apply" },
  { id: "ingredients", label: "Ingredient" },
  { id: "advance", label: "What Makes It Advance" },
  { id: "specs", label: "Product Specification" },
];

const cleanHTML = (html) =>
  html.replace(/<p>/g, "<div>").replace(/<\/p>/g, "</div>");

const advance = (
  <p>
    OVER 11 AWARDS WON! <br />
    BIONYMPH PEPTIDE: peptide blend that helps to condition for smoother,
    plumper looking skin <br />
    VITAMINS C & E: work in harmony to BRIGHTEN the look of your complexion and
    EVEN the appearance of the skin tone
  </p>
);

const specification = (
  <p>
    Product Code-46000701 <br />
    Key Ingredients-Hyaluronic Acid, Vitamin C <br />
    Beauty Effect-Brightening
  </p>
);
const truncateText = (element, length) => {
  if (!element) return "";

  if (typeof element === "string") {
    // Convert HTML string to plain text
    const parser = new DOMParser();
    const doc = parser.parseFromString(element, "text/html");
    const text = doc.body.textContent || "";

    return text.length > length ? text.substring(0, length) + "..." : text;
  }

  // If it's a React element, extract text
  const parser = new DOMParser();
  const doc = parser.parseFromString(element.props.children, "text/html");
  const text = doc.body.textContent || "";

  return text.length > length ? text.substring(0, length) + "..." : text;
};

export default function ProductQueryNavigation({ data }) {
  const [selectedTab, setSelectedTab] = useState("details");
  const [expandedTabs, setExpandedTabs] = useState({});
  const sectionRefs = useRef({});
  const productDetails = data?.data?.productdetails?.description;

  const apply = data?.data?.productdetails?.usage_instruction;
  const ingredients = data?.data?.productdetails?.ingredients;
  const tabs = [
    { id: "details", label: "Product Details" },
    { id: "apply", label: "How to Apply" },
    { id: "ingredients", label: "Ingredient" },
    // { id: "advance", label: "What Makes It Advance" },
    // { id: "specs", label: "Product Specification" },
  ];
  const contentData = {
    details: {
      short: truncateText(productDetails, 100),
      full: productDetails,
    },
    apply: {
      short: truncateText(apply, 80),
      full: apply,
    },
    ingredients: {
      short: truncateText(ingredients, 80),
      full: ingredients,
    },
    // advance: {
    //   short: truncateText(advance, 80),
    //   full: advance,
    // },
    // specs: {
    //   short: truncateText(specification, 80),
    //   full: specification,
    // },
  };
  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    setExpandedTabs((prev) => ({
      ...prev,
      [tabId]: [tabId],
    }));
  };

  const handleSeeMoreClick = (tabId) => {
    setExpandedTabs((prev) => ({
      ...prev,
      [tabId]: !prev[tabId],
    }));
  };

  useEffect(() => {
    Object.keys(sectionRefs.current).forEach((key) => {
      if (sectionRefs.current[key]) {
        sectionRefs.current[key].style.transition = "height 0.5s ease-in-out";
      }
    });
  }, [expandedTabs]);

  const getTotalHeight = (tabId) => {
    const index = tabs.findIndex((tab) => tab.id === tabId);
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
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`flex  py-2 text-start ${
              selectedTab === tab.id
                ? "border-b-2 borde-[#0C0C0C] text-[#0C0C0C] text-xl font-bold"
                : "text-[#606060] text-xl font-bold"
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
              ref={(el) => (sectionRefs.current[tab.id] = el)}
            >
              <h2 className="text-xl text-[#0C0C0C] font-bold">{tab.label}</h2>
              <p className="mt-4 text-lg font-normal text-[#0C0C0C]">
                <div
                  className="custom-html-content mt-4 text-lg font-normal text-[#0C0C0C]"
                  dangerouslySetInnerHTML={{
                    __html: expandedTabs[tab.id]
                      ? contentData[tab.id].full
                      : contentData[tab.id].short,
                  }}
                />
              </p>
              <button
                className="text-[#0C0C0C] text-base font-normal mt-4 flex items-center gap-2"
                onClick={() => handleSeeMoreClick(tab.id)}
              >
                {expandedTabs[tab.id] ? (
                  <>
                    Read Less <IoIosArrowBack className="text-2xl" />
                  </>
                ) : (
                  <>
                    Read More <IoIosArrowForward className="text-2xl" />
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
