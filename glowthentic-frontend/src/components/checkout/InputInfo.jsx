import { useEffect, useState } from "react";
import districtsData from "./DistrictUpozila.json";

const InputInfo = ({
  register,
  errors,
  data,
  setValue,
  setSelectedDistrict,
  watch,
  districtId,
  setDistrictId,
  upazilaId,
  setUpazilaId,
  setSelectedUpazila,
}) => {
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [upazilas, setUpazilas] = useState([]);

  useEffect(() => {
    if (districtId) {
      const district = districtsData.districts.find((d) => d.id === districtId);
      if (district) {
        setUpazilas(district.upazilas);
        setSelectedDistrict(district.name);
        setValue("district", districtId);
      }
    }
  }, [districtId, setValue, setSelectedDistrict]);

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

  useEffect(() => {
    if (upazilaId) {
      setValue("upazila", upazilaId);
      if (upazilas.length > 0) {
        const selectedUpazila = upazilas.find((up) => up.id === upazilaId);
        if (selectedUpazila && setSelectedUpazila) {
          setSelectedUpazila(selectedUpazila.name);
        }
      }
    }
  }, [upazilaId, setValue, upazilas, setSelectedUpazila]);

  const handleDistrictChange = (e) => {
    const value = e.target.value;
    setDistrictId(value);
    setValue("district", value);
    setUpazilaId("");
    setValue("upazila", "");
    if (setSelectedUpazila) {
      setSelectedUpazila("");
    }
  };


  // Phone number validation function
const validatePhoneNumber = (value) => {
  // Filter to keep only digits and the + sign
  const cleanValue = value.replace(/[^0-9+]/g, "");
  const length = cleanValue.length;

  // 1. Check if the length is at least 11 and at most 14 digits
  if (length < 11 || length > 14) {
    return "Phone number must be between 11 and 14 digits";
  }

  // 2. If the length is 11 digits, check the first 3 digits
  if (length === 11) {
    const validPrefixes = ["013", "014", "015", "016", "017", "018", "019"];
    const firstThree = cleanValue.slice(0, 3);
    if (!validPrefixes.includes(firstThree)) {
      return "Not a valid number";
    }
  }

  // 3. If the length is more than 11 but less than 13 digits, return error
  if (length > 11 && length < 13) {
    return "Not a valid number";
  }

  // 4. If the length is 13 or 14 digits, check if the first 2 digits are 88
  if (length === 13 || length === 14) {
    const firstTwo = cleanValue.slice(0, 2);
    if (firstTwo !== "88") {
      return "Not a valid number";
    }
  }

  // 5. If the length is 14 digits, check if the first 3 digits are +88
  if (length === 14) {
    const firstThree = cleanValue.slice(0, 3);
    if (firstThree !== "+88") {
      return "Not a valid number";
    }
  }

  return true; // Valid if all conditions are met
};

// Phone number input filtering (only digits and + sign)
const handlePhoneInput = (e) => {
  const value = e.target.value.replace(/[^0-9+]/g, "");
  setValue("phone", value, { shouldValidate: true });
};

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
          onChange={(e) => setValue("name", e.target.value)}
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
            {...register("phone", {
              required: "Phone number is required",
              validate: validatePhoneNumber, // কাস্টম ভ্যালিডেশন
            })}
            type="tel"
            placeholder="Phone Number"
            className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            onChange={handlePhoneInput} // ইনপুট ফিল্টারিং
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
            value={districtId}
            onChange={handleDistrictChange}
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
            value={upazilaId}
            onChange={(e) => {
              const value = e.target.value;
              setUpazilaId(value);
              setValue("upazila", value);
              if (value && upazilas.length > 0 && setSelectedUpazila) {
                const selectedUpazila = upazilas.find((up) => up.id === value);
                if (selectedUpazila) {
                  setSelectedUpazila(selectedUpazila.name);
                }
              }
            }}
            className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
            disabled={!districtId}
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


// import { useEffect, useState } from "react";
// import districtsData from "./DistrictUpozila.json";

// const InputInfo = ({ 
//   register, 
//   errors, 
//   data, 
//   setValue, 
//   setSelectedDistrict, 
//   watch,
//   districtId,
//   setDistrictId,
//   upazilaId,
//   setUpazilaId,
//   setSelectedUpazila // New prop for passing upazila name to parent
// })  => {
//   const [selectedDistrictId, setSelectedDistrictId] = useState("");
//   const [upazilas, setUpazilas] = useState([]);
  
//   useEffect(() => {
//     if (districtId) {
//       const district = districtsData.districts.find((d) => d.id === districtId);
//       if (district) {
//         setUpazilas(district.upazilas);
//         setSelectedDistrict(district.name);
        
//         // Set form values directly from parent state
//         setValue("district", districtId);
//       }
//     }
//   }, [districtId, setValue, setSelectedDistrict]);
  
//   useEffect(() => {
//     if (data) {
//       setValue("name", data?.userDetails?.full_name || "");
//       setValue("phone", data?.userDetails?.phone_number || "");
//       setValue("email", data?.user?.email || "");
//       setValue("address", data?.userDetails?.address || "");
//     }
//   }, [data, setValue]);

//   useEffect(() => {
//     if (selectedDistrictId) {
//       const district = districtsData.districts.find((d) => d.id === selectedDistrictId);
//       setUpazilas(district ? district.upazilas : []);
//       const districtName = district ? district.name : "";
//       setSelectedDistrict(districtName);
//     } else {
//       setUpazilas([]);
//       setSelectedDistrict("");
//     }
//   }, [selectedDistrictId, setSelectedDistrict]);
  
//   useEffect(() => {
//     if (upazilaId) {
//       setValue("upazila", upazilaId);
      
//       // Find the upazila name and pass it up to parent
//       if (upazilas.length > 0) {
//         const selectedUpazila = upazilas.find(up => up.id === upazilaId);
//         if (selectedUpazila && setSelectedUpazila) {
//           setSelectedUpazila(selectedUpazila.name);
//         }
//       }
//     }
//   }, [upazilaId, setValue, upazilas, setSelectedUpazila]);
  
//   const handleDistrictChange = (e) => {
//     const value = e.target.value;
//     setDistrictId(value);      // Update parent state
//     setValue("district", value); // Update form state
    
//     // Reset upazila when district changes
//     setUpazilaId(""); 
//     setValue("upazila", "");
    
//     // Reset selected upazila in parent
//     if (setSelectedUpazila) {
//       setSelectedUpazila("");
//     }
//   };
  
//   return (
//     <form className="text-left space-y-4">
//       {/* Full Name */}
//       <div>
//         <label htmlFor="name" className="text-sm font-medium text-gray-700 py-2 block">
//           Name
//         </label>
//         <input
//           {...register("name", { required: "Full Name is required" })}
//           type="text"
//           placeholder="Full Name"
//           className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//           onChange={(e) => setValue("name", e.target.value)} // Ensure input updates form state
//         />
//         {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//       </div>

//       {/* Phone & Email */}
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         <div>
//           <label htmlFor="phone" className="text-sm font-medium text-gray-700 py-2 block">
//             Phone Number
//           </label>
//           <input
//             {...register("phone", { required: "Phone number is required" })}
//             type="tel"
//             placeholder="Phone Number"
//             className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//             onChange={(e) => setValue("phone", e.target.value)}
//           />
//           {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="email" className="text-sm font-medium text-gray-700 py-2 block">
//             Email
//           </label>
//           <input
//             {...register("email")}
//             type="email"
//             placeholder="Email"
//             className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//             onChange={(e) => setValue("email", e.target.value)}
//           />
//           {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
//         </div>
//       </div>

//       {/* District & Upazila */}
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         <div>
//           <label htmlFor="district" className="text-sm font-medium text-gray-700 py-2 block">
//             District
//           </label>
//           <select
//             {...register("district", { required: "District is required" })}
//             value={districtId}
//             onChange={handleDistrictChange}
//             className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
//           >
//             <option value="">Select District</option>
//             {districtsData.districts.map((district) => (
//               <option key={district.id} value={district.id}>
//                 {district.name}
//               </option>
//             ))}
//           </select>
//           {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
//         </div>
//         <div>
//           <label htmlFor="upazila" className="text-sm font-medium text-gray-700 py-2 block">
//             Upazila
//           </label>
//           <select
//             {...register("upazila", { required: "Upazila is required" })}
//             value={upazilaId}
//             onChange={(e) => {
//               const value = e.target.value;
//               setUpazilaId(value);    // Update parent state
//               setValue("upazila", value); // Update form state
              
//               // Find and set the upazila name for the parent
//               if (value && upazilas.length > 0 && setSelectedUpazila) {
//                 const selectedUpazila = upazilas.find(up => up.id === value);
//                 if (selectedUpazila) {
//                   setSelectedUpazila(selectedUpazila.name);
//                 }
//               }
//             }}
//             className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
//             disabled={!districtId}
//           >
//             <option value="">Select Upazila</option>
//             {upazilas.map((upazila) => (
//               <option key={upazila.id} value={upazila.id}>
//                 {upazila.name}
//               </option>
//             ))}
//           </select>
//           {errors.upazila && <p className="text-red-500 text-sm mt-1">{errors.upazila.message}</p>}
//         </div>
//       </div>

//       {/* Address */}
//       <div>
//         <label htmlFor="address" className="text-sm font-medium text-gray-700 py-2 block">
//           Address
//         </label>
//         <textarea
//           {...register("address", { required: "Address is required" })}
//           placeholder="Address"
//           className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px] resize-y"
//           onChange={(e) => setValue("address", e.target.value)}
//         />
//         {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
//       </div>
//     </form>
//   );
// };

// export default InputInfo;