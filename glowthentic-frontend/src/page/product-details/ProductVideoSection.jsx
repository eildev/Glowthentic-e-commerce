const ProductVideoSection = ({ data }) => {
  const video = data?.data?.video_link;
  return (
    <div className={`mt-4 mb-[28px] ${video ? "block" : "hidden"}`}>
      <h2 className="md:text-lg text-md text-primary border-b border-hr-thin w-full mx-auto p-[10px] mb-6 font-bold text-center ">
        Product Video
      </h2>

      <div className="relative w-full max-w-3xl mx-auto">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-sm">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-2 border-transparent hover:border-hr-thin duration-200"
            src={video}
            title="Product Video"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ProductVideoSection;
