import { useEffect, useState } from "react";
import Container from "../Container";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import MegaMenu from "./MegaMenu";

const NavbarForLargeDevice = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch('category.json')
      .then(res => res.json())
      .then(data => {
        // Sort categories to show `isButton: false` first
        const sortedData = data.sort((a, b) => a.isButton - b.isButton);
        setCategory(sortedData);
      });
  }, []);

  console.log(category);

  return (
    <>
      <div
        className="hidden lg:block bg-primary text-white py-5"
      >
        <Container>
          <div className="flex justify-between items-center gap-2">
            {category.map((data, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <Link
                  to="/products"
                  className={`flex items-center gap-1 hover:text-secondary ${data.isButton
                    ? "bg-white px-4 py-1 text-black rounded-2xl font-medium"
                    : ""
                    }`}
                >
                  {data.name ?? ""}
                  <Icon
                    className={data.dropdown ? "block" : "hidden"}
                    icon="solar:alt-arrow-down-line-duotone"
                    width="24"
                    height="24"
                  />
                </Link>
                <MegaMenu showMegaMenu={hoveredCategory === index} data={data} />
              </div>
            ))}
          </div>
        </Container>

      </div>
    </>
  );
};

export default NavbarForLargeDevice;
