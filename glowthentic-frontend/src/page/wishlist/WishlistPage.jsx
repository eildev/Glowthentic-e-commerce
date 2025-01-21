import Container from "../../components/Container";
import Checkbox from "../../components/typography/Checkbox";
import HeadTitle from "../../components/typography/HeadTitle";
import RegularButton from "../../components/typography/RegularButton";
import RoundedIcon from "../../components/typography/RoundedIcon";

const WishlistPage = () => {
  return (
    <div className="py-10">
      <Container>
        <div className="bg-white p-5">
          <HeadTitle className="bg-white p-5">Wishlist</HeadTitle>
          <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className="bg-light">
                <tr className="uppercase border-none">
                  <th>
                    <Checkbox />
                  </th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Action</th>
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
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>Purple</td>
                  <td className="flex gap-3 items-center">
                    <RegularButton className="flex gap-2 uppercase justify-center items-center">
                      Add to Cart
                      <RoundedIcon
                        className="bg-transparent rounded-none p-0"
                        iconName="meteor-icons:cart-shopping"
                      ></RoundedIcon>
                    </RegularButton>

                    <RoundedIcon
                      className="bg-transparent rounded-none p-2 text-secondary"
                      iconName="hugeicons:delete-03"
                    ></RoundedIcon>
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
