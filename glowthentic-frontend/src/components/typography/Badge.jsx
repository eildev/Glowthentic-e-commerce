import cn from "../../utils/cn";
const Badge = ({ children, className }) => {
  return (
    <span
      className={`${cn(
        "bg-secondary p-3 px-6 text-white font-bold rounded-e-full",
        className
      )}`}
    >
      {children}
    </span>
  );
};


export default Badge;
