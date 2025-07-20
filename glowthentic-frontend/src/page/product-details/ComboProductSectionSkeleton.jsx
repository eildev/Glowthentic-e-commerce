const ComboProductSectionSkeleton = () => {
  return (
    <section className="py-10 bg-body animate-pulse">
      <div className="h-8 bg-gray-light rounded w-1/3 mx-auto mb-8"></div>

      <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 rounded-md shadow-sm">
        <div className="flex-shrink-0 w-full md:w-[300px] h-[250px] bg-gray-light rounded-md border border-gray-light"></div>

        <div className="flex-1">
          <div className="h-6 bg-gray-light rounded w-3/4 mb-2"></div>

          <div className="h-8 bg-gray-light rounded w-1/3 mb-4"></div>

          <div className="flex gap-4">
            <div className="h-10 bg-gray-light rounded w-28"></div>
            <div className="h-10 bg-gray-light rounded w-28"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComboProductSectionSkeleton;
