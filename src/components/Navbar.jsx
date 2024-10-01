import React, { useState, useRef, useEffect } from "react";
import Logo1 from "../assets/Images/innowide.png";
import { FaBars, FaTimes, FaAngleDown, FaTimesCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Hand from "../assets/Images/hand.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  // const [search, setSearch] = useState("");
  const serviceMenuRef = useRef(null); // Ref for the service menu
  const modalRef = useRef(null); // Ref for the modal

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleLinkClick = (path) => {
    setActiveLink(path);
    scrollToTop(); // Ensure the page scrolls to the top
    navigate(path);
    setIsOpen(false); // Close the menu on link click
  };

  // Handle clicks outside of the modal to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 w-full flex justify-between items-center px-4 md:px-16 z-50 text-md bg-[#1b3e54] text-white">
        <div className="flex items-center lg:ml-14">
          <img
            src={Logo1}
            alt="Logo1"
            className="h-14 w-14 cursor-pointer mt-2 mb-2 flex items-center"
            onClick={() => {
              handleLinkClick("/");
            }}
          />
        </div>
        <div className="flex items-center">
          <div className="hidden md:flex md:text-xl gap-8">
            <Link
              to="/"
              onClick={() => handleLinkClick("/")}
              className={`cursor-pointer md:mt-1 `}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => handleLinkClick("/about")}
              className={`cursor-pointer md:mt-1`}
            >
              About
            </Link>
            <div className="relative group">
              <label className="cursor-pointer flex items-center md:mt-1">
                Services
                <FaAngleDown className={`ml-1 transition-transform`} />
              </label>
              <div className="absolute top-full left-0 bg-white shadow-md text-gray-700 text-sm gap-2 p-2 w-48 rounded-sm group-hover:block hidden z-10">
                <div className="mt-2">
                  <Link
                    to="/softwaredevelopment"
                    onClick={() => handleLinkClick("/softwaredevelopment")}
                    className={`cursor-pointer `}
                  >
                    Software Development
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    to="/webdevelopment"
                    onClick={() => handleLinkClick("/webdevelopment")}
                    className={`cursor-pointer `}
                  >
                    Website Development
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    to="/appdevelopment"
                    onClick={() => handleLinkClick("/appdevelopment")}
                    className={`cursor-pointer `}
                  >
                    App Development
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    to="/blockchaindevelopment"
                    onClick={() => handleLinkClick("/blockchaindevelopment")}
                    className={`cursor-pointer `}
                  >
                    Blockchain Development
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    to="/seo"
                    onClick={() => handleLinkClick("/seo")}
                    className={`cursor-pointer `}
                  >
                    Search Engine Optimization
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    to="/socialmarketing"
                    onClick={() => handleLinkClick("/socialmarketing")}
                    className={`cursor-pointer `}
                  >
                    Social Media Marketing
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    to="/emailmarketing"
                    onClick={() => handleLinkClick("/emailmarketing")}
                    className={`cursor-pointer `}
                  >
                    Email Marketing
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    to="/affilatemarketing"
                    onClick={() => handleLinkClick("/affilatemarketing")}
                    className={`cursor-pointer `}
                  >
                    Affilate Marketing
                  </Link>
                </div>
                <div className="mt-2">
                  <Link
                    to="/mobilemarketing"
                    onClick={() => handleLinkClick("/mobilemarketing")}
                    className={`cursor-pointer `}
                  >
                    Mobile Marketing
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/contactus"
              onClick={() => handleLinkClick("/contactus")}
              className={`cursor-pointer md:mt-1`}
            >
              Contact Us
            </Link>
            <button
              onClick={() => setModalOpen(true)}
              className="relative border-none rounded-lg hover:bg-blue-500 bg-blue-600 text-white font-medium text-base lg:p-1 md:h-10"
            >
              <span className="relative z-10 p-1">Get in Touch</span>
            </button>
          </div>
          <div className="flex md:hidden">
            <button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute top-16 right-2 bg-white text-gray-700 text-lg font-serif font-medium flex flex-col gap-4 p-4 w-48 rounded-sm md:hidden">
            <Link
              to="/"
              onClick={() => {
                handleLinkClick("/");
                setIsOpen(false); // Close the menu
              }}
              className={`cursor-pointer`}
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={() => {
                handleLinkClick("/about");
                setIsOpen(false); // Close the menu
              }}
              className={`cursor-pointer`}
            >
              About
            </Link>
            <div className="relative group">
              <label className="cursor-pointer flex items-center">
                Services
                <FaAngleDown
                  className={`ml-2 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </label>
              <div className="absolute top-full left-0 bg-white shadow-md text-gray-700 text-sm flex flex-col gap-2 p-2 w-40 rounded-sm group-hover:block hidden z-30">
                <div>
                  <Link
                    to="/softwaredevelopment"
                    onClick={() => {
                      handleLinkClick("/softwaredevelopment");
                      setIsOpen(false); // Close the menu
                    }}
                    className={`cursor-pointer`}
                  >
                    Software Development
                  </Link>
                </div>
                <div>
                  <Link
                    to="/webdevelopment"
                    onClick={() => {
                      handleLinkClick("/webdevelopment");
                      setIsOpen(false); // Close the menu
                    }}
                    className={`cursor-pointer`}
                  >
                    Website Development
                  </Link>
                </div>
                <div>
                  <Link
                    to="/appdevelopment"
                    onClick={() => {
                      handleLinkClick("/appdevelopment");
                      setIsOpen(false); // Close the menu
                    }}
                    className={`cursor-pointer`}
                  >
                    App Development
                  </Link>
                </div>
                <div>
                  <Link
                    to="/blockchaindevelopment"
                    onClick={() => {
                      handleLinkClick("/blockchaindevelopment");
                      setIsOpen(false); // Close the menu
                    }}
                    className={`cursor-pointer`}
                  >
                    Blockchain Development
                  </Link>
                </div>
                <div>
                  <Link
                    to="/seo"
                    onClick={() => {
                      handleLinkClick("/seo");
                      setIsOpen(false); // Close the menu
                    }}
                    className={`cursor-pointer`}
                  >
                    Search Engine Optimization
                  </Link>
                </div>
                <div>
                  <Link
                    to="/socialmarketing"
                    onClick={() => {
                      handleLinkClick("/socialmarketing");
                      setIsOpen(false); // Close the menu
                    }}
                    className={`cursor-pointer`}
                  >
                    Social Media Marketing
                  </Link>
                </div>
                <div>
                  <Link
                    to="/emailmarketing"
                    onClick={() => {
                      handleLinkClick("/emailmarketing");
                      setIsOpen(false); // Close the menu
                    }}
                    className={`cursor-pointer`}
                  >
                    Email Marketing
                  </Link>
                </div>
                <div>
                  <Link
                    to="/affilatemarketing"
                    onClick={() => {
                      handleLinkClick("/affilatemarketing");
                      setIsOpen(false); // Close the menu
                    }}
                    className={`cursor-pointer`}
                  >
                    Affiliate Marketing
                  </Link>
                </div>
                <div>
                  <Link
                    to="/mobilemarketing"
                    onClick={() => {
                      handleLinkClick("/mobilemarketing");
                      setIsOpen(false); // Close the menu
                    }}
                    className={`cursor-pointer`}
                  >
                    Mobile Marketing
                  </Link>
                </div>
              </div>
            </div>
            <Link
              to="/contactus"
              onClick={() => {
                handleLinkClick("/contactus");
                setIsOpen(false); // Close the menu
              }}
              className={`cursor-pointer`}
            >
              Contact Us
            </Link>
            <button
              onClick={() => {
                setModalOpen(true);
                setIsOpen(false); // Close the menu
              }}
              className="bg-blue-500 p-2 rounded-full text-white hover:bg-blue-400"
            >
              Get in touch
            </button>
          </div>
        )}
      </div>
      <div className="pt-16"></div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[9999]">
          <div
            ref={modalRef}
            className="bg-white p-6 rounded-lg relative max-w-4xl w-full mx-4 sm:mx-8 md:mx-16 lg:mx-auto z-[10000] max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              <FaTimesCircle size={24} />
            </button>
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="md:flex md:flex-wrap bg-slate-300">
              <div className="p-4 md:w-1/2 lg:w-1/2 bg-none">
                <img
                  src={Hand}
                  alt="Hand"
                  className="image-container w-full max-w-lg rounded-md"
                />
              </div>
              <div className="p-4 md:w-1/2 lg:w-1/2">
                <h1 className="text-xl md:mb-4 font-medium text-center">
                  Get a Quotation Now
                </h1>
                <p className="text-center mb-4">
                  Please fill out the request for quote form below and our
                  expert team will get back to you shortly.
                </p>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="col-span-1">
                      <input
                        type="text"
                        placeholder="Full Name"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-1">
                      <input
                        type="email"
                        placeholder="Email Address"
                        required
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                    <div className="col-span-1">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <textarea
                      required
                      placeholder="Enter Your Message"
                      className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                      rows="4"
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
