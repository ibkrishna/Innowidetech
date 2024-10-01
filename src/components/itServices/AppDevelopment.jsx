import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hand from "../../assets/Images/hand.png";
import Social from "../../assets/Images/social.png";
import Enterprise from "../../assets/Images/elee.jpg";
import Game from "../../assets/Images/gaming.jpg";
import { IoMdArrowDropright } from "react-icons/io";
import App1 from "../../assets/Images/app1.png";
import App2 from "../../assets/Images/app2.png";
import App3 from "../../assets/Images/app3.png";
import Enhance from "../../assets/Images/enhance.png";
import Stratergy from "../../assets/Images/Starteg.png";
import Boost from "../../assets/Images/boost.png";
import Standard from "../../assets/Images/rules.png";
import Scroll from "../rightscroll/Scroll";
import Applicationdevelopment from "../../assets/Images/applicationdevelopment.png";

//first slide
const services = [
  {
    title: "Strategic Planning & Execution",
    description:
      "At Innowide Technologies, we ensure you overcome all obstacles seamlessly with our top-tier strategic planning. We prioritize crafting innovative web app development strategies.",
    img: Stratergy,
  },
  {
    title: "Enhanced UI/UX Design",
    description:
      "If your web applications frustrate or confuse users, retaining their loyalty can be difficult. We specialize in creating intuitive navigation to enhance user experience and ensure satisfaction.",
    img: Enhance,
  },
  {
    title: "Adherence to Coding Standards",
    description:
      "We take a strategic approach to web app development, meticulously adhering to coding guidelines and programming standards. This ensures that every project meets high-quality benchmarks.",
    img: Standard,
  },
  {
    title: "Boost Engagement & Retention",
    description:
      "Our primary goal in website development is to boost engagement. We design sites to captivate visitors, encouraging them to explore, interact, and ultimately convert into loyal customers.",
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
    title: "Social Media App",
    description:
      "Social media apps connect users through messaging and posts, fostering communities, showcasing our expertise as one of the best app development companies in Hyderabad.",
    image: Social,
  },
  {
    title: " Enterprise App",
    description:
      "Enterprise apps enhance operations for large organizations, improving productivity and integration, highlighting our expertise as the best app development companies in Hyderabad.",
    image: Enterprise,
  },
  {
    title: " Gaming App",
    description:
      "We create immersive games with engaging storylines and high-quality graphics, showcasing our expertise as one of the best app development companies in Hyderabad.",
    image: Game,
  },
];

const images = [App1, App2, App3];

function AppDevelopment() {
  const [isExpanding, setIsExpanding] = useState(true);
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
          src={Applicationdevelopment}
          alt="Best app development companies in hyderabad"
          className="w-full object-cover"
        />
      </div>
      <div className="container mx-auto py-6 px-10 flex flex-col md:flex-row items-start md:justify-evenly space-y-8 md:space-y-0 md:space-x-8">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 animate-slide-in-left">
            Best app development companies in hyderabad
          </h2>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-expand"></div>
          </div>
          <div className="grid gap-2 p-2">
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg mt-2">Idea and Planning</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg mt-2">Design and Prototyping</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg mt-2">Development and Coding</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg mt-2">Testing and Deployment</label>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-700 text-justify animate-slide-in-right">
            App development involves creating software for mobile devices and
            digital platforms, encompassing stages like planning, design,
            coding, testing, and deployment. In the planning phase, developers
            identify the app's purpose, target audience, and essential features,
            showcasing our expertise as one of the best app development
            companies in Hyderabad.
          </p>
          <p className="text-gray-500 text-justify animate-slide-in-right">
            During the development phase, developers write code using languages
            like Swift, Kotlin, or JavaScript. Our expertise in this process
            positions us among the best app development companies in Hyderabad.
          </p>
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
          <h1 className="text-2xl md:text-3xl font-medium text-slate-700 animate-slide-in-left">
            <span className="relative block md:inline">
              Benefits of App Development
            </span>
          </h1>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-expand"></div>
          </div>
          <div className="grid gap-2 p-2">
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg mt-2">Increased Accessibility</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg mt-2">Enhanced User Experience</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg mt-2">
                Brand Visibility and Loyalty
              </label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg mt-2">
                Business Growth Opportunities
              </label>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-700 text-justify animate-slide-in-right">
            App development provides significant benefits for businesses,
            enhancing user engagement with personalized experiences and
            improving brand visibility. As one of the best app development
            companies in Hyderabad, we create apps that facilitate targeted
            promotions, utilize device features for innovative functions, and
            drive revenue through in-app purchases and subscriptions.
          </p>
          <p className="text-gray-500 text-justify animate-slide-in-right">
            At Innowide, we maintain high-quality standards for reliable, secure
            software. As one of the best app development companies in Hyderabad,
            our services cover strategy development to ongoing support,
            emphasizing scalability and transparent communication.
          </p>
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
            alt="Best app development companies in hyderabad"
            className="w-full md:w-[30vw] md:h-[40vh] mb-4 rounded-md"
          />
          <h3 className="text-2xl md:text-3xl font-medium mb-2 md:mt-4 text-center">
            {selectedService.title}
          </h3>
          <p className="text-gray-600 text-justify md:mt-4">
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
                    alt="Best app development companies in hyderabad"
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

      <div className="md:flex md:flex-wrap bg-slate-300">
        <div className="p-4 md:w-1/2 lg:w-1/2 bg-none">
          <img
            src={Hand}
            alt="Best app development companies in hyderabad"
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

export default AppDevelopment;
