import { Helmet } from "react-helmet-async";

const DynamicHelmet = ({ title, content, keywords, url }) => {
  return (
    <Helmet>
      <title>{title} || Glowthentic E-commerce</title>
      {/* Meta Tags */}
      <meta
        name="description"
        content={
          content
            ? content
            : `Welcome to Glowthentic e-commerce store. Explore top-tier sustainable skincare, clean beauty, and personalized makeup trends!`
        }
      />
      <meta
        name="keywords"
        content={`${keywords}, Glowthentic, sustainable skincare, clean beauty, personalized makeup, biotech beauty, natural ingredients, eco-friendly beauty, anti-aging products, K-beauty trends, fragrance layering, minimalist beauty, vegan beauty, hydrating serums, blue light protection, adaptogenic beauty, microbiome skincare, solid beauty products, inclusive beauty, glow enhancing, AI-powered beauty, probiotic skincare, crystal-infused beauty, overnight treatments, barrier repair, scalp care, mood-boosting makeup`}
      />
      <meta name="author" content="Glowthentic Store" />
      <link rel="canonical" href={`https://glowthentic.store/${url}`} />
    </Helmet>
  );
};

export default DynamicHelmet;
