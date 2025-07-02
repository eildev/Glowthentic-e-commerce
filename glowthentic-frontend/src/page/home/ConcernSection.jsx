import { Link } from "react-router-dom";
import Container from "../../components/Container";
import ConcernSkeleton from "../../components/concern/ConcernSkeleton";
import HeadTitle from "../../components/typography/HeadTitle";
import { useGetConcernQuery } from "../../redux/features/api/concern/concernApi";
import { useDispatch } from "react-redux";
import { setFilteredTags } from "../../redux/features/slice/filterSlice";
import { imagePath } from "../../utils/imagePath";
import textUppercase from "../../utils/textUppercase";

const ConcernSection = () => {
  const { data, isLoading, error } = useGetConcernQuery();
  const dispatch = useDispatch();

  const handleTagClick = (concernId) => {
    dispatch(setFilteredTags([concernId])); // Assuming single tag selection
  };

  if (error) {
    return <span>Error</span>;
  }
  return (
    <div>
      <HeadTitle className="text-center mt-8 lg:text-2xl text-lg">
        CARE BY CONCERN
      </HeadTitle>
      <Container>
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[44px]">
            {[...Array(4)].map((_, index) => (
              <ConcernSkeleton key={index} />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-6">
            {data?.concerns?.slice(0, 12).map((concern, index) => (
              <Link
                to="/products"
                key={index}
                state={{ concernId: concern.id }}
                className="items-center justify-center"
                onClick={() => handleTagClick(concern.id)}
              >
                <img
                  src={imagePath(concern.image)}
                  alt={concern?.name ?? ""}
                  className="w-full object-cover rounded"
                />
                <h3 className="text-sm text-gray-600 mt-2 text-center">
                  {concern?.name ? textUppercase(concern?.name) : ""}
                </h3>
              </Link>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default ConcernSection;
