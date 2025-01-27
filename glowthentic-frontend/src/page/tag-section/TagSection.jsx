import Container from "../../components/Container";
import HeadTitle from "../../components/typography/HeadTitle";
import images from "../../assets/img/tags/11.png";

const tags = [
  {
    name: "Facewash",
    image: "https://images.unsplash.com/photo-1595262262366-ec4b18f3bcf0",
  },
  {
    name: "Cream",
    image: "https://images.unsplash.com/photo-1585642416941-6b9e0ed47e6e",
  },
  {
    name: "Moisturiser",
    image: "https://images.unsplash.com/photo-1584768685601-394056d238db",
  },
  {
    name: "Serum",
    image: "https://images.unsplash.com/photo-1591919085700-922e3ed85bfb",
  },
  {
    name: "Soap",
    image: "https://images.unsplash.com/photo-1585244534853-3b39d83a70f4",
  },
  {
    name: "Shampoo",
    image: "https://images.unsplash.com/photo-1590462035099-5f989edc7c87",
  },
  {
    name: "Lipsticks",
    image: "https://images.unsplash.com/photo-1612744568092-09a433467b5d",
  },
  {
    name: "Lip Balm",
    image: "https://images.unsplash.com/photo-1577823652625-53900c88f3fc",
  },
  {
    name: "Foundation",
    image: "https://images.unsplash.com/photo-1604678903543-f77f99329fcb",
  },
  {
    name: "Eyeshadow",
    image: "https://images.unsplash.com/photo-1578603049531-74b5ac17e018",
  },
  {
    name: "Concealer",
    image: "https://images.unsplash.com/photo-1612743825046-9e8f07c924e1",
  },
  {
    name: "Nail Polish",
    image: "https://images.unsplash.com/photo-1600136679787-9b8b6e740a24",
  },
];

const TagSection = () => {
  return (
    <div>
      <HeadTitle className="text-center mt-8">CARE BY CONCERN</HeadTitle>
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-6">
          {tags.map((tags, index) => (
            <div
              key={index}
              className=" lg:px-16 px-5 md:px-10  items-center justify-center"
            >
              <img
                src={images}
                alt={tags.name}
                className="w-full  object-cover rounded"
              />
              <h3 className="text-sm text-gray-600 mt-2 text-center">
                {tags.name}
              </h3>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default TagSection;
