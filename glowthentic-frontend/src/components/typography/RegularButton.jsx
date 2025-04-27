import cn from "../../utils/cn";

const RegularButton = ({ children, className, onClick, isLoading, stockAvailable, check }) => {
  return (
    <button
    disabled={check ? false : !stockAvailable}
      onClick={onClick}
      className={`${cn(
        "bg-secondary p-3 rounded-md text-white capitalize",
        className
      )}`}
    >
      {
        isLoading ? "Loading..." : children
      }
    </button>
  );
};

export default RegularButton;
 