import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hand from "../../assets/Images/hand.png";
import { IoMdArrowDropright } from "react-icons/io";
import Emial from "../../assets/Images/email1.png";
import Email2 from "../../assets/Images/email2.jpeg";
import Email3 from "../../assets/Images/email3.jpeg";
import Emailslide1 from "../../assets/Images/emailslide3.png";
import Emailslide2 from "../../assets/Images/emailslide1.png";
import Emailslide3 from "../../assets/Images/emailside2.png";
import Standard from "../../assets/Images/rules.png";
import Stratergy from "../../assets/Images/Starteg.png";
import secure from "../../assets/Images/360.png";
import Enhance from "../../assets/Images/enhance.png";
import Boost from "../../assets/Images/boost.png";
import Scroll from "../rightscroll/Scroll";
import Emailmarketing from "../../assets/Images/emailmarketing.png";

//first slide i.e gain from innowide
const services = [
  {
    title: "Strategic Planning & Execution",
    description:
      "Innowide Technologies is committed to overcoming challenges seamlessly with our top-tier strategic planning. Our approach begins with crafting innovative web.",
    img: Stratergy,
  },
  {
    title: "Enhanced UI/UX Design",
    description:
      "If your web applications disappoint or confuse end-users, then it is challenging to maintain your customer’s loyalty for your website. We help you achieve intuitive navigation.",
    img: Enhance,
  },
  {
    title: "Adherence to Coding Standards",
    description:
      "We prioritize strategic planning in web app development, ensuring strict adherence to all coding guidelines and programming standards. Our approach focuses on delivering.",
    img: Standard,
  },
  {
    title: "Comprehensive Security Measures",
    description:
      "Web designers strive a lot when it comes to the security of your website. We promise to enhance security through WordPress Security Plugins, enabling SSL.",
    img: secure,
  },
  {
    title: "Boost Engagement & Retention",
    description:
      "The ultimate goal of our efforts in building a website is to enhance its engagement factor. We aim to make visitors stay, browse, interact, and eventually become loyal customers.",
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
    title: "Email Marketing Campaign ",
    description:
      "An email marketing campaign enables businesses to design, manage, and monitor their email efforts. It offers tools for crafting templates, audience segmentation, and performance analysis. Utilizing platforms like Mailchimp and Constant Contact exemplifies the capabilities of the best email marketing services in Hyderabad.",
    image: Emial,
  },
  {
    title: "Automated Email Response ",
    description:
      "Automated email responses enhance communication by managing inquiries and follow-ups efficiently, ensuring timely replies. This capability is essential for consistent customer service, as seen with the best email marketing services in Hyderabad.",
    image: Email2,
  },
  {
    title: "Transactional Email ",
    description:
      "Transactional emails are automated messages triggered by user actions, like order confirmations and password resets. They deliver vital information and maintain engagement, highlighting the expertise of the best email marketing agency in Hyderabad.",
    image: Email3,
  },
];

const images = [Emailslide1, Emailslide2, Emailslide3];

function EmailMarketing() {
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
          src={Emailmarketing}
          alt="Best email marketing agency in hyderabad Best email marketing services in hyderabad	Top email marketing companies in hyderabad"
          className="w-full object-cover"
        />
      </div>
      <div className="container mx-auto py-6 px-10 flex flex-col md:flex-row items-start md:justify-evenly space-y-8 md:space-y-0 md:space-x-8">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-medium text-slate-700 animate-slide-in-left">
            Best email marketing services in hyderabad
          </h1>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-expand"></div>
          </div>
          <div className="grid gap-2 p-2">
            <div className="flex items-center mt-4">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Strategy and Planning</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Design and Content Creation</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Automation and Campaign Setup</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Analysis and Optimization</label>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-700 text-justify animate-slide-in-right mt-2">
            Email marketing is a potent strategy employed by top email marketing
            companies in Hyderabad. It involves sending targeted emails to
            promote products and engage potential customers. Key stages include
            audience targeting, goal setting, content creation, automated
            campaigns, and performance analysis, provided by the best email
            marketing agency in Hyderabad.
          </p>

          <p className="text-gray-500 text-justify animate-slide-in-right">
            Content creation in email marketing emphasizes visually appealing
            designs and persuasive copy to enhance engagement. This includes
            integrating with CRM systems, segmenting email lists, and using
            tracking tools. Partnering with the best email marketing agency in
            Hyderabad ensures effective audience reach and achievement of goals,
            positioning us among the top email marketing companies in Hyderabad.
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
          <h2 className="text-2xl md:text-3xl font-medium text-slate-700 animate-slide-in-left">
            <span className="relative block md:inline">
              Benefits of Email Marketing
            </span>
          </h2>
          <div className="relative">
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shrink-expand"></div>
          </div>
          <div className="grid gap-2 p-2">
            <div className="flex items-center mt-4">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Cost-Effective Promotion</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Targeted Audience Reach</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Measurable Results</label>
            </div>
            <div className="flex items-center">
              <IoMdArrowDropright className="mr-2" />
              <label className="text-lg">Enhanced Customer Engagement</label>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-700 text-justify animate-slide-in-right mt-2">
            Email marketing offers significant advantages for businesses seeking
            effective audience engagement. It provides a cost-efficient method
            to promote products and services, yielding high ROI with minimal
            investment. Targeted campaigns enable personalized messaging,
            enhancing relevance and impact, which is a hallmark of the best
            email marketing services in Hyderabad and top email marketing
            companies in Hyderabad.
          </p>

          <p className="text-gray-500 text-justify animate-slide-in-right">
            Email marketing boosts customer engagement by sending personalized
            content directly to subscribers' inboxes, fostering a direct
            communication channel. This approach nurtures customer loyalty and
            strengthens the relationship between brands and their audience,
            showcasing the effectiveness of the best email marketing services in
            Hyderabad and top email marketing companies in Hyderabad.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:h-[85vh] lg:mt-10">
        <div className="w-full md:w-3/4 bg-gray-100 p-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-center text-black md:mt-6 font-serif">
            We Offers
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
            alt="Top email marketing companies in hyderabadBest email marketing agency in hyderabadBest email marketing services in hyderabad	"
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
                    alt="Top email marketing companies in hyderabad Best email marketing agency in hyderabad Best email marketing services in hyderabad	"
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
            alt="Top email marketing companies in hyderabad Best email marketing agency in hyderabad Best email marketing services in hyderabad	"
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

export default EmailMarketing;
