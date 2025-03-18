import { Icon } from "@iconify/react";
import CommonTitle from "../../../components/user-profile/CommonTitle";
// import f1 from "../../../assets/f2.jpeg";
import f1 from "../../../assets/img/user-profile/f1.jpeg";
import { useSelector } from "react-redux";
import { useGetWishlistByUserIdQuery } from "../../../redux/features/api/wishlistByUserAPI/wishlistByUserAPI";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { token, user } = useSelector((state) => state.auth);
  // console.log("token",  token);
  // console.log(user?.data?.id);

  const navigate = useNavigate();
  const {
    data: wishlist,
    error,
    isLoading,
  } = useGetWishlistByUserIdQuery(user?.data?.id);
  return (
    <div className="px-2 w-full mx-auto">
      <CommonTitle title={"Favorites Product"} />

      <div>
        {wishlist?.wishlist?.map((item, i) => (
          <div key={i} className="flex items-center my-4 lg:my-8">
            <div className="w-5/12 lg:w-3/12 px-4 pt-4 bg-light relative">
              <img
                className="w-full object-cover"
                src={item?.variant.variant_image[0].image}
                alt=""
              />
              <div className="absolute right-4 bottom-4 bg-light p-2">
                <Icon
                  className="w-4 h-4 lg:w-8 lg:h-8 text-secondary "
                  icon={"mdi:cards-heart"}
                />
              </div>
            </div>
            <div className="w-7/12 lg:w-9/12 p-4">
              <h5 className="text-sm lg:text-xl text-dark font-bold font-encode">
                {item?.wishlist_product.product_name}
              </h5>
              <div className="flex justify-between items-center my-2">
                <p className="text-sm lg:text-md text-gray font-normal font-encode">
                  Makeup
                </p>
                <p className="flex items-center text-sm lg:text-lg text-dark font-semibold font-encode">
                  <Icon
                    className="w-4 h-4 lg:w-8 lg:h-8 text-secondary"
                    icon={"mdi:star"}
                  />
                  4.5
                </p>
              </div>
              <p className="text-sm lg:text-xl text-dark font-semibold font-encode">
                {item?.variant.regular_price}
              </p>
            </div>
          </div>
        ))}
        {/* <div className="flex items-center my-4 lg:my-8">
          <div className="w-5/12 lg:w-3/12 px-4 pt-4 bg-light relative">
            <img className="w-full object-cover" src={f1} alt="" />
            <div className="absolute right-4 bottom-4 bg-light p-2">
              <Icon
                className="w-4 h-4 lg:w-8 lg:h-8 text-secondary "
                icon={"mdi:cards-heart"}
              />
            </div>
          </div>
          <div className="w-7/12 lg:w-9/12 p-4">
            <h5 className="text-sm lg:text-xl text-dark font-bold font-encode">
              Absolute New York Flawless Face Foundation Primer Clear NF080
            </h5>
            <div className="flex justify-between items-center my-2">
              <p className="text-sm lg:text-md text-gray font-normal font-encode">
                Makeup
              </p>
              <p className="flex items-center text-sm lg:text-lg text-dark font-semibold font-encode">
                <Icon
                  className="w-4 h-4 lg:w-8 lg:h-8 text-secondary"
                  icon={"mdi:star"}
                />
                4.5
              </p>
            </div>
            <p className="text-sm lg:text-xl text-dark font-semibold font-encode">
              $59,66
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Favorites;
