import React from "react";
import Scroll from "./rightscroll/Scroll";
import Contactus from "../assets/Images/contactus.png";

const ContactUs = () => {
  return (
    <>
      <div className="w-full overflow-hidden flex items-center justify-center lg:h-[30vh]">
        <img src={Contactus} alt="Contactus" className="w-full object-cover" />
      </div>

      <section className="bg-gray-100 py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Text Section */}
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-8">
              <div className="section-title">
                <h2 className="text-4xl font-bold text-blue-900 mb-4 border-l-4 border-red-500 pl-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-gray-600">
                  We design and develop services for customers of all sizes,
                  specializing in creating stylish, modern websites
                </p>
              </div>
              <div className="lg:w-3/4 mt-10">
                <div className="contact-name mb-8">
                  <h5 className="text-xl font-semibold text-blue-900 mb-2">
                    Visit Our Office
                  </h5>
                  <p className="text-lg text-gray-600">
                    Office no-501, 5TH Floor Elite Padmavati Corporate ,
                    Hyderabad, Telangana 500081 <br />
                  </p>
                </div>
                <div className="contact-name mb-8">
                  <h5 className="text-xl font-semibold text-blue-900 mb-2">
                    Mail
                  </h5>
                  <a
                    href="mailto:innowidetechnologieshr@gmail.com"
                    className="text-gray-600"
                  >
                    innowidetechnologieshr@gmail.com
                  </a>
                </div>
                <div className="contact-name mb-8">
                  <h5 className="text-xl font-semibold text-blue-900 mb-2">
                    Phone
                  </h5>
                  <p className="text-lg text-gray-600">
                    <a href="tel:+917075541674" className="text-gray-600">
                      +91 7075541674
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:w-1/2">
              <div className="contact-form">
                <form action="/">
                  <div
                    className="p-3"
                    data-success="Your message has been received, We will contact you soon."
                  ></div>
                  <div className="p-3">
                    <span className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 animate-fadeInLeft text-black md:mt-6 font-serif">
                      Please Fill Required Fields
                    </span>
                  </div>
                  <div className="flex flex-wrap md:mt-10">
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Full Name"
                          className="border-b-2 border-blue-900 focus:border-red-500 bg-transparent px-3 py-2 w-full text-gray-800 rounded-md focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Email Address"
                          className="border-b-2 border-blue-900 focus:border-red-500 bg-transparent px-3 py-2 w-full text-gray-800 rounded-md focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 mb-6">
                      <div className="form-group">
                        <input
                          type="text"
                          placeholder="Subject"
                          className="border-b-2 border-blue-900 focus:border-red-500 bg-transparent px-3 py-2 w-full text-gray-800 rounded-md focus:outline-none focus:ring-0"
                        />
                      </div>
                    </div>
                    <div className="w-full px-3 mb-6">
                      <div className="form-group">
                        <textarea
                          placeholder="Message"
                          className="border-b-2 border-blue-900 focus:border-red-500 bg-transparent px-3 py-2 w-full text-gray-800 rounded-md focus:outline-none focus:ring-0"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-3">
                      <div className="flex justify-center">
                        <button className="text-white hover:bg-blue-400 bg-blue-500 rounded-md px-4 py-2">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Scroll />
      {/* not required in ui as per extenal link in ranking */}
      <a href="https://www.instagram.com/p/DALNlGTy6g-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="hidden">Social Media</a>
    </>
  );
};

export default ContactUs;
