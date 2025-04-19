import cn from "../../utils/cn";

const Paragraph = ({ children, className }) => {
  return (
    <p className={cn("text-sm font-normal", className)}>
      {children}
    </p>
  );
};

export default Paragraph;
