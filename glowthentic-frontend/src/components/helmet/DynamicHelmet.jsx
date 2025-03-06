import { Helmet } from "react-helmet-async";

const DynamicHelmet = ({ title, content, keywords, url }) => {
  return (
    <Helmet>
      <title>{title} || Glowthentic E-commerce</title>
      {/* Meta Tags */}
      <meta
        name="description"
        content={content ? content : `Welcome to Glowthentic e-commerce store. Discover the best products and offers!`}
      />
      <meta
        name="keywords"
        content={`${keywords}, Glowthentic, makeup, beauty, product, e-commerce, enhance, shine, beauty, products`}
      />
      <meta name="author" content="Glowthentic Store" />
      <link rel="canonical" href={`https://glowthentic.store/${url}`} />
    </Helmet>
  );
};

export default DynamicHelmet;
