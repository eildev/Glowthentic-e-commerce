import { Icon } from "@iconify/react/dist/iconify.js";

const InstantMessage = () => {
    return (
        <div className="bg-white border border-gray-light lg:shadow-lg rounded-none w-full lg:w-[392px] lg:h-[230px] p-4 lg:p-[16px]">
            {/* Accordion for small and extra small devices */}
            <div className="block lg:hidden">
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" defaultChecked />

                    {/* Collapse title */}
                    <div className="collapse-title flex items-center text-dark uppercase font-bold text-[20px] lg:text-[24px] font-encode">
                        <Icon icon="mdi-light:message" />
                        <span className="ml-2">Instant Message</span>
                    </div>

                    {/* Collapse content */}
                    <div className="collapse-content">
                        <h5 className="text-[14px] lg:text-[16px] text-dark font-bold font-encode">
                            Would you like to contact us on Whatsapp?
                        </h5>
                        <p className="text-[12px] lg:text-[14px] text-gray font-normal font-encode my-2">
                            Our Client Advisors will be delighted to assist you
                        </p>
                        <button className="w-full px-4 py-2 text-[14px] font-normal font-encode border-[2px] text-dark border-dark">
                            Ask Your Question
                        </button>
                    </div>
                </div>
            </div>

            {/* for medium and larger devices */}
            <div className="hidden lg:flex flex-col justify-between h-full">
                <div>
                    <div className="flex items-center text-secondary uppercase font-bold text-[24px] font-encode mb-2">
                        <Icon icon="mdi-light:message" />
                        <span className="ml-2">Instant Message</span>
                    </div>
                    <h5 className="text-[16px] text-dark font-bold font-encode">
                        Would you like to contact us on Whatsapp?
                    </h5>
                    <p className="text-[12px] text-gray font-normal font-encode my-2">
                        Our Client Advisors will be delighted to assist you
                    </p>
                </div>
                <button className="px-4 py-2 text-[14px] font-normal font-encode border-[2px] text-secondary border-secondary">
                    Ask Your Question
                </button>
            </div>
        </div>
    );
};

export default InstantMessage;