import React from "react";
import { Helmet } from "react-helmet-async";

const ProductHelmet = ({ product }) => {
  const { description, title, keywords, url, img } = product;
  return (
    <Helmet>
      {/* Title */}
      <title>{title}</title>

      {/* Meta Tags */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Glowthentic Store" />

      {/* Open Graph Meta Tags (For Social Media) */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="product" />
      <meta property="og:image" content={img} />

      {/* Canonical Link */}
      <link rel="canonical" href={`https://backend.glowthentic.store/${url}`} />
    </Helmet>
  );
};

export default ProductHelmet;
