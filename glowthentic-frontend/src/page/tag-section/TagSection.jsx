import Container from "../../components/Container";
import HeadTitle from "../../components/typography/HeadTitle";
import { useGetTagsQuery } from "../../redux/features/api/tagViewApi/tagViewApi";
import defaultTag from "../../assets/img/tags/11.png";

const TagSection = () => {
  const { data, tagsIsLoading, tagsError } = useGetTagsQuery();

  // console.log(data);

  return (
    <div>
      <HeadTitle className="text-center mt-8">CARE BY CONCERN</HeadTitle>
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-6">
          {data?.categories?.map((tags, index) => (
            <div
              key={index}
              className=" lg:px-16 px-5 md:px-10  items-center justify-center"
            >
              <img
                src={tags?.images ?? defaultTag}
                alt={tags?.tagName}
                className="w-full  object-cover rounded"
              />
              <h3 className="text-sm text-gray-600 mt-2 text-center">
                {tags.tagName}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TagSection;
