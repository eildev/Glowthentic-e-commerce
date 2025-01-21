
import Container from "../components/Container";
import { Icon } from "@iconify/react/dist/iconify.js";
import { twMerge } from "tailwind-merge";
import image from "../assets/img/footer/footer-bg-img.png"
import CardTitle from "../components/typography/CardTitle";
import Paragraph from "../components/typography/Paragraph";

const Footer = () => {
  return (
    <>
      <div className='bg-primary pt-10' style={{ backgroundImage: `url(${image})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "right bottom" }}>
        <Container>
          <footer className={`${twMerge(
              "grid grid-flow-row lg:grid-cols-4 "
            )} footer gap-4 text-white p-5`}>
            <nav>
            <CardTitle>How can we Help?</CardTitle>
              <a className="link link-hover">Glowthentic branches</a>
              <a className="link link-hover">Contact Us</a>
              <a className="link link-hover">Contact Us</a>
              <a className="link link-hover">Our Brand</a>
              <a className="link link-hover">Blog</a>
            </nav>
            <nav>
              <CardTitle>Products</CardTitle>
              <a className="link link-hover">Women Make up</a>
              <a className="link link-hover">Women Skincare</a>
              <a className="link link-hover">Gifts & Sets</a>
            </nav>
            <form className="lg:col-span-2">
            <CardTitle>keep in touch with Glowthentic</CardTitle>
              <fieldset className="form-control">
                <label className="label">
                  <Paragraph>Join the Glowthentic newsletter and be first to hear about
                  news, offers and skincare advice</Paragraph>
                </label>
                <div className="flex  gap-2 w-full">
                  <input
                    type="text"
                    placeholder="Enter your Email Address"
                    className="bg-transparent w-full border-b placeholder-white-gray border-white-gray focus:outline-none p-2"
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
              <Icon icon="ri:facebook-fill" width="24" height="24" />
              </a>
              <a>
              <Icon icon="mdi:instagram" width="24" height="24" />
              </a>
              <a>
              <Icon icon="prime:twitter" width="24" height="24" />
              </a>
              <a>
              <Icon icon="mdi:pinterest" width="24" height="24" />
              </a>
              <a>
              <Icon icon="ic:baseline-tiktok" width="24" height="24" />
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
