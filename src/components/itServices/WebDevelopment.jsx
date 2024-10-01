import React, { useState, useEffect } from "react";
import Website from "../../assets/Images/website.jpg";
import Webb from "../../assets/Images/sec.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegCheckCircle } from "react-icons/fa";
import Sec from "../../assets/Images/websites.png";
import Enhance from "../../assets/Images/enhance.png";
import Stratergy from "../../assets/Images/Starteg.png";
import secure from "../../assets/Images/360.png";
import Static from "../../assets/Images/static.png";
import Dynamic from "../../assets/Images/dynamic.png";
import SPA from "../../assets/Images/spa.png";
import Ecommerce from "../../assets/Images/e-commerce.png";
import Scroll from "../rightscroll/Scroll";
import Webdevelopment1 from "../../assets/Images/websitedevelopment.png";

import Hand from "../../assets/Images/hand.png";

const services = [
  {
    title: "Premium Strategy Makers",
    description:
      "Innowide Technologies will assist you in navigating challenges smoothly through our superior strategic planning. Our approach prioritizes crafting an innovative web app development strategy, followed by effective execution.",
    img: Stratergy,
  },
  {
    title: "You Are Secured 360",
    description:
      "Our web designers are dedicated to safeguarding your website with utmost care. We focus on bolstering security through the development of custom WordPress security plugins, implementing SSL encryption for secure data transmission. ",
    img: secure,
  },
  {
    title: "Enhance The Engaging Factor",
    description:
      "Our main objective in website development is to boost user engagement. We strive to design a site that captivates visitors, encouraging them to explore and interact with its features.Our goal is to create an engaging online experience.",
    img: Enhance,
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function WebDevelopment() {
  return (
    <>
      <div className="w-full overflow-hidden flex items-center justify-center lg:h-[30vh]">
        <img
          src={Webdevelopment1}
          alt="WebDevelopment1"
          className="w-full object-cover"
        />
      </div>
      <div className="md:flex md:flex-wrap md:justify-evenly">
        <div className="p-4 md:w-1/2 lg:w-1/2">
          <h1 className="text-xl font-medium mb-2">
            Best web development company in hyderabad
          </h1>
          <div className="">
            <p className="mb-2 text-justify">
              Web application development focuses on creating programs hosted on
              remote servers, accessible via the Internet without the need for
              downloading. Users can access these applications through web
              browsers like Chrome, Safari, or Firefox. Typically developed
              using JavaScript, CSS, and HTML5, our services as the best web
              development company in Hyderabad ensure seamless functionality,
              placing us among the top website development companies in
              Hyderabad for delivering efficient and user-friendly web
              applications.
            </p>
          </div>

          <h2 className="text-blue-600 font-medium md:mt-6">
            "Getting a quality website is not an expenditure but an investment"
          </h2>
        </div>
        <div className="p-4">
          <img
            src={Website}
            alt="Website"
            className="md:w-[30vw] md:h-[40vh] rounded-md"
          />
        </div>
      </div>
      <div className="md:flex md:flex-wrap md:justify-evenly lg:mt-10">
        <div className="p-4">
          <img
            src={Webb}
            alt="Webb"
            className="md:w-[30vw] md:h-[40vh] rounded-md"
          />
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/2">
          <h2 className="text-xl font-medium mb-2">
            Top website development companies in hyderabad
          </h2>
          <p className="mb-2 text-justify">
            To maximize technology’s potential, developing robust web
            applications is essential. A well-designed web app can validate
            data, analyze it, send real-time alerts, and generate comprehensive
            reports. Additionally, web applications enhance branding, streamline
            communication with customers, and improve customer support, serving
            as the first touchpoint for potential clients. As the best web
            development company in Hyderabad, we excel in delivering these
            solutions, placing us among the top website development companies in
            Hyderabad.
          </p>
        </div>
      </div>
      <div className="w-full h-auto px-4 py-12 bg-gray-100 md:mt-4 lg:mt-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-center text-black md:mt-6 font-serif">
          What do you gain from Innowide Tech?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          We are successful with our ingenious strategies and sturdy executions.
          We take utmost care in following such strategies with the given steps.
        </p>
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-6 rounded-lg text-center max-w-sm mx-auto flex flex-col h-full">
                <div className="flex justify-center mb-4 text-3xl md:text-4xl lg:text-5xl text-blue-600">
                  <img
                    src={service.img}
                    alt="Top website development companies in hyderabad Best web development company in hyderabad	"
                    className="w-8 h-8 md:w-16 md:h-12"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 flex-grow text-justify">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="py-12 md:mb-6 lg:h-auto lg:mb-4 lg:mt-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-center text-black md:mt-6 font-serif">
          How we design websites to our customer's
        </h2>
        <div className="container mx-auto px-4 lg:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-4 group">
              <img
                src={Static}
                alt="Top website development companies in hyderabad Best web development company in hyderabad	"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Static Websites
              </h2>
              <p className="text-md mb-4 text-start">
                Static websites offer consistent content, highlighting our
                status as the best web development company in Hyderabad among
                top website development companies.
              </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-4 group">
              <img
                src={Dynamic}
                alt="Top website development companies in hyderabad Best web development company in hyderabad	"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Dynamic Websites
              </h2>
              <p className="text-md mb-4 text-justify">
                Dynamic websites provide personalized content, showcasing our
                expertise as the best web development company in Hyderabad among
                top website development companies.
              </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-4 group">
              <img
                src={SPA}
                alt="Top website development companies in hyderabad Best web development company in hyderabad	"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Single-Page Application
              </h2>
              <p className="text-md mb-4 text-justify">
                Single Page Applications enhance user experience, affirming our
                status as the best web development company in Hyderabad among
                top website development companies.
              </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-4 group">
              <img
                src={Ecommerce}
                alt="Top website development companies in hyderabad Best web development company in hyderabad	"
                className="h-16 w-16 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                E-commerce Websites
              </h2>
              <p className="text-md mb-4 text-justify">
                E-commerce websites facilitate online shopping, showcasing our
                expertise as the best web development company in Hyderabad among
                top website development companies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6 bg-gray-100 md:mt-6 lg:mt-10">
        <div className="flex-1 p-4">
          <div className="grid gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-black md:mt-6 font-serif">
              Common Website Designing Challenges for Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-4">
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Lack of Long-Term Objectives</h2>
                  <p className="font-extralight text-start">
                    Lack of long-term goals challenges stakeholders,
                    highlighting the best web development company in Hyderabad
                    among top website development companies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">DIY Limitations</h2>
                  <p className="font-extralight text-start">
                    DIY web design can save costs, yet our expertise as the best
                    web development company in Hyderabad among top website
                    development companies is invaluable.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Slow Loading Times</h2>
                  <p className="font-extralight text-start">
                    Capturing interest quickly is crucial; we’re the best web
                    development company in Hyderabad among top website
                    development companies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">
                    Underestimating Professional Expertise
                  </h2>
                  <p className="font-extralight text-start">
                    Investing in top-tier web design is essential; we’re the
                    best web development company in Hyderabad among top website
                    development companies.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">
                    Need for Comprehensive Expertise
                  </h2>
                  <p className="font-extralight text-start">
                    Global demand for web design skills highlights our expertise
                    as the best web development company in Hyderabad among top
                    website development companies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <img
            src={Sec}
            alt="Top website development companies in hyderabad Best web development company in hyderabad	"
            className="w-full rounded-md lg:h-[80vh]"
          />
        </div>
      </div>

      <div className="md:flex md:flex-wrap bg-slate-300">
        <div className="p-4 md:w-1/2 lg:w-1/2 bg-none">
          <img
            src={Hand}
            alt="Hand"
            className="image-container w-full max-w-lg rounded-md"
          />
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/2 lg:h-[85vh]">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-center text-black md:mt-6 font-serif">
            Get a Quotation Now
          </h2>
          <p className="mb-4">
            Please fill out the request for quote form below and our expert team
            will get back to you shortly.
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
            <div className="transform text-center ">
              <button
                type="submit"
                className=" py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg transition"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Scroll />
      {/* not required in ui as per extenal link in ranking */}
      <a href="https://www.instagram.com/p/DALNlGTy6g-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" className="hidden">Social Media</a>
      <a href="https://www.linkedin.com/in/innowide-technologies-48246b324/" className="hidden">LinkedIn</a>
      <a href="https://x.com/Innowidetech" className="hidden">Twitter</a>
      <a href="https://www.facebook.com/profile.php?id=61564968294800" className="hidden">Facebook</a>
    </>
  );
}

export default WebDevelopment;
