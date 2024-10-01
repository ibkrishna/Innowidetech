import React, { useState, useEffect } from "react";
import Team from "../assets/Images/team.jpg";
import Carousel from "./Carousel";
import "./animation.css";
import Testimonial from "./Testimonial";
import { Link } from "react-router-dom";
import Hand from "../assets/Images/hand.png";
import img1 from "../assets/Images/imgh.png";
import img2 from "../assets/Images/imgh2.png";
import img3 from "../assets/Images/imgh3.png";
import Software from "../assets/Images/Softwareh.png";
import Apph from "../assets/Images/apph.png";
import Blockchain from "../assets/Images/blockchainh.png";
import Website from "../assets/Images/websiteh.png";
import Rocket from "../assets/Images/rocket_.png";
import Expert from "../assets/Images/experth.png";
import Cogs from "../assets/Images/cogsh.png";
import Star from "../assets/Images/starth.png";
import SEO from "../assets/Images/seoh.png";
import SEM from "../assets/Images/SEMh.png";
import SMM from "../assets/Images/SMM.png";
import Emial from "../assets/Images/emialh.png";
import Affilate from "../assets/Images/affilateh.png";
import Mobile from "../assets/Images/mobileh.png";
import Scroll from "./rightscroll/Scroll";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const gradientStyle = {
  backgroundImage: "radial-gradient(circle, #F0F4F3, #A8BCC9)",
  backgroundSize: "cover",
};

