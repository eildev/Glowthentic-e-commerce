import cn from "../../utils/cn";

const Toggle = ({ className }) => {
  return (
    <span>
      <input
        type="checkbox"
        className={`${cn(
          "toggle rounded-none bg-white hover:bg-white border-gray  checked:border-orange-500 [--tglbg:#606060] checked:[--tglbg:#FA8232] ",
          className
        )}`}
        defaultChecked
      />
    </span>
  );
};

export default Toggle;
