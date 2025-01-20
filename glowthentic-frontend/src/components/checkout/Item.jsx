const orderItems = [
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 120,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 200,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 120,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 200,
      quantity: 2,
    },
    {
      id: 1,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 120,
      quantity: 1,
    },
    {
      id: 2,
      image: "https://m.media-amazon.com/images/I/81OaXwn1x4L._AC_SL1500_.jpg", // Replace with a real product image URL
      title: "Wet n wild MegaLast Liquid Catsuit Matte Lipstick - Give Me Mocha",
      price: 200,
      quantity: 2,
    },
  ];
const Item = () => {
    return (
        <div>
            <div className="space-y-4 max-h-60  overflow-y-scroll  ">
        {orderItems.map((item) => (
          <div key={item.id} className="flex ">
            <img
              src={item.image}
              alt={item.title}
              className="w-12 h-12 object-cover rounded"
            />
            <span className="flex-1 ml-4 text-xs">
              {item.title}
              <br />
              <span>
                {" "}
                {item.quantity} x{" "}
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