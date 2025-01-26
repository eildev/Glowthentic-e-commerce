import { Icon } from "@iconify/react/dist/iconify.js";
import ContactUsCard from "./ContactUsCard";
import ContactUsForm from "./ContactUsForm";
import ContactUsFormMobile from "./ContactUsFormMobile";
import ChatOnline from "../../components/contact-us/ChatOnline";
import CallUs from "../../components/contact-us/CallUs";
import InstantMessage from "../../components/contact-us/InstantMessage";
import Container from "../../components/Container";
import Breadcrumb from "../../components/navbar/Breadcrumb";

const ContactUs = () => {
  return (
    <>
      <Container>
        <div className="w-full my-10 px-5">
          {/* title and description */}
          <div className="mb-8">
            <Breadcrumb>
              <li>Contact Us</li>
            </Breadcrumb>
            <h2 className="text-[24px] lg:text-3xl font-bold text-dark font-encode my-4">
              Contact Us
            </h2>
            <p className="text-sm lg:text-lg font-normal text-dark font-encode">
              Beautya Client Service Center is happy to help you with any questions
              you may have regarding our products and corporate information.
            </p>
            <p className="text-sm lg:text-lg font-normal text-dark font-encode my-2">
              Contact us by phone: 1-802-526-2463 Monday to Friday, 9am to 9pm, and
              Saturday-Sunday, 9am to 6pm or <br /> fill in the form below to send
              us an email.
            </p>
            <p className="text-xs lg:text-sm font-normal text-gray font-encode">
              Please fill in this form to send us your inquiry. Well be more than
              happy to help and will reply to you as soon as possible.
            </p>
          </div>

          <div className="hidden lg:block">
            <ContactUsForm />
          </div>

          <div className="hidden lg:block">
            <ContactUsCard />
          </div>

          <div className="block lg:hidden">
            <ContactUsFormMobile />
            <ChatOnline />
            <CallUs />
            <InstantMessage />
          </div>
        </div>
      </Container>
    </>
  );
};

export default ContactUs;
