import { useState } from "react";
import avatarPlaceholder from "../../../assets/img/user-profile/avatar.jpeg";
import CommonTitle from "../../../components/user-profile/CommonTitle";
import { FaCamera } from "react-icons/fa";
import { useGetUserInfoQuery } from "../../../redux/features/api/userApi/userApi";
import { useSelector } from "react-redux";
import { usePostUserMutation } from "../../../redux/features/api/userApi/postUserApi";

const EditAccount = () => {
  const { user } = useSelector((state) => state.auth);
  const { data } = useGetUserInfoQuery(user?.data?.id);
  const [postUser, { isLoading: postLoad, isSuccess, isError: postError, error }] = usePostUserMutation();

  // State for form data
  const [formData, setFormData] = useState({
    image: avatarPlaceholder,
    full_name: user?.data?.name || "",
    address: "",
    country: "",
    police_station: "",
    postal_code: "",
    email: user?.data?.email || "",
    phone_number: "",
    saveAddress: false,
  });

  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await postUser(formData);
      if (response?.data) {
        alert("Profile updated successfully!");
      } else {
        alert("Something went wrong! Please try again.");
      }
    } catch (err) {
      console.error("Error updating profile:", err);
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="px-2">
      <CommonTitle title={"Edit Account"} />
      <form onSubmit={handleSubmit}>
        {/* Avatar Upload */}
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto my-4 rounded-full group">
          <img className="w-full h-full rounded-full object-cover" src={formData.image} alt="User Avatar" />
          <label className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <FaCamera className="text-white text-2xl cursor-pointer" />
            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
          </label>
        </div>

        {/* Form Inputs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">Name</label>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">Country</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">Police Station</label>
            <input
              type="text"
              name="police_station"
              value={formData.police_station}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">Postal Code</label>
            <input
              type="text"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
          <div className="flex items-center my-4">
            <input
              type="checkbox"
              name="saveAddress"
              checked={formData.saveAddress}
              onChange={handleInputChange}
              className="w-5 h-5"
            />
            <label className="block text-xl text-dark font-normal font-encode ml-2">Save this address to my profile</label>
          </div>
        </div>

        {/* Contact Information */}
        <div className="my-8">
          <CommonTitle title={"Contact"} />
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">Phone Number</label>
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
        </div>

        <button
          type="submit"
          className="block w-full px-6 py-4 lg:px-8 lg:py-6 rounded-md text-lg font-normal font-encode text-white bg-secondary hover:bg-secondary-dark transition"
          disabled={postLoad}
        >
          {postLoad ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditAccount;
