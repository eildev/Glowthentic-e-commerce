import { useEffect, useRef, useState } from "react";
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
import districtsData from "../../../components/checkout/DistrictUpozila.json";

const EditAccount = () => {
  const [districtId, setDistrictId] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);

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

  const filteredDistricts = districtsData.districts;

  // console.log(filteredDistricts);

  const handleDistrictChange = (districtId, districtName) => {
    setDistrictId(districtId);
    setValue("district", districtId);
    setSearchTerm("");
    setIsDropdownOpen(false);
  };

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
      // console.log("formData", formDataToSend.name);
      if (imageFile) {
        formDataToSend.append("image", imageFile);
      }

      // console.log(formDataToSend);
      const response = await updateUser({
        id: userID,
        ...Object.fromEntries(formDataToSend),
      }).unwrap();

      // console.log("response", response);

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
              <span className="text-red-500 text-sm">
                {errors.full_name.message}
              </span>
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
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
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
              <span className="text-red-500 text-sm">
                {errors.country.message}
              </span>
            )}
          </div>

          {/* <div className="my-4">
            <label className="block lg:text-xl text-xs text-dark font-normal font-encode mb-2">
              City
            </label>
            <select
              {...register("city", { required: "City is required" })}
              className={`block w-full lg:text-xl text-sm text-dark font-normal font-encode px-4 py-2 capitalize border rounded-md outline-secondary ${
                errors.city ? "border-red-500" : "border-hr-thin"
              }`}
            >
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Sylhet">Sylhet</option>
            </select>
            {errors.city && (
              <span className="text-red-500 text-sm">
                {errors.city.message}
              </span>
            )}
          </div> */}

          {/* City */}
          <div className="my-4">
            <div ref={dropdownRef}>
              <label
                htmlFor="district"
                className="text-sm font-medium text-gray-700 py-2 block"
              >
                City
              </label>
              <div className="relative">
                <input
                  {...register("district", {
                    required: "District is required",
                  })}
                  type="hidden"
                  value={districtId}
                />
                <button
                  type="button"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="w-full p-2 border border-gray-thin rounded text-left bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 flex justify-between items-center"
                >
                  <span>
                    {districtId
                      ? districtsData.districts.find((d) => d.id === districtId)
                        ?.name || "Select City"
                      : "Select City"}
                  </span>
                  <svg
                    className={`w-5 h-5 transform ${isDropdownOpen ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-thin rounded shadow-lg max-h-60 overflow-y-auto">
                    <input
                      type="text"
                      placeholder="Search District..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full p-2 border-b border-gray-thin focus:outline-none"
                      autoFocus
                    />
                    {filteredDistricts.length > 0 ? (
                      filteredDistricts.map((district) => (
                        <div
                          key={district.id}
                          onClick={() =>
                            handleDistrictChange(district?.id, district?.name)
                          }
                          className="p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          {district?.name ?? ""}
                        </div>
                      ))
                    ) : (
                      <div className="p-2 text-gray-500">
                        No districts found
                      </div>
                    )}
                  </div>
                )}
              </div>
              {errors.district && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.district.message}
                </p>
              )}
            </div>
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
              <span className="text-red-500 text-sm">
                {errors.police_station.message}
              </span>
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
              <span className="text-red-500 text-sm">
                {errors.postal_code.message}
              </span>
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
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="my-4">
            <label className="block lg:text-xl text-xs text-dark font-normal font-encode mb-2">
              Phone Number
            </label>
            <div className="flex items-center w-full border rounded-md border-hr-thin focus-within:border-secondary focus-within:ring-1 focus-within:ring-secondary">
              <span className="px-4 py-2 text-lg font-encode text-dark bg-gray-light rounded-l-md">
                +880
              </span>
              <input
                {...register("phone_number", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^0[0-9]{9,}$/,
                    message:
                      "Phone number must start with 0 and be at least 10 digits",
                  },
                })}
                className={`block w-full lg:text-xl text-sm text-dark font-normal font-encode px-4 py-2 rounded-r-md outline-none ${errors.phone_number ? "border-red-500" : "border-none"
                  }`}
                placeholder="17xxxxxxxx"
                onChange={(e) => {
                  let value = e.target.value;
                  if (value && !value.startsWith("1")) {
                    value = `0${value}`;
                    setValue("phone_number", value, { shouldValidate: true });
                  }
                }}
              />
            </div>
            {errors.phone_number && (
              <span className="text-red-500 text-sm">
                {errors.phone_number.message}
              </span>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isUpdating}
          className={`block w-full px-6 py-4 lg:px-8 lg:py-6 rounded-md text-lg font-normal font-encode text-white transition ${isUpdating
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-secondary hover:bg-secondary-dark"
            }`}
        >
          {isUpdating ? "Updating..." : "Update"}
        </button>
      </form>
    </div>
  );
};

export default EditAccount;
