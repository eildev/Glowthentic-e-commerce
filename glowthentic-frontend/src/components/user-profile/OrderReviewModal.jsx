import { Icon } from "@iconify/react";
import { useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useReviewProductMutation } from "../../redux/features/api/review/reviewApi";

function getRating(rating) {
  switch (rating) {
    case 1:
      return "Poor";
    case 2:
      return "Nothing special";
    case 3:
      return "Average";
    case 4:
      return "Very good";
    case 5:
      return "Excellent";
    default:
      return "None";
  }
}

const OrderReviewModal = ({ item, setReviewItem }) => {
  const { user } = useSelector((state) => state.auth);
  const [selectedIndex, setSelectedIndex] = useState("all");
  // const [selectedItem, setSelectedItem] = useState(null);
  const hasMultipleProducts = item?.order_details?.length > 1;
  const selectedProduct =
    hasMultipleProducts && selectedIndex !== "all"
      ? item?.order_details[selectedIndex]
      : item?.order_details[0];

  const userID = user?.id;
  const [rating, setRating] = useState(3);
  const [images, setImages] = useState([]);
  const [imagesFile, setImagesFile] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [review, setReview] = useState(false);

  const [postReview, { isLoading, isError, isSuccess }] =
    useReviewProductMutation();

  const customStyles = {
    itemShapes: Star,
    boxBorderWidth: 0,
    activeFillColor: "#FA8232",
    inactiveFillColor: "#AFAFAF",
  };

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    setImagesFile(files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages([...images, ...newImages]);
  };

  const handleImageDelete = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation to check if the review text is empty
    if (!reviewText.trim()) {
      return; // Prevent form submission
    }

    const formData = new FormData();
    formData.append("user_id", userID);
    formData.append(
      "product_id",
      selectedIndex === "all" ? "" : selectedProduct?.product.id
    );
    formData.append("order_id", item?.id);
    formData.append("rating", rating);
    formData.append("review", reviewText);
    formData.append("status", 1);
    imagesFile.forEach((file, index) => {
      formData.append(`images[${index}]`, file);
    });

    console.log("formData", [...formData.entries()]);

    try {
      const response = await postReview(formData).unwrap();
      console.log("isSuccess", response);
      toast.success("Review submitted successfully!");
      setReviewText("");
      setImages([]);
      setRating(3);
      setReview(false);
      document.getElementById("my_modal_3").close();
      setReviewItem(null);
      setSelectedIndex("all");
    } catch (error) {
      console.log("error", error);
      console.error("Failed to submit review:", error);
      // toast.error("Failed to submit review.");
    }
  };

  return (
    <dialog id="my_modal_3" className="modal ">
      <div className="modal-box rounded-lg md:min-w-[700px] p-8">
        <form
          className="flex items-center justify-between mb-4"
          method="dialog"
        >
          <h3 className="text-md md:text-lg font-bold font-encode text-secondary">
            Give Review
          </h3>
          <button
            className="cursor-pointer"
            onClick={() => {
              setReviewItem(null);
              setSelectedIndex("all");
            }}
          >
            ✕
          </button>
        </form>

        <div className="flex flex-col items-center md:flex-row">
          {selectedIndex !== "all" || !hasMultipleProducts ? (
            <div className="flex flex-row md:flex-col w-[280px]">
              <div className="w-[280px]">
                <img
                  className="object-cover h-[350px] w-[280px]"
                  src={`http://127.0.0.1:8000/${selectedProduct?.variant?.variant_image[0]?.image}`}
                  alt=""
                />
              </div>
              <div className="pl-4 md:pl-0 md:mt-4">
                <h5 className="text-sm md:text-lg text-dark font-bold font-encode">
                  {selectedProduct?.product?.product_name ?? ""}
                </h5>
                <div className="flex justify-between items-center">
                  <p className="text-sm md:text-md text-gray font-normal font-encode">
                    {selectedProduct?.product?.category?.categoryName ?? ""}
                  </p>
                  <p className="flex items-center text-sm md:text-md text-dark font-semibold font-encode">
                    <Icon
                      className="w-4 h-4 md:w-6 md:h-6 text-secondary"
                      icon={"mdi:star"}
                    />
                    4.5
                  </p>
                </div>
                <p className="text-sm md:text-xl text-dark font-semibold font-encode">
                  ৳ {selectedProduct?.variant?.regular_price ?? ""}
                </p>
              </div>
            </div>
          ) : null}

          <div
            className={`w-full ${
              selectedIndex !== "all" || !hasMultipleProducts ? "md:pl-8" : ""
            } mt-4 md:mt-0`}
          >
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="flex justify-between items-center">
                {/* products select */}
                {hasMultipleProducts && (
                  <select
                    className="mb-2 py-1 px-2 w-full rounded-md text-center text-gray-700 bg-transparent focus:outline-none focus:ring-2 focus:ring-secondary focus:border-secondary hover:border-secondary"
                    onChange={(e) => setSelectedIndex(e.target.value)}
                  >
                    <option value="all">All Products</option>
                    {item?.order_details.map((detail, index) => (
                      <option key={index} value={index}>
                        {detail.product.product_name ?? ""}
                      </option>
                    ))}
                  </select>
                )}
              </div>

              <div className="flex items-center mt-2">
                <p className="text-sm md:text-md text-dark font-medium font-encode mr-5">
                  Star
                </p>
                <Rating
                  value={rating}
                  itemStyles={customStyles}
                  style={{ maxWidth: 150 }}
                  onChange={setRating}
                />
                <p className="text-md md:text-lg text-gray-thin font-medium font-encode pl-2 pt-1">
                  {`${getRating(rating)}!`}
                </p>
              </div>

              <p className="text-sm text-dark font-medium mt-6 mb-2">
                Upload Images
              </p>
              <label className="block w-full p-4 border border-gray-300 rounded-md cursor-pointer text-center text-gray-500 hover:bg-gray-100 transition duration-200 ease-in-out">
                Click to Upload Images
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </label>
              {images.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4 justify-center">
                  {images.map((img, index) => (
                    <div
                      key={index}
                      className="relative w-20 h-20 rounded-md overflow-hidden shadow-md"
                    >
                      <img
                        src={img}
                        alt={`Uploaded Preview ${index}`}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => handleImageDelete(index)}
                        className="absolute top-1 right-1 bg-red-500 text-white text-xs h-5 w-5 rounded-full shadow-lg flex items-center justify-center"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-sm md:text-md text-dark font-medium font-encode mt-6 mb-2">
                Review
              </p>
              <textarea
                type="text"
                rows={3}
                className="w-full p-3 text-dark font-encode border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
              ></textarea>

              <button
                type="submit"
                className="py-4 w-full text-white bg-secondary rounded-md mt-6 uppercase hover:bg-secondary-dark transition duration-200"
                disabled={isLoading}
              >
                {isLoading ? "Submitting..." : "Submit"}
              </button>

              <div>
                {isError && (
                  <p className="text-red-500 mt-2">Failed to submit review.</p>
                )}
                {review && (
                  <p className="text-red-500 mt-2">Please write a review!</p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default OrderReviewModal;
