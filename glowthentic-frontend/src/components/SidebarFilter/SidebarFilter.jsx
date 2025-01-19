import { Link } from "react-router-dom";
import HeadTitle from "../typography/HeadTitle";
import Toggle from "../typography/Toggle";
import DropdownFilter from "./DropdownFilter";
import RegularButton from "../typography/RegularButton";
import cn from "../../utils/cn";
//Category Data

const SidebarFilter = ({ className }) => {
  return (
    <div className={cn(`min-w-72 bg-white p-3 `, className)}>
      <div className="mt-5 ">
        <hr className="text-hr-thin" />
        <div className="p-4">
          <HeadTitle className="text-sm md:text-lg lg:text-lg xl:text-lg">
            Applied filters
          </HeadTitle>
        </div>
        {/* //Here Filter tag// */}
        <div></div>
        {/* //Here Filter tag End// */}
        <div className="p-4">
          <Link className="text-secondary ">Clear All Filters</Link>
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

        <DropdownFilter></DropdownFilter>
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
