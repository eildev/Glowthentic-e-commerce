import React from "react";
import { Helmet } from "react-helmet-async";
import { imagePath } from "../../utils/imagePath";

const ProductHelmet = ({ product }) => {
  // console.log(product);
  if (!product) {
    return null;
  }
  const {
    productdetails = {},
    product_name = "",
    product_tags = [],
    slug = "",
    variant_image = [],
  } = product;

  const keywordsString = Array.isArray(product_tags)
    ? product_tags.join(", ")
    : product_tags || "";

  const img = imagePath(variant_image[0]?.image);
  return (
    <Helmet>
      {/* Title */}
      <title>{product_name}</title>

      {/* Meta Tags */}
      <meta
        name="description"
        content={productdetails?.short_description ?? ""}
      />
      <meta name="keywords" content={keywordsString} />
      <meta name="author" content="Glowthentic Store" />

      {/* Open Graph Meta Tags (For Social Media) */}
      <meta property="og:title" content={product_name} />
      <meta
        property="og:description"
        content={productdetails?.short_description}
      />
      <meta
        property="og:url"
        content={`http://127.0.0.1:5173/product/${slug}`}
      />
      <meta property="og:type" content="product" />
      <meta property="og:image" content={img} />

      {/* Canonical Link */}
      <link rel="canonical" href={`http://127.0.0.1:5173/product/${slug}`} />
    </Helmet>
  );
};

export default ProductHelmet;
