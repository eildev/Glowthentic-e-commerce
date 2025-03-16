import defaultImage from "../../assets/img/Product/20.png";
const Item = ({ carts }) => {
  return (
    <div>
      <div className="space-y-4 max-h-60  overflow-y-scroll  ">
        {carts.map((item) => (
          <div key={item.id} className="flex ">
            <img
              src={item?.variant_image[0].image ?? defaultImage}
              alt={item?.product_name}
              className="w-12 h-12 object-cover rounded"
            />
            <span className="flex-1 ml-4 text-xs">
              {item?.product?.product_name ?? ""}
              <br />
              <span>
                {" "}
                {item?.quantity ?? 0} x{" "}
                <span className="text-secondary font-bold"> ${item.price}</span>
              </span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;
