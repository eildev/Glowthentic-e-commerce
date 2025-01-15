import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../../components/Container";
import Breadcrumb from "../../components/navbar/Breadcrumb";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";

const AllProductPage = () => {
  return (
    <Container>

      <Breadcrumb className=''>
        <li>Products</li>
      </Breadcrumb>
      <HeadTitle className="mt-5 lg:text-3xl mx-5">
        Women skincare{" "}
      </HeadTitle>
      <div className="flex justify-between items-center mb-5 mx-5">
        <div className="">
          <HeadTitle className="mt-5 px-2 lg:block hidden">Filter</HeadTitle>
          <RegularButton className="flex justify-center items-center py-2 px-5 bg-white text-primary border border-primary rounded-none lg:hidden gap-2 shadow-lg">
            <Icon icon="material-symbols:tune" width="24" height="24" />
            Filter
          </RegularButton>
        </div>

        <div>
          <select className="select select-bordered focus:outline-none shadow-lg w-full max-w-xs rounded-none">
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

      <SidebarFilter></SidebarFilter>
    </Container>
  );
};

export default AllProductPage;
