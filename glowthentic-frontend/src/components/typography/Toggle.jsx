import cn from "../../utils/cn";
const Toggle = ({ className }) => {
  return (
    <span>
      <input
        type="checkbox"
        className={`${cn("toggle  toggle-success", className)}`}
        defaultChecked
      />
    </span>
  );
};

export default Toggle;
