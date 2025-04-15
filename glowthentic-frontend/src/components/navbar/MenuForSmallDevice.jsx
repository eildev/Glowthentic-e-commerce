import { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../Container";
import { Link } from "react-router-dom";

const MenuForSmallDevice = ({ item, setItem, onHideNavbar }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <div
      className={`bg-[#FAF9F5] h-screen absolute overflow-hidden duration-300 top-0 w-full px-5 transition-all ease ${
        item ? "left-0" : "left-[-100%]"
      }`}
    >
      <span
        onClick={() => setItem(null)}
        className="flex items-center gap-1 cursor-pointer py-[14px] ml-2 w-fit"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.835 3.8701L16.055 2.1001L6.16504 12.0001L16.065 21.9001L17.835 20.1301L9.70504 12.0001L17.835 3.8701Z"
            fill="#0C0C0C"
          />
        </svg>
        <span className="text-[#0C0C0C] text-sm font-semibold capitalize">
          {item?.categoryName}
        </span>
      </span>

      <div className="max-h-[78vh] overflow-auto">
        <Container>
          <ul>
            {/* By Sub Category */}
            {item?.subcategories?.length > 0 && (
              <div>
                <li
                  onClick={() => toggleSection("category")}
                  className="bg-white py-[10px] px-2 border-t border-gray-light font-semibold cursor-pointer text-sm flex justify-between"
                >
                  {"By Subcategory"}
                  <Icon
                    icon={
                      openSection === "category"
                        ? "solar:alt-arrow-up-bold"
                        : "solar:alt-arrow-right-bold"
                    }
                    width="24"
                    height="24"
                  />
                </li>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    openSection === "category" ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {item?.subcategories.slice(0, 10).map((subcategory) => (
                    <li
                      key={subcategory.slug}
                      className="text-sm text-[#404040] py-[10px] border-t border-[#DFDFDF] px-5 capitalize"
                    >
                      <Link
                        to="/products"
                        state={{ subcategoryId: subcategory.id }}
                        onClick={onHideNavbar}
                      >
                        {subcategory.categoryName}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            )}

            {/* By Brand */}
            {item?.brands?.length > 0 && (
              <div>
                <li
                  onClick={() => toggleSection("skin")}
                  className="bg-white py-[10px] px-2 border-t border-gray-light font-semibold cursor-pointer text-sm flex justify-between capitalize"
                >
                  {"By Brands"}
                  <Icon
                    icon={
                      openSection === "skin"
                        ? "solar:alt-arrow-up-bold"
                        : "solar:alt-arrow-right-bold"
                    }
                    width="24"
                    height="24"
                  />
                </li>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    openSection === "skin" ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {item?.brands?.map((brand) => (
                    <li
                      key={brand?.slug}
                      className="text-sm text-[#404040] py-[10px] border-t border-[#DFDFDF] px-5 capitalize"
                    >
                      <Link
                        to="/products"
                        state={{ brandId: brand.id }}
                        onClick={onHideNavbar}
                      >
                        {brand?.brandName ?? ""}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            )}

            {/* Tags */}
            {item?.tags?.length > 0 && (
              <div>
                <li
                  onClick={() => toggleSection("collection")}
                  className="bg-white py-[10px] px-2 border-t border-gray-light font-semibold cursor-pointer text-sm flex justify-between capitalize"
                >
                  {"By Skin Condition"}
                  <Icon
                    icon={
                      openSection === "collection"
                        ? "solar:alt-arrow-up-bold"
                        : "solar:alt-arrow-right-bold"
                    }
                    width="24"
                    height="24"
                  />
                </li>
                <div
                  className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
                    openSection === "collection" ? "max-h-96" : "max-h-0"
                  }`}
                >
                  {item?.tags?.slice(0, 10).map((tag) => (
                    <li
                      key={tag.id}
                      className="text-sm text-[#404040] py-[10px] border-t border-[#DFDFDF] px-5 capitalize"
                    >
                      <Link
                        to="/products"
                        state={{ tagId: tag.id }}
                        onClick={onHideNavbar}
                      >
                        {tag?.tagName}
                      </Link>
                    </li>
                  ))}
                </div>
              </div>
            )}

            {/* Offers */}
            {item?.product_feature?.length > 0 &&
              item?.product_feature.slice(0, 10).map((feature) => (
                <li
                  key={feature.id}
                  className="text-sm text-[#404040] py-[10px] px-2 bg-white border-t last:border-b border-[#DFDFDF] capitalize"
                >
                  <Link
                    to="/products"
                    state={{ featureSlug: feature.slug }}
                    onClick={onHideNavbar}
                  >
                    {feature?.slug ?? ""}
                  </Link>
                </li>
              ))}
          </ul>
        </Container>
      </div>
    </div>
  );
};

export default MenuForSmallDevice;
