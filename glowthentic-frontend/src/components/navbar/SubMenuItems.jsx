import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router-dom";

const SubMenuItems = ({ setSubMenu, data, subMenu, title }) => {
    return (
        <li
            onClick={() => setSubMenu((prev) => !prev)}
            className="bg-white py-2 px-5 border-t last:border-b border-gray-light font-semibold cursor-pointer relative"
        >
            <Link to="#" className="flex justify-between">
                {title}
                {data?.length > 0 ? (
                    <Icon
                        className={`transition-all duration-500 ease-in-out transform ${subMenu ? "rotate-90" : ""
                            }`}
                        icon="solar:alt-arrow-right-bold"
                        width="24"
                        height="24"
                    />
                ) : (
                    ""
                )}
            </Link>

            {/* sub sub menu  */}
            {data?.length > 0 ? (
                <ul
                    className={`w-full mt-2 transition-all duration-500 ease-in-out transform ${subMenu
                        ? "opacity-100 visible translate-y-0"
                        : "absolute opacity-0 invisible -translate-y-0"
                        }`}
                >
                    {data.map((element) => (
                        <li
                            key={element.id}
                            className="bg-white py-2 px-5 border-t last:border-b font-normal  border-gray-light cursor-pointer"
                        >
                            <Link to="#" className="flex justify-between">
                                {element?.name ?? ""}
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                ""
            )}
        </li>
    );
};

export default SubMenuItems;