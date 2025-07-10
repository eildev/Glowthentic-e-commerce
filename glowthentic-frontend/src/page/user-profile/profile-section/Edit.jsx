import { useEffect, useState } from "react";
import avatarPlaceholder from "../../../assets/img/user-profile/user.jpg";
import { FaCamera } from "react-icons/fa";
import CommonTitle from "../../../components/user-profile/CommonTitle";
import InputField from "../../../components/input/InputField";
import cn from "../../../utils/cn";
import { useSelector } from "react-redux";
import {
  useGetUserInfoQuery,
  useUpdateUserMutation,
} from "../../../redux/features/api/auth/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import SelectWithSearch from "../../../components/select/SelectWithSearch";
import districtsData from "../../../components/checkout/DistrictUpozila.json";
import EditSkeleton from "./EditSkeleton";

const Edit = () => {
  // console.log(districtsData?.districts);
  const [imagePreview, setImagePreview] = useState(avatarPlaceholder);
  const [errors, setErrors] = useState({});
  const [upazilas, setUpazilas] = useState([]);

  const { user } = useSelector((state) => state.auth);
  const { data, isLoading: isFetching } = useGetUserInfoQuery(user?.id, {
    skip: !user?.id,
  });

  const [updateUser, { isLoading: isUpdating, error: updateError }] =
    useUpdateUserMutation();

  const navigate = useNavigate();

  // Form state
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    secondary_email: "",
    phone_number: "",
    address: "",
    city: "",
    postal_code: "",
    police_station: "",
    country: "",
    image: null,
  });

  // Handle image selection for preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast.error("Image size must be less than 5MB");
        return;
      }
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload a valid image file");
        return;
      }
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };

  // Populate form with user data
  useEffect(() => {
    if (data?.user && data?.userDetails) {
      setFormData({
        full_name: data.userDetails.full_name || data.user.name || "",
        email: data.user.email || "",
        secondary_email: data.userDetails.secondary_email || "",
        phone_number: data.userDetails.phone_number || "",
        address: data.userDetails.address || "",
        city: data.userDetails.city || "",
        postal_code: data.userDetails.postal_code || "",
        police_station: data.userDetails.police_station || "",
        country: data.userDetails.country || "",
        image: null,
      });
      setImagePreview(data.userDetails.image || avatarPlaceholder);
    }
  }, [data]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(!validateForm());
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    try {
      const dataToSend = new FormData();
      dataToSend.append("full_name", formData.full_name);
      if (formData.email) dataToSend.append("email", formData.email);
      if (formData.secondary_email)
        dataToSend.append("secondary_email", formData.secondary_email);
      if (formData.phone_number)
        dataToSend.append("phone_number", formData.phone_number);
      if (formData.address) dataToSend.append("address", formData.address);
      if (formData.city) dataToSend.append("city", formData.city);
      if (formData.postal_code)
        dataToSend.append("postal_code", formData.postal_code);
      if (formData.police_station)
        dataToSend.append("police_station", formData.police_station);
      if (formData.country) dataToSend.append("country", formData.country);
      if (formData.image) dataToSend.append("image", formData.image);

      for (let [key, value] of dataToSend.entries()) {
        console.log(`${key}:`, value);
      }
      // console.log("submit form Data", dataToSend.entries());

      // const result = await updateUser({ id: user.id, ...dataToSend }).unwrap();
      const result = await updateUser({
        id: user.id,
        body: dataToSend,
      }).unwrap();
      console.log("result", result);
      if (result.status === 200) {
        toast.success(result.message || "Profile updated successfully");
        // Update image preview if new image is returned
        if (result.user.image) {
          setImagePreview(result.user.image);
        }
        navigate("/user");
      }
    } catch (error) {
      toast.error(error.data?.message || "Failed to update profile");
      if (error.data?.errors) {
        setErrors(error.data.errors);
      }
    }
  };

  // Frontend validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.full_name.trim()) {
      newErrors.full_name = "Full name is required";
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (
      formData.secondary_email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.secondary_email)
    ) {
      newErrors.secondary_email = "Please enter a valid secondary email";
    }
    if (formData.phone_number && !/^1[3-9]\d{8}$/.test(formData.phone_number)) {
      newErrors.phone_number =
        "Please enter a valid phone number (e.g., 17xxxxxxxx)";
    }
    if (formData.police_station && formData.police_station.length > 100) {
      newErrors.police_station = "Upazila must not exceed 100 characters";
    }
    console.log("Validation Errors:", newErrors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle API errors
  useEffect(() => {
    if (updateError) {
      toast.error(
        updateError.data?.message || "An error occurred while updating"
      );
    }
  }, [updateError]);

  console.log("errors", errors);

  return (
    <div className="min-h-screen">
      <CommonTitle title="Edit Profile" />

      {/* Loading state */}
      {isFetching && <EditSkeleton />}

      {/* Form container */}
      {!isFetching && (
        <form
          className={cn(
            "w-full mx-auto bg-white rounded-lg shadow-md px-10 py-5 animate-fadeIn"
          )}
          encType="multipart/form-data"
          onSubmit={handleSubmit}
        >
          {/* User image upload section */}
          <div
            className={cn(
              "relative w-28 h-28 mx-auto my-5 rounded-full group shadow-md"
            )}
          >
            <img
              className={cn(
                "w-full h-full rounded-full object-cover border-2 border-secondary"
              )}
              src={imagePreview}
              alt="User Avatar"
            />
            <label
              className={cn(
                "absolute inset-0 bg-overlay rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 cursor-pointer"
              )}
            >
              {isUpdating ? (
                <div
                  className={cn(
                    "animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"
                  )}
                ></div>
              ) : (
                <FaCamera className={cn("text-white text-2xl")} />
              )}
              <input
                type="file"
                accept="image/*"
                className={cn("hidden")}
                onChange={handleImageChange}
              />
            </label>
            {errors.image && (
              <p
                className={cn(
                  "text-sm text-danger mt-1 font-encode text-center"
                )}
              >
                {errors.image}
              </p>
            )}
          </div>

          {/* Input fields grid */}
          <div className={cn("grid lg:grid-cols-2 grid-cols-1 gap-5")}>
            {/* Full Name */}
            <div className={cn("lg:col-span-2")}>
              <InputField
                label="Full Name"
                name="full_name"
                type="text"
                placeholder="Enter your full name"
                value={formData.full_name}
                onChange={handleInputChange}
                error={errors.full_name}
              />
            </div>

            {/* Email */}
            <div className={cn("lg:col-span-2")}>
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
              />
            </div>

            {/* Address */}
            <div className={cn("lg:col-span-2")}>
              <InputField
                label="Address"
                name="address"
                type="text"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
                error={errors.address}
              />
            </div>

            {/* District */}
            <div>
              {/* District */}
              <SelectWithSearch
                label="District"
                name="city"
                optionData={districtsData?.districts ?? []}
                error={errors.city}
                placeholder="Select District"
                value={formData.city}
                setUpazilas={setUpazilas}
                onChange={(newValue) =>
                  setFormData((prev) => ({ ...prev, city: newValue }))
                }
              />
            </div>

            {/* Upazila */}
            <div>
              <SelectWithSearch
                label="Upazila"
                name="police_station"
                optionData={upazilas}
                error={errors.police_station}
                placeholder="Select Upazila"
                value={formData.police_station}
                onChange={(newValue) =>
                  setFormData((prev) => ({ ...prev, police_station: newValue }))
                }
              />
            </div>

            {/* Postal Code */}
            <div>
              <InputField
                label="Postal Code"
                name="postal_code"
                type="text"
                placeholder="Enter your postal code"
                value={formData.postal_code}
                onChange={handleInputChange}
                error={errors.postal_code}
              />
            </div>

            {/* Country */}
            <div>
              <InputField
                label="Country"
                name="country"
                type="text"
                placeholder="Enter your country"
                value={formData.country}
                onChange={handleInputChange}
                error={errors.country}
              />
            </div>

            {/* Secondary Email */}
            <div>
              <InputField
                label="Secondary Email"
                name="secondary_email"
                type="email"
                placeholder="Enter your secondary email"
                value={formData.secondary_email}
                onChange={handleInputChange}
                error={errors.secondary_email}
              />
            </div>

            {/* Phone Number */}
            <div>
              <InputField
                label="Phone Number"
                name="phone_number"
                type="text"
                placeholder="17xxxxxxxx"
                prefix="+880"
                value={formData.phone_number}
                onChange={handleInputChange}
                error={errors.phone_number}
              />
            </div>
          </div>

          {/* Submit button */}
          <div className={cn("mt-6")}>
            <button
              type="submit"
              disabled={isUpdating}
              className={cn(
                "w-full bg-secondary text-white font-encode text-base py-2.5 rounded-md hover:bg-primary transition duration-300",
                isUpdating && "opacity-50 cursor-not-allowed"
              )}
            >
              {isUpdating ? "Updating..." : "Update Profile"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Edit;
