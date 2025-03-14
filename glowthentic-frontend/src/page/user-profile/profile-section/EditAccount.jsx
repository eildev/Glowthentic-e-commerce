import { useEffect, useState } from "react";
import avatarPlaceholder from "../../../assets/img/user-profile/avatar.jpeg";
import CommonTitle from "../../../components/user-profile/CommonTitle";
import { FaCamera } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  useGetUserInfoQuery,
  useUpdateUserMutation,
} from "../../../redux/features/api/auth/authApi";

const EditAccount = () => {
  const { user } = useSelector((state) => state.auth);
  const userID = user?.data?.id;

  // Get user info
  const { data, isLoading, isError } = useGetUserInfoQuery(userID);

  // Update user mutation
  const [
    updateUser, // Mutation trigger
    { isLoading: isUpdating, isSuccess: isUpdated, isError: updateError, error },
  ] = useUpdateUserMutation(userID);

  // Initialize user data in state
  const [formData, setFormData] = useState({
    image: avatarPlaceholder,
    name: data?.user?.name || "",
    address: "Wukanda Forever, Noakhali Division, 3 No Mainka Chipa",
    country: "Uganda",
    region: "Dhaka",
    zone: "Banasree",
    postalCode: "6969696",
    email: data?.user?.email || "",
    phone: "0809210301002",
    saveAddress: false,
  });

  // Update formData when API data is loaded
  useEffect(() => {
    if (data?.user) {
      setFormData((prev) => ({
        ...prev,
        name: data.user.name,
        email: data.user.email,
      }));
    }
  }, [data]);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedData = {
        id: userID,        // Pass the user ID
        ...formData,       // Include other form fields
      };
      await updateUser(updatedData).unwrap(); // Call the mutation with the payload
      alert("User information updated successfully!");
    } catch (err) {
      console.error("Failed to update user:", err.data);
      alert("Failed to update user. Please try again.");
    }
  };

  if (isLoading) return <p>Loading user data...</p>;
  if (isError) return <p>Failed to load user data.</p>;
  // Handle image change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, image: imageUrl }));
    }
  };

  

  return (
    <div className="px-2">
      <CommonTitle title={"Edit Account"} />

      <form onSubmit={handleFormSubmit}>
        {/* Avatar Upload */}
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto my-4 rounded-full group">
          <img
            className="w-full h-full rounded-full object-cover"
            src={formData.image}
            alt="User Avatar"
          />
          <label className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <FaCamera className="text-white text-2xl cursor-pointer" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label>
        </div>

        {/* Form Inputs */}
        <div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Address
            </label>
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
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Country
            </label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Province/Region
            </label>
            <select
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Sylhet</option>
            </select>
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Zone
            </label>
            <input
              type="text"
              name="zone"
              value={formData.zone}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Postal Code
            </label>
            <input
              type="text"
              name="postalCode"
              value={formData.postalCode}
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
            <label className="block text-xl text-dark font-normal font-encode ml-2">
              Save this address to my profile
            </label>
          </div>
        </div>

        {/* Contact Information */}
        <div className="my-8">
          <CommonTitle title={"Contact"} />
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2  border border-hr-thin rounded-md outline-secondary"
            />
          </div>
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border border-hr-thin rounded-md outline-secondary"
            />
          </div>
        </div>

        <button
          type="submit"
          className="block w-full px-6 py-4 lg:px-8 lg:py-6 rounded-md text-lg font-normal font-encode text-white bg-secondary hover:bg-secondary-dark transition"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditAccount;
