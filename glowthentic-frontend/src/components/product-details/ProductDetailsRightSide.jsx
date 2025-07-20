import { Icon } from "@iconify/react";
import ShowPrice from "../../page/product-details/ShowPrice";
import capitalizeText from "../../utils/capitalizeText";
import IncrementDecrement from "../typography/IncrementDecrement";
import RegularButton from "../typography/RegularButton";
import { imagePath } from "../../utils/imagePath";
import ProductDetailsNameTagAndTagShow from "./ProductDetailsNameTagAndTagShow";
import toast from "react-hot-toast";
import ProductDetailsRightSideSkeleton from "./ProductDetailsRightSideSkeleton";

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
  const images = selectedVariant?.variant_image ?? [];
  const price = selectedVariant?.regular_price;

  // console.log("price", price);
  // Share Function
  const handleShare = async (platform) => {
    const productName = capitalizeText(data?.data?.product_name) || "Product";
    const productAudiences = {
      en: "Check out this product!",
      bn: "এই পণ্যটি দেখুন!",
    };
    const productDescription =
      data?.data?.productdetails?.short_description || productAudiences.en;
    const productUrl = window.location.href;
    const productImage = images.length > 0 ? imagePath(images[0]?.image) : "";
    const productPrice = price ? `Price: ${price}` : "Price: N/A";
    // console.log(productUrl);
    const shareData = {
      title: productName,
      text: `${productDescription} - ${productPrice}`,
      url: productUrl,
    };

    let shareUrl;
    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          productUrl
        )}&quote=${encodeURIComponent(
          `${productDescription} - ${productPrice}`
        )}`;
        window.open(shareUrl, "_blank");
        break;
      case "whatsapp":
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(
          `${productDescription} - ${productPrice} ${productUrl}`
        )}`;
        window.open(shareUrl, "_blank");
        break;
      case "twitter":
        shareUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
          `${productDescription} - ${productPrice}`
        )}&url=${encodeURIComponent(productUrl)}`;
        window.open(shareUrl, "_blank");
        break;
      case "instagram":
        if (navigator.share) {
          navigator.share(shareData).catch((error) => {
            console.error("Error sharing to Instagram:", error);
            toast.error("Failed to share to Instagram. Please try again.");
          });
        } else {
          navigator.clipboard
            .writeText(productUrl)
            .then(() => {
              toast.info(
                "Instagram sharing not supported. Link copied to clipboard! Paste it in Instagram."
              );
            })
            .catch((error) => {
              console.error("Error copying link:", error);
              toast.error("Failed to copy link. Please try again.");
            });
        }
        break;
      case "copy":
        navigator.clipboard
          .writeText(productUrl)
          .then(() => {
            toast.success("Product link copied to clipboard!");
          })
          .catch((error) => {
            console.error("Error copying link:", error);
            toast.error("Failed to copy link. Please try again.");
          });
        return;
      default:
        // Web Share API fallback
        if (navigator.share) {
          navigator.share(shareData).catch((error) => {
            console.error("Error sharing product:", error);
            toast.error("Failed to share product. Please try again.");
          });
        } else {
          navigator.clipboard
            .writeText(productUrl)
            .then(() => {
              toast.success("Product link copied to clipboard!");
            })
            .catch((error) => {
              console.error("Error copying link:", error);
              toast.error("Failed to copy link. Please try again.");
            });
        }
        return;
    }
  };

  if (isLoading) return <ProductDetailsRightSideSkeleton />;

  return (
    <div className="sm:col-span-3 md:pt-7 md:pl-4">
      {/* Show on big device, hidden on атрил device */}
      <div className="hidden sm:block">
        <ProductDetailsNameTagAndTagShow data={data} isLoading={isLoading} />
      </div>
      {/* End of big device section */}

      <ShowPrice selectedVariant={selectedVariant} />
      <hr className="text-hr-thin" />
      {/* Select price end */}
      {/* Buttons */}
      <div className="mt-4 flex flex-wrap justify-start items-center gap-3">
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
      {stockAvailable && (
        <p className="text-sm mt-2 mb-5 lg:text-left text-center">
          Max Product Stock{" "}
          <span className="text-secondary font-semibold">
            {selectedVariantData?.product_stock?.StockQuantity || 0}
          </span>
        </p>
      )}
      {/* Out of Stock Badge */}
      {!stockAvailable && (
        <div className="mt-2 mb-2">
          <span className="bg-primary text-white text-xs md:text-sm px-3 py-1 rounded-full font-semibold">
            Out of Stock
          </span>
        </div>
      )}

      {/* Buttons End */}
      {/* show all variants */}
      <div className="flex items-center justify-start my-3">
        <div className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 gap-2">
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
                  alt={variant?.variant_name || "Variant"}
                  className="w-full h-[70px] sm:h-16 object-cover"
                />
                <p className="text-xs text-center my-2 text-gray-600">
                  {variant?.variant_name ?? ""}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Share Button Section */}
      <div className="flex sm:flex-wrap justify-start items-center gap-3 mt-5">
        <div
          className="text-md text-nowrap bg-blue-600 hover:bg-blue-700 text-white cursor-pointer rounded-full h-7 w-7 flex justify-center items-center"
          onClick={() => handleShare("facebook")}
        >
          <Icon icon="mdi:facebook" className="" />
        </div>
        <div
          className="text-md text-nowrap bg-green-500 hover:bg-green-600 text-white cursor-pointer rounded-full h-7 w-7 flex justify-center items-center"
          onClick={() => handleShare("whatsapp")}
        >
          <Icon icon="mdi:whatsapp" className="" />
        </div>
        <div
          className="text-md text-nowrap bg-primary hover:bg-black text-white cursor-pointer rounded-full h-7 w-7 flex justify-center items-center"
          onClick={() => handleShare("twitter")}
        >
          <Icon icon="pajamas:twitter" />
        </div>
        <div
          className="text-md text-nowrap bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white cursor-pointer rounded-full h-7 w-7 flex justify-center items-center"
          onClick={() => handleShare("instagram")}
        >
          <Icon icon="uil:instagram" />
        </div>
        <div
          className="text-md text-nowrap bg-gray hover:bg-gray text-white cursor-pointer rounded-full h-7 w-7 flex justify-center items-center"
          onClick={() => handleShare("copy")}
        >
          <Icon icon="mdi:content-copy" className="" />
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
