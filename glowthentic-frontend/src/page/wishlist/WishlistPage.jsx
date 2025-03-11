import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import PreviousPage from "../../components/previous-page/PreviousPage";
import Checkbox from "../../components/typography/Checkbox";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";
import RoundedIcon from "../../components/typography/RoundedIcon";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useGetWishlistByUserIdQuery } from "../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";

const WishlistPage = () => {
  const { token, user } = useSelector((state) => state.auth);
  console.log("token",  token);
  console.log(user?.data?.id);

  const navigate = useNavigate();
  const { data: wishlist, error, isLoading } = useGetWishlistByUserIdQuery(user?.data?.id);
  const [isDeleteActive, setIsDeleteActive] = useState(false)
  const [wishListItems, setWishListItems] = useState([])
  const [getItemId, setGetItemId] = useState(null)
  const [isInCart, setIsInCart] = useState([]);

 
// console.log(isInCart);+

console.log(wishlist?.wishlist);

  // useEffect(() => {
  //   const cart = JSON.parse(localStorage.getItem("cart")) || [];
  //   setIsInCart(cart)
  //   const favourite = JSON.parse(localStorage.getItem("favourite")) || [];
  //   setWishListItems(favourite);
  // }, []);


  const handleDelete = (id) => {
    const updatedItems = wishListItems.filter((item) => item.id!== id);
    setWishListItems(updatedItems);
    toast.success('Delete Successfully')
    setIsDeleteActive(false)
    localStorage.setItem("favourite", JSON.stringify(updatedItems));
  }

  const handleAddCart = (productItem)=>{
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (!cart.some((item) => item.id === productItem.id)) {
      const newProduct = { ...productItem, quantity: 1 };
      cart.push(newProduct);
      localStorage.setItem("cart", JSON.stringify(cart));
      toast.success(`${productItem.title} added to Cart!`);
    } else {
      toast.error("This product is already in your Cart.");
    }
  }

  return (
    <div className="md:py-10">
      <DynamicHelmet title="Wishlist Page" />
      <Container>
        <div className="bg-white p-2 block md:hidden ">
          <div className="flex justify-between">
            <button onClick={() => navigate(-1)}><PreviousPage title={"Wishlist"}></PreviousPage></button>

          </div>


        </div>
        <div className="bg-white p-0 ">
          <HeadTitle className="bg-white p-5 hidden md:block">Wishlist</HeadTitle>
          {
            wishlist?.wishlist?.length == 0 ? <div className="text-center text-lg pb-5 font-semibold">No Wish List Items Availabel !</div> : <div className="overflow-x-auto ">
            <div className="hidden md:block">
              <table className="table">
                {/* head */}
                <thead className="bg-light">
                  <tr className="uppercase border-none text-[#475156]  font-medium text-xs">
                    <th>Product</th>
                    <th></th>
                    <th>Price</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {
                    wishlist?.wishlist?.map((item, i)=>(
                      <tr key={i} className="border-none">

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item?.variant.variant_image[0].image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="text-[13px] text-[#475156]">{item?.wishlist_product.product_name}</div>
                        </div>
                      </div>
                    </td>
                    <th></th>
                    <td className="text-[#FA8232] text-[13px] font-medium">{item?.variant.regular_price}</td>
                    <td className="flex gap-3 justify-between items-center">
                      <button onClick={() => setIsDeleteActive(!isDeleteActive)}>
                        <RoundedIcon
                          className="bg-transparent rounded-none p-2 text-secondary"
                          iconName="hugeicons:delete-03"
                          setGetItemId={setGetItemId}
                          item={item}
                        ></RoundedIcon>
                      </button>

                      <div className="hidden md:block">
                        <div onClick={()=>handleAddCart(item)} className="flex items-center gap-4">
                          <RegularButton className="flex gap-2 font-bold text-[12px] leading-10 uppercase justify-center items-center p-0 px-5 py-">
                            Add to Cart
                            <RoundedIcon
                              className="bg-transparent rounded-none p-0"
                              iconName="meteor-icons:cart-shopping"

                            ></RoundedIcon>
                          </RegularButton>
                          <Checkbox />
                        </div>
                      </div>




                    </td>

                  </tr>
                    ))
                  }
                </tbody>
                {/* foot */}
              </table>
            </div>
            <div className="block md:hidden">
              <table className="table w-full mb-24">
                {/* head */}

                <tbody>
                  {/* row 1 */}
                  {/* {
                    wishListItems.map((item, i)=>(
                      <tr key={i} className="border-none ">
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar ">
                          <div className="rounded-xl h-[120px] w-[120px]">
                            <img
                              src={item?.thumbnail}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>

                        </div>
                        <div>
                          <div className="font-bold">{item.brand}</div>
                          <div className="mt-2">
                            <h1 className="text-[#FA8232] text-xs font-semibold"><span>$</span>{item?.price}</h1>
                            <h2 className="line-through text-[#6F7384] text-[10px] leading-3"><span>$</span>20.00</h2>
                          </div>
                          <button onClick={() => setIsDeleteActive(!isDeleteActive)}>
                            <RoundedIcon
                              className="bg-transparent rounded-none p-2 text-secondary"
                              iconName="hugeicons:delete-03"

                            ></RoundedIcon>
                          </button >

                        </div>
                      </div>

                    </td>


                  </tr>
                    ))
                      
                  } */}
                </tbody>
                {/* foot */}
              </table>
            </div>

          </div>
          }
          {
            isDeleteActive && (
              //   <div className="h-56 w-full bg-white px-3 py-5">
              //   <div className="">
              //   <h1 className="text-[#1C1B1B] ">Delete product from wishlist</h1>

              //   </div>
              //   <button className="w-full bg-[#FA8232] bottom-0 rounded-lg p-2 text-white mt-8">Delete product</button>
              //   <button 
              //   onClick={()  => isDeleteActive(false)}
              //   className="w-full bg-white border border-[#F4F5FD] rounded-lg p-2 text-[#1C1B1B] mt-8">Cancel</button>

              // </div>
              <div
                className="fixed inset-0 z-10 overflow-y-auto flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:p-0"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" ></div>

                <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

                <div className="h-56 w-full bg-white px-3 py-5">
                  <div className="">
                    <h1 className="text-[#1C1B1B] text-start">Delete product from wishlist</h1>

                  </div>
                  <button onClick={()=>handleDelete(getItemId)} className="w-full bg-[#FA8232] bottom-0 rounded-lg p-2 text-white mt-8 transform">Delete product</button>
                  <button
                    onClick={() => setIsDeleteActive(!isDeleteActive)}
                    className="w-full transform bg-white border border-[#F4F5FD] rounded-lg p-2 text-[#1C1B1B] mt-8">Cancel</button>
                  {/* <button
                  onClick={() => setIsDeleteActive(!isDeleteActive)}
                  className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                >
                  Cancel
                </button> */}
                </div>
              </div>
            )
          }

        </div>
      </Container>
    </div>
  );
};

export default WishlistPage;
