
const SuggestionProduct = ({ item, setQuery, setSuggestions }) => {
  console.log(item);
  const { product_name, thumbnail, price, variants, data } = item;
  
  const handleQuery = () => {
    setQuery(product_name);
    setSuggestions([]);
  };
  return (
    <li
      className="px-4 py-2 hover:bg-gray-100 hover:rounded-b-3xl cursor-pointer  flex items-center gap-4"
      onClick={handleQuery}
    >
      <img
        src={thumbnail}
        alt={product_name}
        className="w-10 h-10 object-cover rounded"
      />

      {/* Name and price on the right */}
      <div>
        <p className="font-medium text-m ">{product_name}</p>
        <p className=" text-m text-[#A27754]">{data?.variants.regular_price}</p>
      </div>
    </li>
  );
};

export default SuggestionProduct;
