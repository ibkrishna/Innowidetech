import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegCheckCircle } from "react-icons/fa";
import Blockchain1 from "../../assets/Images/blockchain1.jpg";
import Blockkk from "../../assets/Images/blockk.jpg";
import BB from "../../assets/Images/bb.jpg";
import Hand from "../../assets/Images/hand.png";
import Enhance from "../../assets/Images/enhance.png";
import Stratergy from "../../assets/Images/Starteg.png";
import secure from "../../assets/Images/360.png";
import coding from "../../assets/Images/coding.png";
import Scroll from "../rightscroll/Scroll";
import Blockchaindevelopment from "../../assets/Images/blockchaindevelopment.png";

const services = [
  {
    title: "Premium Strategy Makers",
    description:
      "Innowide Technologies will help you overcome challenges smoothly with our top-tier strategic planning. We prioritize crafting cutting-edge web app development strategies before focusing on effective execution .",
    img: Stratergy,
  },
  {
    title: "Better UI And UX",
    description:
      "If your web applications frustrate or confuse users, it can be difficult to retain their loyalty. We assist in creating intuitive navigation to enhance the user experience and ensure greater satisfaction with your website.",
    img: coding,
  },
  {
    title: "You Are Secured 360",
    description:
      "Web designers work diligently to ensure your website's security. We are committed to enhancing protection by developing WordPress security plugins, implementing SSL encryption, and setting up FTPS for secure file transfers. ",
    img: secure,
  },
  {
    title: "Enhance The Engaging Factor",
    description:
      "Our dedicated efforts in website development aim to boost engagement. We design sites to captivate visitors, encouraging them to explore, interact, and ultimately become loyal customers.",
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

function Blockchain() {
  return (
    <>
      <div className="w-full overflow-hidden flex items-center justify-center lg:h-[30vh]">
        <img
          src={Blockchaindevelopment}
          alt="Top blockchain development solutions Best blockchain development services"
          className="w-full object-cover"
        />
      </div>
      <div className="md:flex md:flex-wrap md:justify-evenly">
        <div className="p-4 md:w-1/2 lg:w-1/2">
          <h1 className="text-xl font-medium mb-2">
            Best blockchain development services
          </h1>
          <div className="">
            <p className="mb-2 text-justify">
              Over the past decade, blockchain has emerged as a key
              technological advancement, though its core principles can be
              challenging to understand. Essentially, blockchain serves as a
              permanent, immutable, and transparent system for recording data
              and transactions. Once data is entered, it cannot be altered or
              deleted, ensuring transparency for all users. Our expertise in
              this area positions us among the best blockchain development
              services and top blockchain development solutions.
            </p>
          </div>
        </div>
        <div className="p-4 rounded-br-xl rounded-tl-xl">
          <img
            src={Blockchain1}
            alt="Blockchain1"
            className="md:w-[30vw] md:h-[40vh] w-full rounded-md"
          />
        </div>
      </div>
      <div className="md:flex md:flex-wrap md:justify-evenly md:mt-6 lg:mt-10">
        <div className="p-4 rounded-br-xl rounded-tl-xl">
          <img
            src={Blockkk}
            alt="Top blockchain development solutions Best blockchain development services"
            className="md:w-[30vw] md:h-[40vh] w-full rounded-md"
          />
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/2">
          <h1 className="text-xl font-medium mb-2">
            Top blockchain development solutions
          </h1>
          <p className="mb-2 text-justify">
            In the last decade, blockchain has emerged as a significant
            technological advancement, though many find its principles
            challenging to understand. Essentially, blockchain serves as a
            permanent, immutable, and transparent data recording system. Once
            data is entered, it cannot be changed or deleted, allowing everyone
            with access to view its contents, ensuring transparency. We offer
            the best blockchain development services and top blockchain
            development solutions.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-6 md:mt-6 lg:mt-10">
        <div className="flex-1 p-4">
          <div className="grid gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-black md:mt-6 font-serif">
              How Can Businesses Benefit from Blockchain?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-4">
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">
                    Reduced Risk and Lower Compliance Costs
                  </h2>
                  <p className="font-extralight text-start">
                    Outdated KYC processes cost banks significantly; we offer
                    the best blockchain development services and top blockchain
                    development solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Cost-Efficient Transactions</h2>
                  <p className="font-extralight text-start">
                    Digitizing records saves time and costs; we provide the best
                    blockchain development services and top blockchain
                    development solutions.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">
                    Automated and Secure Contract Fulfillment
                  </h2>
                  <p className="font-extralight text-start">
                    Smart contracts are programmed instructions embedded within
                    tokens on a blockchain that automatically execute when
                    predefined conditions are met.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Indelible Audit Trail</h2>
                  <p className="font-extralight text-start">
                    Blockchain enables companies to establish a permanent audit
                    trail by recording transactions in a continuous and
                    unalterable sequence. This technology supports systems that
                    manage both static records.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">
                    Enhanced Data Tracking and Security
                  </h2>
                  <p className="font-extralight text-start">
                    Blockchain enables companies to trace transactions to their
                    current status, pinpointing the exact origin and destination
                    of data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <img
            src={BB}
            alt="Top blockchain development solutions Best blockchain development services"
            className="w-full max-w-lg rounded-md lg:h-[60vh]"
          />
        </div>
      </div>

      <div className="w-full h-auto px-4 py-12 bg-gray-100 md:mt-4  lg:mt-10">
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
                    alt="Top blockchain development solutions Best blockchain development services"
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
            alt="Top blockchain development solutions Best blockchain development services"
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

export default Blockchain;
