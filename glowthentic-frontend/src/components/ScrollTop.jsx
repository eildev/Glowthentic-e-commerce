import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { triggerScrollToTop } from "../redux/features/slice/scrollSlice";
const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dispatch = useDispatch();

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

  const handleScrollToTop = () => {
    dispatch(triggerScrollToTop());
  };
  return (
    <button
      className={`border-2 p-2 m-1 rounded-lg animate-pulse fixed right-0 bottom-[100px] bg-white text-primary hover:text-secondary z-[10] ${
        isVisible ? "block" : "hidden"
      }`}
      // onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      onClick={handleScrollToTop}
    >
      <span className="font-bold">
        <Icon icon="mdi-light:arrow-up" width="24" height="24" />
      </span>
    </button>
  );
};

export default ScrollTop;
