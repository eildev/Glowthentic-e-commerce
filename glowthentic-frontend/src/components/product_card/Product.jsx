import defaultImage from "../../assets/img/Product/20.png";
import Paragraph from "../typography/Paragraph";
import HeadTitle from "../typography/HeadTitle";
import { Link } from "react-router-dom";
import heartIcon from "../../assets/img/Product/heart.svg";
import cartIcon from "../../assets/img/Product/cart.svg";
import ProductIcon from "./ProductIcon";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/features/slice/cartSlice";

const Product = ({ product, isDark }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems); // Reading cart items from Redux store
  const [isFav, setIsFav] = useState(false);
  const [isInCart, setIsInCart] = useState(false); // Tracking if the product is in the cart
  const baseURL = "http://127.0.0.1:8000/";
console.log(product);
  const {
    id,
    product_name,
    discountPercentage,
    productdetails,
    variants,
    price,
    stock,
  } = product;
  const defaultVariant = product.variants.find(variant => variant.status === 'Default');
  // console.log("default variants", defaultVariants);


  // console.log("cartItems",cartItems);
  // Check if the product is in favorites or cart, and update states accordingly
  useEffect(() => {
    const favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    setIsFav(favourite.some((item) => item.id === id));
    setIsInCart(cartItems.some((item) => item.id === defaultVariant.id)); // Check if the product is in the cart from Redux
  }, [id, cartItems]); // Re-run when id or cartItems change


  // console.log('is in cart', isInCart);
  // Handle adding to or removing from cart
  const handleAddToCart = (productItem) => {
    console.log('product item', productItem);
    if (isInCart) {
      // If the product is already in the cart, remove it
      dispatch(removeFromCart(productItem.id));
      toast.error(`${productItem?.product?.product_name ?? ""} removed from Cart!`);
    } else {
      // If the product is not in the cart, add it
      const newProduct = { ...productItem, quantity: 1 };
      dispatch(addToCart(newProduct));
      toast.success(`${productItem?.product?.product_name ?? ""} added to Cart!`);
    }
  };

  // Handle adding to favorites
  const handleFav = (productItem) => {
    let favourite = JSON.parse(localStorage.getItem("favourite")) || [];
    if (!favourite.some((item) => item.id === productItem.id)) {
      const newProduct = productItem;
      favourite.push(newProduct);
      localStorage.setItem("favourite", JSON.stringify(favourite));
      setIsFav(true);
      toast.success(`${productItem.product_name} added to Wish list!`);
    } else {
      toast.error("This product is already in your Wish list.");
    }
  };

  // Calculate discount and final price
  const discountAmount = discountPercentage
    ? Math.ceil((discountPercentage * price) / 100)
    : 0;
  const finalPrice = discountPercentage
    ? (price - discountAmount).toFixed(2)
    : price;

  const productName = product_name + " " + variants?.[0].variant_name;

  return (
    <div
      className={`card w-auto hover:drop-shadow-md bg-light transition-all duration-300 ease-in-out transform -hidden rounded-2xl ${isDark ? "h-[320px] lg:h-[500px]" : ""
        }`}
    >
      <figure className="relative">
        <Link to={`/product/${product.slug}`}>
          <img
            className="lg:h-[380px] min-h-[180px] md:min-h-[380px] object-cover lg:py-5 py-2"
            // src={baseURL + (variant_image[0]?.image || defaultImage)}
            src={variants[0]?.variant_image[0]?.image || defaultImage}
            // src={defaultImage}
            alt={product_name ?? "product image"}
          />
        </Link>
        <span className="bg-secondary text-white lg:text-sm text-xs px-2 lg:px-5 py-1 rounded-r-[25px] absolute top-[20px] lg:top-[30px] left-0 font-semibold">
          {stock <= 0 ? "Stock Out" : `${discountPercentage}%`}
        </span>
        <ProductIcon
          image={heartIcon}
          className={`top-[15px] lg:top-[25px] hover:bg-secondary hover:text-white ${isFav ? "bg-secondary" : ""
            }`}
          imgClassName="h-4 w-4"
          product={product}
          handleFav={handleFav}
          name={"heart"}
        />
        <ProductIcon
          image={cartIcon}
          className={`bottom-[15px] lg:bottom-[25px] ${isInCart ? "bg-secondary" : "bg-primary"
            } hover:bg-secondary hover:text-white`}
          imgClassName=""
          product={product}
          handleAddToCart={handleAddToCart}
          name={"cart"}
          defaultVariant={defaultVariant}
        />
      </figure>

      <div
        className={`card-body px-3 lg:px-5 rounded-b-2xl ${isDark
          ? "bg-primary text-white text-center"
          : "bg-white text-primary text-left"
          }`}
      >
        <Link to={`/product/${product.slug}`}>
          <HeadTitle
            className={`text-sm lg:text-lg ${isDark ? "text-white" : "text-primary"
              }`}
          >
            {productName ?? "Beautya Capture Total Dreamskin Care & Perfect"}
          </HeadTitle>
        </Link>
        <div>
        <h1>{variants[0].regular_price}</h1>
        </div>
        <Paragraph className="text-xs lg:text-sm">
          <span
            dangerouslySetInnerHTML={{
              __html: productdetails[0].description
                ? window.innerWidth >= 1000
                  ? productdetails[0].description.slice(0, 80)
                  : productdetails[0].description.slice(0, 40) + "..."
                : "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
            }}
          />
        </Paragraph>
        <div
          className={`flex gap-3 items-center ${isDark ? "justify-center" : ""}`}
        >
          <Paragraph className="lg:text-xl text-lg text-secondary">
            <span>{finalPrice}</span>
          </Paragraph>
          {discountPercentage > 0 && (
            <Paragraph className="lg:text-sm text-xs text-gray-thin">
              <del>{variants[0].regular_price}</del>
              
            </Paragraph>
       
          )}
        </div>
       <h1>

       </h1>
      </div>
    </div>
  );
};

