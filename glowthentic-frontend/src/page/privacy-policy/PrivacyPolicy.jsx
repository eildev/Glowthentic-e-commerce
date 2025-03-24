import React from 'react';
import DynamicHelmet from '../../components/helmet/DynamicHelmet';
import Container from '../../components/Container';


const PrivacyPolicy = () => {
    return (
        <div>
               <div>
      <DynamicHelmet
       title="Privacy Policy" />
        <div className=" min-h-screen px-6 md:px-20 py-10 text-primary">
          <Container>
           
            <nav className="text-sm mb-4 text-primary">
        <a href="/" className="hover:underline text-secondary">Home</a> / Privacy Policy
      </nav>
      
      
      <h1 className="text-center font-bold text-white py-2 px-6 bg-secondary rounded-full w-fit mx-auto mb-2">
      Privacy Policy
      </h1>
      <h4 className='text-primary text-center mb-8  text-opacity-50'>Last Updated: 24/03/2025</h4>
 
      <div className="space-y-6">
        <section className="mb-5">
          <h2 className="text-lg font-bold text-primary mb-2">1. Introduction</h2>
          <p className="my-2">Welcome to glowthentic.store ("we," "us," or "our"). This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website and use our services.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">2.  Information We Collect</h2>
          <p className="my-2"><strong>2.1 Personal Information:</strong> We may collect personal information, including but not limited to, your name, email address, phone number, billing address, shipping address, and payment information when you make a purchase or create an account.</p>
          <p className="my-2"><strong>2.2 Automatically Collected Information: </strong> We may automatically collect certain information about your device, including your IP address, browser type, and operating system, when you access our website.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">3. How We Use Your Information</h2>
          <p className="my-2"><strong>3.1 Order Processing:</strong> We use your personal information to process and fulfill your orders, send order confirmations, and provide customer support.</p>
          <p className="my-2"><strong>3.2 Communication:</strong>  We may use your email address to send you updates, newsletters, and marketing materials. You can opt-out of these communications at any time.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">4. Information Sharing</h2>
          <p className="my-2"><strong>4.1 Third-Party Service Providers:</strong> We may share your information with third-party service providers to perform functions on our behalf, such as payment processing, shipping, and marketing.</p>
          <p className="my-2"><strong>4.2 Legal Compliance:</strong> We may disclose your information if required by law or in response to a valid legal request.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">5. Cookies and Tracking Technologies</h2>
          <p className="my-2">We use cookies and similar technologies to track your activity on our website, analyze trends, and improve your browsing experience. You can manage your cookie preferences through your browser settings.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">6. Data Security</h2>
          <p className="my-2">We implement reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, and destruction. However, no method of transmission over the internet or electronic storage is 100% secure.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">7. Your Choices</h2>
          <p className="my-2"><strong>7.1 Access and Update: </strong> You may access, update, or delete your personal information by logging into your account or contacting us.</p>
          <p className="my-2"><strong>7.2 Opt-Out:</strong> You can opt-out of receiving marketing communications by following the instructions in our emails or contacting us.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">8. Children's Privacy</h2>
          <p className="my-2">Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">9. Changes to This Privacy Policy</h2>
          <p className="my-2">We reserve the right to update this Privacy Policy at any time. The updated policy will be posted on our website with the revised effective date.</p>
        </section>

        <section className="pb-5">
          <h2 className="text-lg font-bold text-primary mb-4">10. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at <span className='text-secondary'>
          glowthenticbd@gmail.com</span>.</p>
        </section>
      </div>
          </Container>
        </div>
    </div>
        </div>
    );
};

export default PrivacyPolicy;