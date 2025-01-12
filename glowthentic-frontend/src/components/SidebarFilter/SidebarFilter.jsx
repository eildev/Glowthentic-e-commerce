import Container from "../Container";
import HeadTitle from "../typography/HeadTitle";

const SidebarFilter = () => {
  return (
    <div>
      <Container>
        <div className="max-w-72">
        <HeadTitle>Filter</HeadTitle>
          <div className="mt-6">
          <HeadTitle className="text-sm md:text-lg lg:text-lg xl:text-lg">Applied filters</HeadTitle>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SidebarFilter;
