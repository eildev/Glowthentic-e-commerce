import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

const CommonTitle = ({ title }) => {
  return (
    <div className="flex items-center mb-2">
      <Link to="/profile-mobile">
        <Icon
          className="w-8 h-8 text-gray md:hidden"
          icon={"mdi-light:arrow-left"}
        />
      </Link>
      <h2 className="ml-2 text-2xl md:text-4xl text-secondary font-bold font-encode">
        {title}
      </h2>
    </div>
  );
};

export default CommonTitle;
