const Searchbar = ({ item, setQuery, setSuggestions }) => {
  const { name, image, price } = item;

  const handleQuery = () => {
    setQuery(name);
    setSuggestions([]);
  };
  return (
    <div>
      <li
        className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-3xl cursor-pointerc  flex items-center gap-4"
        onClick={handleQuery}
      >
        <img
          src={image}
          alt={name}
          className="w-10 h-10 object-cover rounded"
        />

        {/* Name and price on the right */}
        <div>
          <p className="font-medium text-m">{name}</p>
          <p className="text-gray-500 text-m">{price}</p>
        </div>
      </li>
    </div>
  );
};

export default Searchbar;
