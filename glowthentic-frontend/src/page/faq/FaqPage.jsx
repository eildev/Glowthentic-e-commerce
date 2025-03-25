import Container from "../../components/Container";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import Breadcrumb from "../../components/navbar/Breadcrumb";

const FaqPage = () => {
  return (
    <Container>
      <DynamicHelmet title="Faqs Page" />
      <div className="w-full mx-auto my-10 px-5 lg:px-0">
        {/* Title and description */}
        <div className="mb-8">
          <Breadcrumb>
            <li>FAQs</li>
          </Breadcrumb>
        </div>

        <h2 className=" text-[24px] lg:text-lg font-bold text-dark font-encode mb-4">
          How can we help you?
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-20">
          {/* FAQ menus */}

          <div className="w-full lg:w-[50%] mb-6 lg:mb-0">

            <p className="text-sm">
              <span className="text-secondary">Glowthentic's</span> Return Policy is very easy to process. If you face any problem with to return policy feel free to communicate with our team. <br /><br />

              Follow the steps below for a seamless returns process: <br /> <br />
              – The return shipping will be at your own expense. <br /><br />
              – The product must be unused, unworn, unwashed, and without any flaws. <br /><br />
              – The product must include the original tags, user manual, and accessories. <br /><br />
              – The product must be returned in the original and undamaged manufacturer packaging/box. <br /><br />
              – Exchange request is made within the stated time frame/limit. The item(s) is faulty, damaged, or defective at the time of delivery. <br /><br />
              – The received product(s) must have differed from the original order. <br /><br />
              – The courier/ delivery man will wait at customer points in case the customer wants to receive the product after a trial, a maximum of 10-15 minutes. (Only for Cash on Delivery). <br /><br />
              – Please note that refunds can’t be processed for any consequential <br /><br />
              You will receive an email once your return has been processed. Please allow 06 – 12 business days from the time your package arrives back to us for a refund to be issued. <br /><br />
            </p>

            <h1 className="text-lg my-10 font-semibold">Order & Returns</h1>


            <div className="bg-white border-t border-t-white-gray shadow-md shadow-white-gray relative">
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  How do I know if my order was successful?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    You can use our search engine or just explore the website to find the product you're
                    looking for. Once you've added them to your shopping cart, click "Place Order" to
                    provide us with your name, address, and phone number. We will send an OTP number to
                    your phone for that purpose; if you enter it correctly, you're done. To deliver your
                    order, a Sobrokom representative will come to your house or place of business.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  How do you deliver?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    Utilizing our proprietary fleet, we aim to ensure the timely delivery of products
                    right to your doorstep. Our primary objective is to consistently meet delivery
                    deadlines and provide you with a reliable and punctual service.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  Should I tip the delivery representative?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    Although tipping is not obligatory, our delivery team members value acknowledgment
                    for their dedication. The entire tip amount goes directly to the delivery
                    representatives as a token of appreciation for their hard work.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="w-full lg:w-[50%] relative">
            <h1 className="text-lg mb-10 font-semibold">Shopping Information</h1>
            <div className="bg-white border-t border-t-white-gray shadow-md shadow-white-gray relative">
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  How does the site work?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    You can use our search engine or just explore the website to find the product you're looking for. Once you've added them to your shopping cart, click "Place Order" to provide us with your name, address, and phone number. We will send an OTP number to your phone for that purpose; if you enter it correctly, you're done. To deliver your order, a Glowthetic representative will come to your house or place of business.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  How much do deliveries cost?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    The delivery fee across the country is in the table below:

                    <div className="overflow-x-auto mt-5">
                      <table className="min-w-full border-collapse border-t border-gray-300">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className="border-t border-gray-300 px-2 py-2 text-left text-gray-600 text-base">Place</th>
                            <th className="border-t border-gray-300 px-2 py-2 text-left text-gray-600 text-base">Orders below 2KG</th>
                            <th className="border-t border-gray-300 px-2 py-2 text-left text-gray-600 text-base">	Orders above 2KG</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="hover:bg-gray-50">
                            <td className="border-t border-gray-300 px-2 py-2 text-sm">In Side Dhaka</td>
                            <td className="border-t border-gray-300 px-2 py-2 text-sm">80</td>
                            <td className="border-t border-gray-300 px-2 py-2 text-sm">Per KG 20 Tk Extra</td>
                          </tr>
                          <tr className="hover:bg-gray-50">
                            <td className="border-t border-gray-300 px-2 py-2 text-sm">Out Side Dhaka</td>
                            <td className="border-t border-gray-300 px-2 py-2 text-sm">140</td>
                            <td className="border-t border-gray-300 px-2 py-2 text-sm">Per KG 20 Tk Extra</td>
                          </tr>
                          {/* Add more rows as needed */}
                        </tbody>
                      </table>
                    </div>
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  Why should we buy from you when I have a store nearby?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    That's up to you, however you could also order delivery of your things and be as
                    lazy as our founders. At times, our costs are less expensive than those of the
                    city's largest superstores. In comparison to the typical corner store, we also
                    carry a wider selection. Thus, there's no excuse not to purchase from us.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  How can I contact you?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    You can always call +880 1715-443884 or mail us at s glowthenticbd@gmail.com
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-lg my-10 font-semibold">Payment information</h1>


            <div className="bg-white border-t border-t-white-gray shadow-md shadow-white-gray relative">
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  How do I pay?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    We accept cash on delivery and we also take online payment system Nagad & Bkash.
                    Our Sobrocom staff is always here to help you, so don't worry.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  My order is wrong. What do I do?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    Please immediately call +880 1602 08 51 21 or mail us at
                    sobrokom.store@gmail.com or
                    info@sobrokom.store. and let us know the problem.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  What about the prices?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    While our pricing is independently determined, our utmost endeavor is to present
                    you with competitive rates, striving to match or undercut prevailing market
                    prices. We align our prices with the local market, and our relentless efforts
                    are focused on further reducing them. Should you perceive any product to be
                    unfairly priced, we encourage you to bring it to our attention, as we are
                    committed to ensuring fairness and transparency in our pricing strategy.
                  </p>
                </div>
              </div>
            </div>
            <h1 className="text-lg my-10 font-semibold">Our Facilities</h1>


            <div className="bg-white border-t border-t-white-gray shadow-md shadow-white-gray relative">
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" defaultChecked />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  What is your discounting policy?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    In Dhaka, our commitment is to offer unparalleled deals, with numerous products
                    already marked down below their maximum retail price (MRP). Additionally, we
                    extend special discount codes in specific situations, applied to the MRP. It's
                    important to note that for any given product, only one type of discount can be
                    applied. We consistently prioritize providing customers with the most
                    advantageous discount available, ensuring a cost-effective and rewarding
                    shopping experience.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200 border-b border-b-white-gray rounded-none relative">
                <input type="checkbox" name="my-accordion-3" />
                <div className="collapse-title text-[20px] font-bold font-encode text-secondary">
                  Can I change the registered Phone number/Email address of my Sobrokom account?
                </div>
                <div className="collapse-content">
                  <p className="text-[18px] font-normal font-encode">
                    Yes, you can change your registered phone number or email address. First you go
                    to your profile then, here you can change your personal information as you wish.
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
