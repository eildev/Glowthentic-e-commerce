import { useState, useRef, useEffect } from "react";

const SelectWithSearch = ({
  label,
  name,
  optionData = [],
  error,
  placeholder,
  value,
  onChange,
  setUpazilas,
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

  const filteredOptions = optionData.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionChange = (option) => {
    setIsDropdownOpen(false);
    setSearchTerm("");
    if (onChange) {
      onChange(option.name);
    }
  };

  return (
    <div ref={dropdownRef}>
      <label
        htmlFor={name}
        className="block text-base text-dark font-normal font-encode mb-1.5"
      >
        {label}
      </label>
      <div className="relative">
        <input name={name} type="hidden" value={value || ""} />
        <button
          type="button"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="w-full p-2 border border-hr-thin rounded text-left bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 flex justify-between items-center"
        >
          <span>{value ? value : placeholder || "Select Option"}</span>
          <svg
            className={`w-5 h-5 transform ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border border-gray-thin rounded shadow-lg max-h-60 overflow-y-auto">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 border-b border-gray-thin focus:outline-none"
              autoFocus
            />
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.id}
                  onClick={() => handleOptionChange(option)}
                  className="p-2 hover:bg-gray-100 cursor-pointer"
                >
                  {option.name}
                </div>
              ))
            ) : (
              <div className="p-2 text-gray-500">No options found</div>
            )}
          </div>
        )}
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default SelectWithSearch;
