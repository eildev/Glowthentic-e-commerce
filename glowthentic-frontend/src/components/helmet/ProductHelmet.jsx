import React from "react";
import { Helmet } from "react-helmet-async";

const ProductHelmet = ({ product }) => {
  console.log(product);
  const { description, title, keywords, url, img } = product;

  const keywordsString = Array.isArray(keywords)
    ? keywords.join(", ")
    : keywords || "";
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content="Glowthentic Store" />

      {/* Open Graph Meta Tags (For Social Media) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="product" />
      <meta property="og:image" content={img} />

      {/* Canonical Link */}
      <link rel="canonical" href={`http://127.0.0.1:8000/${url}`} />
    </Helmet>
  );
};

export default ProductHelmet;
