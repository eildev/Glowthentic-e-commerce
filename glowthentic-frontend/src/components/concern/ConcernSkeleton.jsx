import cn from "../../utils/cn";

const ConcernSkeleton = ({ isDark }) => {
  return (
    <div
      className={cn(
        `card w-auto bg-light clip-shape  transition-all duration-300 ease-in-out animate-pulse`,
        {
          "": isDark,
        }
      )}
    >
      <figure className="relative clip-shape overflow-hidden shadow-sm">
        <div className="skeleton clip-shape lg:h-[280px] lg:py-5 py-2 w-full bg-slate-200 rounded-b-none"></div>
      </figure>
      {/* <div className="skeleton h-8 w-full clip-shape bg-slate-100 z-10"></div> */}
    </div>
  );
};

export default ConcernSkeleton;
