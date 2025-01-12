import { useEffect, useState } from "react";
import SuggestionProduct from "./SuggestionProduct";
import cn from "../../utils/cn";
import { Icon } from "@iconify/react";

const SearchBar = ({ className }) => {
  const [query, setQuery] = useState(""); // Search query
  const [suggestions, setSuggestions] = useState([]); // Suggestions list
  const fetchSuggestions = async (searchText) => {
    const mockData = [
      {
        name: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
        price: "$12.99",
        image: "https://picsum.photos/50?random=1", // Random image from Lorem Picsum
      },
      {
        name: "Foundation",
        price: "$24.99",
        image: "https://picsum.photos/50?random=2", // Random image from Lorem Picsum
      },
      {
        name: "Mascara",
        price: "$15.99",
        image: "https://picsum.photos/50?random=3", // Random image from Lorem Picsum
      },
      {
        name: "Eyeliner",
        price: "$9.99",
        image: "https://picsum.photos/50?random=4", // Random image from Lorem Picsum
      },
      {
        name: "Blush",
        price: "$14.99",
        image: "https://picsum.photos/50?random=5", // Random image from Lorem Picsum
      },
      {
        name: "Nail Polish",
        price: "$6.99",
        image: "https://picsum.photos/50?random=6", // Random image from Lorem Picsum
      },
      {
        name: "Eyeshadow Palette",
        price: "$29.99",
        image: "https://picsum.photos/50?random=7", // Random image from Lorem Picsum
      },
    ];

    const filteredData = mockData.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setSuggestions(filteredData);
  };
  useEffect(() => {
    if (query) {
      fetchSuggestions(query);
    } else {
      setSuggestions([]); // Clear suggestions when query is empty
    }
  }, [query]);
  return (
    <>
      {/* //Full Search Start */}
      <div className={`${cn("relative", className)}`}>
        <div
          className={`${cn(
            "relative bg-white rounded-3xl shadow-[0_4px_6px_rgba(0,0,0,0.1)] overflow-hidden z-40",
            className
          )}`}
        >
          {/* //Search icon Start*/}
          <a href="">
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 ">
              <Icon
                icon="ic:outline-search"
                className="text-black "
                width="24"
                height="24"
              />
            </span>
          </a>
          {/* //Search icon End*/}

          {/* //Search Input// */}
          <input
            type="text"
            placeholder="Search for products, brands..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="ps-4 border-none w-full focus:outline-none text-black h-9"
          />
          {/* //Search Input End// */}
        </div>

        {/* //Search Show Text */}
        <div className="relative z-30 -top-4 drop-shadow-xl">
          {suggestions.length > 0 && (
            <ul className="absolute left-0 right-0 pt-5 text-black bg-white rounded-b-xl ">
              {suggestions.map((item, index) => (
                <SuggestionProduct
                  key={index}
                  item={item}
                  setQuery={setQuery}
                  setSuggestions={setSuggestions}
                />
              ))}
            </ul>
          )}
        </div>
        {/* //Search Show Text End */}
      </div>
      {/* //Full Search End */}
    </>
  );
};

export default SearchBar;
