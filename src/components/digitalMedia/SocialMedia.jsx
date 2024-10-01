import React from "react";
import Socialmedia from "../../assets/Images/mediamar.jpeg";
import Content from "../../assets/Images/content.jpeg";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoMdLock } from "react-icons/io";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hand from "../../assets/Images/hand.png";
import { FaRegCheckCircle } from "react-icons/fa";
import Insta from "../../assets/Images/insta.png";
import Scroll from "../rightscroll/Scroll";
import Socialmediamarket from "../../assets/Images/socialmediamarket.png";

const services = [
  {
    title: "Instagram Marketing Strategy",
    description:
      "Innowide Technologies can assist you in navigating the distinct Instagram terrain by providing a customized marketing plan. In order to increase your brand's visibility on this visual medium, we concentrate on developing creative strategies for Instagram growth.",
    icon: <FaInstagram className="text-[#E4405F]" />,
  },
  {
    title: "Facebook User Experience Optimization",
    description:
      "We can assist you if your Facebook profile isn't generating the desired results. Our specialization lies on maximizing user experience through better interaction, navigation, and content optimization.",
    icon: <FaFacebook className="text-[#3b5998]" />,
  },
  {
    title: "LinkedIn Professional Standards & Guidelines",
    description:
      "We adhere to the highest standards when managing your LinkedIn presence. Our focus is on following best practices and coding guidelines to ensure your LinkedIn profile and company page.",
    icon: <FaLinkedin className="text-[#0077B5]" />,
  },
  {
    title: "Twitter Security and Compliance",
    description:
      "Securing your Twitter account is crucial. We ensure your Twitter presence is protected through enhanced security measures, including secure password policies, account verification, and compliance with Twitter’s best practices to safeguard your brand’s reputation.",
    icon: <FaTwitter className="text-[#1DA1F2]" />,
  },
  {
    title: "Enhance Twitter Engagement",
    description:
      "Maximize your Twitter impact with strategies designed to boost engagement. We focus on creating compelling tweets, managing interactions, and using analytics to ensure your Twitter account attracts and retains a loyal audience.",
    icon: <IoMdLock className="text-[#1DA1F2]" />,
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

function SocialMedia() {
  return (
    <>
      <div className="w-full overflow-hidden flex items-center justify-center lg:h-[30vh]">
        <img
          src={Socialmediamarket}
          alt="Best social media marketing agency hyderabad	Top social media marketing agency near me	Best social media agency near me"
          className="w-full object-cover"
        />
      </div>
      <div className="md:flex md:flex-wrap md:justify-evenly">
        <div className="p-4 md:w-1/2 lg:w-1/2">
          <h1 className="text-xl font-medium mb-2">
            Best social media marketing agency hyderabad
          </h1>
          <div className="">
            <p className="mb-2 text-justify">
              Social media marketing focuses on using various platforms to boost
              a brand’s visibility, engage audiences, and achieve business
              objectives. This involves creating and sharing relevant
              content—such as posts, images, videos, and stories—across channels
              like Facebook, Instagram, Twitter, and LinkedIn, tailored to each
              platform's unique features. The strategy also includes managing
              interactions with followers, fostering communities, and utilizing
              paid advertising to reach a wider or more targeted audience,
              making us the best social media marketing agency in Hyderabad and
              one of the top social media marketing agencies near you.
            </p>
          </div>
          <h2 className="text-blue-600 font-medium md:mt-6">
            "Brand is just a perception, and perception will match reality over
            time."
          </h2>
        </div>
        <div className="p-4">
          <img
            src={Socialmedia}
            alt="Best social media marketing agency hyderabad	 Top social media marketing agency near me	Best social media agency near me"
            className="md:w-[30vw] md:h-[35vh] rounded-md"
          />
        </div>
      </div>
      <div className="md:flex md:flex-wrap md:justify-evenly lg:mt-10">
        <div className="p-4">
          <img
            src={Content}
            alt="Best social media marketing agency hyderabad	 Top social media marketing agency near me	 Best social media agency near me"
            className="md:w-[30vw] md:h-[40vh] rounded-md"
          />
        </div>
        <div className="p-4 md:w-1/2 lg:w-1/2">
          <h2 className="text-xl font-medium mb-2">
            How does Social Media helps customers ?
          </h2>
          <p className="mb-2 text-justify">
            Social media offers customers a vibrant platform for interaction,
            engagement, and information sharing. Through these channels,
            customers can easily connect with brands, access real-time updates,
            and receive personalized support. It enables them to engage with
            content that resonates with their interests, join communities of
            like-minded individuals, and participate in discussions about
            products and services, showcasing our expertise as the best social
            media marketing agency in Hyderabad and one of the top social media
            marketing agencies near you.
          </p>
          <p className="text-justify">
            Companies leverage social media for customer support, ensuring quick
            responses and efficient issue resolution, enhancing overall
            satisfaction as the best social media marketing agency in Hyderabad.
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
                  {service.icon}
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

      <div className="py-12 md:mb-6 lg:mt-10">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-4 text-center text-black md:mt-6 font-serif">
          How We Enhance Your Brand Through Social Media Marketing
        </h2>
        <div className="container mx-auto px-4 lg:mt-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-4 group">
              <FaInstagram className="text-[#E4405F] h-10 w-10 mb-4" />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Instagram Marketing
              </h2>
              <p className="text-md mb-4 text-justify">
                Leverage Instagram's visual platform to engage with your
                audience through high-quality images, stories, and influencer
                collaborations.
              </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-4 group">
              <FaFacebook className="text-[#3b5998] h-10 w-10 mb-4" />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Facebook Advertising
              </h2>
              <p className="text-md mb-4 text-justify">
                Utilize Facebook's robust ad system to target specific
                demographics, boost posts, and drive conversions through
                targeted ads.
              </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-4 group">
              <FaLinkedin className="text-[#0077B5] h-10 w-10 mb-4" />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                LinkedIn Networking
              </h2>
              <p className="text-md mb-4 text-justify">
                Build professional connections and enhance your brand's presence
                on LinkedIn through targeted content and strategic networking.
              </p>
            </div>

            <div className="flex flex-col items-center cursor-pointer shadow-md rounded-md p-4 group">
              <FaTwitter className="text-[#1DA1F2] h-10 w-10 mb-4" />
              <h2 className="text-xl font-semibold mb-2 group-hover:text-blue-500 text-center">
                Twitter Engagement
              </h2>
              <p className="text-md mb-4 text-justify">
                Increase your brand's reach on Twitter with effective tweet
                strategies, engaging with followers, and leveraging trending
                hashtags.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6 bg-gray-100 md:mt-6 mt-10">
        <div className="flex-1 p-4">
          <div className="grid gap-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-black md:mt-6 font-serif">
              Common Social Media Marketing Challenges for Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-4">
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Inconsistent Brand Voice</h2>
                  <p className="font-extralight text-start">
                    Many businesses face challenges in maintaining a consistent
                    brand voice across various social media platforms,
                    highlighting the expertise of the best social media
                    marketing agency in Hyderabad.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Navigating Algorithm Changes</h2>
                  <p className="font-extralight text-start">
                    Adapting to the constantly evolving algorithms of social
                    media can be difficult, emphasizing the need for expertise
                    from the best social media marketing agency in Hyderabad.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Measuring ROI</h2>
                  <p className="font-extralight text-start">
                    Evaluating the ROI of social media marketing efforts can be
                    challenging, making it essential to partner with the best
                    social media marketing agency in Hyderabad for accurate
                    insights.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Creating Engaging Content</h2>
                  <p className="font-extralight text-start">
                    Consistently producing engaging content is a significant
                    challenge; merely posting regularly isn’t sufficient. The
                    best social media marketing agency in Hyderabad can help
                    overcome this hurdle.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <div className="flex-1">
                  <h2 className="font-medium">Managing Negative Feedback</h2>
                  <p className="font-extralight text-start">
                    Handling negative feedback while preserving a positive
                    online reputation can be challenging, underscoring the value
                    of the best social media marketing agency in Hyderabad for
                    effective management.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <img
            src={Insta}
            alt="Best social media marketing agency hyderabad	Top social media marketing agency near me	Best social media agency near me"
            className="w-full max-w-lg rounded-md"
          />
        </div>
      </div>

      <div className="md:flex md:flex-wrap bg-slate-300 lg:h-[85vh]">
        <div className="p-4 md:w-1/2 lg:w-1/2 bg-none">
          <img
            src={Hand}
            alt="Best social media marketing agency hyderabad	Top social media marketing agency near me	Best social media agency near me"
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

export default SocialMedia;
