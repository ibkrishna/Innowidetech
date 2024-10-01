import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../animation.css";
import Hand from "../../assets/Images/hand.png";
import Mobb from "../../assets/Images/mobb.png";
import Mobb2 from "../../assets/Images/mobb2.png";
import Mobb3 from "../../assets/Images/mobb3.png";
import { IoMdArrowDropright } from "react-icons/io";
import Sms from "../../assets/Images/sms.jpg";
import Smss from "../../assets/Images/smss.png";
import Scroll from "../rightscroll/Scroll";
import Mobilemarketing from "../../assets/Images/mobilemarketing.png";
import Stratergy from "../../assets/Images/Starteg.png";
import secure from "../../assets/Images/360.png";
import Enhance from "../../assets/Images/enhance.png";
import Boost from "../../assets/Images/boost.png";
import coding from "../../assets/Images/coding.png";

//for slider
const services = [
  {
    title: "Targeted Mobile Campaigns",
    description:
      "Innowide Technologies crafts targeted mobile marketing campaigns designed to reach your audience effectively. We develop strategies that leverage data.",
    img: Enhance,
  },
  {
    title: "Optimized Mobile UI/UX",
    description:
      "Enhance user satisfaction with optimized mobile UI/UX. We ensure that your mobile app or website provides an intuitive, seamless experience, focusing on responsive design.",
    img: coding,
  },
  {
    title: "Mobile Marketing Analytics",
    description:
      "Leverage detailed analytics to evaluate the effectiveness of your mobile marketing initiatives. We deploy tracking tools to assess user behavior, campaign outcomes.",
    img: Boost,
  },
  {
    title: "Comprehensive Mobile Security",
    description:
      "Protect the security of your mobile marketing platforms with our thorough approach. We apply industry best practices for data security, ensure the protection of user information.",
    img: secure,
  },
  {
    title: "Enhanced Mobile Engagement",
    description:
      "Increase user engagement through dynamic mobile features and tailored content. We create and integrate elements that promote user interaction, stimulate app usage.",
    img: Stratergy,
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
    title: "SMS Marketing",
    description:
      "Leverage mobile marketing in Hyderabad through SMS campaigns to deliver timely, personalized messages directly to your audience. Boost engagement with targeted promotions and notifications, while ensuring high delivery rates and measuring effectiveness using comprehensive analytics for continuous improvement.",
    image: Sms,
  },
  {
    title: "WhatsApp Marketing",
    description:
      "Harness mobile marketing in Hyderabad by utilizing WhatsApp to engage customers through a popular messaging platform. Create interactive campaigns, offer personalized support, and share updates, while automating messages and tracking performance to enhance your outreach and effectiveness.",
    image: Smss,
  },
];

//for main slider in the middle of page

const images = [Mobb, Mobb2, Mobb3];

function MobileMarketing() {
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
          src={Mobilemarketing}
          alt="Mobile marketing in Hyderabad"
          className="w-full object-cover"
        />
      </div>

      <div className="container mx-auto py-6 px-10 flex flex-col md:flex-row items-start md:justify-evenly space-y-8 md:space-y-0 md:space-x-8">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-medium text-slate-700 animate-slide-in-left">
            Mobile marketing in Hyderabad
          </h1>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-expand"></div>
          </div>
          <div className="grid gap-2 p-2">
            <div className="flex items-center mt-4">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Targeted Campaigns</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Personalized Messaging</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">App Engagement</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Optimized User Experience</label>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-4 animate-slide-in-right mt-2">
          <p className="text-gray-700 text-justify">
            Mobile marketing in Hyderabad focuses on connecting and engaging
            consumers through smartphones and tablets, using strategies that
            enhance user experiences and boost conversions on mobile platforms
            effectively.
          </p>

          <p className="text-gray-500 text-justify">
            Mobile marketing in Hyderabad utilizes data analytics and
            personalized content to enhance campaign success, allowing
            businesses to tailor messages and offers based on user behavior and
            preferences for better audience engagement.
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

      <div className="container mx-auto py-8 px-10 flex flex-col md:flex-row items-start md:justify-evenly space-y-8 md:space-y-0 md:space-x-8 lg:mt-10">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 animate-slide-in-left">
            <span className="relative block md:inline">
              Why Choose Innowide As Your{" "}
              <span className="block md:block">Mobile Marketing Partner?</span>
            </span>
          </h2>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-expand"></div>
          </div>
          <div className="grid gap-2 p-2">
            <div className="flex items-center mt-4">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">
                Deep expertise in mobile marketing strategies and tools.
              </label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">
                Customized campaigns designed to maximize your mobile ROI.
              </label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">
                Proven track record of increasing user engagement and
                conversions.
              </label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">
                Comprehensive analytics and support for continuous improvement.
              </label>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-4 animate-slide-in-right mt-2">
          <p className="text-gray-700 text-justify">
            Partnering with Innowide for mobile marketing in Hyderabad means
            collaborating with experts focused on your brand's success. We
            create tailored, data-driven campaigns that emphasize creativity and
            a user-centric approach, ensuring impactful results aligned with
            your unique business objectives.
          </p>

          <p className="text-gray-500 text-justify">
            Our dedication to mobile marketing in Hyderabad involves thorough
            analytics and ongoing optimization to align with your business
            goals. We prioritize innovation, maintain transparent communication,
            and have a proven track record of delivering effective results for
            our clients.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:h-[85vh] lg:mt-10">
        <div className="w-full md:w-3/4 bg-gray-100 p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-center text-black md:mt-6 font-serif">
            We Provide Mobile Marketing
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
            alt="Mobile marketing in Hyderabad"
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
                    alt="Mobile marketing in Hyderabad"
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
            alt="Mobile marketing in Hyderabad"
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

export default MobileMarketing;