function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div>
        <Carousel />
      </div>
      <div className="flex flex-col md:flex-row lg:mt-10 px-4 lg:px-8 mt-4">
        <div className="flex-1 flex justify-center md:justify-start lg:p-4">
          <img
            src={Team}
            alt="Top Software Company in Hyderabad"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="flex-1 flex flex-col items-center md:items-start md:justify-center lg:items-end px-4 md:px-8 lg:px-16 mt-4">
          <div className="text-center md:text-left lg:text-right">
            <h1 className="text-start text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-black md:mt-6 lg:mt-0 font-serif">
              Top Software Company in Hyderabad
            </h1>
            <p className="text-justify text-md md:text-lg lg:text-xl leading-relaxed text-black">
              Innowide Technologies, one of the leading software companies in
              Hyderabad, specializes in innovative IT solutions that drive
              business success. As one of the best software companies Hyderabad
              offers, we provide a range of services including software
              development, web design, and digital transformation. Among the top
              IT companies at Hyderabad, we ensure cutting-edge solutions
              tailored to your needs.
            </p>
          </div>
        </div>
      </div>
      {/* it solutions */}
      <div className="py-12 md:mb-6 lg:mt-10">
        <h2 className="text-center text-xl md:text-3xl font-medium text-slate-800 mb-8 animate-fadeInUp font-serif">
          IT Solutions
        </h2>
        <div className="container mx-auto px-4 lg:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col cursor-pointer shadow-sm rounded-md p-4 group ">
              <img
                src={Software}
                alt="Top Software Company in Hyderabad"
                className="h-16 w-16 mx-auto text-gray-600 group-hover:text-blue-500 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Software Development
              </h2>
              <p className="text-md mb-4 text-justify">
                Custom software solutions designed to meet your specific
                business requirements It encompasses the creation, design, and
                maintenance of software applications.
              </p>
              <div className="flex justify-center mt-auto">
                <Link to="/softwaredevelopment">
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
                    onClick={scrollToTop}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col cursor-pointer shadow-sm rounded-md p-4 group mt-2">
              <img
                src={Website}
                alt="Top Software Company in Hyderabad"
                className="h-16 w-16 mx-auto text-gray-600 group-hover:text-blue-500 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Website Development
              </h2>
              <p className="text-md mb-4 text-justify">
                Web development typically encompasses both front-end
                development, which focuses on the design and user interface, and
                back-end development.
              </p>
              <div className="flex justify-center mt-auto">
                <Link to="/webdevelopment">
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
                    onClick={scrollToTop}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col cursor-pointer shadow-sm rounded-sm p-4 group mt-2">
              <img
                src={Apph}
                alt="Top Software Company in Hyderabad"
                className="h-16 w-16 mx-auto text-gray-600 group-hover:text-blue-500 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                App Development
              </h2>
              <p className="text-md mb-4 text-justify">
                App development aims to create functional, user-friendly
                applications that meet specific needs and provide seamless
                experiences across various platforms.
              </p>
              <div className="flex justify-center mt-auto">
                <Link to="/appdevelopment">
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
                    onClick={scrollToTop}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col cursor-pointer shadow-sm rounded-sm p-4 group mt-2">
              <img
                src={Blockchain}
                alt="Top Software Company in Hyderabad"
                className="h-16 w-16 mx-auto text-gray-600 group-hover:text-blue-500 mb-4"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Blockchain Development
              </h2>
              <p className="text-md mb-4 text-justify">
                This involves designing blockchain architecture, developing
                smart contracts, and integrating distributed ledger technology
                to enhance transparency.
              </p>
              <div className="flex justify-center mt-auto">
                <Link to="/blockchaindevelopment">
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
                    onClick={scrollToTop}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto lg:mt-10 h-auto ">
        <div className="flex flex-col lg:flex-row p-2 bg-gray-100">
          <div className="lg:w-1/2 flex flex-col justify-center mb-8">
            <h2 className="text-lg md:text-xl font-medium mb-4 p-2">
              Transform Your IT Strategy with Leading Expertise
            </h2>
            <p className="text-gray-700 mb-6 p-2 text-justify">
              Technology is constantly evolving, and your IT strategy should
              evolve with it. As one of the top software companies in Hyderabad,
              Innowide Technologies ensures you stay ahead by leveraging the
              latest advancements in artificial intelligence, cloud computing,
              and cybersecurity. Among the best software companies Hyderabad
              offers, we enhance your operational efficiency and drive
              sustainable growth, making us a leader among IT companies at
              Hyderabad.
            </p>
            <h2 className="text-lg md:text-xl font-medium mb-4 p-2">
              What Sets Us Apart
            </h2>
            <p className="text-gray-700 mb-6 p-2 text-justify">
              At Innowide Technologies, recognized as one of the top software
              companies in Hyderabad, we are dedicated to delivering unmatched
              value through our innovative IT solutions and services. Our
              commitment to excellence sets us apart from other IT companies at
              Hyderabad, ensuring we exceed your expectations. Unlike generic
              solutions, we take the time to understand your specific needs and
              craft tailored strategies, making us one of the best software
              companies Hyderabad has to offer.
            </p>
            <div>
              <Link to="/about">
                <button
                  className="rounded-full bg-blue-500 hover:bg-blue-400 text-white px-4 py-2 transition duration-300 md:ml-4"
                  onClick={scrollToTop}
                >
                  Explore Further
                </button>
              </Link>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 md:p-4">
            <div className="relative p-2 group cursor-pointer">
              <div className="relative mx-auto h-16 w-16 mb-4 text-gray-600 group-hover:text-blue-500 transform  transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <img
                  src={Rocket}
                  className="h-10 w-10"
                  alt="Top Software Company in Hyderabad"
                />
              </div>
              <h3 className="relative text-md font-medium mb-2 text-gray-500 group-hover:text-blue-500 ">
                Cutting-Edge Technology Solutions
              </h3>
              <p className="relative text-gray-500 text-justify">
                Innowide Technologies is among the top software companies in
                Hyderabad, known for delivering innovative solutions. As one of
                the best software companies Hyderabad offers, we stand out among
                leading IT companies at Hyderabad.
              </p>
            </div>

            <div className="p-2 cursor-pointer group">
              <div className="mx-auto h-16 w-16 mb-4 text-gray-600 group-hover:text-blue-500 transform  transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <img
                  src={Expert}
                  className="h-14 w-14"
                  alt="Top Software Company in Hyderabad"
                />
              </div>
              <h3 className="text-md font-medium mb-2 text-gray-500 group-hover:text-blue-500">
                Expertise and Experience
              </h3>
              <p className="text-gray-500 mb-4 text-justify">
                At Innowide Technologies, one of the top software companies in
                Hyderabad, our skilled team delivers innovative solutions,
                positioning us among the best software companies Hyderabad and
                leading IT companies at Hyderabad.
              </p>
            </div>

            <div className="p-2 group cursor-pointer">
              <div className="mx-auto h-16 w-16 mb-4 text-gray-600 group-hover:text-blue-700 transform  transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <img
                  src={Cogs}
                  className="h-14 w-14"
                  alt="Top Software Company in Hyderabad"
                />
              </div>
              <h3 className="text-md font-medium mb-2 text-gray-500 group-hover:text-blue-700 ">
                Customized Strategies
              </h3>
              <p className="text-gray-500 text-justify">
                At Innowide Technologies, among the top software companies in
                Hyderabad, we deliver customized solutions tailored to your
                needs, earning our place as one of the best software companies
                and IT companies at Hyderabad.
              </p>
            </div>

            <div className="p-2 group">
              <div className="mx-auto h-16 w-16 mb-4 text-gray-500 group-hover:text-blue-700 transform transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <img
                  src={Star}
                  className="h-14 w-14"
                  alt="Top Software Company in Hyderabad"
                />
              </div>
              <h3 className="text-md font-medium mb-2 text-gray-500 group-hover:text-blue-700 ">
                Commitment to Excellence
              </h3>
              <p className="text-gray-500 text-justify">
                At Innowide Technologies, one of the top software companies in
                Hyderabad, we uphold excellence in every project, positioning us
                among the best software companies and leading IT companies at
                Hyderabad with innovative solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* digital marketingservices */}
      <div className="py-12 md:mb-6 lg:mt-10">
        <h2 className="text-center text-xl md:text-3xl font-medium text-slate-800 mb-8 animate-fadeInUp font-serif">
          Digital Marketing Services
        </h2>
        <div className="px-4 lg:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex flex-col shadow-sm rounded-md p-4 group max-w-md mx-auto mt-2 h-full">
              <div className="flex flex-col flex-grow">
                <img
                  src={SEO}
                  alt="Top software companies in Hyderabad best software companies hyderabad it companies at hyderabad"
                  className="h-12 w-14 md:h-16 md:w-20 mx-auto text-green-500 group-hover:text-blue-500 mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                  Search Engine Optimization
                </h2>
                <p className="text-md mb-4 text-start">
                  Our SEO services encompass a comprehensive approach, including
                  keyword research, on-page optimization, and high-quality
                  content creation.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <Link to="/seo">
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
                    onClick={scrollToTop}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col shadow-sm rounded-md p-4 group max-w-md mx-auto mt-2 h-full">
              <div className="flex flex-col flex-grow">
                <img
                  src={SEM}
                  alt="Top Software Company in Hyderabad best software companies hyderabad it companies at hyderabad"
                  className="h-12 w-14 md:h-16 md:w-20 mx-auto text-blue-600 group-hover:text-blue-500 mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                  Social Media Marketing
                </h2>
                <p className="text-md mb-4 text-start">
                  We manage every aspect of your social media presence, from
                  developing engaging content and scheduling posts to monitoring
                  interactions and analyzing performance metrics.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <Link to="/socialmarketing">
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
                    onClick={scrollToTop}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col shadow-sm rounded-md p-4 group max-w-md mx-auto mt-2 h-full">
              <div className="flex flex-col flex-grow">
                <img
                  src={SMM}
                  alt="Top Software Company in Hyderabad best software companies hyderabad it companies at hyderabad"
                  className="h-12 w-14 md:h-16 md:w-20 mx-auto text-blue-600 group-hover:text-blue-500 mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                  Social Media Management
                </h2>
                <p className="text-md mb-4 text-start">
                  We oversee every facet of your social media presence, from
                  creating interesting material and planning postings to keeping
                  an eye on interactions and evaluating performance indicators.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <Link to="/socialmarketing">
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
                    onClick={scrollToTop}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col shadow-sm rounded-md p-4 group max-w-md mx-auto mt-2 h-full">
              <div className="flex flex-col flex-grow">
                <img
                  src={Emial}
                  alt="Top Software Company in Hyderabad best software companies hyderabad it companies at hyderabad"
                  className="h-12 w-14 md:h-16 md:w-20 mx-auto text-orange-500 group-hover:text-blue-500 mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                  Email Marketing
                </h2>
                <p className="text-md mb-4 text-start">
                  Our email marketing services start with a thorough
                  understanding of your business goals and customer segments. We
                  design tailored email strategies.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <Link to="/emailmarketing">
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
                    onClick={scrollToTop}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col shadow-sm rounded-md p-4 group max-w-md mx-auto mt-2 h-full">
              <div className="flex flex-col flex-grow">
                <img
                  src={Affilate}
                  alt="Top Software Company in Hyderabad best software companies hyderabad it companies at hyderabad"
                  className="h-12 w-14 md:h-16 md:w-20 mx-auto text-purple-500 group-hover:text-blue-500 mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                  Affiliate Marketing
                </h2>
                <p className="text-md mb-4 text-start">
                  Affiliate Marketing is a strategic approach that leverages
                  partnerships to drive sales and increase brand visibility
                  through external promoters or affiliates.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <Link to="/affilatemarketing">
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
                    onClick={scrollToTop}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col shadow-sm rounded-md p-4 group max-w-md mx-auto mt-2 h-full">
              <div className="flex flex-col flex-grow">
                <img
                  src={Mobile}
                  alt="Top Software Company in Hyderabad best software companies hyderabad it companies at hyderabad"
                  className="h-12 w-14 md:h-16 md:w-20  mx-auto text-teal-500 group-hover:text-blue-500 mb-4"
                />
                <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                  Mobile Marketing
                </h2>
                <p className="text-md mb-4 text-start">
                  We focus on creating seamless mobile experiences, from
                  responsive website designs to engaging mobile applications
                  that enhance user interaction.
                </p>
              </div>
              <div className="flex justify-center mt-auto">
                <Link to="/mobilemarketing">
                  <button
                    className="text-white bg-blue-500 hover:bg-blue-400 rounded-md px-4 py-2"
                    onClick={scrollToTop}
                  >
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center bg-gray-100 py-10 md:mt-6 lg:mt-10">
        <div className="md:w-1/2 w-full px-4">
          <Slider {...settings}>
            <div className="md:ml-20 md:p-10">
              <img
                className="d-block  rounded-md md:h-96 md:w-96 lg:h-[80vh] lg:w-[60vw] lg:-ml-14"
                src={img1}
                alt="Top Software Company in Hyderabad best software companies hyderabad it companies at hyderabad"
              />
            </div>
            <div className="md:ml-20 md:p-10">
              <img
                className="d-block  rounded-md md:h-96 md:w-96 lg:h-[80vh] lg:w-[60vw] lg:-ml-14"
                src={img2}
                alt="Top Software Company in Hyderabad best software companies hyderabad it companies at hyderabad"
              />
            </div>
            <div className="md:ml-20 md:p-10">
              <img
                className="d-block  rounded-md md:h-96 md:w-96 lg:h-[80vh] lg:w-[60vw] lg:-ml-14"
                src={img3}
                alt="Top Software Company in Hyderabad best software companies hyderabad it companies at hyderabad"
              />
            </div>
          </Slider>
        </div>
        <div className="md:w-1/2 w-full px-4 lg:h-[85vh]">
          <h2 className="text-center text-xl md:text-3xl font-medium text-slate-800 mb-8 animate-fadeInUp font-serif">
            Why Innowide Technologies?
          </h2>
          <div className="space-y-8">
            <div className="flex">
              <div className="ml-4 hover:bg-slate-50 p-2 rounded-md ease-in-out">
                <h2 className="text-lg font-semibold text-blue-500">
                  Expertise
                </h2>
                <p className="text-gray-600 text-justify">
                  Innowide Technologies, among the top software companies in
                  Hyderabad, leads in website design with a highly experienced
                  team. Our IT professionals deliver outstanding results, making
                  us one of the best software companies Hyderabad and IT
                  companies at Hyderabad.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="ml-4 hover:bg-slate-50 p-2 rounded-md ease-in-out">
                <h2 className="text-lg font-semibold text-blue-500">Support</h2>
                <p className="text-gray-600 text-justify">
                  At Innowide Technologies, one of the top software companies in
                  Hyderabad, we prioritize exceptional support, delivering
                  tailored services to meet your needs. As one of the best
                  software companies Hyderabad and leading IT companies at
                  Hyderabad, we ensure seamless experiences.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="ml-4 hover:bg-slate-50 p-2 rounded-md ease-in-out">
                <h2 className="text-lg font-semibold text-blue-500">
                  Implementation
                </h2>
                <p className="text-gray-600 text-justify">
                  Innowide Technologies, one of the top software companies in
                  Hyderabad, ensures minimal disruption through rigorous testing
                  and quality assurance. Our meticulous approach, as one of the
                  best software companies Hyderabad and leading IT companies at
                  Hyderabad, guarantees smooth transitions and peak performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonial slider */}
      <div className="mx-6 py-6 lg:h-[85vh] flex justify-center items-center">
        <Testimonial />
      </div>
      {/* form div */}
      <div className="md:flex md:flex-wrap bg-slate-300 lg:h-[85vh]">
        <div className="p-4 md:w-1/2 lg:w-1/2 bg-none">
          <img
            src={Hand}
            alt="Top Software Company in Hyderabad"
            className="image-container w-full max-w-lg rounded-md"
          />
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/2  ">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-center text-black md:mt-6 font-serif">
            Get a Quotation Now
          </h2>
          <p className="mb-4 text-justify">
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
                className=" py-2 px-4 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-lg "
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

export default Home;
