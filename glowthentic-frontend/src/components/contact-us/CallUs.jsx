import { Icon } from "@iconify/react/dist/iconify.js";

const CallUs = () => {
    return (
        <div className="bg-white border border-gray-light lg:shadow-lg rounded-none w-full lg:w-[392px] lg:h-[230px] p-4 lg:p-[16px]">
            {/* Accordion for small and extra small devices */}
            <div className="block lg:hidden">
                <div className="collapse collapse-plus">
                    <input type="radio" name="my-accordion-3" defaultChecked />

                    {/* Collapse title */}
                    <div className="collapse-title flex items-center text-dark uppercase font-bold text-[20px] lg:text-[24px] font-encode">
                        <Icon icon="mdi-light:phone" />
                        <span className="ml-2">Call Us</span>
                    </div>

                    {/* Collapse content */}
                    <div className="collapse-content">
                        <h5 className="text-[14px] lg:text-[16px] text-dark font-bold font-encode">
                            Our Client Advisors would be delighted to assist you. You may
                            contact us at 1-802-526-2463
                        </h5>
                        <p className="text-[12px] lg:text-[14px] text-gray font-normal font-encode my-2">
                            Service available from Monday to Friday from 10 am to 8 pm and
                            Saturday from 10 am to 6 pm
                        </p>
                    </div>
                </div>
            </div>

            {/* for medium and larger devices */}
            <div className="hidden lg:block">
                <div className="flex items-center text-secondary uppercase font-bold text-[24px] font-encode mb-2">
                    <Icon icon="mdi-light:phone" />
                    <span className="ml-2">Call Us</span>
                </div>
                <h5 className="text-[16px] text-dark font-bold font-encode">
                    Our Client Advisors would be delighted to assist you. You may contact
                    us at 1-802-526-2463
                </h5>
                <p className="text-[12px] text-gray font-normal font-encode my-2">
                    Service available from Monday to Friday from 10 am to 8 pm and
                    Saturday from 10 am to 6 pm
                </p>
            </div>
        </div>
    );
};

export default CallUs;