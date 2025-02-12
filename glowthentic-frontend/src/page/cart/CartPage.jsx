import Container from "../../components/Container";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import Checkbox from "../../components/typography/Checkbox";
import HeadTitle from "../../components/typography/HeadTitle";
import IncrementDecrement from "../../components/typography/IncrementDecrement";
import RegularButton from "../../components/typography/RegularButton";
import { BiEditAlt } from "react-icons/bi";

const CartPage = () => {
  return (
    <div className="py-10">
      <DynamicHelmet title="Cart Page" />
      <Container>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="grid bg-white p-5 lg:col-span-2">
            <div className="flex justify-between">
              <HeadTitle className="bg-white p-5 font-medium text-base md:text-2xl leading-[24px] md:leading-[36px] ">
                My Shoping Cart
              </HeadTitle>
              <a href="#" className="text-secondary p-5 font-medium 
              text-[12.78px] leading-5">
                Remove all
              </a>
            </div>
            <div className="overflow-x-auto lg:-mt-56 ">
              {/* for large device */}
              <div className="hidden md:block">
              <table className="table   w-full ">
                {/* head */}
                <thead className="   w-full">
                  <tr className="uppercase  mx-auto text-[#7A7A7A]  ">
                    <th>
                      <Checkbox />
                    </th>
                    <th>Product</th>
                    <th className="text-center">Quantity</th>
                    <th className="">Price</th>
                   
                  </tr>
                </thead>
                <tbody className="">
                  {/* row 1 */}
                  <tr className="border-none">
                    <th>
                      <Checkbox />
                    </th>
                    <td >
                      <div className="flex   gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-[64px] 
                          w-[62px]">
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold mb-1">Hart Hagerty</div>
                          <div className="text-sm opacity-50 mb-1">
                            United States
                          </div>
                          <div className="text-[#FA8232] flex items-center gap-2">
                          <svg width="25" height="26" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.859 4.63978L5.44557 13.5451C5.12789 13.8832 4.82046 14.5493 4.75898 15.0105L4.37981 18.3308C4.24659 19.5298 5.1074 20.3496 6.29614 20.1446L9.59591 19.581C10.0571 19.499 10.7027 19.1608 11.0203 18.8124L19.4338 9.90712C20.8889 8.36996 21.5448 6.61759 19.28 4.47581C17.0255 2.35453 15.3142 3.10261 13.859 4.63978Z" stroke="#FA8232" stroke-width="1.02477" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4551 6.125C12.8957 8.95338 15.1912 11.1157 18.0401 11.4026" stroke="#FA8232" stroke-width="1.02477" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.34473 23.4951H21.7907" stroke="#FA8232" stroke-width="1.02477" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<h1 className="font-medium text-base">Edit</h1>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className=" mx-auto">
                    <div className=" border-red-600 flex flex-col justify-center items-center">
                      <div className="">
                      <IncrementDecrement/>
                      </div>
                    
                      <div className="flex items-center  gap-2 pt-2">
                      <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.65096 23.1615H15.7996C20.9235 23.1615 22.973 21.112 22.973 15.9881V9.83944C22.973 4.71557 20.9235 2.66602 15.7996 2.66602H9.65096C4.52709 2.66602 2.47754 4.71557 2.47754 9.83944V15.9881C2.47754 21.112 4.52709 23.1615 9.65096 23.1615Z" stroke="#FF342D" stroke-width="1.02477" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7701 9.89091C16.5361 9.66546 14.2816 9.55273 12.0373 9.55273C10.7051 9.55273 9.37289 9.62447 8.05093 9.75769L6.67773 9.89091" stroke="#FF342D" stroke-width="1.02477" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.3779 9.21462L10.5214 8.33331C10.6239 7.69795 10.7059 7.21631 11.8434 7.21631H13.606C14.7435 7.21631 14.8254 7.71844 14.9279 8.33331L15.0714 9.20437" stroke="#FF342D" stroke-width="1.02477" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.326 9.97266L16.8854 16.7362C16.8136 17.7917 16.7521 18.6115 14.8768 18.6115H10.5625C8.68715 18.6115 8.62566 17.7917 8.55393 16.7362L8.11328 9.97266" stroke="#FF342D" stroke-width="1.02477" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<h1 className="text-[#FF342D] text-base font-medium">Remove</h1>
                      </div>
                    </div>
              
                   


                    </td>
                    <td className="text-[#191818] flex justify-end  font-semibold text-2xl md:absolute mt-2">
                    <span>$</span>100 
                    </td>
                    
                  </tr>
                </tbody>
                {/* foot */}
              </table>
              </div>
              
              {/* for small device */}
              <table className="table  border-t 
              border-[#D7D7D7] block md:hidden">
                {/* head */}
            
                <tbody className="">
                  {/* row 1 */}
                  <tr className="border-none">
                    <div className="">
                    <th>
                      <Checkbox />
                    </th>
                    <td >
                      <div className="flex   gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-semibold text-xs">Hart Hagerty</div>
                          <div className="text-[10px] leading-3 opacity-50">
                            United States
                          </div>
                          <div className="text-[#FA8232]  flex items-center gap-2 ">
                          <svg width="11" height="11" viewBox="0 0 25 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.859 4.63978L5.44557 13.5451C5.12789 13.8832 4.82046 14.5493 4.75898 15.0105L4.37981 18.3308C4.24659 19.5298 5.1074 20.3496 6.29614 20.1446L9.59591 19.581C10.0571 19.499 10.7027 19.1608 11.0203 18.8124L19.4338 9.90712C20.8889 8.36996 21.5448 6.61759 19.28 4.47581C17.0255 2.35453 15.3142 3.10261 13.859 4.63978Z" stroke="#FA8232" stroke-width="1.02477" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12.4551 6.125C12.8957 8.95338 15.1912 11.1157 18.0401 11.4026" stroke="#FA8232" stroke-width="1.02477" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.34473 23.4951H21.7907" stroke="#FA8232" stroke-width="1.02477" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<h1 className=" font-semibold text-xs leading-4">Edit</h1>
                          </div>
                        </div>
                      </div>
                    </td>
                    </div>
                   
                    <div className="flex justify-between">
                    <td className=" ">
                    <div className=" border-red-600 flex flex-col justify-center left-6 items-center">
                      <div className="w-20 h-8">
                      <IncrementDecrement/>
                      </div>
                    
                      <div className="flex items-center  gap-2 pt-2">
                      <svg width="11" height="11" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.65096 23.1615H15.7996C20.9235 23.1615 22.973 21.112 22.973 15.9881V9.83944C22.973 4.71557 20.9235 2.66602 15.7996 2.66602H9.65096C4.52709 2.66602 2.47754 4.71557 2.47754 9.83944V15.9881C2.47754 21.112 4.52709 23.1615 9.65096 23.1615Z" stroke="#FF342D" stroke-width="1.02477" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.7701 9.89091C16.5361 9.66546 14.2816 9.55273 12.0373 9.55273C10.7051 9.55273 9.37289 9.62447 8.05093 9.75769L6.67773 9.89091" stroke="#FF342D" stroke-width="1.02477" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.3779 9.21462L10.5214 8.33331C10.6239 7.69795 10.7059 7.21631 11.8434 7.21631H13.606C14.7435 7.21631 14.8254 7.71844 14.9279 8.33331L15.0714 9.20437" stroke="#FF342D" stroke-width="1.02477" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17.326 9.97266L16.8854 16.7362C16.8136 17.7917 16.7521 18.6115 14.8768 18.6115H10.5625C8.68715 18.6115 8.62566 17.7917 8.55393 16.7362L8.11328 9.97266" stroke="#FF342D" stroke-width="1.02477" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
<h1 className="text-[#FF342D] text-xs font-medium">Remove</h1>
                      </div>
                    </div>
              
                   


                    </td>
                    <td className="text-[#191818] flex items-center  font-semibold text-xl ">
                    <span>$</span>100 
                    </td>
                    </div>
                  
                    
                  </tr>
                </tbody>
                {/* foot */}
              </table>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="card bg-base-100 shadow-sm rounded-[5px]">
              <div className="card-body">
                <h2 className="card-title font-medium">Cart Total</h2>
                <div className="border-b border-gray py-2 text-gray text-sm">
                  <ul className="flex justify-between">
                    <li>Product Total</li>
                    <li>
                      100 <span>$</span>
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <li>Product Total</li>
                    <li>
                      100 <span>$</span>
                    </li>
                  </ul>
                  <ul className="flex justify-between">
                    <li>Product Total</li>
                    <li>
                      100 <span>$</span>
                    </li>
                  </ul>
                </div>
                <div className="pb-3">
                  <ul className="flex justify-between">
                    <li>Product Total</li>
                    <li>
                      100 <span>$</span>
                    </li>
                  </ul>
                </div>
                <div className="card-actions justify-center">
                  <RegularButton className="btn-wide">Checkout</RegularButton>
                </div>
              </div>
            </div>

            <div className="card bg-base-100  shadow-sm rounded-[5px]">
              <div className="card-body">
                <h2 className="card-title font-medium border-b border-gray py-2">
                  Cart Total
                </h2>
                <div className="py-3">
                  <input
                    id="phone"
                    type="text"
                    placeholder="Voucher Code"
                    className="focus:outline-none focus:ring-2 focus:ring-orange-500 border focus:border-none border-gray-thin rounded p-2 w-full"
                  />
                </div>
                <div className="card-actions justify-center">
                  <RegularButton className="btn-wide">Checkout</RegularButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
