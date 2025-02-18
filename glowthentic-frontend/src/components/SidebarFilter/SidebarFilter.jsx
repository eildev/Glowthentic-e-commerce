import { Link } from "react-router-dom";
import HeadTitle from "../typography/HeadTitle";
import Toggle from "../typography/Toggle";
import DropdownFilter from "./DropdownFilter";
import RegularButton from "../typography/RegularButton";
import cn from "../../utils/cn";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { useCallback } from "react";
//Category Data

const SidebarFilter = ({ className }) => {
  const [selectData, setSelectData] = useState([]);

  const handleSelectedData = useCallback((data) => {
    setSelectData(data);
  }, []);

  const removeFilter = (itemToRemove) => {
    setSelectData((prevData) => prevData.filter((item) => item !== itemToRemove));
  };

  const clearAllFilters = () => {
    setSelectData([]);
  };

  return (
    <div className={cn(`min-w-72 bg-white p-3 `, className)}>
      <div className="mt-5 ">
        <hr className="text-hr-thin" />
        <div className="p-4">
          <HeadTitle className="text-sm md:text-lg lg:text-lg xl:text-lg">
            Applied filters
          </HeadTitle>
        </div>
        <div className="p-4">
  <div className=" flex flex-wrap gap-2 ">
    {selectData && selectData.length > 0 ? (
      selectData.map((item, index) => (
        <div key={index} className="text-[#0C0C0C] flex gap-2 items-center text-sm border border-[#DFDFDF] p-2">
          {item} <button><IoMdClose onClick={() => removeFilter(item)}/></button>
        </div>
      ))
    ) : (
      <p className="text-gray-500 text-sm">No filters selected</p>
    )}
  </div>
</div>

        {/* //Here Filter tag// */}
        <div></div>
        {/* //Here Filter tag End// */}
        <div className="p-4">
          <Link className="text-secondary " onClick={clearAllFilters}>Clear All Filters</Link>
        </div>
        <hr className="text-hr-thin" />
        <div className=" flex justify-between items-center  p-4">
          <HeadTitle className="text-sm md:text-lg lg:text-lg xl:text-lg">
            Out Of Stock Items
          </HeadTitle>
          <Toggle className="mt-1"> </Toggle>
        </div>
        <hr className="text-hr-thin" />
        {/* //DropdownFilter // */}

        <DropdownFilter selectedData={selectData} setSelectedData={setSelectData}></DropdownFilter>
      </div>

      <hr className="text-hr-thin" />
      <div className="flex justify-between items-center py-4 pe-1">
        <RegularButton className="bg-transparent text-secondary ">
          Clear filters
        </RegularButton>
        <RegularButton className="py-2">Apply filters</RegularButton>
      </div>
    </div>
  );
};

export default SidebarFilter;