export default Product;













































// import defaultImage from "../../assets/img/Product/20.png";
// import Paragraph from "../typography/Paragraph";
// import HeadTitle from "../typography/HeadTitle";
// import { Link } from "react-router-dom";
// import heartIcon from "../../assets/img/Product/heart.svg";
// import cartIcon from "../../assets/img/Product/cart.svg";
// import ProductIcon from "./ProductIcon";
// import toast from "react-hot-toast";
// import { useEffect, useState } from "react";

// const Product = ({ product, isDark }) => {
//   console.log(product);
//   const {
//     id,
//     product_name,
//     discountPercentage,
//     productdetails,
//     variant_image,
//     variants,
//     thumbnail: image,
//     price,
//     stock,
//   } = product;

//   // const [isInCart, setIsInCart] = useState(false);
//   const [isFav, setIsFav] = useState(false);
//   const baseURL = "http://127.0.0.1:8000/";
//   useEffect(() => {
//     // const cart = JSON.parse(localStorage.getItem("cart")) || [];
//     const favourite = JSON.parse(localStorage.getItem("favourite")) || [];
//     // setIsInCart(cart.some((item) => item.id === id));
//     setIsFav(favourite.some((item) => item.id === id));
//   }, [id]);

//   // const handleAddToCart = (productItem) => {
//   //   let cart = JSON.parse(localStorage.getItem("cart")) || [];

//   //   if (!cart.some((item) => item.id === productItem.id)) {
//   //     const newProduct = { ...productItem, quantity: 1 };
//   //     cart.push(newProduct);
//   //     localStorage.setItem("cart", JSON.stringify(cart));
//   //     setIsInCart(true);
//   //     toast.success(`${productItem.title} added to Cart!`);
//   //   } else {
//   //     toast.error("This product is already in your Cart.");
//   //   }
//   // };

//   const handleFav = (productItem) => {
//     let favourite = JSON.parse(localStorage.getItem("favourite")) || [];

