import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import HeadTitle from "../typography/HeadTitle";
import Toggle from "../typography/Toggle";
import DropdownFilter from "./DropdownFilter";
import cn from "../../utils/cn";
// import { clearAllFilters } from "../redux/slices/filterSlice";
import { IoMdClose } from "react-icons/io";
import {
  clearAllFilters,
  setSelectedCategories,
} from "../../redux/features/slice/filterSlice";

const SidebarFilter = ({ className }) => {
  const dispatch = useDispatch();
  const { selectedCategories } = useSelector((state) => state.filters);

  const removeFilter = (itemToRemove) => {
    dispatch(
      setSelectedCategories(
        selectedCategories.filter((item) => item !== itemToRemove)
      )
    );
  };

  return (
    <div className={cn("min-w-72 max-w-[288px] bg-white p-3", className)}>
      <div className="mt-5">
        <hr className="text-hr-thin" />
        <div className="p-4">
          <HeadTitle className="text-sm md:text-lg lg:text-lg xl:text-lg">
            Applied Filters
          </HeadTitle>
        </div>
        <div className="p-4">
          <div className="flex flex-wrap gap-2">
            {selectedCategories.length > 0 ? (
              selectedCategories.map((item, index) => (
                <div
                  key={index}
                  className="text-[#0C0C0C] flex gap-2 items-center text-sm border border-[#DFDFDF] p-2"
                >
                  {item}
                  <button onClick={() => removeFilter(item)}>
                    <IoMdClose />
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-sm">No filters selected</p>
            )}
          </div>
        </div>
        <div className="p-4">
          <Link
            className="text-secondary"
            onClick={() => dispatch(clearAllFilters())}
          >
            Clear All Filters
          </Link>
        </div>
        <hr className="text-hr-thin" />
        <div className="flex justify-between items-center p-4">
          <HeadTitle className="text-sm md:text-lg lg:text-lg xl:text-lg">
            Out Of Stock Items
          </HeadTitle>
          <Toggle className="mt-1" />
        </div>
        <hr className="text-hr-thin" />
        <DropdownFilter />
      </div>
    </div>
  );
};

export default SidebarFilter;

// import { Link } from "react-router-dom";
// import HeadTitle from "../typography/HeadTitle";
// import Toggle from "../typography/Toggle";
// import DropdownFilter from "./DropdownFilter";
// import RegularButton from "../typography/RegularButton";
// import cn from "../../utils/cn";
// import { useState } from "react";
// import { IoMdClose } from "react-icons/io";
// import { useCallback } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedCategories } from "../../redux/features/slice/filterSlice";

// // const SidebarFilter = ({ className, selectedCategories, setSelectedCategories, setFilterdCategories, filterdCategories, setFilterdTags, filterdTags, filterdPrices,
// const SidebarFilter = () => {
//   const dispatch = useDispatch();
//   const { selectedCategories } = useSelector((state) => state.filters);

//   const removeFilter = (itemToRemove) => {
//     dispatch(
//       setSelectedCategories(
//         selectedCategories.filter((item) => item !== itemToRemove)
//       )
//     );
//   };

//   // // Function to handle category/tag selection
//   // const handleSelectedData = useCallback((data) => {
//   //   setSelectedCategories(data); // ✅ Update selected category list
//   // }, []);

//   // // Function to remove a selected filter
//   // const removeFilter = (itemToRemove) => {
//   //   setSelectedCategories((prevData) =>
//   //     prevData.filter((item) => item !== itemToRemove)
//   //   );
//   // };

//   // // Function to clear all selected filters
//   // const clearAllFilters = () => {
//   //   setSelectedCategories([]);
//   //   setFilterdCategories([]);
//   //   setFilterdTags([]);
//   //   setFilterdPrices([]); // Clear price filters
//   // };
//   return (
//     <div className={cn("min-w-72 max-w-[288px] bg-white p-3", className)}>
//       <div className="mt-5">
//         <hr className="text-hr-thin" />

//         {/* Applied Filters Section */}
//         <div className="p-4">
//           <HeadTitle className="text-sm md:text-lg lg:text-lg xl:text-lg">
//             Applied Filters
//           </HeadTitle>
//         </div>

//         <div className="p-4">
//           <div className="flex flex-wrap gap-2">
//             {selectedCategories && selectedCategories.length > 0 ? (
//               selectedCategories.map((item, index) => (
//                 <div
//                   key={index}
//                   className="text-[#0C0C0C] flex gap-2 items-center text-sm border border-[#DFDFDF] p-2"
//                 >
//                   {item}
//                   <button onClick={() => removeFilter(item)}>
//                     <IoMdClose />
//                   </button>
//                 </div>
//               ))
//             ) : (
//               <p className="text-gray-500 text-sm">No filters selected</p>
//             )}
//           </div>
//         </div>

//         {/* Clear All Filters */}
//         <div className="p-4">
//           <Link className="text-secondary" onClick={clearAllFilters}>
//             Clear All Filters
//           </Link>
//         </div>

//         <hr className="text-hr-thin" />

//         {/* Out of Stock Toggle */}
//         <div className="flex justify-between items-center p-4">
//           <HeadTitle className="text-sm md:text-lg lg:text-lg xl:text-lg">
//             Out Of Stock Items
//           </HeadTitle>
//           <Toggle className="mt-1" />
//         </div>

//         <hr className="text-hr-thin" />

//         {/* DropdownFilter Component for Category Selection */}
//         <DropdownFilter
//           selectedData={selectedCategories}
//           setSelectedData={handleSelectedData}
//           filterdCategories={filterdCategories}
//           setFilterdCategories={setFilterdCategories}
//           filterdTags={filterdTags}
//           setFilterdTags={setFilterdTags}
//           filterdPrices={filterdPrices}
//           setFilterdPrices={setFilterdPrices}
//         />
//       </div>

//       <hr className="text-hr-thin" />

//       {/* Clear & Apply Filter Buttons */}
//       {/* <div className="flex justify-between items-center py-4 pe-1">
//         <RegularButton className="bg-transparent text-secondary" onClick={clearAllFilters}>
//           Clear Filters
//         </RegularButton>
//         <RegularButton className="py-2">Apply Filters</RegularButton>
//       </div> */}
//     </div>
//   );
// };

// export default SidebarFilter;
