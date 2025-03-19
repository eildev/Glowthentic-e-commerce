import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <button
      className={`border-2 p-2 m-1 rounded-lg animate-pulse fixed right-0 bottom-[100px] bg-white text-primary hover:text-secondary z-[10] ${
        isVisible ? "block" : "hidden"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="font-bold">
        <Icon icon="mdi-light:arrow-up" width="24" height="24" />
      </span>
    </button>
  );
};

export default ScrollTop;
