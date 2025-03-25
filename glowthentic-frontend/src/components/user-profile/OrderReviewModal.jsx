import { Icon } from "@iconify/react";
import { useState } from "react";
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import f4 from "../../assets/img/user-profile/f4.jpeg";

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

const OrderReviewModal = ({ item }) => {
  const [rating, setRating] = useState(3);
  const [images, setImages] = useState([]);

  const customStyles = {
    itemShapes: Star,
    boxBorderWidth: 0,
    activeFillColor: "#FA8232",
    inactiveFillColor: "#AFAFAF",
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const imageUrls = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...imageUrls]);
  };

  const handleImageDelete = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box rounded-lg md:min-w-[700px] p-8">
        <form className="flex items-center justify-between mb-4" method="dialog">
          <h3 className="text-md md:text-lg font-bold text-secondary">Give Review</h3>
          <button className="cursor-pointer">✕</button>
        </form>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-row md:flex-col w-full md:w-3/12">
            <div className="w-full">
              <img className="object-cover" src={f4} alt="" />
            </div>
            <div className="pl-4 md:pl-0 md:mt-4">
              <h5 className="text-sm md:text-lg text-dark font-bold">{item.id}</h5>
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray">Makeup</p>
                <p className="flex items-center text-sm text-dark font-semibold">
                  <Icon className="w-4 h-4 text-secondary" icon="mdi:star" /> 4.5
                </p>
              </div>
              <p className="text-sm text-dark font-semibold">$59,66</p>
            </div>
          </div>
          <div className="md:w-9/12 md:pl-8 mt-4 md:mt-0">
            <form>
              <p className="text-sm text-dark font-medium mb-2">Star</p>
              <div className="flex items-center">
                <Rating value={rating} itemStyles={customStyles} style={{ maxWidth: 150 }} onChange={setRating} />
                <p className="text-md text-gray-thin font-medium pl-2 pt-1">{`${getRating(rating)}!`}</p>
              </div>
              {/* upload image here */}
              <p className="text-sm text-dark font-medium mt-6 mb-2">Upload Images</p>
              <label className="block w-full p-4 border border-gray-light  rounded-md cursor-pointer text-center text-gray-500 hover:bg-gray-100 transition duration-200 ease-in-out">
                Click to Upload Images
                <input type="file" multiple accept="image/*" className="hidden" onChange={handleImageUpload} />
              </label>
              {images.length > 0 && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {images.map((img, index) => (
                    <div key={index} className="relative w-20 h-20 rounded-md overflow-hidden shadow-md">
                      <img src={img} alt={`Uploaded Preview ${index}`} className="w-full h-full object-cover" />
                      <button onClick={() => handleImageDelete(index)} className="absolute top-1 right-1 bg-red-500 text-white text-xs h-5 w-5 rounded-full shadow-lg flex items-center justify-center">
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
              <p className="text-sm text-dark font-medium mt-6 mb-2">Review</p>
              <textarea className="w-full p-2 text-dark border border-gray-light rounded-sm outline-none" rows={3} placeholder="Write your review here..."></textarea>
              <button type="submit" className="py-4 w-full text-white bg-secondary rounded mt-6 uppercase">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default OrderReviewModal;