//     if (!favourite.some((item) => item.id === productItem.id)) {
//       const newProduct = productItem;
//       favourite.push(newProduct);
//       localStorage.setItem("favourite", JSON.stringify(favourite));
//       setIsFav(true);
//       toast.success(`${productItem.title} added to Wish list!`);
//     } else {
//       toast.error("This product is already in your Wish list.");
//     }
//   };

//   // Calculate discount and final price
//   const discountAmount = discountPercentage
//     ? Math.ceil((discountPercentage * price) / 100)
//     : 0;
//   // const discountPercentage = 0;
//   const finalPrice = discountPercentage
//     ? (price - discountAmount).toFixed(2)
//     : price;
//   // const price = variants[0]?.regular_price || 0;
//   // const discountPercentage = 0; // ধরে নিচ্ছি ডিসকাউন্ট ব্যাকএন্ড থেকে আসছে না
//   // const stock = productStock[0]?.stock || 0;

//   return (
//     <div
//       className={`card w-auto hover:drop-shadow-md bg-light transition-all duration-300 ease-in-out transform -hidden rounded-2xl ${isDark ? "h-[320px] lg:h-[500px]" : ""
//         }`}
//     >
//       <figure className="relative">
//         <Link to={`/product/${product.id}`}>
//           <img
//             className="lg:h-[380px] min-h-[180px] md:min-h-[380px] object-cover lg:py-5 py-2"
//             src={baseURL + variant_image[0]?.image || defaultImage}
//             alt={product_name ?? "product image"}
//           />
//         </Link>
//         <span className="bg-secondary text-white lg:text-sm text-xs px-2 lg:px-5 py-1 rounded-r-[25px] absolute top-[20px] lg:top-[30px] left-0 font-semibold">
//           {stock <= 0 ? "Stock Out" : `${discountPercentage}%`}
//         </span>
//         <ProductIcon
//           image={heartIcon}
//           className={`top-[15px] lg:top-[25px] hover:bg-secondary hover:text-white ${isFav ? "bg-secondary" : ""
//             }`}
//           imgClassName="h-4 w-4"
//           product={product}
//           handleFav={handleFav}
//           name={"heart"}
//         />
//         {/* Change cart icon color if product is in cart */}
//         <ProductIcon
//           image={cartIcon}
//           className={`bottom-[15px] lg:bottom-[25px] ${isInCart ? "bg-secondary" : "bg-primary"
//             } hover:bg-secondary hover:text-white`}
//           imgClassName=""
//           product={product}
//           handleAddToCart={handleAddToCart}
//           name={"cart"}
//         />
//       </figure>

//       <div
//         className={`card-body px-3 lg:px-5 rounded-b-2xl ${isDark
//             ? "bg-primary text-white text-center"
//             : "bg-white text-primary text-left "
//           }`}
//       >
//         <Link to={`/product/${id}`}>
//           <HeadTitle
//             className={`text-sm lg:text-lg ${isDark ? "text-white" : "text-primary"
//               }`}
//           >
//             {product_name ?? "Beautya Capture Total Dreamskin Care & Perfect"}
//           </HeadTitle>
//         </Link>
//         <Paragraph className="text-xs lg:text-sm">
//           <span
//             dangerouslySetInnerHTML={{
//               __html: productdetails[0].description
//                 ? window.innerWidth >= 1000
//                   ? productdetails[0].description.slice(0, 80)
//                   : productdetails[0].description.slice(0, 40) + "..."
//                 : "Plumping Gloss - Instant and Long-Term Volume Effect - 24h Hydration",
//             }}
//           />
//         </Paragraph>
//         <div
//           className={`flex gap-3 items-center ${isDark ? "justify-center" : ""
//             }`}
//         >
//           <Paragraph className="lg:text-xl text-lg text-secondary">
//             <span>{variants[0].regular_price}</span>
//           </Paragraph>
//           <Paragraph className="lg:text-sm text-xs text-gray-thin">
//             <del>{variants[0].regular_price}</del>
//           </Paragraph>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
