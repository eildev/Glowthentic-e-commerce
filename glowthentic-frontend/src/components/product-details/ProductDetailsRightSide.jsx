import { Icon } from "@iconify/react";
import ShowPrice from "../../page/product-details/ShowPrice";
import capitalizeText from "../../utils/capitalizeText";
import HeadTitle from "../typography/HeadTitle";
import IncrementDecrement from "../typography/IncrementDecrement";
import RegularButton from "../typography/RegularButton";
import { imagePath } from "../../utils/imagePath";
import ProductDetailsNameTagAndTagShow from "./ProductDetailsNameTagAndTagShow";

const ProductDetailsRightSide = ({
  data,
  stockAvailable,
  selectedVariant,
  setItemCount,
  handleAddToCart,
  isLoading,
  handleCheckOut,
  selectedVariantData,
  setSelectedVariant,
  itemCount,
}) => {
  return (
    <div className="sm:col-span-3 md:pt-7 md:pl-4">
      {/* Show on big device, hidden on атрил device */}
      {/* <div className="hidden sm:block w-full">
        <HeadTitle className="mb-2">
          {capitalizeText(data?.data?.product_name) ?? ""}
        </HeadTitle>
        <h4
          className="font-bold line-clamp-3"
          dangerouslySetInnerHTML={{
            __html: data?.data?.productdetails?.short_description,
          }}
        ></h4>
        <p>
          <span className="font-thin text-sm text-gray">
            {data?.data?.product_tags.map(
              (tagData, index) =>
                `${tagData?.tag?.tagName ?? ""}${
                  index < data.data.product_tags.length - 1 ? " | " : ""
                }`
            )}
          </span>
        </p>
      </div> */}
      <div className="hidden sm:block">
        <ProductDetailsNameTagAndTagShow data={data} />
      </div>
      {/* End of big device section */}
      {/* Out of Stock Badge */}
      {!stockAvailable && (
        <div className="mt-2 mb-2">
          <span className="bg-secondary text-white text-xs md:text-sm px-3 py-1 rounded-full font-semibold">
            Out of Stock
          </span>
        </div>
      )}
      <ShowPrice selectedVariant={selectedVariant} />
      <hr className="text-hr-thin" />
      {/* Select price end */}
      {/* Buttons */}
      <div className="mt-4 flex flex-wrap justify-evenly items-center gap-3">
        <div>
          <IncrementDecrement
            setItemCount={setItemCount}
            item={selectedVariantData}
            itemCount={itemCount}
            status="details"
          />
        </div>
        <RegularButton
          isLoading={isLoading}
          isDisabled={!stockAvailable}
          className={`block text-sm text-nowrap justify-between ${
            stockAvailable
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-gray-gradient cursor-not-allowed"
          }`}
          onClick={handleAddToCart}
        >
          Add To Cart
        </RegularButton>
        <RegularButton
          isLoading={isLoading}
          className={`block text-sm text-nowrap justify-between ${
            stockAvailable
              ? "bg-orange-500 hover:bg-orange-600"
              : "bg-gray-gradient cursor-not-allowed"
          }`}
          onClick={handleCheckOut}
          isDisabled={!stockAvailable}
        >
          Buy Now
        </RegularButton>
      </div>
      <p className="text-sm mt-2 mb-5 lg:text-left lg:ml-3 text-center">
        Max Product Stock{" "}
        <span className="text-secondary font-semibold">
          {selectedVariantData?.product_stock?.StockQuantity || 0}
        </span>
      </p>
      {/* Buttons End */}
      {/* show all variants */}
      <div className="flex items-center justify-between my-3">
        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-2 mx-auto">
          {data?.data?.variants?.map((variant) => (
            <div
              key={variant.id}
              className={`cursor-pointer rounded-md overflow-hidden transition-all ${
                selectedVariant?.id === variant.id
                  ? "border-2 border-orange-500 bg-orange-50"
                  : "border border-transparent hover:border-orange-300"
              }`}
              onClick={() => setSelectedVariant(variant)}
            >
              <div className="">
                <img
                  src={imagePath(variant?.variant_image[0]?.image)}
                  alt={variant.variant_name || "Variant"}
                  className="w-full h-[100px] sm:h-16 object-cover"
                />
                <p className="text-xs text-center my-2 text-gray-600">
                  {variant.variant_name ?? ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Conditionally Render Shipping/Policy Section */}
      {data?.data?.shipping_charge === "free" &&
        data?.data?.productdetails?.product_policy && (
          <div className="bg-[#fbeff2] p-2 font-normal text-sm mt-4">
            <p className="flex items-center py-1">
              <Icon icon="mdi:wallet-giftcard" width="2em" height="2em" />
              <span className="ps-2">
                <h1>Free Shipping</h1>
              </span>
            </p>
            <p className="flex items-center py-1">
              <Icon icon="ic:baseline-discount" width="2em" height="2em" />
              <span className="ps-2 line-clamp-3">
                {data?.data?.productdetails.product_policy}
              </span>
            </p>
          </div>
        )}
    </div>
  );
};

export default ProductDetailsRightSide;
