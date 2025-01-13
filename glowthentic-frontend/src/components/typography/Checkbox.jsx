import cn from "../../utils/cn";
const Checkbox = ({ className,  onChange,checked}) => {
  const bgColor = {
    "--chkfg": "oklch(0.91 0.06 38.75)", // CSS variable dynamically set
  };
  return (
    <span>
      <input
        type="checkbox"  checked={checked}
        onChange={onChange} style={bgColor}   className={`${cn("checkbox  checkbox-warning ", className)}`}
      />
    
    </span>
    
  );
};

export default Checkbox;
