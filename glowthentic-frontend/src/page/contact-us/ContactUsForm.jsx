import { Icon } from "@iconify/react/dist/iconify.js";

const ContactUsForm = () => {
    return (
        <div className="bg-white lg:border lg:border-gray-light lg:shadow-lg px-4 lg:py-5 lg:px-12">
            <div className="hidden lg:flex items-center text-secondary font-bold text-base lg:text-lg font-encode mb-4">
                <Icon icon="mdi-light:email" />
                <span className="ml-2">Write Us</span>
            </div>

            {/* Form */}
            <form>
                {/* Information */}
                <div className="mb-4">
                    <h3 className="hidden lg:block text-lg lg:text-xl text-dark font-bold font-encode mb-2">
                        Your Information
                    </h3>
                    <input
                        className="outline-none border-b border-b-gray w-full h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4 mb-4"
                        type="text"
                        placeholder="Title"
                    />
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-4">
                        <input
                            className="outline-none border-b border-b-gray w-full lg:w-[48%] h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4"
                            type="text"
                            name="firstName"
                            placeholder="First Name"
                        />
                        <input
                            className="outline-none border-b border-b-gray w-full lg:w-[48%] h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4"
                            type="text"
                            name="lastName"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-4">
                        <input
                            className="outline-none border-b border-b-gray w-full lg:w-[48%] h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                        />
                        <input
                            className="outline-none border-b border-b-gray w-full lg:w-[48%] h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4"
                            type="text"
                            name="phone"
                            placeholder="Phone Number"
                        />
                    </div>
                </div>

                {/* Request */}
                <div className="mb-4">
                    <h3 className="hidden lg:block text-[18px] lg:text-[20px] text-dark font-bold font-encode mb-2">
                        Your Request
                    </h3>
                    <input
                        className="outline-none border-b border-b-gray w-full h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4 mb-4"
                        type="text"
                        placeholder="Subject"
                    />
                    <div className="flex flex-wrap gap-2 mb-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value="Branches"
                                className="hidden peer"
                            />
                            <span className="px-[12px] py-[4px] text-xs lg:text-sm font-normal font-encode border border-gray-light peer-checked:border-secondary peer-checked:text-secondary cursor-pointer">
                                Branches
                            </span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value="Skin Type"
                                className="hidden peer"
                            />
                            <span className="px-[12px] py-[4px] text-xs lg:text-sm font-normal font-encode border border-gray-light peer-checked:border-secondary peer-checked:text-secondary cursor-pointer">
                                Skin Type
                            </span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value="Special Offer And Promotion"
                                className="hidden peer"
                            />
                            <span className="px-[12px] py-[4px] text-xs lg:text-sm font-normal font-encode border border-gray-light peer-checked:border-secondary peer-checked:text-secondary cursor-pointer">
                                Special Offer And Promotion
                            </span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value="Returns And Refunds"
                                className="hidden peer"
                            />
                            <span className="px-[12px] py-[4px] text-xs lg:text-sm font-normal font-encode border border-gray-light peer-checked:border-secondary peer-checked:text-secondary cursor-pointer">
                                Returns And Refunds
                            </span>
                        </label>

                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="category"
                                value="Product And Stock"
                                className="hidden peer"
                            />
                            <span className="px-[12px] py-[4px] text-xs  lg:text-sm font-normal font-encode border border-gray-light peer-checked:border-secondary peer-checked:text-secondary cursor-pointer">
                                Product And Stock
                            </span>
                        </label>
                    </div>
                    <textarea
                        className="outline-none border-b border-b-gray w-full h-[80px] lg:h-[120px] text-md lg:text-xl text-gray font-encode px-4"
                        placeholder="Your Text"
                    />
                    <p className="text-[12px] text-right text-gray font-normal mt-2">
                        0/360
                    </p>
                    <div className="flex items-center mt-4">
                        <input
                            type="checkbox"
                            className="w-[16px] h-[16px] accent-secondary bg-white rounded-[2px]"
                        />
                        <p className="text-[14px] ml-2 font-encode">
                            I have read and understood the contact us privacy and policy.
                        </p>
                    </div>
                </div>

                <button
                    type="submit"
                    className="block w-full lg:w-[128px] ml-auto px-[12px] py-[6px] lg:px-[16px] lg:py-[8px] text-sm lg:text-md font-normal font-encode border text-secondary border-secondary"
                    disabled
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default ContactUsForm;