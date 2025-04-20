import Container from "../components/Container";
import { Icon } from "@iconify/react/dist/iconify.js";
import { twMerge } from "tailwind-merge";
import image from "../assets/img/footer/footer-bg-img.png";
import CardTitle from "../components/typography/CardTitle";
import Paragraph from "../components/typography/Paragraph";
import { Link } from "react-router-dom";
import { useState } from "react";

import { useSubscribeUserMutation } from "../redux/features/api/subscription/subscriptionApi";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeUser, { isLoading, isError, isSuccess }] =
    useSubscribeUserMutation();

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email) {
      await subscribeUser(email);
      setEmail("");
    }
  };
  return (
    <>
      <div
        className="bg-primary pt-10"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right bottom",
        }}
      >
        <Container>
          <footer
            className={`${twMerge(
              "grid grid-flow-row lg:grid-cols-4 "
            )} footer gap-4 text-white p-5`}
          >
            <nav>
              <CardTitle>How can we Help?</CardTitle>
              <Link to="/contact-us" className="link link-hover">
                Contact Us
              </Link>
              <Link to="/about" className="link link-hover">
                About Us
              </Link>
              <Link to="#" className="link link-hover">
                Blog
              </Link>
              <Link to="/track-order" className="link link-hover">
                Order Tracking
              </Link>
              <Link to="/faqs" className="link link-hover">
                FAQs
              </Link>
            </nav>
            <nav>
              <CardTitle>Our Brands</CardTitle>
              <Link
                to="#"
                onClick={() =>
                  window.open(
                    "https://miyora.store/",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
                className="link link-hover"
              >
                Miyora
              </Link>
              <Link to="#" className="link link-hover">
                Floraya
              </Link>
              <Link to="#" className="link link-hover">
                Khas
              </Link>
              <Link to="#" className="link link-hover">
                Eves
              </Link>
              <Link to="#" className="link link-hover">
                Boots
              </Link>
            </nav>
            <form className="lg:col-span-2" onSubmit={handleSubscribe}>
              <CardTitle>keep in touch with Glowthentic</CardTitle>
              <fieldset className="form-control">
                <label className="label">
                  <Paragraph>
                    Join the Glowthentic newsletter and be first to hear about
                    news, offers and skincare advice
                  </Paragraph>
                </label>

                <div className="flex  gap-2 w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="Enter your Email Address"
                    className="bg-transparent w-full border-b placeholder-white-gray border-white-gray focus:outline-none p-2"
                  />
                  <button
                    className="bg-transparent p-2 border hover:text-secondary"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                  </button>
                </div>
                {isSuccess && (
                  <p style={{ color: "green" }}>Subscription successful!</p>
                )}
                {isError && (
                  <p style={{ color: "red" }}>
                    Failed to subscribe. Try again.
                  </p>
                )}

                <div className="flex gap-2 py-2">
                  <input
                    type="checkbox"
                    className={`${twMerge("bg-transparent")}`}
                    defaultChecked
                  />
                  <Paragraph className="text-xs">
                    By submitting your email, you agree to receive advertising
                    emails from Glowthentic. Please review our Privacy Policy,
                    which includes our Financial Incentive Notice for CA
                    residents.
                  </Paragraph>
                </div>
              </fieldset>
            </form>
          </footer>

          <footer className="footer grid md:grid-cols-2 text-white lg:grid-cols-3  items-center px-5 py-4">
            <aside className="grid-flow-row lg:grid-flow-col items-center gap-5">
              {/* <div className="flex justify-between gap-1">
                <span>
                  <Icon icon="mdi-light:map-marker" width="24" height="24" />
                </span>
                <p>
                  House 41, Block E, Road-06, Banasree, Dhaka, Dhaka, Bangladesh
                </p>
              </div> */}
              <div className="flex justify-between gap-3">
                <span>
                  <Icon icon="material-symbols:mail" width="24" height="24" />
                </span>
                <p>glowthenticbd@gmail.com</p>
              </div>
              {/* <span className="hidden lg:block text-xl">|</span>
              <div className="flex justify-between gap-1 cursor-pointer hover:underline">
                <Icon icon="mdi-light:phone" width="24" height="24" />
                <p>+880 1715-443884</p>
              </div> */}
            </aside>
            <div className="hidden lg:block"></div>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <Link target="_blank" to="https://www.facebook.com/glowthentics">
                <Icon icon="ri:facebook-fill" width="24" height="24" />
              </Link>
              <Link
                target="_blank"
                to="https://www.instagram.com/glowthenticbd"
              >
                <Icon icon="mdi:instagram" width="24" height="24" />
              </Link>
              <Link target="_blank" to="https://wa.me/8801715443884">
                <Icon icon="mdi:whatsapp" width="24" height="24" />
              </Link>
              <Link target="_blank" to="https://www.youtube.com/@Glowthenticbd">
                <Icon icon="mdi:youtube" width="24" height="24" />
              </Link>
              <Link target="_blank" to="https://www.tiktok.com/@glowthenticbd">
                <Icon icon="ic:baseline-tiktok" width="24" height="24" />
              </Link>
            </nav>
          </footer>
        </Container>
        <div className="bg-secondary-gradient-2">
          <Container>
            <footer className="footer text-white-gray border-base-300 py-4 px-5">
              <aside className="grid-flow-col items-center">
                <p>
                  © {new Date().getFullYear()} Glowthentic - All Rights
                  Reserved.
                </p>
              </aside>
              <nav className="md:place-self-center md:justify-self-end">
                <div className="grid grid-flow-col gap-4">
                  <Link to="/terms-and-conditions">Terms & Conditions</Link>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </div>
              </nav>
            </footer>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Footer;
