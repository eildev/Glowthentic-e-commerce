import { useEffect, useState } from "react";
import Checkbox from "../../components/typography/Checkbox"; // Unused in this code, consider removing if not needed
import districtsData from "./DistrictUpozila.json";

const InputInfo = ({ register, errors, data, setValue, setSelectedDistrict }) => {
  const [isReady, setIsReady] = useState(false);
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [upazilas, setUpazilas] = useState([]);

  useEffect(() => {
    if (data) {
      setValue("name", data?.userDetails?.full_name || "");
      setValue("phone", data?.userDetails?.phone_number || "");
      setValue("email", data?.user?.email || "");
      setValue("address", data?.userDetails?.address || "");
      setIsReady(true);
    }
  }, [data, setValue]);

  // Update upazilas and parent district when district changes
  useEffect(() => {
    if (selectedDistrictId) {
      const district = districtsData.districts.find((d) => d.id === selectedDistrictId);
      setUpazilas(district ? district.upazilas : []);
      const districtName = district ? district.name : "";
      setSelectedDistrict(districtName); // Pass district name to parent
    } else {
      setUpazilas([]);
      setSelectedDistrict("");
    }
  }, [selectedDistrictId, setSelectedDistrict]);

  // Handle district change to sync with react-hook-form
  const handleDistrictChange = (e) => {
    const value = e.target.value;
    setSelectedDistrictId(value); // Update local state
    setValue("district", value); // Sync with react-hook-form
  };

  return (
    <form className="text-left">
      {/* Full Name */}
      <label htmlFor="name" className="text-sm font-medium text-gray-700 text-primary py-2">
        Name
      </label>
      <input
        {...register("name", { required: "Full Name is required" })}
        type="text"
        placeholder="Full Name"
        className="focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-thin rounded p-2 w-full"
      />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      {/* Phone & Email */}
      <div className="grid grid-cols-1 mt-2 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-primary py-2">
            Phone Number
          </label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            type="number"
            placeholder="Phone Number"
            className="focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-thin rounded p-2 w-full"
          />
          {errors?.phone && <p className="text-red-500 text-sm">{errors?.phone?.message ?? ""}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-primary py-2">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-thin rounded p-2 w-full"
          />
          {errors?.email && <p className="text-red-500 text-sm">{errors?.email?.message ?? ""}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 mt-2 sm:grid-cols-2 gap-4">
        <div>
          {/* District */}
          <label htmlFor="district" className="block text-sm font-medium text-gray-700 text-primary py-2">
            District
          </label>
          <select
            {...register("district", { required: "District is required" })}
            value={selectedDistrictId} // Control the value
            onChange={handleDistrictChange} // Custom handler to sync state and form
            className="focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-thin rounded p-2 w-full"
          >
            <option value="">Select District</option>
            {districtsData.districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
          {errors.district && <p className="text-red-500 text-sm">{errors.district.message}</p>}
        </div>
        <div>
          {/* Upazila */}
          <label htmlFor="upazila" className="block text-sm font-medium text-gray-700 text-primary py-2">
            Upazila
          </label>
          <select
            {...register("upazila", { required: "Upazila is required" })}
            className="focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-thin rounded p-2 w-full"
            disabled={!selectedDistrictId}
            
          >
            <option value="">Select Upazila</option>
            {upazilas.map((upazila) => (
              <option key={upazila.id} value={upazila.id}>
                {upazila.name}
              </option>
            ))}
          </select>
          {errors.upazila && <p className="text-red-500 text-sm">{errors.upazila.message}</p>}
        </div>
      </div>

      <div className="mt-2">
        {/* Address */}
        <label htmlFor="address" className="text-sm font-medium text-gray-700 text-primary py-2">
          Address
        </label>
        <textarea
          {...register("address", { required: "Address is required" })}
          placeholder="Address"
          className="focus:outline-none focus:ring-2 mt-2 focus:ring-orange-500 border border-gray-thin rounded p-2 w-full h-24"
        />
        {errors?.address && <p className="text-red-500 text-sm">{errors?.address?.message ?? ""}</p>}
      </div>
    </form>
  );
};

export default InputInfo;