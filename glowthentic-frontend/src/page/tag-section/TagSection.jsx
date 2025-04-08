import Container from "../../components/Container";
import HeadTitle from "../../components/typography/HeadTitle";
import { useGetTagsQuery } from "../../redux/features/api/tagViewApi/tagViewApi";
import defaultTag from "../../assets/img/tags/11.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilteredTags } from "../../redux/features/slice/filterSlice";
import { imagePath } from "../../utils/imagePath";
import TagSkeleton from "./TagSkeleton";

const TagSection = () => {
  const { data, isLoading, error } = useGetTagsQuery();
  const dispatch = useDispatch();

  const handleTagClick = (tagId) => {
    dispatch(setFilteredTags([tagId])); // Assuming single tag selection
  };

  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }
  if (error) {
    return <span>Error</span>;
  }

  return (
    <div>
      <HeadTitle className="text-center mt-8">CARE BY CONCERN</HeadTitle>
      <Container>
       {
        isLoading ? <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[44px]">
        {[...Array(4)].map((_, index) => (
          <TagSkeleton key={index} />
        ))}
      </div>:  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-6">
        {data?.categories?.slice(0, 12).map((tags, index) => (
          <Link
            to="/products"
            key={index}
            className="lg:px-16 px-5 md:px-10 items-center justify-center"
            onClick={() => handleTagClick(tags.id)}
          >
            <img
              src={imagePath(tags.image)}
              alt={tags?.tagName ?? ""}
              className="w-full object-cover rounded"
            />
            <h3 className="text-sm text-gray-600 mt-2 text-center">
              {tags.tagName}
            </h3>
          </Link>
        ))}
      </div>
       }
      </Container>
    </div>
  );
};

export default TagSection;
