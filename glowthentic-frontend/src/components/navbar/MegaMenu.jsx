import Container from "../Container";
import image from "../../assets/img/navbar.jpg";
import { Link } from "react-router-dom";

const MegaMenu = ({ showMegaMenu, data }) => {
  const { subcategories, brands, tags, product_feature } = data;

  // console.log(product_feature);
  return (
    <div
      className={`bg-white w-full text-black  absolute top-[100%] left-0 z-20 shadow-lg 
      transition-all duration-300 ease-in-out transform 
      ${
        showMegaMenu
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-5"
      }`}
    >
      <Container>
        <div className="grid grid-cols-5 gap-5 py-10">
          <div>
            <ul className="font-semibold text-lg grid gap-2">
              {product_feature.slice(0, 10).map((feature) => (
                <li
                  key={feature?.slug}
                  className="cursor-pointer hover:text-secondary"
                >
                  <Link to="/products" className="capitalize">
                    {feature?.slug ?? ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">By Subcategory</h2>
            <ul className="grid gap-2">
              {subcategories.slice(0, 10).map((subcategory) => (
                <li
                  className="font-normal hover:text-secondary"
                  key={subcategory.slug}
                >
                  <Link to="/products">{subcategory?.categoryName ?? ""}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">By Brands</h2>
            <ul className="grid gap-2">
              {brands.slice(0, 10).map((brand) => (
                <li
                  className="font-normal hover:text-secondary"
                  key={brand?.slug}
                >
                  <Link to="/products">{brand?.brandName}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2">By Skin Condition</h2>
            <ul className="grid gap-2">
              {tags.slice(0, 10).map((tag) => (
                <li className="font-normal hover:text-secondary" key={tag.id}>
                  <Link to="/products"> {tag?.tagName}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid">
            <img src={image} alt="navbar Image" />
            <h4 className="font-semibold capitalize text-sm my-2">
              capture totale super potent rich cream
            </h4>
            <p className="text-xs">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribu
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MegaMenu;
