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
