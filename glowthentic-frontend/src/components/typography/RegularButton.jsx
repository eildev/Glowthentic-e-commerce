import cn from "../../utils/cn";

const RegularButton = ({ children ,className}) => {
  return (
    <button
      className={`${cn(
        "bg-secondary  p-3 md:px-14  lg:px-14 xl:px-16 px-10 rounded-md text-white md:text-lg lg:text-xl",
        className
      )}`}
    >
      {children}
    </button>
  );
};

export default RegularButton;
