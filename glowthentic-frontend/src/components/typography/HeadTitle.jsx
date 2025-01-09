import cn from "../../utils/cn";

const HeadTitle = ({ children ,className }) => {
    return (
         <h2 className={`${cn("font-extra-bold text-lg md:text-xl lg:text-3xl xl:text-4xl text-dark",
            className,
         )}`
         
        }>{children}</h2>
    );
};

export default HeadTitle;