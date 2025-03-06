import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../../components/Container";
import Breadcrumb from "../../components/navbar/Breadcrumb";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";
import AllProduct from "./AllProduct";
import { useState } from "react";

const AllProductPage = () => {
  const [toggleFilter, setToggleFilter] = useState(false);

  return (
    <Container>
      <Breadcrumb className="">
        <li>Products</li>
      </Breadcrumb>
      <HeadTitle className="mt-5 lg:text-3xl mx-5 mb-3">
        Women skincare
        <span className="text-gray text-sm lg:text-lg ms-1">(110)</span>
      </HeadTitle>
      <div className="flex justify-between items-center mb-5 mx-5 gap-2">
        <div className="w-1/2 ">
          <HeadTitle className="mt-5 px-2 lg:block hidden">Filter</HeadTitle>
          <RegularButton
            onClick={() => setToggleFilter((prev) => !prev)}
            className="flex justify-center items-center py-3 px-3 w-full text-sm bg-white text-primary border border-gray-thin lg:hidden gap-2 shadow-sm rounded-md"
          >
            <Icon icon="material-symbols:tune" width="18" height="18" />
            Filter
          </RegularButton>
        </div>

        <div className="">
          <select className="select h-[2rem] px-2 lg:px-5 select-bordered focus:outline-none shadow-sm w-full max-w-xs rounded-md border-gray-thin">
            <option disabled>Sort :</option>
            <option value="Recommended">Recommended</option>
            <option className="py-2 lg:py-3" value="Price High To Low">
              Price High To Low
            </option>
            <option className="py-2 lg:py-3" value="Price Low To High">
              Price Low To High
            </option>
            <option className="py-2 lg:py-3" value="Latest Arrival">
              Latest Arrival
            </option>
            <option className="py-2 lg:py-3" value="Discount % High To Low">
              Discount % High To Low
            </option>
          </select>
        </div>
      </div>
<div>

</div>
      <div  className="lg:flex lg:gap-5 ">
        <div className="hidden lg:block min-w-[290px]   no-scrollbar top-[161px] h-[calc(100vh-161px)] overflow-y-auto sticky">
         
          <SidebarFilter ></SidebarFilter>
        </div>
        <AllProduct  className=" " />
      </div>

      <div
        className={`fixed top-0 left-0 w-full z-[60] h-full overflow-y-scroll bg-white transition-all duration-300 ease-in-out transform ${toggleFilter
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-[100%]"
          }`}
      >
        <div className="">
          <div className="flex justify-between items-center px-5">
            <HeadTitle className="mt-5 px-2">Filter</HeadTitle>
            <button onClick={() => setToggleFilter(false)}>
              <Icon icon="bitcoin-icons:cross-outline" width="24" height="24" />
            </button>
          </div>
        </div>
        <SidebarFilter className={`h-full w-full`}></SidebarFilter>
      </div>
    </Container>
  );
};

export default AllProductPage;
