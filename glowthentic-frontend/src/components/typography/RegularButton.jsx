import cn from "../../utils/cn";

const RegularButton = ({ children ,className}) => {
  return (
    <button
      className={`${cn(
        "bg-secondary  p-3  rounded-md text-white capitalize",
        className
      )}`}
    >
      {children}
    </button>
  );
};

export default RegularButton;
