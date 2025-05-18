import { Icon } from "@iconify/react/dist/iconify.js";
import { useSendContactMessageMutation } from "../../redux/features/api/contactUsApi/contactUsApi";
import { useState } from "react";
import toast from "react-hot-toast";

const ContactUsForm = () => {
  const [sendContactMessage, { isLoading, error, isSuccess }] =
    useSendContactMessageMutation();
  const [formData, setFormData] = useState({
    name: "",

    email: "",
    subject: "",
    message: "",
    phone: "",
    category: "",
  });
  const [agreePolicy, setAgreePolicy] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.firstName ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    if (!agreePolicy) {
      alert("You must agree to the privacy policy.");
      return;
    }
    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      const result = await sendContactMessage({
        ...formData,
        name: fullName,
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        phone: "",
      });
      setAgreePolicy(false);
      if (result?.data?.status === 200) {
        toast.success(result.message || "Your message sent Successfully");
      } else {
        toast.error("Something Went Wrong");
      }
    } catch (err) {
      console.error(
        "Submission Error:",
        err?.data?.message || "Something went wrong"
      );
    }
  };

  return (
    <div className="bg-white lg:border lg:border-gray-light lg:shadow-lg px-5 lg:py-10 py-5 lg:px-12">
      <div className="hidden lg:flex items-center text-secondary font-bold text-base lg:text-lg font-encode mb-4">
        <Icon icon="mdi-light:email" />
        <span className="ml-2">Write Us</span>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h3 className="hidden lg:block text-lg lg:text-xl text-dark font-bold font-encode mb-2">
            Your Information
          </h3>
          <input
            className="outline-none border-b border-b-gray w-full h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode font-light px-4 mb-4"
            type="text"
            placeholder="Title"
            name="title"
          />
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-4">
            <input
              className="outline-none border-b border-b-gray w-full lg:w-[48%] h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
            <input
              className="outline-none border-b border-b-gray w-full lg:w-[48%] h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-4 mb-4">
            <input
              className="outline-none border-b border-b-gray w-full lg:w-[48%] h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
            />
            <input
              className="outline-none border-b border-b-gray w-full lg:w-[48%] h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
            />
          </div>
        </div>

        <div className="mb-4">
          <h3 className="hidden lg:block text-lg lg:text-xl text-dark font-bold font-encode mb-2">
            Your Request
          </h3>
          <input
            className="outline-none border-b border-b-gray w-full h-[48px] lg:h-[56px] text-md lg:text-xl text-gray font-encode px-4 mb-4"
            type="text"
            name="subject"
            value={formData.category}
            onChange={handleChange}
            placeholder="Subject"
          />
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Branches",
              "Skin Type",
              "Special Offer And Promotion",
              "Returns And Refunds",
              "Product And Stock",
            ].map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value={category}
                  checked={formData.category === category}
                  onChange={handleChange}
                  className="hidden peer"
                />
                <span className="px-[12px] py-[4px] text-xs lg:text-sm font-normal font-encode border border-gray-light peer-checked:border-secondary peer-checked:text-secondary cursor-pointer">
                  {category}
                </span>
              </label>
            ))}
          </div>
          <textarea
            className="outline-none border-b border-b-gray w-full h-[80px] lg:h-[120px] text-md lg:text-xl text-gray font-encode px-4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Text"
          />
          <p className="text-[12px] text-right text-gray font-normal mt-2">
            {formData.message.length}/360
          </p>
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="w-[16px] h-[16px] accent-secondary bg-white rounded-[2px]"
              checked={agreePolicy}
              onChange={() => setAgreePolicy(!agreePolicy)}
            />
            <p className="text-[14px] ml-2 font-encode">
              I have read and understood the contact us privacy and policy.
            </p>
          </div>
        </div>

        <button
          type="submit"
          className="block w-full lg:w-[128px] ml-auto px-[12px] py-[6px] lg:px-[16px] lg:py-[8px] text-sm lg:text-md font-normal font-encode border text-secondary border-secondary"
          disabled={isLoading}
        >
          {isLoading ? "Sending..." : "Send"}
        </button>
        {isSuccess && (
          <p style={{ color: "green" }}>Message sent successfully!</p>
        )}
        {error && (
          <p style={{ color: "red" }}>
            Failed to send message. Please try again.
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUsForm;
