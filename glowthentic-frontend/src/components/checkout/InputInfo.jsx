import Checkbox from "../../components/typography/Checkbox";

const InputInfo = () => {
  return (
    <div className="text-left">
      {/* Full Name and Phone  */}
      <label htmlFor="" className="text-sm font-medium text-gray-700 text-primary py-2">Name </label>
      <input
        type="text"
        placeholder=" Full Name"
        className=" focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-none border border-gray-thin rounded p-2 w-full"
      />

      {/* Email */}
      
      <div className="grid grid-cols-1 mt-2 sm:grid-cols-2 gap-4">
  <div>
    <label htmlFor="phone"  className="block text-sm font-medium text-gray-700 text-primary py-2">
      Phone Number
    </label>
    <input
      id="phone"
      type="number"
      placeholder="Phone Number"
      className="focus:outline-none focus:ring-2 focus:ring-orange-500 border focus:border-none border-gray-thin rounded p-2 w-full"
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-primary py-2">
      Email
    </label>
    <input
      id="email"
      type="email"
      placeholder="Email"
      className="focus:outline-none focus:ring-2 focus:ring-orange-500 border focus:border-none border-gray-thin rounded p-2 w-full"
    />
  </div>
</div>

      {/* Address */}
      <label htmlFor="" className="text-sm font-medium text-gray-700 text-primary py-2">Address </label>
      <textarea
        placeholder="Address"
        className="focus:outline-none focus:ring-2 mt-2 focus:ring-orange-500 focus:border-none border border-gray-thin rounded p-2 w-full h-24"
      ></textarea>

      {/* Checkbox */}
      <div className="flex items-center mt-2">
        {/* <input type="checkbox" id="same-address" className="mr-2" /> */}
        <Checkbox id="same-address" className="mr-2 mt-2 h-5 w-5"  ></Checkbox>
        <label htmlFor="same-address"className="text-sm text-primary py-2" >
          Ship to a different address
        </label>
      </div>
    </div>
  );
};

export default InputInfo;
