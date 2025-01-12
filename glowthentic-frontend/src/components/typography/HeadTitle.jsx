import cn from "../../utils/cn";

const HeadTitle = ({ children ,className }) => {
    return (
         <h2 className={`${cn("font-bold text-lg md:text-xl lg:text-3xl xl:text-3xl text-dark",
            className,
         )}`
        }>{children}</h2>
    );
};

export default HeadTitle;