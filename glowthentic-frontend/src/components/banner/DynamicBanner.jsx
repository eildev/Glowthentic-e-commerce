import cn from "../../utils/cn";

const DynamicBanner = ({ children, image, className }) => {
  return (
    <div
      className={cn("overflow-hidden rounded-md h-[300px] w-full", className)}
    >
      <div
        className="bg-local bg-no-repeat bg-cover bg-center w-full h-full flex justify-center items-center border-2"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default DynamicBanner;
