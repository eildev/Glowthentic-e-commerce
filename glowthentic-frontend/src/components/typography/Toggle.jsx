import cn from "../../utils/cn";
const Toggle = ({ className }) => {
  return (
    <span>
      <input
        type="checkbox"
        className={`${cn("toggle  toggle-white  [--tglbg:#FA8232] ", className)}`}
        defaultChecked
      />
    </span>
  );
};

export default Toggle;
