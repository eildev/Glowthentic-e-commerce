import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSortOption,
  toggleFilter,
  setFilteredCategories,
  setFilteredTags,
  setFilteredBrands,
  setFilteredFeatures,
  setFilteredSearchQuery,
  addCategoryWithName,
} from "../../redux/features/slice/filterSlice";
import { Icon } from "@iconify/react/dist/iconify.js";
import Container from "../../components/Container";
import Breadcrumb from "../../components/navbar/Breadcrumb";
import SidebarFilter from "../../components/SidebarFilter/SidebarFilter";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";
import AllProduct from "./AllProduct";
import { useLocation } from "react-router-dom";
import { useGetCategoryQuery } from "../../redux/features/api/category/categoryApi";

const AllProductPage = () => {
  const dispatch = useDispatch();
  const { toggleFilter: isFilterOpen } = useSelector((state) => state.filters);
  const location = useLocation();
  
  // Fetch categories to get names from IDs
  const { data: categoryData } = useGetCategoryQuery();

  useEffect(() => {
    const {
      categoryId,
      categoryName,
      subcategoryId,
      subcategoryName,
      brandId,
      brandName,
      tagId,
      tagName,
      featureSlug,
      featureName,
      searchQuery,
    } = location.state || {};

    // Helper function to find category name from ID
    const findCategoryName = (id) => {
      if (!categoryData?.categories) return null;
      
      const category = categoryData.categories.find(cat => cat.id === id);
      return category ? category.categoryName : null;
    };

    // Reset filters when navigating to products page with new filters
    // Only clear filters if we have new filters to apply
    if (categoryId || subcategoryId || brandId || tagId || featureSlug || searchQuery) {
      dispatch(setFilteredCategories([]));
      dispatch(setFilteredTags([]));
      dispatch(setFilteredBrands([]));
      dispatch(setFilteredFeatures([]));
      dispatch(setFilteredSearchQuery(""));
    }

    if (categoryId) {
      const name = categoryName || findCategoryName(categoryId) || `Category ${categoryId}`;
      dispatch(addCategoryWithName({ id: categoryId, name }));
    }
    
    if (subcategoryId) {
      const name = subcategoryName || findCategoryName(subcategoryId) || `Subcategory ${subcategoryId}`;
      dispatch(addCategoryWithName({ id: subcategoryId, name }));
    }
    
    if (brandId) {
      dispatch(setFilteredBrands([brandId]));
      // You could implement a similar addBrandWithName if needed
    }
    
    if (tagId) {
      dispatch(setFilteredTags([tagId]));
      // You could implement a similar addTagWithName if needed
    }
    
    if (featureSlug) {
      dispatch(setFilteredFeatures([featureSlug]));
    }
    
    if (searchQuery) {
      dispatch(setFilteredSearchQuery(searchQuery));
    }
  }, [location.state, dispatch, categoryData]);

  const handleSortChange = (e) => {
    dispatch(setSortOption(e.target.value));
  };

  return (
    <Container>
      <Breadcrumb>
        <li>Products</li>
      </Breadcrumb>

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
          <select
            className="select h-[2rem] px-2 lg:px-5 select-bordered focus:outline-none shadow-sm w-full max-w-xs rounded-md border-gray-thin"
            onChange={handleSortChange}
            defaultValue="Recommended"
          >
            <option disabled>Sort :</option>
            <option value="Recommended">Recommended</option>
            <option value="Price High To Low">Price High To Low</option>
            <option value="Price Low To High">Price Low To High</option>
            <option value="Latest Arrival">Latest Arrival</option>
            <option value="Old First">Old First</option>
            <option value="Discount % High To Low">
              Discount % High To Low
            </option>
            <option value="Discount % Low To High">
              Discount % Low To High
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