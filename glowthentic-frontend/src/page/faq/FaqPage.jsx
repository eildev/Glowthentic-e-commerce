import Container from "../../components/Container";
import Breadcrumb from "../../components/navbar/Breadcrumb";

const FaqPage = () => {
  return (
    <Container>
      <div className="w-full mx-auto my-10 px-5 lg:px-0">
        {/* Title and description */}
        <div className="mb-8">
          <Breadcrumb>
            <li>FAQs</li>
          </Breadcrumb>
        </div>

        <h2 className=" text-[24px] lg:text-[32px] font-bold text-dark font-encode mb-4">
          FAQs
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          {/* FAQ menus */}
          <div className="w-full lg:w-[288px] mb-6 lg:mb-0">
            <div className="flex flex-row justify-between border-b border-b-white-gray lg:flex-col lg:bg-white lg:border-t lg:border-t-white-gray lg:shadow-md shadow-white-gray">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="Product Information"
                  className="hidden peer"
                />
                <span className="w-full px-[8px] py-[12px] text-[16px] lg:text-[20px] font-normal font-encode text-gray lg:text-dark lg:border-b peer-checked:border-b border-b-white-gray peer-checked:border-b-secondary peer-checked:text-secondary cursor-pointer">
                  Product Information
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="Gifts"
                  className="hidden peer"
                />
                <span className="w-full px-[8px] py-[12px] text-[16px] lg:text-[20px] font-normal font-encode text-gray lg:text-dark  lg:border-b peer-checked:border-b border-b-white-gray peer-checked:border-b-secondary peer-checked:text-secondary cursor-pointer">
                  Gifts
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="category"
                  value="Career"
                  className="hidden peer"
                />
                <span className="w-full px-[8px] py-[12px] text-[16px] lg:text-[20px] font-normal font-encode text-gray lg:text-dark lg:border-b peer-checked:border-b border-b-white-gray peer-checked:border-b-secondary peer-checked:text-secondary cursor-pointer">
                  Career
                </span>
              </label>
            </div>
          </div>

          {/* FAQs */}
          <div className="w-full lg:w-[912px]">
            <div className="bg-white border-t border-t-white-gray shadow-md shadow-white-gray">
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  Does your company test on animals?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    Glowthentic has a strong belief that cosmetic animal testing
                    is not necessary and should be eliminated worldwide. We do not
                    test on animals and our company is helping to bring about
                    change in countries where animal testing is conducted on
                    cosmetics as required by law.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  What is your return policy?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    We offer a 30-day return policy for all unused products in
                    their original packaging. Contact our support team for more
                    details.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  How can I track my order?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    You can track your order using the tracking link provided in
                    your email or by logging into your account on our website.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FaqPage;
