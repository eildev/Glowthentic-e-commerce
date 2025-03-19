import { Icon } from "@iconify/react/dist/iconify.js";
import ContactUsForm from "./ContactUsForm";

const ContactUsFormMobile = () => {
    return (
        <div
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className="bg-white border border-gray-light lg:shadow-lg rounded-none w-full lg:w-[392px] lg:h-[230px] p-4 lg:p-[16px]"
        >
            {/* Accordion for small and extra small devices */}
            <div className="block lg:hidden">
                <div className="collapse collapse-close">
                    {/* Collapse title */}
                    <div className="collapse-title flex items-center text-dark uppercase font-bold text-[20px] lg:text-[24px] font-encode">
                        <Icon icon="mdi-light:email" />
                        <span className="ml-2">Write Us</span>
                    </div>

                    {/* Modal dialog */}
                    <dialog id="my_modal_3" className="modal">
                        <div className="modal-box rounded-none min-w-full min-h-screen">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                    ✕
                                </button>
                            </form>
                            <h3 className="flex items-center font-bold text-lg">
                                <Icon icon="mdi-light:email" />
                                <span className="ml-2">Write Us</span>
                            </h3>
                            <p className="py-4">
                                <ContactUsForm />
                            </p>
                        </div>
                    </dialog>
                </div>
            </div>

            {/* for medium and larger devices */}
            <div className="hidden lg:block">
                <div className="flex items-center text-dark uppercase font-bold text-[24px] font-encode">
                    <Icon icon="mdi-light:email" />
                    <span className="ml-2">Write Us</span>
                </div>
            </div>
        </div>
    );
};

export default ContactUsFormMobile;