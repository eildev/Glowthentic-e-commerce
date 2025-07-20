import ProductDescriptionForSmallDeviceSkeleton from "./ProductDescriptionForSmallDeviceSkeleton";

const ProductDescriptionForSmallDevice = ({
  productDetails,
  apply,
  ingredients,
}) => {
  return (
    <div className="block lg:hidden">
      <div className="collapse collapse-plus bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium">
          Product Details
        </div>
        <div className="collapse-content font-normal text-sm text-justify">
          <div className="mt-4 text-lg font-normal text-[#0C0C0C]">
            <div
              className="custom-html-content mt-4 text-sm md:text-[16px] font-normal text-[#0C0C0C]"
              dangerouslySetInnerHTML={{
                __html: productDetails,
              }}
            />
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium">How To Apply</div>
        <div className="collapse-content font-normal text-sm text-justify">
          <div className="mt-4 text-lg font-normal text-[#0C0C0C]">
            <div
              className="custom-html-content mt-4 text-sm md:text-[16px] font-normal text-[#0C0C0C]"
              dangerouslySetInnerHTML={{
                __html: apply,
              }}
            />
          </div>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="checkbox" />
        <div className="collapse-title text-lg font-medium">Ingredient</div>
        <div className="collapse-content font-normal text-sm text-justify">
          <div className="mt-4 text-lg font-normal text-[#0C0C0C]">
            <div
              className="custom-html-content mt-4 text-sm md:text-[16px] font-normal text-[#0C0C0C]"
              dangerouslySetInnerHTML={{
                __html: ingredients,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescriptionForSmallDevice;
