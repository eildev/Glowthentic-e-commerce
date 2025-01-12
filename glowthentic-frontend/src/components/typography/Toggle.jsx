import cn from "../../utils/cn";

const Toggle = ({ className }) => {
  return (
    <span>
      <input
        type="checkbox"
        className={`${cn(
          "toggle checked:toggle-primary   checked:border-orange-500 [--tglbg:#fff] checked:[--tglbg:#FA8232] ",
          className
        )}`}
        defaultChecked
      />
    </span>
  );
};

export default Toggle;
