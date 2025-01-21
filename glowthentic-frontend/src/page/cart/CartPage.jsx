import Container from "../../components/Container";
import Checkbox from "../../components/typography/Checkbox";
import HeadTitle from "../../components/typography/HeadTitle";
import IncrementDecrement from "../../components/typography/IncrementDecrement";
import RegularButton from "../../components/typography/RegularButton";

const CartPage = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="grid lg:grid-cols-3 gap-4">
          <div className="grid bg-white p-5 lg:col-span-2">
            <div className="flex justify-between">
              <HeadTitle className="bg-white p-5 font-medium">My Shoping Cart</HeadTitle>
              <a href="#" className="text-secondary">Remove all</a>
            </div>
            <div className="overflow-x-auto">
              <table className="table ">
                {/* head */}
                <thead className="bg-light">
                  <tr className="uppercase border-none text-gray">
                    <th>
                      <Checkbox />
                    </th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total Price</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="border-none">
                    <th>
                      <Checkbox />
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
                          <div className="text-sm opacity-50">
                            United States
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      100 <span>$</span>
                    </td>
                    <td className="flex gap-3 items-center">
                      <IncrementDecrement />
                    </td>
                    <td>
                      100 <span>$</span>
                    </td>
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
                <h2 className="card-title font-medium border-b border-gray py-2">Cart Total</h2>
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
