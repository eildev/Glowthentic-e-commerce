import Container from "../../components/Container";
import HeadTitle from "../../components/typography/HeadTitle";
import catImages from "../../assets/img/category/10.png";
import { useGetCategoryQuery } from "../../redux/features/api/category/categoryApi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setSelectedCategories,
  setFilteredCategories,
} from "../../redux/features/slice/filterSlice";
import CategorySkeleton from "./CategorySkeleton";
import { imagePath } from "../../utils/imagePath";

const CategorySection = () => {
  const { data, isLoading, error } = useGetCategoryQuery();
  const dispatch = useDispatch();

  if (error) {
    return <span>Error</span>;
  }

  const handleCategoryClick = (categoryName, categoryId) => {
    // Dispatch selected category name and ID to Redux store
    dispatch(setSelectedCategories([categoryName])); // Assuming single selection
    dispatch(setFilteredCategories([categoryId])); // Filter by category ID
  };

  return (
    <div>
      <HeadTitle className="text-center mt-8 lg:text-2xl text-lg">
        SHOP BY CONCERN
      </HeadTitle>
      <Container>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[44px]">
            {[...Array(4)].map((_, index) => (
              <CategorySkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-6">
            {data?.categories
              ?.filter((category) => category?.parent_id === null)
              .slice(0, 12)
              .map((category, index) => (
                <Link
                  to="/products"
                  key={index}
                  className="items-center justify-center"
                  onClick={() =>
                    handleCategoryClick(category.categoryName, category.id)
                  }
                >
                  <img
                    // src={category?.image ?? catImages}
                    src={imagePath(category?.image)}
                    alt={category?.categoryName}
                    className="w-full object-cover rounded"
                  />
                  <h3 className="text-sm text-gray-600 mt-2 text-center uppercase">
                    {category?.categoryName ?? ""}
                  </h3>
                </Link>
              ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default CategorySection;
