import { Icon } from "@iconify/react";
import Container from "../components/Container";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Searchbar from "../components/Searchbar";
const Header = () => {
  const [query, setQuery] = useState(""); // Search query
  const [suggestions, setSuggestions] = useState([]); // Suggestions list
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const fetchSuggestions = async (searchText) => {
    // Replace this with an actual API call

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
    <div className="bg-primary">
      <Container>
        <div className="navbar text-white py-5	">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Parent</a>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Item 3</a>
                </li>
              </ul>
            </div>
            {/* //Logo Start*/}
            <div className="navbar-start hidden lg:flex">
              <Link className="text-xl">
                <img
                  src="/logo/Glowthentic-Logo.svg"
                  alt="Logo"
                  className="h-12 w-auto"
                />
              </Link>
            </div>
            {/* //Logo End */}
            
          </div>
          {/* //Small Device logo// */}
          <div className="lg:flex lg:hidden xl:hidden 2xl:hidden">
            <Link className="text-xl">
              <img
                src="/logo/Glowthentic-Logo.svg"
                alt="Logo"
                className="h-12 w-auto"
              />
            </Link>
          </div>
          {/* //Small Device logo// */}
          <div className="navbar-center hidden lg:flex">
            {/* //Full Search Start */}
            <div className="relative">
              
              <div className="relative z-20 ">
                {/* //Search icon Start*/}
                <a href="">
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
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
                  className="ps-4 border-none focus:outline-none text-black h-9 rounded-e-3xl rounded-s-3xl md:w-[450px] lg:w-[600px] pe-10] shadow-[0_4px_6px_rgba(0,0,0,0.1)]"
                />
                {/* //Search Input End// */}
              </div>

              {/* //Search Show Text */}
              <div className="relative  z-10 -top-4">
                {suggestions.length > 0 && (
                  <ul className="absolute left-0 right-0   pt-5  text-black  bg-white rounded-b-xl ">
                    {suggestions.map((item, index) => (
                      <Searchbar
                        key={index}
                        item={item}
                        setQuery={setQuery}
                        setSuggestions={setSuggestions}
                      ></Searchbar>
                    ))}
                  </ul>
                )}
              </div>
              {/* //Search Show Text End */}
            </div>
            {/* //Full Search End */}
          </div>

          {/* //Search Icon Samll Device */}
          <div className="navbar-end pe-7 lg:hidden xl:hidden 2xl:hidden">
            <Link>
              <span onClick={() => setIsSearchOpen(!isSearchOpen)}>
                <Icon
                  icon="ic:outline-search"
                  className="text-whitw "
                  width="30"
                  height="30"
                />
              </span>
            </Link>
          </div>
          {/* //Search Icon Samll Device End */}

          {/* //Cart wishlist start// */}

          <div className="navbar-end hidden lg:flex">
            <Link className="px-2">
              <Icon icon="mdi-light:cart" width="24" height="24" />
            </Link>

            <Link className="px-2">
              <Icon icon="mdi-light:heart" width="24" height="24" />
            </Link>

            <Link className="px-2">
              <Icon icon="line-md:account-small" width="24" height="24" />
            </Link>
          </div>
          {/* //Cart wishlist End// */}
        </div>
      </Container>
    </div>
  );
};

export default Header;
