import cn from "../../utils/cn";
const Checkbox = ({ className,  onChange,checked}) => {
  const checkColor = {
    "--chkfg": "oklch(0.91 0.06 38.75)", // CSS variable dynamically set
  }; 
  return (
    <span>
      <input
        type="checkbox"  checked={checked}
        onChange={onChange} style={checkColor}   className={`${cn("checkbox  checkbox-warning ", className)}`}
      />
     </span>
  );
};

export default Checkbox;
