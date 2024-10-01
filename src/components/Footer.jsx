import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/Images/innowide.png";
import { Link } from "react-router-dom";
import { GrLocationPin } from "react-icons/gr";
import { PiPhoneCallLight } from "react-icons/pi";
import { CiMail } from "react-icons/ci";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="bg-[#1b3e54] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <img src={Logo} alt="Logo" className="w-30 h-28 md:ml-10" />
            <p className="text-gray-300 mb-4">
              Innowide Technologies delivers innovative cloud solutions and
              network management with a focus on security, scalability, and
              efficiency.
            </p>
            <div className="flex space-x-4 mt-4">
              <div
                className="text-gray-300 hover:text-blue-600 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
                onClick={() =>
                  openLink(
                    "https://www.facebook.com/people/Innowide-Technologies/61564968294800/"
                  )
                }
              >
                <FaFacebookF className="w-8 h-8" />
              </div>
              <div
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
                onClick={() => openLink("https://x.com/Innowidetech/")}
              >
                <FaXTwitter className="w-8 h-8" />
              </div>
              <div
                className="text-gray-300 hover:text-blue-700 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
                onClick={() =>
                  openLink(
                    "https://www.linkedin.com/company/104172838/admin/dashboard/"
                  )
                }
              >
                <FaLinkedinIn className="w-8 h-8" />
              </div>
              <div
                className="text-gray-300 hover:text-pink-600 transition-colors duration-300 p-2 rounded-full bg-gray-800 hover:bg-gray-700 cursor-pointer"
                onClick={() =>
                  openLink("https://www.instagram.com/innowidetechnologies/")
                }
              >
                <FaInstagram className="w-8 h-8" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">IT Services</h3>
            <ul className="text-gray-300">
              <li>
                <Link
                  to="/softwaredevelopment"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Software Development
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/webdevelopment"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Website Development
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/appdevelopment"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  App Development
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/blockchaindevelopment"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Blockchain Development
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="#"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Game Development
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">
              Digital Marketing Services
            </h3>
            <ul className="text-gray-300">
              <li className="mt-2">
                <Link
                  to="/seo"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Search Engine optimization
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/socialmarketing"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Social Media Marketing
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/emailmarketing"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Email Marketing
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/affilatemarketing"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Affiliate Marketing
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/mobilemarketing"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Mobile Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="text-gray-300">
              <li>
                <Link
                  to="/about"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  About Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/contactus"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Contact Us
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/privacy"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="/termsandcondition"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="mt-2">
                <Link
                  to="#"
                  className="hover:text-teal-400"
                  onClick={scrollToTop}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:-ml-20 ">
            <h3 className="text-white font-bold mb-4 md:">Address</h3>
            <div className="text-gray-300 flex flex-col space-y-2">
              <div className="flex items-center ml-4">
                <span className="-ml-6 -mt-4">
                  <GrLocationPin className="text-blue-200" size={24} />
                </span>
                <span className="md:ml-4 ml-2">
                  Office No-501, 5TH Floor,Elite Padmavati Corporate, Hyderabad,
                  Telangana, 500081
                </span>
              </div>
              <div className="flex items-center ml-4">
                <span className="-ml-6">
                  <PiPhoneCallLight className="text-blue-200" size={24} />
                </span>
                <p className="text-md text-gray-600">
                  <a href="tel:+917075541674" className="text-gray-300 ml-3">
                    +91 7075541674
                  </a>
                </p>
              </div>
              <div className="flex items-center ml-4">
                <span className="-ml-6">
                  <CiMail className="text-blue-200 " size={24} />
                </span>
                {/* <span className="md:ml-4 ml-2"><Link to='innowidetechnologieshr@gmail.com'>innowidetechnologieshr@gmail.com</Link></span> */}
                <span className="md:ml-4 ml-2">
                  <a
                    href="mailto:innowidetechnologieshr@gmail.com"
                    className="text-gray-300"
                  >
                    innowidetechnologieshr@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-center items-center text-center">
          <p className="text-gray-300 text-sm">
            © Innowide Technologies, All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
