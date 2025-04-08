import { useEffect, useState } from "react";
import districtsData from "./DistrictUpozila.json";

const InputInfo = ({ register, errors, data, setValue, setSelectedDistrict, watch }) => {
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [upazilas, setUpazilas] = useState([]);

  useEffect(() => {
    if (data) {
      setValue("name", data?.userDetails?.full_name || "");
      setValue("phone", data?.userDetails?.phone_number || "");
      setValue("email", data?.user?.email || "");
      setValue("address", data?.userDetails?.address || "");
    }
  }, [data, setValue]);

  useEffect(() => {
    if (selectedDistrictId) {
      const district = districtsData.districts.find((d) => d.id === selectedDistrictId);
      setUpazilas(district ? district.upazilas : []);
      const districtName = district ? district.name : "";
      setSelectedDistrict(districtName);
    } else {
      setUpazilas([]);
      setSelectedDistrict("");
    }
  }, [selectedDistrictId, setSelectedDistrict]);

  return (
    <form className="text-left space-y-4">
      {/* Full Name */}
      <div>
        <label htmlFor="name" className="text-sm font-medium text-gray-700 py-2 block">
          Name
        </label>
        <input
          {...register("name", { required: "Full Name is required" })}
          type="text"
          placeholder="Full Name"
          className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
          onChange={(e) => setValue("name", e.target.value)} // Ensure input updates form state
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      {/* Phone & Email */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-gray-700 py-2 block">
            Phone Number
          </label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) => setValue("phone", e.target.value)}
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-gray-700 py-2 block">
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={(e) => setValue("email", e.target.value)}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
        </div>
      </div>

      {/* District & Upazila */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="district" className="text-sm font-medium text-gray-700 py-2 block">
            District
          </label>
          <select
            {...register("district", { required: "District is required" })}
            value={selectedDistrictId}
            onChange={(e) => {
              const value = e.target.value;
              setSelectedDistrictId(value);
              setValue("district", value);
              setValue("upazila", ""); // Reset upazila when district changes
            }}
            className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
          >
            <option value="">Select District</option>
            {districtsData.districts.map((district) => (
              <option key={district.id} value={district.id}>
                {district.name}
              </option>
            ))}
          </select>
          {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
        </div>
        <div>
          <label htmlFor="upazila" className="text-sm font-medium text-gray-700 py-2 block">
            Upazila
          </label>
          <select
            {...register("upazila", { required: "Upazila is required" })}
            onChange={(e) => setValue("upazila", e.target.value)}
            className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
            disabled={!selectedDistrictId}
          >
            <option value="">Select Upazila</option>
            {upazilas.map((upazila) => (
              <option key={upazila.id} value={upazila.id}>
                {upazila.name}
              </option>
            ))}
          </select>
          {errors.upazila && <p className="text-red-500 text-sm mt-1">{errors.upazila.message}</p>}
        </div>
      </div>

      {/* Address */}
      <div>
        <label htmlFor="address" className="text-sm font-medium text-gray-700 py-2 block">
          Address
        </label>
        <textarea
          {...register("address", { required: "Address is required" })}
          placeholder="Address"
          className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px] resize-y"
          onChange={(e) => setValue("address", e.target.value)}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
      </div>
    </form>
  );
};

export default InputInfo;