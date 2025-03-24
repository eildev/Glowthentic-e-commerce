import React from "react";
import DynamicHelmet from "../../components/helmet/DynamicHelmet";
import Container from "../../components/Container";

const TermsAndConditionsPage = () => {
  return (
    <div>
      <DynamicHelmet title="Terms and Conditions" />
        <div className=" min-h-screen px-6 md:px-20 py-10 text-primary">
          <Container>
            {/* Breadcrumb */}
            <nav className="text-sm mb-4 text-primary">
        <a href="/" className="hover:underline text-secondary">Home</a> / Terms & Conditions
      </nav>
      
      {/* Title */}
      <h1 className="text-center font-bold text-white py-2 px-6 bg-secondary rounded-full w-fit mx-auto mb-8">
        TERMS & CONDITIONS
      </h1>
      
      {/* Terms Content */}
      <div className="space-y-6">
        <section className="mb-5">
          <h2 className="text-lg font-bold text-primary mb-2">1. ACCEPTANCE OF TERMS</h2>
          <p className="my-2">By accessing and using <span className="text-secondary">glowthentic.store</span>, you agree to comply with and be bound by these Terms and Conditions. If you do not agree to these terms, please refrain from using the website.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">2. USE OF THE WEBSITE</h2>
          <p className="my-2"><strong>2.1 Eligibility:</strong> You must be at least 18 years old to use this website. By using the website, you affirm that you are at least 18 years of age.</p>
          <p className="my-2"><strong>2.2 Account Information:</strong> You are responsible for maintaining the confidentiality of your account information and password. You agree to accept responsibility for all activities that occur under your account.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">3. PRODUCT INFORMATION</h2>
          <p className="my-2"><strong>3.1 Product Descriptions:</strong> We strive to provide accurate and up-to-date information regarding our products. However, we do not guarantee the accuracy, completeness, or reliability of any product descriptions.</p>
          <p className="my-2"><strong>3.2 Pricing:</strong> Prices are subject to change without notice. We reserve the right to modify or discontinue any product or service without notice.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">4. ORDERING AND PAYMENT</h2>
          <p className="my-2"><strong>4.1 Order Acceptance:</strong> Your order is an offer to buy, and we reserve the right to accept or decline it at our discretion.</p>
          <p className="my-2"><strong>4.2 Payment:</strong> All payments are processed securely. We accept online payment (Bkash and Nogod) and cash on delivery payment.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">5. SHIPPING AND DELIVERY</h2>
          <p className="my-2"><strong>5.1 Shipping Costs:</strong> Shipping costs are calculated during the checkout process. Additional charges may apply for international orders.</p>
          <p className="my-2"><strong>5.2 Delivery Times:</strong> Delivery times may vary based on your location and product availability. We are not responsible for any delays caused by third-party carriers.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">6. RETURNS AND REFUNDS</h2>
          <p className="my-2"><strong>6.1 Return Policy:</strong> Please refer to our <a href="/return-policy" className="text-secondary hover:underline">Return Policy</a> page for information on returns and exchanges.</p>
          <p className="my-2"><strong>6.2 Refunds:</strong> Refunds will be issued in accordance with our <a href="/refund-policy" className="text-secondary hover:underline">Refund Policy</a>.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">7. INTELLECTUAL PROPERTY</h2>
          <p className="my-2"><strong>7.1 Ownership:</strong> All content on this website, including text, graphics, logos, images, and software, is the property of glowthentic.store and is protected by intellectual property laws.</p>
          <p className="my-2"><strong>7.2 Use of Content:</strong> You may not reproduce, distribute, display, or create derivative works from any content without our express written permission.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">8. PRIVACY POLICY</h2>
          <p className="my-2">Please refer to our <a href="/privacy-policy" className="text-secondary hover:underline">Privacy Policy</a> for information on how we collect, use, and disclose your personal information.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">9. GOVERNING LAW</h2>
          <p className="my-2">These Terms and Conditions are governed by and construed in accordance with the laws of Bangladesh.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">10. CHANGES TO TERMS</h2>
          <p>We reserve the right to update or modify these Terms and Conditions at any time. It is your responsibility to review them periodically.</p>
        </section>
      </div>

      {/* Contact Info */}
      <div className="">
      <h2 className="text-lg font-bold text-primary mb-4">Contact Information</h2>
        <p className="my-2">For any questions regarding these Terms and Conditions, please contact us at <a href="mailto:glowthentic.store@gmail.com" className="text-secondary hover:underline">
        glowthenticbd@gmail.com</a></p>
      </div>
          </Container>
        </div>
    </div>
  );
};

export default TermsAndConditionsPage;
