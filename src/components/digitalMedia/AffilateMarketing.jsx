import React from "react";
import Affilate1 from "../../assets/Images/affilate.jpg";
import Affilate2 from "../../assets/Images/affilate1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegCheckCircle } from "react-icons/fa";
import Sec from "../../assets/Images/affilatee.png";
import AffilateStategy from "../../assets/Images/affilatestrategy.png";
import Affilatenetwork from "../../assets/Images/affilatenetwork.png";
import Rules from "../../assets/Images/rules.png";
import Stratergy from "../../assets/Images/Starteg.png";
import Standard from "../../assets/Images/rules.png";
import secure from "../../assets/Images/360.png";
import Enhance from "../../assets/Images/enhance.png";
import Boost from "../../assets/Images/boost.png";
import Hand from "../../assets/Images/hand.png";
import Scroll from "../rightscroll/Scroll";
import Affilatemarketing from "../../assets/Images/affilatemarketing.png";

const services = [
  {
    title: "Effective Affiliate Strategy",
    description:
      "Manage the complexities of affiliate marketing with a strategy customized to your objectives. We pinpoint the best partners and design campaigns aimed at increasing conversions.",
    img: Stratergy,
  },
  {
    title: "Optimized Performance Metrics",
    description:
      "Boost your affiliate marketing success by focusing on optimizing performance metrics. Our approach involves a thorough analysis of key data to refine your campaigns.",
    img: Boost,
  },
  {
    title: "Compliance and Best Practices",
    description:
      "Adhere to top compliance and best practices in affiliate marketing. Our transparent, ethical approach aligns with industry regulations, ensuring all activities meet high standards.",
    img: Standard,
  },
  {
    title: "Robust Security Measures",
    description:
      "Secure your affiliate marketing with our robust measures. We ensure safe tracking of links and protect sensitive data, safeguarding your business and affiliates from potential threats.",
    img: secure,
  },
  {
    title: "Enhanced Engagement Strategies",
    description:
      "Boost user engagement with our effective affiliate strategies. We create compelling content and incentives to drive interaction.converting customers.",
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

function AffilateMarketing() {
  return (
    <>
      <div className="w-full overflow-hidden flex items-center justify-center lg:h-[30vh]">
        <img
          src={Affilatemarketing}
          alt="Best Affiliate marketing company in hyderabad"
          className="w-full object-cover"
        />
      </div>
      <div className="md:flex md:flex-wrap md:justify-evenly">
        <div className="p-4 md:w-1/2 lg:w-1/2">
          <h1 className="text-xl font-medium mb-2">
            Best Affiliate marketing company in hyderabad
          </h1>
          <div className="">
            <p className="mb-2 text-justify">
              Affiliate marketing is a results-oriented strategy that rewards
              affiliates for generating traffic or sales. This approach
              capitalizes on affiliates' influence, making it central to the
              best affiliate marketing company in Hyderabad. media, and other
              channels to boost business performance.
            </p>
            <p className="text-justify">
              Affiliate marketing can be implemented through channels like
              blogs, social media, and email. Leading programs are managed via
              platforms such as Amazon Associates, highlighting the expertise of
              the best affiliate marketing company in Hyderabad.
            </p>
          </div>

          <h2 className="text-blue-600 font-medium md:mt-6">
            "Affiliate marketing turns your passion into profit."
          </h2>
        </div>

        <div className="p-4">
          <img
            src={Affilate1}
            alt="Best Affiliate marketing company in hyderabad"
            className="md:w-[30vw] md:h-[40vh] rounded-md w-full"
          />
        </div>
      </div>
      <div className="md:flex md:flex-wrap md:justify-evenly lg:mt-10">
        <div className="p-4">
          <img
            src={Affilate2}
            alt="Best Affiliate marketing company in hyderabad"
            className="md:w-[30vw] md:h-[40vh] rounded-md w-full"
          />
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/2">
          <h2 className="text-xl font-medium mb-2">
            How does Affiliate Marketing Help?
          </h2>
          <p className="mb-2 text-justify">
            Affiliate marketing significantly boosts a business's reach and
            revenue. Collaborating with affiliates opens doors to new audiences,
            enhancing brand visibility and driving traffic, making it essential
            for the best affiliate marketing company in Hyderabad.
          </p>
          <p className=" mb-2 text-justify">
            Affiliate marketing strengthens credibility and trust as affiliates
            influence purchasing decisions through their reviews and
            endorsements, building brand reputation, a key service offered by
            the best affiliate marketing company in Hyderabad.
          </p>
        </div>
      </div>
      <div className="w-full h-auto px-4 py-12 bg-gray-100 lg:mt-10">
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
                    alt="Best Affiliate marketing company in hyderabad"
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

      <div className="py-12 md:mb-6 lg:h-[85vh] lg:mt-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-center text-black md:mt-6 font-serif">
          How We Enhance Your Affiliate Marketing
        </h2>
        <div className="container mx-auto px-4 lg:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-2 group">
              <img
                src={AffilateStategy}
                alt="Best Affiliate marketing company in hyderabad"
                className="md:h-16 md:w-16 lg:h-20"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Affiliate Strategy Development
              </h2>
              <p className="text-md mb-4 text-justify">
                We design comprehensive affiliate marketing strategies tailored
                to your business goals. Our approach includes identifying the
                right affiliates.
              </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-2 group">
              <img
                src={Boost}
                alt="Best Affiliate marketing company in hyderabad"
                className="md:h-16 md:w-16 lg:h-20"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Performance Tracking
              </h2>
              <p className="text-md mb-4 text-justify">
                We provide detailed performance tracking and analytics to
                measure the effectiveness of your affiliate campaigns.
              </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-2 group">
              <img
                src={Rules}
                alt="Best Affiliate marketing company in hyderabad"
                className="md:h-16 md:w-16 lg:h-20"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Compliance and Guidelines
              </h2>
              <p className="text-md mb-4 text-justify">
                We ensure all affiliate marketing practices comply with industry
                standards and guidelines. Our services include managing
                affiliate relationships.
              </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-2 group">
              <img
                src={Affilatenetwork}
                alt="Best Affiliate marketing company in hyderabad"
                className="md:h-16 md:w-16 lg:h-20"
              />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Affiliate Network Management
              </h2>
              <p className="text-md mb-4 text-justify">
                We manage and optimize your affiliate network, ensuring
                effective partnerships and maximizing your affiliate program’s
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6 bg-gray-100 md:mt-6 lg:-mt-16">
        <div className="flex-1 p-4">
          <div className="grid gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-black md:mt-6 font-serif">
              Common Affiliate Marketing Challenges for Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-4">
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-black rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Finding the Right Affiliates</h2>
                  <p className="font-extralight text-start">
                    Finding affiliates aligned with your brand and audience is
                    challenging. Best affiliate marketing company in Hyderabad
                    can help.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-black rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">
                    Managing Affiliate Relationships
                  </h2>
                  <p className="font-extralight text-start">
                    Building strong affiliate relationships requires ongoing
                    support from the best affiliate marketing company in
                    Hyderabad.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-black rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">
                    Tracking Performance Accurately
                  </h2>
                  <p className="font-extralight text-start">
                    Accurate affiliate tracking is essential, provided by the
                    best affiliate marketing company in Hyderabad.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-black rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">
                    Ensuring Compliance and Transparency
                  </h2>
                  <p className="font-extralight text-start">
                    Legal compliance and transparency are vital for the best
                    affiliate marketing company in Hyderabad.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="text-black rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Adapting to Market Changes</h2>
                  <p className="font-extralight text-start">
                    The best affiliate marketing company in Hyderabad adapts to
                    evolving trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <img
            src={Sec}
            alt="Best Affiliate marketing company in hyderabad"
            className="w-full rounded-md lg:h-[60vh] lg:w-[40vw] md:h-[40vh]"
          />
        </div>
      </div>

      <div className="md:flex md:flex-wrap bg-slate-300">
        <div className="p-4 md:w-1/2 lg:w-1/2 bg-none">
          <img
            src={Hand}
            alt="Best Affiliate marketing company in hyderabad"
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

export default AffilateMarketing;
