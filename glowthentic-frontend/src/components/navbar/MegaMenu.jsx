import Container from "../Container";
import image from "../../assets/img/navbar.jpg";
import { Link } from "react-router-dom";

const MegaMenu = ({ showMegaMenu, data, onHideMegaMenu }) => {
  const { subcategories, brands, tags, product_feature } = data;

  return (
    <div
      className={`bg-white w-full text-black absolute top-[100%] left-0 z-20 shadow-lg 
      transition-all duration-300 ease-in-out transform 
      ${showMegaMenu
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-5"
        }`}
    >
      <Container>
        <div className="grid grid-cols-5 gap-5 py-10">
          <div>
            <ul className="font-semibold text-sm xxl:text-lg grid gap-2">
              {product_feature.slice(0, 10).map((feature) => (
                <li
                  key={feature?.slug}
                  className="cursor-pointer hover:text-secondary"
                >
                  <Link
                    to="/products"
                    // state={{ featureSlug: feature?.slug }}
                    onClick={onHideMegaMenu} // ক্লিক করলে MegaMenu hide হবে
                    className="capitalize"
                  >
                    {feature?.slug ?? ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2 text-sm xxl:text-lg">By Subcategory</h2>
            <ul className="grid gap-2 text-sm xxl:text-lg">
              {subcategories.slice(0, 10).map((subcategory) => (
                <li
                  className="font-normal hover:text-secondary"
                  key={subcategory.slug}
                >
                  <Link
                    to="/products"
                    state={{ subcategoryId: subcategory.id }}
                    onClick={onHideMegaMenu} // ক্লিক করলে MegaMenu hide হবে
                  >
                    {subcategory?.categoryName ?? ""}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2 text-sm xxl:text-lg">By Brands</h2>
            <ul className="grid gap-2 text-sm xxl:text-lg">
              {brands.slice(0, 10).map((brand) => (
                <li
                  className="font-normal hover:text-secondary"
                  key={brand?.slug}
                >
                  <Link
                    to="/products"
                    state={{ brandId: brand.id }}
                    onClick={onHideMegaMenu} // ক্লিক করলে MegaMenu hide হবে
                  >
                    {brand?.brandName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-2 text-sm xxl:text-lg">By Skin Condition</h2>
            <ul className="grid gap-2 text-sm xxl:text-lg">
              {tags.slice(0, 10).map((tag) => (
                <li className="font-normal hover:text-secondary" key={tag.id}>
                  <Link
                    to="/products"
                    state={{ tagId: tag.id }}
                    onClick={onHideMegaMenu} // ক্লিক করলে MegaMenu hide হবে
                  >
                    {tag?.tagName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
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
