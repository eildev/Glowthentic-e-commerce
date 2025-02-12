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
        <button onClick={() => navigate(-1)}><PreviousPage title={"Wishlist"}></PreviousPage></button>
       
        </div>
      
          
        </div>
        <div className="bg-white p-0 ">
          <HeadTitle className="bg-white p-5 hidden md:block">Wishlist</HeadTitle>
          <div className="overflow-x-auto ">
            <div className="hidden md:block">
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
                    <div className="hidden md:block">
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
                    </div>
                   
                 
                   
                    
                  </td>
                 
                </tr>
              </tbody>
              {/* foot */}
            </table>
            </div>
            <div className="block md:hidden">
            <table className="table w-full mb-24">
              {/* head */}
       
              <tbody>
                {/* row 1 */}
                <tr className="border-none ">
                  <th>
                    
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar ">
                        <div className="rounded-xl h-[120px] w-[120px]">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>

                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="mt-2">
                        <h1 className="text-[#FA8232] text-xs font-semibold"><span>$</span>12.00</h1>
                        <h2 className="line-through text-[#6F7384] text-[10px] leading-3"><span>$</span>20.00</h2>
                        </div>
                     
                        <RoundedIcon
                      className="bg-transparent rounded-none p-2 text-secondary"
                      iconName="hugeicons:delete-03"
                    ></RoundedIcon>
                      </div>
                    </div>
                   
                  </td>
               
                 
                </tr>
              </tbody>
              {/* foot */}
            </table>
            </div>
          
          </div>
          <div className="h-56 w-full  px-3 py-5">
            <div className="">
            <h1 className="text-[#1C1B1B] ">Delete product from wishlist</h1>
            
            </div>
            <button className="w-full bg-[#FA8232] bottom-0 rounded-lg p-2 text-white mt-8">Delete product</button>
            <button className="w-full bg-white border border-[#F4F5FD] rounded-lg p-2 text-[#1C1B1B] mt-8">Cancel</button>
          
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WishlistPage;
