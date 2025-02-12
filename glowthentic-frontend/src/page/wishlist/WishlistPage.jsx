import { useNavigate } from "react-router-dom";
import Container from "../../components/Container";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import PreviousPage from "../../components/previous-page/PreviousPage";
import Checkbox from "../../components/typography/Checkbox";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";
import RoundedIcon from "../../components/typography/RoundedIcon";

const WishlistPage = () => {
  const navigate = useNavigate();
  return (
    <div className="md:py-10">
      <DynamicHelmet title="Wishlist Page" />
      <Container>
      <div className="bg-white p-2 block md:hidden ">
        <div className="flex justify-between">
        <button onClick={() => navigate(-1)}><PreviousPage title={"My Cart"}></PreviousPage></button>
       
        </div>
      
          
        </div>
        <div className="bg-white p-0">
          <HeadTitle className="bg-white p-5">Wishlist</HeadTitle>
          <div className="overflow-x-auto ">
            <table className="table -ml-20">
              {/* head */}
              <thead className="bg-light">
                <tr className="uppercase border-none text-[#475156]  font-medium text-xs">
                  <th>
                 
                  </th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="border-none ">
                  <th>
                    
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>Purple</td>
                  <td className="flex gap-3 justify-between items-center">
                  <RoundedIcon
                      className="bg-transparent rounded-none p-2 text-secondary"
                      iconName="hugeicons:delete-03"
                    ></RoundedIcon>
                    <div className="flex items-center gap-4">
                    <RegularButton className="flex gap-2 font-bold text-[13px] leading-10 uppercase justify-center items-center">
                      Add to Cart
                      <RoundedIcon
                        className="bg-transparent rounded-none p-0"
                        iconName="meteor-icons:cart-shopping"
                      ></RoundedIcon>
                    </RegularButton>
                    <Checkbox />
                    </div>
                 
                   
                    
                  </td>
                 
                </tr>
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WishlistPage;
