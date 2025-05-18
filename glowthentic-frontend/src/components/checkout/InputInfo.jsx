// import { useEffect, useState, useRef } from "react";
// import districtsData from "./DistrictUpozila.json";
// import PhoneNumberInput from "./PhoneNumberInput";

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
//   setSelectedUpazila,
//   trigger
// }) => {
//   const [selectedDistrictId, setSelectedDistrictId] = useState("");
//   const [upazilas, setUpazilas] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   // Filter districts based on search term (case-insensitive)
//   const filteredDistricts = districtsData.districts.filter((district) =>
//     district.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setIsDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     if (districtId) {
//       const district = districtsData.districts.find((d) => d.id === districtId);
//       if (district) {
//         setUpazilas(district.upazilas);
//         setSelectedDistrict(district.name);
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
//       if (upazilas.length > 0) {
//         const selectedUpazila = upazilas.find((up) => up.id === upazilaId);
//         if (selectedUpazila && setSelectedUpazila) {
//           setSelectedUpazila(selectedUpazila.name);
//         }
//       }
//     }
//   }, [upazilaId, setValue, upazilas, setSelectedUpazila]);

//   const handleDistrictChange = (districtId, districtName) => {
//     setDistrictId(districtId);
//     setValue("district", districtId);
//     setUpazilaId("");
//     setValue("upazila", "");
//     setSearchTerm("");
//     setIsDropdownOpen(false);
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
//           onChange={(e) => setValue("name", e.target.value)}
//         />
//         {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
//       </div>

//       {/* Phone & Email */}
//       <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
//         {/* <div>
//           <label htmlFor="phone" className="text-sm font-medium text-gray-700 py-2 block">
//             Phone Number
//           </label>
//           <input
//             {...register("phone", {
//               required: "Phone number is required",
//               validate: validatePhoneNumber,
//             })}
//             type="tel"
//             placeholder="Phone Number"
//             className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
//             onChange={handlePhoneInput}
//           />
//           {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
//         </div> */}
//         <PhoneNumberInput
//           register={register}
//           setValue={setValue}
//           errors={errors}
//           trigger={trigger}
//         />
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
//         <div ref={dropdownRef}>
//           <label htmlFor="district" className="text-sm font-medium text-gray-700 py-2 block">
//             District
//           </label>
//           <div className="relative">
//             <input
//               {...register("district", { required: "District is required" })}
//               type="hidden"
//               value={districtId}
//             />
//             <button
//               type="button"
//               onClick={() => setIsDropdownOpen(!isDropdownOpen)}
//               className="w-full p-2 border border-gray-thin rounded text-left bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 flex justify-between items-center"
//             >
//               <span>
//                 {districtId
//                   ? districtsData.districts.find((d) => d.id === districtId)?.name || "Select District"
//                   : "Select District"}
//               </span>
//               <svg
//                 className={`w-5 h-5 transform ${isDropdownOpen ? "rotate-180" : ""}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//               </svg>
//             </button>
//             {isDropdownOpen && (
//               <div className="absolute z-10 w-full mt-1 bg-white border border-gray-thin rounded shadow-lg max-h-60 overflow-y-auto">
//                 <input
//                   type="text"
//                   placeholder="Search District..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full p-2 border-b border-gray-thin focus:outline-none"
//                   autoFocus
//                 />
//                 {filteredDistricts.length > 0 ? (
//                   filteredDistricts.map((district) => (
//                     <div
//                       key={district.id}
//                       onClick={() => handleDistrictChange(district.id, district.name)}
//                       className="p-2 hover:bg-gray-100 cursor-pointer"
//                     >
//                       {district.name}
//                     </div>
//                   ))
//                 ) : (
//                   <div className="p-2 text-gray-500">No districts found</div>
//                 )}
//               </div>
//             )}
//           </div>
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
//               setUpazilaId(value);
//               setValue("upazila", value);
//               if (value && upazilas.length > 0 && setSelectedUpazila) {
//                 const selectedUpazila = upazilas.find((up) => up.id === value);
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
//           placeholder="4th Floor, House No: 19, Road No: 13, Banasree, Rampura, Dhaka -1219"
//           className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px] resize-y"
//           onChange={(e) => setValue("address", e.target.value)}
//         />
//         {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
//       </div>
//     </form>
//   );
// };

// export default InputInfo;



import { useEffect, useState, useRef } from "react";
import districtsData from "./DistrictUpozila.json";
import PhoneNumberInput from "./PhoneNumberInput";

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
  trigger,
}) => {
  const [selectedDistrictId, setSelectedDistrictId] = useState("");
  const [upazilas, setUpazilas] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to clean phone number (remove +880 or 0 and keep 10 digits)
  const cleanPhoneNumber = (phone) => {
    if (!phone) return "";
    let cleaned = phone.replace(/[^0-9]/g, ""); // Remove non-digits
    if (cleaned.startsWith("880")) {
      cleaned = cleaned.slice(3); // Remove +880
    } else if (cleaned.startsWith("0")) {
      cleaned = cleaned.slice(1); // Remove leading 0
    }
    return cleaned.slice(0, 10); // Ensure only 10 digits
  };

  // Filter districts based on search term (case-insensitive)
  const filteredDistricts = districtsData.districts.filter((district) =>
    district.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Load user data and clean phone number
  useEffect(() => {
    if (data) {
      setValue("name", data?.userDetails?.full_name || "");
      const cleanedPhone = cleanPhoneNumber(data?.userDetails?.phone_number);
      setValue("phone", cleanedPhone, { shouldValidate: true });
      setValue("email", data?.user?.email || "");
      setValue("address", data?.userDetails?.address || "");
    }
  }, [data, setValue]);

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

  const handleDistrictChange = (districtId, districtName) => {
    setDistrictId(districtId);
    setValue("district", districtId);
    setUpazilaId("");
    setValue("upazila", "");
    setSearchTerm("");
    setIsDropdownOpen(false);
    if (setSelectedUpazila) {
      setSelectedUpazila("");
    }
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
        <PhoneNumberInput
          register={register}
          setValue={setValue}
          errors={errors}
          trigger={trigger}
        />
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
        <div ref={dropdownRef}>
          <label htmlFor="district" className="text-sm font-medium text-gray-700 py-2 block">
            District
          </label>
          <div className="relative">
            <input
              {...register("district", { required: "District is required" })}
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
                  ? districtsData.districts.find((d) => d.id === districtId)?.name || "Select District"
                  : "Select District"}
              </span>
              <svg
                className={`w-5 h-5 transform ${isDropdownOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
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
                      onClick={() => handleDistrictChange(district.id, district.name)}
                      className="p-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {district.name}
                    </div>
                  ))
                ) : (
                  <div className="p-2 text-gray-500">No districts found</div>
                )}
              </div>
            )}
          </div>
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
          placeholder="4th Floor, House No: 19, Road No: 13, Banasree, Rampura, Dhaka -1219"
          className="w-full p-2 border border-gray-thin rounded focus:outline-none focus:ring-2 focus:ring-orange-500 min-h-[100px] resize-y"
          onChange={(e) => setValue("address", e.target.value)}
        />
        {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
      </div>
    </form>
  );
};

export default InputInfo;