import React, { useEffect, useState } from "react";
import avatarPlaceholder from "../../../assets/img/user-profile/avatar.jpeg";
import CommonTitle from "../../../components/user-profile/CommonTitle";
import { FaCamera } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  useGetUserInfoQuery,
  useUpdateUserMutation,
} from "../../../redux/features/api/auth/authApi";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const EditAccount = () => {
  const { user } = useSelector((state) => state.auth);
  const userID = user?.id;

  // console.log("login user", user);

  // Skip query if userID is undefined
  const { data, isLoading, isError } = useGetUserInfoQuery(userID, {
    skip: !userID,
  });
  // console.log("user", data?.userDetails);
  const [
    updateUser,
    {
      isLoading: isUpdating,
      isSuccess: isUpdated,
      isError: updateError,
      error,
    },
  ] = useUpdateUserMutation();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  const [imagePreview, setImagePreview] = useState(avatarPlaceholder);
  const [imageFile, setImageFile] = useState(null);

  // Update form values when API data is loaded
  useEffect(() => {
    if (data?.user) {
      const userData = {
        name: data?.user?.name || "",
        email: data?.user?.email || "",
        address: data?.userDetails?.address || "",
        country: data?.userDetails?.country || "",
        region: data?.userDetails?.city || "",
        zone: data?.userDetails?.police_station || "",
        postalCode: data?.userDetails?.postal_code || "",
        phone: data?.userDetails?.phone_number || "",
      };
      reset(userData);
      if (data.user.image) {
        setImagePreview(data?.userDetails?.image);
      }
    }
  }, [data, reset]);

  // Handle image change with validation
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
      setImageFile(file);
    }
  };

  // Handle form submission
  const onSubmit = async (formData) => {
    if (!userID) {
      toast.error("User ID is not available. Please log in again.");
      return;
    }

    try {
      const payload = {
        id: userID,
        full_name: formData.name,
        email: formData.email,
        address: formData.address,
        country: formData.country,
        city: formData.region,
        police_station: formData.zone,
        postal_code: formData.postalCode,
        phone_number: formData.phone,
      };

      // If there's an image, we'll need to handle multipart/form-data
      if (imageFile) {
        const formDataToSend = new FormData();
        Object.entries(payload).forEach(([key, value]) => {
          formDataToSend.append(key, value);
        });
        formDataToSend.append("image", imageFile);
        await updateUser(formDataToSend).unwrap();
      } else {
        await updateUser(payload).unwrap();
      }

      toast.success("User information updated successfully!");
    } catch (err) {
      const errorMessage = err?.data?.message || "Failed to update user";
      const fieldErrors = err?.data?.errors || {};

      if (err.status === 405) {
        toast.error("Method not allowed. Please contact support.");
      } else {
        toast.error(errorMessage);
        Object.entries(fieldErrors).forEach(([field, messages]) => {
          toast.error(`${field}: ${messages.join(", ")}`);
        });
      }
    }
  };

  // Handle success state
  useEffect(() => {
    if (isUpdated) {
      toast.success("Profile updated successfully!");
    }
  }, [isUpdated]);

  // Handle error state
  useEffect(() => {
    if (updateError) {
      toast.error("Failed to update profile. Please try again.");
    }
  }, [updateError]);

  if (!userID) {
    return (
      <div className="text-center text-red-500">
        Error: User ID not found. Please log in again.
      </div>
    );
  }

  if (isLoading) return <div className="text-center">Loading user data...</div>;
  if (isError)
    return (
      <div className="text-center text-red-500">Failed to load user data.</div>
    );

  return (
    <div className="px-2">
      <CommonTitle title="Edit Account" />

      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
        {/* Avatar Upload */}
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto my-4 rounded-full group">
          <img
            className="w-full h-full rounded-full object-cover"
            src={imagePreview}
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
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
              })}
              className={`block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${
                errors.name ? "border-red-500" : "border-hr-thin"
              }`}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Address
            </label>
            <input
              {...register("address", {
                required: "Address is required",
                minLength: {
                  value: 5,
                  message: "Address must be at least 5 characters",
                },
              })}
              className={`block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${
                errors.address ? "border-red-500" : "border-hr-thin"
              }`}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Country
            </label>
            <input
              {...register("country", { required: "Country is required" })}
              className={`block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${
                errors.country ? "border-red-500" : "border-hr-thin"
              }`}
            />
            {errors.country && (
              <span className="text-red-500 text-sm">
                {errors.country.message}
              </span>
            )}
          </div>

          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Province/Region
            </label>
            <select
              {...register("region", { required: "Region is required" })}
              className={`block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${
                errors.region ? "border-red-500" : "border-hr-thin"
              }`}
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Sylhet</option>
            </select>
            {errors.region && (
              <span className="text-red-500 text-sm">
                {errors.region.message}
              </span>
            )}
          </div>

          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Zone
            </label>
            <input
              {...register("zone", { required: "Zone is required" })}
              className={`block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${
                errors.zone ? "border-red-500" : "border-hr-thin"
              }`}
            />
            {errors.zone && (
              <span className="text-red-500 text-sm">
                {errors.zone.message}
              </span>
            )}
          </div>

          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Postal Code
            </label>
            <input
              {...register("postalCode", {
                required: "Postal code is required",
              })}
              className={`block w-full text-xl text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${
                errors.postalCode ? "border-red-500" : "border-hr-thin"
              }`}
            />
            {errors.postalCode && (
              <span className="text-red-500 text-sm">
                {errors.postalCode.message}
              </span>
            )}
          </div>

          <div className="flex items-center my-4">
            <input
              type="checkbox"
              {...register("saveAddress")}
              className="w-5 h-5"
            />
            <label className="block text-xl text-dark font-normal font-encode ml-2">
              Save this address to my profile
            </label>
          </div>
        </div>

        {/* Contact Information */}
        <div className="my-8">
          <CommonTitle title="Contact" />
          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`block w-full text-xl text-dark font-normal font-encode px-4 py-2 border rounded-md outline-secondary ${
                errors.email ? "border-red-500" : "border-hr-thin"
              }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="my-4">
            <label className="block text-xl text-dark font-normal font-encode mb-2">
              Phone Number
            </label>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10,}$/,
                  message: "Phone number must be at least 10 digits",
                },
              })}
              className={`block w-full text-xl text-dark font-normal font-encode px-4 py-2 border rounded-md outline-secondary ${
                errors.phone ? "border-red-500" : "border-hr-thin"
              }`}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isUpdating}
          className={`block w-full px-6 py-4 lg:px-8 lg:py-6 rounded-md text-lg font-normal font-encode text-white transition ${
            isUpdating
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-secondary hover:bg-secondary-dark"
          }`}
        >
          {isUpdating ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditAccount;
