import { useDispatch, useSelector } from "react-redux";
import { toggleFilter } from "../../redux/features/slice/filterSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../../components/Container";
import Breadcrumb from "../../components/navbar/Breadcrumb";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";
import AllProduct from "./AllProduct";

const AllProductPage = () => {
  const dispatch = useDispatch();
  const { toggleFilter: isFilterOpen } = useSelector((state) => state.filters);

  return (
    <Container>
      <Breadcrumb>
        <li>Products</li>
      </Breadcrumb>
      <HeadTitle className="mt-5 lg:text-3xl mx-5 mb-3">
        Women Skincare{" "}
        <span className="text-gray text-sm lg:text-lg ms-1">(110)</span>
      </HeadTitle>

      <div className="flex justify-between items-center mb-5 mx-5 gap-2">
        <div className="w-1/2">
          <HeadTitle className="mt-5 px-2 lg:block hidden">Filter</HeadTitle>
          <RegularButton
            onClick={() => dispatch(toggleFilter())}
            className="flex justify-center items-center py-3 px-3 w-full text-sm bg-white text-primary border border-gray-thin lg:hidden gap-2 shadow-sm rounded-md"
          >
            <Icon icon="material-symbols:tune" width="18" height="18" />
            Filter
          </RegularButton>
        </div>
        <div>
          <select className="select h-[2rem] px-2 lg:px-5 select-bordered focus:outline-none shadow-sm w-full max-w-xs rounded-md border-gray-thin">
            <option disabled>Sort :</option>
            <option value="Recommended">Recommended</option>
            <option value="Price High To Low">Price High To Low</option>
            <option value="Price Low To High">Price Low To High</option>
            <option value="Latest Arrival">Latest Arrival</option>
            <option value="Discount % High To Low">
              Discount % High To Low
            </option>
          </select>
        </div>
      </div>

      <div className="lg:flex lg:gap-5">
        <div className="hidden lg:block min-w-[290px] no-scrollbar top-[161px] h-[calc(100vh-161px)] overflow-y-auto sticky">
          <SidebarFilter />
        </div>
        <AllProduct />
      </div>

      <div
        className={`fixed top-0 left-0 w-full z-[60] h-full overflow-y-scroll bg-white transition-all duration-300 ease-in-out transform ${
          isFilterOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-[100%]"
        }`}
      >
        <div className="flex justify-between items-center px-5">
          <HeadTitle className="mt-5 px-2">Filter</HeadTitle>
          <button onClick={() => dispatch(toggleFilter())}>
            <Icon icon="bitcoin-icons:cross-outline" width="24" height="24" />
          </button>
        </div>
        <SidebarFilter />
      </div>
    </Container>
  );
};

export default AllProductPage;

// import { useState } from "react";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import Container from "../../components/Container";
// import Breadcrumb from "../../components/navbar/Breadcrumb";
// import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";
// import HeadTitle from "../../components/typography/HeadTitle";
// import RegularButton from "../../components/typography/RegularButton";
// import AllProduct from "./AllProduct";
// import { useDispatch, useSelector } from "react-redux";

// const AllProductPage = () => {
//   const dispatch = useDispatch();
//   const { toggleFilter: isFilterOpen } = useSelector((state) => state.filters);

//   // const [toggleFilter, setToggleFilter] = useState(false);
//   // const [selectedCategories, setSelectedCategories] = useState([]); // Track selected categories
//   // const [filterdCategories, setFilterdCategories] = useState([]); // Track filtered categories
//   // const [filterdTags, setFilterdTags] = useState([]); // Track filtered tags
//   // const [filterdPrices, setFilterdPrices] = useState([]); // Track filtered price ranges

//   return (
//     <Container>
//       <Breadcrumb>
//         <li>Products</li>
//       </Breadcrumb>
//       <HeadTitle className="mt-5 lg:text-3xl mx-5 mb-3">
//         Women Skincare{" "}
//         <span className="text-gray text-sm lg:text-lg ms-1">(110)</span>
//       </HeadTitle>

