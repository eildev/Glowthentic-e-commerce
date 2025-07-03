import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { triggerScrollToTop } from "../../redux/features/slice/scrollSlice";

const Logo = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(triggerScrollToTop());
  };

  return (
    <Link to="/" className="text-xl" onClick={handleClick}>
      <img
        src="/logo/Glowthentic-Logo.svg"
        alt="Logo"
        className="h-16 lg:h-12 w-auto"
      />
    </Link>
  );
};

export default Logo;
