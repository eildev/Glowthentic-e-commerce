import { Link } from "react-router-dom";
import Container from "../Container";
import HeadTitle from "../typography/HeadTitle";
import Toggle from "../typography/Toggle";
import DropdownFilter from "./DropdownFilter";
import RegularButton from "../typography/RegularButton";
//Category Data

const SidebarFilter = () => {
  return (
    <div className="p-3 ">
      <Container>
        <HeadTitle className="mt-5 lg:text-3xl   px-2">
          Women skincare{" "}
        </HeadTitle>
        <div className="flex justify-between items-center">
          <HeadTitle className="mt-5  px-2">Filter</HeadTitle>
          <div>
            <select className="select select-bordered focus:outline-none shadow-lg w-full max-w-xs"
            >
              <option disabled>Sort :</option>

              <option value="Recommended">Recommended</option>
              <option className="py-3" value="Price High To Low">
                Price High To Low
              </option>
              <option className="py-3" value="Price Low To High">
                Price Low To High
              </option>
              <option className="py-3" value="Latest Arrival">
                Latest Arrival
              </option>
              <option className="py-3" value="Discount % High To Low">
                Discount % High To Low
              </option>
            </select>
            
          </div>
        </div>

        <div className="max-w-72 bg-white">
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
      </Container>
    </div>
  );
};

export default SidebarFilter;
