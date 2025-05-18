
const validatePhoneNumber = (value) => {
    // Clean the input by removing non-digits
    const cleanValue = value.replace(/[^0-9]/g, "");
    const length = cleanValue.length;

    // Check if the length is exactly 10 digits
    if (length !== 10) {
        return "Phone number must be exactly 10 digits";
    }

    // Validate the first two digits
    const validPrefixes = ["13", "14", "15", "16", "17", "18", "19"];
    const firstTwo = cleanValue.slice(0, 2);
    if (!validPrefixes.includes(firstTwo)) {
        return "This is not a valid number";
    }

    return true;
};

const handlePhoneInput = (e, setValue, trigger) => {
    let value = e.target.value.replace(/[^0-9]/g, "");

    // Remove leading +880 or 0 if present
    if (value.startsWith("+880")) {
        value = value.slice(4);
    } else if (value.startsWith("0")) {
        value = value.slice(1);
    }

    // Limit to 10 digits
    value = value.slice(0, 10);

    // Update the form value and trigger validation
    setValue("phone", value, { shouldValidate: true });
};

const handlePaste = (e, setValue, trigger) => {
    e.preventDefault();
    // let pastedData = e.clipboardData.getData("text").replace(/[^0-9]/g, "");
    let pastedData = e.clipboardData.getData("text");
    // console.log("number", pastedData);

    // Remove leading +880 or 0 if present
    if (pastedData.startsWith("+880")) {
        pastedData = pastedData.slice(4);
    } else if (pastedData.startsWith("0")) {
        pastedData = pastedData.slice(1);
    }

    // Limit to 10 digits
    pastedData = pastedData.slice(0, 10);

    // Update the form value and trigger validation
    setValue("phone", pastedData, { shouldValidate: true });
};

const PhoneNumberInput = ({ register, setValue, errors, trigger }) => {
    return (
        <div>
            <label htmlFor="phone" className="text-sm font-medium text-gray-700 py-2 block">
                Phone Number
            </label>
            <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-600">
                    +880
                </span>
                <input
                    {...register("phone", {
                        required: "Phone number is required",
                        validate: validatePhoneNumber,
                    })}
                    type="tel"
                    placeholder="Enter 10-digit number"
                    className="w-full pl-14 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onChange={(e) => handlePhoneInput(e, setValue, trigger)}
                    onPaste={(e) => handlePaste(e, setValue, trigger)}
                />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
        </div>
    );
};

export default PhoneNumberInput;