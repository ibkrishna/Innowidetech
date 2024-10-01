import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hand from "../../assets/Images/hand.png";
import Seo from "../../assets/Images/Seo.png";
import On from "../../assets/Images/on.png";
import Off from "../../assets/Images/off.png";
import Technical from "../../assets/Images/technical.png";
import { IoMdArrowDropright } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import Conversion from "../../assets/Images/conversion.png";
import Indepth from "../../assets/Images/indepth.png";
import SEOslide from "../../assets/Images/seoslide.png";
import Boost from "../../assets/Images/boost.png";
import Scroll from "../rightscroll/Scroll";
import Seoslide1 from "../../assets/Images/seoslides.png";
import Seoslide2 from "../../assets/Images/seoslide2.png";
import Seoslide3 from "../../assets/Images/seoslide3.png";
import Seacrchengineopti from "../../assets/Images/searchengineopti.png";

//for 1st slider
const services = [
  {
    title: "In-Depth Competitive Analysis for SEO",
    description:
      "The keywords we select often face significant competition, as they are commonly targeted by many companies. Our team assesses both the strengths and weaknesses of your current strategy.",
    img: Indepth,
  },
  {
    title: "SEO-Optimized Content Enhancement",
    description:
      "As a leading SEO company in Hyderabad, we offer expert content development services that create SEO-optimized and captivating content for your website. Our skilled content writers ensure that your material remains relevant.",
    img: SEOslide,
  },
  {
    title: "Conversion Rate Optimization Strategies",
    description:
      "We apply strategic methods in web app development while strictly following coding guidelines and standards. This approach is designed to improve the conversion rates of your web application projects.",
    img: Conversion,
  },
  {
    title: "Boosting Website Engagement and Retention",
    description:
      "We focus on enhancing your site's engagement by motivating visitors to explore, interact, and ultimately become loyal customers. Our goal is to create a compelling user experience that drives deeper involvement.",
    img: Boost,
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

//for second slider

const services1 = [
  {
    title: "On Page SEO",
    description:
      "Maximize your Suite Commerce webstore’s potential with tailored services from the best digital marketing agency in Hyderabad and top digital marketing companies, providing the best digital marketing services near you.",
    image: On,
  },
  {
    title: "Off Page SEO",
    description:
      "Enhance your business reach with expert mobile app development from the best digital marketing agency in Hyderabad, delivering top digital marketing services near you. ",
    image: Off,
  },
  {
    title: "Technical SEO",
    description:
      "Streamline payment processes with our gateway integration services from the best digital marketing agency in Hyderabad, offering top digital marketing solutions near you.",
    image: Technical,
  },
];

const images = [Seoslide1, Seoslide2, Seoslide3];

function SearchEngineopti() {
  const [selectedService, setSelectedService] = useState(services1[0]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle previous slide
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  // Function to handle next slide
  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className="w-full overflow-hidden flex items-center justify-center lg:h-[30vh]">
        <img
          src={Seacrchengineopti}
          alt="Best digital marketing agency in hyderabad Top digital marketing companies in Hyderabad Best digital marketing services near me"
          className="w-full object-cover"
        />
      </div>

      <div className="container mx-auto py-6 px-10 flex flex-col md:flex-row items-start md:justify-evenly space-y-8 md:space-y-0 md:space-x-8">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-medium text-slate-700 animate-slide-in-left">
            Best digital marketing agency in hyderabad
          </h1>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-expand"></div>
          </div>
          <div className="grid gap-2 p-2">
            <div className="flex items-center mt-4">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">
                Keyword Research and Integration
              </label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">On-Page Optimization</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Technical SEO</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Link Building and Authority</label>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-4 animate-slide-in-right mt-2">
          <h2 className="text-gray-700 text-justify leading-relaxed ">
            As the best digital marketing agency in Hyderabad, we focus on SEO
            to improve websites and secure high rankings through organic
            searches instead of relying on paid advertising. Our expertise
            positions us among the top digital marketing companies in Hyderabad,
            offering the best digital marketing services near you.
          </h2>
          <h2 className="text-gray-500 text-justify leading-relaxed ">
            Selecting the right website platform is crucial for effective SEO.
            As the best digital marketing agency in Hyderabad, we recommend
            user-friendly platforms like Wix for their customization options,
            easy content updates, and integrated SEO tools. This expertise
            places us among the top digital marketing companies in Hyderabad,
            providing the best digital marketing services near you.
          </h2>
        </div>
      </div>

      <div className="bg-slate-100 py-10 px-4 sm:px-10 lg:mt-10">
        <div className="relative w-full max-w-screen-lg mx-auto">
          <div
            className="w-full h-64 sm:h-80 md:h-[80vh] bg-cover bg-center transition-transform duration-500 ease-in-out rounded-md"
            style={{ backgroundImage: `url(${images[currentIndex]})` }}
          ></div>
          <div
            className="absolute top-1/2 -left-8 sm:-left-20 text-black h-10 w-10 text-center rounded-full bg-slate-400 text-2xl cursor-pointer z-10"
            onClick={prevSlide}
          >
            ❮
          </div>
          <div
            className="absolute top-1/2 -right-8 sm:-right-20 text-black rounded-full bg-slate-400 text-2xl text-center h-10 w-10 cursor-pointer z-10"
            onClick={nextSlide}
          >
            ❯
          </div>
        </div>
      </div>

      <div className="container mx-auto py-6 px-10 flex flex-col md:flex-row items-start md:justify-evenly space-y-8 md:space-y-0 md:space-x-8 lg:mt-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 animate-slide-in-left">
            <span className="relative block md:inline">
              How does SEO works ?
            </span>
          </h2>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-expand"></div>
          </div>
          <div className="grid gap-2 p-2">
            <div className="flex items-center mt-4">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Crawling and Indexing</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Understand User Intent</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Ranking Alogorithms</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Displaying Results</label>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-4 animate-slide-in-right mt-2">
          <h2 className="text-gray-700 text-justify leading-relaxed ">
            As the best digital marketing agency in Hyderabad, we recognize that
            search engines deploy bots to crawl and assess webpages online.
            These bots analyze various content types, including text, images,
            and videos, to determine the subject matter of each page. This
            knowledge helps us stand out among the top digital marketing
            companies in Hyderabad, offering the best digital marketing services
            near you.
          </h2>

          <h2 className="text-gray-500 text-justify leading-relaxed ">
            As the best digital marketing agency in Hyderabad, we know that
            search engines use bots to scan and evaluate web pages. These bots
            analyze content, including text, images, and videos, to understand
            each page's topic, highlighting our expertise among the top digital
            marketing companies in Hyderabad and providing the best digital
            marketing services near you.
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:h-[80vh] md:mb-4 lg:mt-10">
        <div className="w-full md:w-3/4 bg-gray-100 p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-center text-black md:mt-6 font-serif">
            We Provide SEO Services
          </h2>
          <ul className="grid justify-center items-center py-10">
            {services1.map((service, index) => (
              <li
                key={index}
                className={`cursor-pointer mb-4 p-2 border-l-4 md:text-2xl ${
                  selectedService.title === service.title
                    ? "border-green-500 text-orange-500"
                    : "border-gray-300 text-gray-500"
                }`}
                onClick={() => setSelectedService(service)}
              >
                {service.title}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full md:w-2/3 p-6 flex flex-col items-center">
          <img
            src={selectedService.image}
            alt="Best digital marketing agency in hyderabad Top digital marketing companies in Hyderabad Best digital marketing services near me"
            className="w-full md:w-[30vw] md:h-[45vh] object-cover mb-4"
          />
          <h3 className="text-2xl md:text-3xl font-medium mb-2 md:mt-4 text-center">
            {selectedService.title}
          </h3>
          <p className="text-gray-600 md:mt-4 text-justify">
            {selectedService.description}
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
                    alt="Best digital marketing agency in hyderabad Best digital marketing services near me Top digital marketing companies in Hyderabad"
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

      <div className="bg-white p-6 rounded-lg shadow-md max-w-7xl mx-auto my-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          <div className="w-full lg:w-2/3 lg:pr-8">
            <h2 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-4">
              Common SEO Challenges for Businesses
            </h2>
            <p className="text-gray-600 mb-6">
              Optimizing search engine visibility can be challenging, especially
              for startups competing with established companies. Common SEO
              hurdles include:
            </p>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <FaRegCheckCircle className="bg-slate-300 rounded-full mr-2" />
                Unawareness of deceptive SEO practices
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="bg-slate-300 rounded-full mr-2" />
                Lack of knowledge about current SEO strategies
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="bg-slate-300 rounded-full mr-2 h-4 w-6 md:w-auto" />
                Confusion between social media and SEO among some agencies
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="bg-slate-300 rounded-full mr-2" />
                Insufficient budget planning
              </li>
              <li className="flex items-center">
                <FaRegCheckCircle className="bg-slate-300 rounded-full mr-2 h-4 w-6 md:h-auto md:w-auto" />
                Frustration with slow SEO progress
              </li>
            </ul>

            <p className="text-gray-600">
              These issues are particularly evident in the early stages of
              website optimization. Overcoming them necessitates a strategic SEO
              plan and expert guidance from the best digital marketing agency in
              Hyderabad, ensuring access to top digital marketing companies and
              the best digital marketing services near you.
            </p>
          </div>

          <div className="w-full lg:w-1/3 mt-6 lg:mt-0 flex justify-center">
            <img
              src={Seo}
              alt="Best digital marketing agency in hyderabad Top digital marketing companies in Hyderabad Best digital marketing services near me"
              className="w-full max-w-sm"
            />
          </div>
        </div>

        <div className="mt-8 text-center lg:text-left">
          <blockquote className="text-blue-600 text-lg font-semibold">
            "Successful SEO is not about tricking google. It's about partnering
            with google to provide the best search results for google's users."
          </blockquote>
        </div>
      </div>

      <div className="md:flex md:flex-wrap bg-slate-300 lg:h-[85vh]">
        <div className="p-4 md:w-1/2 lg:w-1/2 bg-none">
          <img
            src={Hand}
            alt="Best digital marketing agency in hyderabad Top digital marketing companies in Hyderabad Best digital marketing services near me"
            className="image-container w-full max-w-lg rounded-md"
          />
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/2 ">
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

export default SearchEngineopti;
