import cn from "../../utils/cn";
const Checkbox = ({ className }) => {
  return (
    <span>
      <input
        type="checkbox"
        className={`${cn("checkbox", className)}`}
        defaultChecked
      />
    </span>
  );
};

export default Checkbox;
