import { useEffect, useState } from "react";
import Checkbox from "../../components/typography/Checkbox";

const InputInfo = ({ register, errors }) => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (register) {
      setIsReady(true);
    }
  }, [register]);

  if (!isReady) {
    return <p>Loading...</p>;
  }

  return (
    <form className="text-left">
      {/* Full Name */}
      <label
        htmlFor="name"
        className="text-sm font-medium text-gray-700 text-primary py-2"
      >
        Name
      </label>
      <input
        {...register("name", { required: "Full Name is required" })}
        type="text"
        placeholder="Full Name"
        className="focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-thin rounded p-2 w-full"
      />
      {errors.name && (
        <p className="text-red-500 text-sm">{errors.name.message}</p>
      )}

      {/* Phone & Email */}
      <div className="grid grid-cols-1 mt-2 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 text-primary py-2"
          >
            Phone Number
          </label>
          <input
            {...register("phone", { required: "Phone number is required" })}
            type="number"
            placeholder="Phone Number"
            className="focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-thin rounded p-2 w-full"
          />
          {errors?.phone && (
            <p className="text-red-500 text-sm">
              {errors?.phone?.message ?? ""}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 text-primary py-2"
          >
            Email
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="Email"
            className="focus:outline-none focus:ring-2 focus:ring-orange-500 border border-gray-thin rounded p-2 w-full"
          />
          {errors?.email && (
            <p className="text-red-500 text-sm">
              {errors?.email?.message ?? ""}
            </p>
          )}
        </div>
      </div>

      {/* Address */}
      <label
        htmlFor="address"
        className="text-sm font-medium text-gray-700 text-primary py-2"
      >
        Address
      </label>
      <textarea
        {...register("address", { required: "Address is required" })}
        placeholder="Address"
        className="focus:outline-none focus:ring-2 mt-2 focus:ring-orange-500 border border-gray-thin rounded p-2 w-full h-24"
      />
      {errors?.address && (
        <p className="text-red-500 text-sm">{errors?.address?.message ?? ""}</p>
      )}

      {/* Checkbox */}
      {/* <div className="flex items-center mt-2">
        <Checkbox
          register={register}
          id="same-address"
          className="mr-2 mt-2 h-5 w-5"
        />
        <label htmlFor="same-address" className="text-sm text-primary py-2">
          Ship to a different address
        </label>
      </div> */}
    </form>
  );
};

export default InputInfo;