//       <div className="flex justify-between items-center mb-5 mx-5 gap-2">
//         <div className="w-1/2">
//           <HeadTitle className="mt-5 px-2 lg:block hidden">Filter</HeadTitle>
//           {/* <RegularButton
//             onClick={() => setToggleFilter((prev) => !prev)}
//             className="flex justify-center items-center py-3 px-3 w-full text-sm bg-white text-primary border border-gray-thin lg:hidden gap-2 shadow-sm rounded-md"
//           >
//             <Icon icon="material-symbols:tune" width="18" height="18" />
//             Filter
//           </RegularButton> */}
//           <RegularButton
//             onClick={() => dispatch(toggleFilter())}
//             className="flex justify-center items-center py-3 px-3 w-full text-sm bg-white text-primary border border-gray-thin lg:hidden gap-2 shadow-sm rounded-md"
//           >
//             <Icon icon="material-symbols:tune" width="18" height="18" />
//             Filter
//           </RegularButton>
//         </div>

//         <div>
//           <select className="select h-[2rem] px-2 lg:px-5 select-bordered focus:outline-none shadow-sm w-full max-w-xs rounded-md border-gray-thin">
//             <option disabled>Sort :</option>
//             <option value="Recommended">Recommended</option>
//             <option value="Price High To Low">Price High To Low</option>
//             <option value="Price Low To High">Price Low To High</option>
//             <option value="Latest Arrival">Latest Arrival</option>
//             <option value="Discount % High To Low">
//               Discount % High To Low
//             </option>
//           </select>
//         </div>
//       </div>

//       <div className="lg:flex lg:gap-5">
//         {/* SidebarFilter component: Pass all required props */}
//         <div className="hidden lg:block min-w-[290px] no-scrollbar top-[161px] h-[calc(100vh-161px)] overflow-y-auto sticky">
//           <SidebarFilter
//           // selectedCategories={selectedCategories}
//           // setSelectedCategories={setSelectedCategories}
//           // setFilterdCategories={setFilterdCategories}
//           // filterdCategories={filterdCategories}
//           // setFilterdTags={setFilterdTags}
//           // filterdTags={filterdTags}
//           // filterdPrices={filterdPrices}
//           // setFilterdPrices={setFilterdPrices}
//           />
//         </div>
//         {/* AllProduct component: Pass applied filters */}
//         <AllProduct
//         // selectedCategories={filterdCategories}
//         // selectedTags={filterdTags}
//         // selectedPrices={filterdPrices}
//         />
//       </div>

//       {/* Mobile Filter Sidebar */}
//       <div
//         className={`fixed top-0 left-0 w-full z-[60] h-full overflow-y-scroll bg-white transition-all duration-300 ease-in-out transform ${
//           toggleFilter
//             ? "opacity-100 visible translate-y-0"
//             : "opacity-0 invisible -translate-y-[100%]"
//         }`}
//       >
//         <div className="flex justify-between items-center px-5">
//           <HeadTitle className="mt-5 px-2">Filter</HeadTitle>
//           {/* <button onClick={() => setToggleFilter(false)}>
//             <Icon icon="bitcoin-icons:cross-outline" width="24" height="24" />
//           </button> */}
//           <button onClick={() => dispatch(toggleFilter())}>
//             <Icon icon="bitcoin-icons:cross-outline" width="24" height="24" />
//           </button>
//         </div>
//         <SidebarFilter
//         // selectedCategories={selectedCategories}
//         // setSelectedCategories={setSelectedCategories}
//         // setFilterdCategories={setFilterdCategories}
//         // filterdCategories={filterdCategories}
//         // setFilterdTags={setFilterdTags}
//         // filterdTags={filterdTags}
//         // filterdPrices={filterdPrices}
//         // setFilterdPrices={setFilterdPrices}
//         />
//       </div>
//     </Container>
//   );
// };

// export default AllProductPage;
