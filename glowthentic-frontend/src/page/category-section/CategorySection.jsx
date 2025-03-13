import Container from "../../components/Container";
import HeadTitle from "../../components/typography/HeadTitle";
import catImages from "../../assets/img/category/10.png";
import { useGetCategoryQuery } from "../../redux/features/api/category/categoryApi";

const CategorySection = () => {
  const { data, isLoading, error, refetch } = useGetCategoryQuery();
  // console.log(data);

  return (
    <div>
      <HeadTitle className="text-center mt-8">SHOP BY CONCERN</HeadTitle>
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-6">
          {data?.categories
            ?.filter((category) => category?.parent_id === null)
            .map((category, index) => (
              <div
                key={index}
                className="lg:px-16 px-5 md:px-10 items-center justify-center"
              >
                <img
                  // src={category?.image ?? catImages}
                  src={catImages}
                  alt={category?.categoryName}
                  className="w-full object-cover rounded"
                />
                <h3 className="text-sm text-gray-600 mt-2 text-center">
                  {category?.categoryName}
                </h3>
              </div>
            ))}
        </div>
      </Container>
    </div>
  );
};

export default CategorySection;
