import React, { useState } from 'react';

const ProductQueryNevigation = () => {
      const productQuery = [
        { id: "product-details", label: "Product Details" },
        { id: "how-to-apply", label: "How To Apply" },
        { id: "ingredient", label: "Ingredient" },
        { id: "what-makes-it-advance", label: "What Makes It Advance" },
        { id: "product-specification", label: "Product Specification" },
      ]
      const [activeIndex, setActiveIndex] = useState("product-details");
      const handleScroll = (id, event) => {
        event.preventDefault()
        setActiveIndex(id); // Update active index
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      };
    return (
        <div>
             <ul className="flex justify-between font-semibold list-none pb-2 w-full border-b-[1px] border-[#606060]">
      {productQuery.map((item) => (
    <li key={item.id}>
      <button>
      <div
      
      onClick={() => setActiveIndex(item.id)}
      className={`hover:text-secondary ${
        activeIndex === item.id ? "pb-2 border-b-2" : ""
      }`}
    >
      {item.label}
    </div>
      </button>
  
  </li>
      ))}
    </ul>
    <div className="relative h-[400px] overflow-hidden">
  <div
    className="transition-transform duration-500 ease-in-out"
    style={{
      transform: `translateY(-${{
        "product-details": 0,
        "how-to-apply": 100,
        "ingredient": 200,
        "what-makes-it-advance": 300,
        "product-specification": 400,
      }[activeIndex]}px)`,
    }}
  >
    <div id="product-details" className="section">
      <h4 className="font-semibold text-lg mb-4">Product Details</h4>
      <p>Beautya's 1st revitalizing serum that concentrates the double power of the Rose de Granville from the stem to the flower to revitalize the skin twice as fast (1) and visibly rejuvenate.
Created after 20 years of research, the 10,000 (2) micro-pearls rich in revitalizing rose micro-nutrients are now completed by the power of the Rose sap. The next-generation, 92% natural-origin (3) formula of La Micro-Huile de Rose Advanced Serum is twice as concentrated,(4) combining the nourishing richness of an oil with the deep penetration of a serum.

From the first application of the serum, the skin appears plumped. In 3 weeks, 2x improvement in the look or feel of skin elasticity.(5) With regular use, skin looks and feels transformed.

As if replenished from within, the skin seems denser and firmer, and wrinkles appear noticeably reduced. As if lifted, facial contours appear enhanced.

Reveal your extraordinary beauty with Beautya Prestige.

(1) Instrumental test, 32 panelists, after 30 min.
(2) In a 30 ml bottle.
(3) Amount calculated based on the ISO 16128-1 and ISO 16128-2 standard. Water percentage included. The remaining 8% of ingredients contribute to the formula’s performance, sensory appeal and stability.
(4) In Rose de Granville micro-nutrients compared to the previous formula.
(5) Clinical assessment by a dermatologist on the evolution of the product’s performance on the skin elasticity, comparison between the effect after 7 days and 28 days on 34 women.</p>
    </div>
    <div id="how-to-apply" className="section">
      <h4 className="font-semibold text-lg mb-4">How To Apply</h4>
      <p>Step 1: Apply serum...</p>
    </div>
    <div id="ingredient" className="section">
      <h4 className="font-semibold text-lg mb-4">Ingredient</h4>
      <p>Lactobacillus extract...</p>
    </div>
    <div id="what-makes-it-advance" className="section">
      <h4 className="font-semibold text-lg mb-4">What Makes It Advance</h4>
      <p>Enhanced formula...</p>
    </div>
    <div id="product-specification" className="section">
      <h4 className="font-semibold text-lg mb-4">Product Specification</h4>
      <p>Over 11 awards won...</p>
    </div>
  </div>
</div>
        </div>
        
    );
};

export default ProductQueryNevigation;