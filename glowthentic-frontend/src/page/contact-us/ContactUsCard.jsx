import CallUs from "../../components/contact-us/CallUs";
import ChatOnline from "../../components/contact-us/ChatOnline";
import InstantMessage from "../../components/contact-us/InstantMessage";

const ContactUsCard = () => {
    return (
        <div className="flex mt-8 justify-between">
            <ChatOnline />
            <CallUs />
            <InstantMessage />
        </div>
    );
};

export default ContactUsCard;