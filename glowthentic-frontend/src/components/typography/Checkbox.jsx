import cn from "../../utils/cn";
const Checkbox = ({ className,  onChange,checked}) => {
  return (
    <span>
      <input
        type="checkbox"  checked={checked}
        onChange={onChange} className={`${cn("checkbox ", className)}`}

      />
    </span>
  );
};

export default Checkbox;
