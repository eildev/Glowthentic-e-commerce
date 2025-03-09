import { useEffect, useState } from "react";
import cn from "../../utils/cn";
const Checkbox = ({ className,  onChange,checked, register}) => {
    const [isReady, setIsReady] = useState(false);
  const checkColor = {
    "--chkfg": "#fff", // CSS variable dynamically set
  }; 

 useEffect(() => {
    if (register) {
      setIsReady(true);
    }
  }, [register]);

  if (!isReady) {
    return <input
    type="checkbox"  checked={checked}
    onChange={onChange} style={checkColor}   className={`${cn("checkbox  checkbox-warning ", className)}`}
  />;
  }


  return (
    <span>
      <input {...register("shipToDifferentAddress")}
        type="checkbox"  checked={checked}
        onChange={onChange} style={checkColor}   className={`${cn("checkbox  checkbox-warning ", className)}`}
      />
     </span>
  );
};

export default Checkbox;
