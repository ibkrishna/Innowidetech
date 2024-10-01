import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../animation.css";
import Hand from "../../assets/Images/hand.png";
import Rideme from "../../assets/Images/rideme.png";
import Ecom from "../../assets/Images/ecom.png";
import Food from "../../assets/Images/food.png";
import Enterprise from "../../assets/Images/enterprise.png";
import Custom from "../../assets/Images/custom.png";
import Edu from "../../assets/Images/edu.png";
import Business from "../../assets/Images/business.png";
import { IoMdArrowDropright } from "react-icons/io";
import Stratergy from "../../assets/Images/Starteg.png";
import Standard from "../../assets/Images/rules.png";
import secure from "../../assets/Images/360.png";
import Enhance from "../../assets/Images/enhance.png";
import Scroll from "../rightscroll/Scroll";
import SoftwareDevelopment1 from "../../assets/Images/softwaredevelopment.png";

//for slider
const services = [
  {
    title: "Premium Strategy Makers",
    description:
      "Innowide Technologies crafts top-tier strategies to overcome obstacles. We start with a creative strategy and follows best approach",
    img: Stratergy,
  },

  {
    title: "Coding Guidelines, Standards & Rules",
    description:
      "Adhering to strict coding guidelines and standards is crucial for web app development. ",
    img: Standard,
  },
  {
    title: "You Are Secured 360",
    description:
      "Ensure your website's security with our comprehensive approach. We implement WordPress Security Plugins.",
    img: secure,
  },
  {
    title: "Enhance The Engaging Factor",
    description:
      "Our goal is to maximize your website's engagement. We design features that keep visitors browsing, interacting.",
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

//for second slider
const services1 = [
  {
    title: "Enterprise Software",
    description:
      "As the best software development company in Hyderabad, we create sophisticated software solutions for large organizations, emphasizing scalability, security, and integration with existing systems. Our tailored features enhance operational efficiency and drive business growth, positioning us among the top software companies in Hyderabad.",
    image: Enterprise,
  },
  {
    title: "Educational Software",
    description:
      "As the best software development company in Hyderabad, we create innovative educational tools and platforms that enhance learning experiences with engaging content, interactive features, and user-friendly assessments, establishing us among the top software companies in Hyderabad.",
    image: Edu,
  },
  {
    title: "Business Software",
    description:
      "As the best software development company in Hyderabad, we implement advanced software solutions that optimize business processes, customize features for streamlined operations, and effectively manage data, placing us among the top software companies in Hyderabad.",
    image: Business,
  },
  {
    title: "Custom Software",
    description:
      "As the best software development company in Hyderabad, we design and develop bespoke software solutions tailored to your specific needs, featuring personalized functions, intuitive interfaces, and seamless integrations, positioning us among the top software companies in Hyderabad.",
    image: Custom,
  },
];

//for main slider in the middle of page

const images = [Rideme, Ecom, Food];

function SoftwareDevelopment() {
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
          src={SoftwareDevelopment1}
          alt="Best Software Development Company in Hyderabad"
          className="w-full object-cover"
        />
      </div>

      <div className="container mx-auto py-6 px-10 flex flex-col md:flex-row items-start md:justify-evenly space-y-8 md:space-y-0 md:space-x-8">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-medium text-slate-700 animate-slide-in-left">
            <span className="relative block md:inline">
              Best Software company in {" "}
              <span className="block md:inline">Hyderabad</span>
            </span>
          </h1>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-expand"></div>
          </div>
          <div className="grid gap-2 p-2">
            <div className="flex items-center mt-4">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Creating Solutions</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Adapting to Change</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Team Collaboration</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">User Focus</label>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-4 animate-slide-in-right mt-2">
          <h2 className="text-gray-700 text-justify leading-relaxed ">
          Innowide Technologies, the best software development company in Hyderabad, uses Agile methodologies to design, create, test, and maintain software solutions, making us a leader among the top software companies in Hyderabad.
          </h2>
          <h2 className="text-gray-500 text-justify leading-relaxed">
          As the best software development company in Hyderabad, implements Agile methodologies to design, create, test, and maintain software solutions, establishing ourselves as a leader among the top software companies in Hyderabad.
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

      <div className="container mx-auto py-8 px-10 flex flex-col md:flex-row items-start md:justify-evenly space-y-8 md:space-y-0 md:space-x-8 lg:mt-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 animate-slide-in-left">
            <span className="relative block md:inline">
              Why Choose Innowide As Your{" "}
              <span className="block md:block">
                Software Development Company?
              </span>
            </span>
          </h2>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-expand"></div>
          </div>
          <div className="grid gap-2 p-2">
            <div className="flex items-center mt-4">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">
                Expert team with extensive experience in the latest
                technologies.
              </label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">
                Custom solutions tailored to meet your specific business needs.
              </label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">
                Commitment to delivering projects on time and within budget.
              </label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">
                Exceptional support and maintenance services post-delivery.
              </label>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-4 animate-slide-in-right mt-2">
          <h2 className="text-gray-700 text-justify leading-relaxed">
          Selecting the best software development company in Hyderabad means collaborating with a dedicated team. Our expertise across technologies ensures tailored solutions that fulfill your unique needs, placing us among the top software companies in Hyderabad.
          </h2>
          <h2 className="text-gray-500 text-justify leading-relaxed">
          As the best software development company in Hyderabad, we maintain strict quality standards, providing reliable, secure software. Our comprehensive services ensure seamless execution, placing us among the top software companies in Hyderabad.
          </h2>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:h-[85vh] lg:mt-10">
        <div className="w-full md:w-3/4 bg-gray-100 p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-center text-black md:mt-6 font-serif">
            Software Development
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
            alt="Best software development company hyderabad	Top software companies in hyderabad"
            className="w-full md:w-[30vw] md:h-[40vh] mb-4"
          />
          <h3 className="text-2xl md:text-3xl font-medium mb-2 md:mt-4 text-center">
            {selectedService.title}
          </h3>
          <p className="text-gray-600 text-justify md:mt-4">
            {selectedService.description}
          </p>
        </div>
      </div>

      <div className="w-full h-screen px-4 py-12 bg-gray-100 md:mt-4 md:h-[60vh] lg:h-[85vh] lg:mt-10">
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
                    alt="Best Software Development Company in Hyderabad Top software companies in hyderabad"
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

      <div className="md:flex md:flex-wrap bg-slate-300 lg:h-[85vh]">
        <div className="p-4 md:w-1/2 lg:w-1/2 bg-none">
          <img
            src={Hand}
            alt="Best Software Development Company in Hyderabad Top software companies in hyderabad"
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

export default SoftwareDevelopment;
