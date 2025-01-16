import cn from "../../utils/cn";

const RegularButton = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${cn(
        "bg-secondary p-3 rounded-md text-white capitalize",
        className
      )}`}
    >
      {children}
    </button>
  );
};

export default RegularButton;
