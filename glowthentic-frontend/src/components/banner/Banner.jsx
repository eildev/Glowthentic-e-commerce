import cn from "../../utils/cn";


const Banner = ({ children, image, className }) => {
    return (
        <div className={cn('bg-local bg-no-repeat bg-cover bg-center', className)} style={{ backgroundImage: `url(${image})` }}>
            {children}
        </div>
    );
};

export default Banner;