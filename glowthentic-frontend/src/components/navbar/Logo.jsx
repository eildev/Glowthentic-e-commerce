import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="text-xl">
      <img
        src="/logo/Glowthentic-Logo.svg"
        alt="Logo"
        className="h-16 lg:h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;
