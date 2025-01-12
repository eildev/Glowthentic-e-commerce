import Container from "./Container";
import { Icon } from "@iconify/react";

const NavbarForSmallDevice = () => {
  return (
    <div className="px-2 lg:hidden">
      <Container>
        <div className="py-2 flex justify-start gap-1 items-center font-semibold text-lg ps-4 cursor-pointer">
          <Icon
            icon="solar:alt-arrow-left-linear"
            className="font-semibold"
            width="24"
            height="24"
          />
          Women Skincare
        </div>
        <ul>
          <li className="bg-white py-2 px-5 flex justify-between border font-semibold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
          <li className="bg-white py-2 px-5 flex justify-between border font-semibold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
          <li className="bg-white py-2 px-5 flex justify-between border font-semibold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
          <li className="bg-white py-2 px-5 flex justify-between border font-semibold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
          <li className="bg-white py-2 px-5 flex justify-between border font-semibold cursor-pointer">
            Women Wake Up{" "}
            <Icon icon="solar:alt-arrow-right-bold" width="24" height="24" />
          </li>
          <li className="bg-white py-2 px-5  border font-normal cursor-pointer">
            Women Wake Up{" "}
          </li>
          <li className="bg-white py-2 px-5  border font-normal cursor-pointer">
            Women Wake Up{" "}
          </li>
          <li className="bg-white py-2 px-5  border font-normal cursor-pointer">
            Women Wake Up{" "}
          </li>
          <li className="bg-white py-2 px-5  border font-normal cursor-pointer">
            Women Wake Up{" "}
          </li>
          <li className="bg-white py-2 px-5  border font-normal cursor-pointer">
            Women Wake Up{" "}
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default NavbarForSmallDevice;
