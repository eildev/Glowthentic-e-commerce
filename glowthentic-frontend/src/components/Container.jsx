import cn from "../utils/cn";

const Container = ({ children, className }) => {
  return (
    <div className={cn("max-w-[1224px] w-[95%] mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
