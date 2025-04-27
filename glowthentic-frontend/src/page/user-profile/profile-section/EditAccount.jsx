import { useEffect, useState } from "react";
import avatarPlaceholder from "../../../assets/img/user-profile/user.jpg";
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

  const { data, isLoading, isError } = useGetUserInfoQuery(userID, {
    skip: !userID,
  });
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

  // Update form values when API data is loaded, adding leading zero to phone
  useEffect(() => {
    if (data?.user) {
      const rawPhone = data?.userDetails?.phone_number || "";
      const formattedPhone = rawPhone
        ? String(rawPhone).startsWith("0")
          ? rawPhone
          : `0${rawPhone}`
        : "";

      const userData = {
        full_name: data?.user?.name || "",
        email: data?.user?.email || "",
        address: data?.userDetails?.address || "",
        country: data?.userDetails?.country || "",
        city: data?.userDetails?.city || "",
        police_station: data?.userDetails?.police_station || "",
        postal_code: data?.userDetails?.postal_code || "",
        phone_number: formattedPhone,
      };
      reset(userData);
      if (data?.userDetails?.image) {
        setImagePreview(data?.userDetails?.image); // Use userDetails.image
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

  const onSubmit = async (formData) => {
    if (!userID) {
      toast.error("User ID is not available. Please log in again.");
      return;
    }

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("id", userID);
      formDataToSend.append("full_name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("address", formData.address);
      formDataToSend.append("country", formData.country);
      formDataToSend.append("city", formData.region);
      formDataToSend.append("police_station", formData.zone);
      formDataToSend.append("postal_code", formData.postalCode);
      formDataToSend.append("phone_number", formData.phone);

      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }
      const response = await updateUser({
        id: userID,
        ...Object.fromEntries(formDataToSend),
      }).unwrap();

      toast.success("User information updated successfully!");
      if (response.user?.image) {
        setImagePreview(response.user.image);
      }
    } catch (err) {
      console.error("Update error:", err);
      const errorMessage = err?.data?.message || "Failed to update user";
      const fieldErrors = err?.data?.errors || {};
      toast.error(errorMessage);
      Object.entries(fieldErrors).forEach(([field, messages]) => {
        toast.error(`${field}: ${messages.join(", ")}`);
      });
    }
  };

  useEffect(() => {
    if (isUpdated) {
      toast.success("Profile updated successfully!");
    }
  }, [isUpdated]);

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
        {/* User image Upload */}
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 mx-auto my-4 rounded-full group">
          <img
            className="w-full h-full rounded-full object-cover"
            src={imagePreview}
            alt="User Avatar"
          />
          {/* <label className="absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
            <FaCamera className="text-white text-2xl cursor-pointer" />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </label> */}
        </div>

        {/* Form Inputs */}
        <div>
          <div className="my-4">
            <label className="block lg:text-xl text-xs text-dark font-normal font-encode mb-2">
              Full Name
            </label>
            <input
              {...register("full_name", {
                required: "Full name is required",
                minLength: {
                  value: 2,
                  message: "Full name must be at least 2 characters",
                },
              })}
              className={`block w-full lg:text-xl text-sm text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${errors.full_name ? "border-red-500" : "border-hr-thin"
                }`}
            />
            {errors.full_name && (
              <span className="text-red-500 text-sm">{errors.full_name.message}</span>
            )}
          </div>

          <div className="my-4">
            <label className="block lg:text-xl text-xs text-dark font-normal font-encode mb-2">
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
              className={`block w-full lg:text-xl text-sm text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${errors.address ? "border-red-500" : "border-hr-thin"
                }`}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">{errors.address.message}</span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="my-4">
            <label className="block lg:text-xl text-xs text-dark font-normal font-encode mb-2">
              Country
            </label>
            <input
              {...register("country", { required: "Country is required" })}
              className={`block w-full lg:text-xl text-sm text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${errors.country ? "border-red-500" : "border-hr-thin"
                }`}
            />
            {errors.country && (
              <span className="text-red-500 text-sm">{errors.country.message}</span>
            )}
          </div>

          <div className="my-4">
            <label className="block lg:text-xl text-xs text-dark font-normal font-encode mb-2">
              City
            </label>
            <select
              {...register("city", { required: "City is required" })}
              className={`block w-full lg:text-xl text-sm text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${errors.city ? "border-red-500" : "border-hr-thin"
                }`}
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Sylhet</option>
            </select>
            {errors.city && (
              <span className="text-red-500 text-sm">{errors.city.message}</span>
            )}
          </div>

          <div className="my-4">
            <label className="block lg:text-xl text-xs text-dark font-normal font-encode mb-2">
              Zone
            </label>
            <input
              {...register("police_station", { required: "Zone is required" })}
              className={`block w-full lg:text-xl text-sm text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${errors.police_station ? "border-red-500" : "border-hr-thin"
                }`}
            />
            {errors.police_station && (
              <span className="text-red-500 text-sm">{errors.police_station.message}</span>
            )}
          </div>

          <div className="my-4">
            <label className="block lg:text-xl text-xs text-dark font-normal font-encode mb-2">
              Postal Code
            </label>
            <input
              {...register("postal_code", {
                required: "Postal code is required",
              })}
              className={`block w-full lg:text-xl text-sm text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${errors.postal_code ? "border-red-500" : "border-hr-thin"
                }`}
            />
            {errors.postal_code && (
              <span className="text-red-500 text-sm">{errors.postal_code.message}</span>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="my-8">
          <div className="flex items-center">
            <h2 className=" text-2xl md:text-4xl text-secondary font-bold font-encode">
              Contact
            </h2>
          </div>
          <div className="my-4">
            <label className="block lg:text-xl text-xs text-dark font-normal font-encode mb-2">
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
              className={`block w-full lg:text-xl text-sm text-dark font-normal font-encode px-4 py-2 border rounded-md outline-secondary ${errors.email ? "border-red-500" : "border-hr-thin"
                }`}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>

          <div className="my-4">
            <label className="block lg:text-xl text-xs text-dark font-normal font-encode mb-2">
              Phone Number
            </label>
            <input
              {...register("phone_number", {
                required: "Phone number is required",
                pattern: {
                  value: /^0[0-9]{9,}$/,
                  message: "Phone number must start with 0 and be at least 10 digits",
                },
              })}
              className={`block w-full lg:text-xl text-sm text-dark font-normal font-encode px-4 py-2 border rounded-md outline-secondary ${errors.phone_number ? "border-red-500" : "border-hr-thin"
                }`}
              onChange={(e) => {
                let value = e.target.value;
                if (value && !value.startsWith("0")) {
                  value = `0${value}`;
                  setValue("phone_number", value);
                }
              }}
            />
            {errors.phone_number && (
              <span className="text-red-500 text-sm">{errors.phone_number.message}</span>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isUpdating}
          className={`block w-full px-6 py-4 lg:px-8 lg:py-6 rounded-md text-lg font-normal font-encode text-white transition ${isUpdating ? "bg-gray-400 cursor-not-allowed" : "bg-secondary hover:bg-secondary-dark"
            }`}
        >
          {isUpdating ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
};

export default EditAccount;