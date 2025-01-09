import React from "react";
import Container from "../components/Container";
import { Icon } from "@iconify/react/dist/iconify.js";
import { twMerge } from "tailwind-merge";
import image from "../assets/img/footer/footer-bg-img.png"

const Footer = () => {
  return (
    <>
      <div className='bg-primary' style={{ backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" }}>
        <Container>
          <footer className={`${twMerge(
              "grid grid-flow-row lg:grid-cols-4 "
            )} footer gap-4 text-white p-5`}>
            <nav>
              <h6 className="footer-title">Services</h6>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <h6 className="footer-title">Company</h6>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <form className="lg:col-span-2">
              <h6 className="footer-title">keep in touch with Glowthentic</h6>
              <fieldset className="form-control">
                <label className="label">
                  <span className="">
                    Join the Glowthentic newsletter and be first to hear about
                    news, offers and skincare advice
                  </span>
                </label>
                <div className="flex  gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Enter your Email Address"
                    className="bg-transparent w-full border-b border-white-gray focus:outline-none p-2"
                  />
                  <button className="bg-transparent p-2 border hover:text-secondary">
                    Subscribe
                  </button>
                </div>
                <div className="flex gap-2 py-2">
                  <input
                    type="checkbox"
                    className={`${twMerge("bg-transparent")}`}
                    defaultChecked
                  />
                  <p className="text-xs">
                    By submitting your email, you agree to receive advertising
                    emails from Glowthentic. Please review our Privacy Policy,
                    which includes our Financial Incentive Notice for CA
                    residents.
                  </p>
                </div>
              </fieldset>
            </form>
          </footer>

          <footer className="footer grid md:grid-cols-2 lg:grid-cols-3 text-neutral-content items-center px-5 py-4">
            <aside className="grid-flow-row lg:grid-flow-col items-center gap-5">
              <div className="flex justify-between gap-1">
                <span>
                  <Icon icon="mdi-light:map-marker" width="24" height="24" />
                </span>
                <p>
                  House 41, Block E, Road-06, Banasree, Dhaka, Dhaka, Bangladesh
                </p>
              </div>
              <span className="hidden lg:block text-xl">|</span>
              <div className="flex justify-between gap-1">
                <Icon icon="mdi-light:phone" width="24" height="24" />
                <p>1-802-526-2463</p>
              </div>
            </aside>
            <div className="hidden lg:block"></div>
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                </svg>
              </a>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="fill-current"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                </svg>
              </a>
            </nav>
          </footer>
        </Container>
        <div className="bg-secondary-gradient-2">
        <Container>
          <footer className="footer text-white-gray border-base-300 py-4 px-5">
            <aside className="grid-flow-col items-center">
              <p>
                © {new Date().getFullYear()} Glowthentic - All Rights Reserved.
              </p>
            </aside>
            <nav className="md:place-self-center md:justify-self-end">
              <div className="grid grid-flow-col gap-4">
                <a>Terms & Conditions</a>
                <a>Privacy Policy</a>
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
