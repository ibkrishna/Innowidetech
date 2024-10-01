import React from "react";
import Connect from "../assets/Images/Connect.png";
import Growth from "../assets/Images/Growth.png";
import Market from "../assets/Images/market.png";
import Global from "../assets/Images/global.png";
import KPI from "../assets/Images/kpih.jpeg";
import Key from "../assets/Images/key.jpeg";
import Revenue from "../assets/Images/revenue.jpeg";
import Mission from "../assets/Images/mission.jpg";
import Global1 from "../assets/Images/global.jpeg";
import { FaRegCheckCircle } from "react-icons/fa";
import CustomerSupport from "../assets/Images/customersupport.png";
import Scroll from "./rightscroll/Scroll";
import AboutUs from "../assets/Images/aboutus.png";

function About() {
  return (
    <>
      <div className="w-full overflow-hidden flex items-center justify-center lg:h-[30vh]">
        <img src={AboutUs} alt="About Us" className="w-full object-cover" />
      </div>
      <div className="hidden">
        <h1>About Us</h1>
      </div>
      <div className="p-4 md:px-8 lg:px-12">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-black font-serif mt-6">
          Our Mission and Vision
        </h2>
        <p className="text-wrap text-justify mt-4">
          <span className="font-semibold">Innowide Technologies</span> is a
          leading provider of web and mobile application development services.
          Innowide Software Solutions has worked with the very best in terms of
          talent, which in turn has enabled our valued clients across the globe
          to scale new heights{" "}
          <span className="font-semibold">
            website to e-commerce software development
          </span>
          . We have provided{" "}
          <span className="font-semibold">Software Services</span> for both
          short-term and long-term projects. Our success is driven by our
          exceptional team of talented and experienced developers, whose
          expertise has empowered our clients worldwide to reach new heights.
          From custom website solutions to comprehensive e-commerce platforms,
          our skilled professionals deliver innovative software solutions that
          cater to both short-term needs and long-term goals.
        </p>

        <p className="text-wrap text-justify mt-4">
          We have strong experience in{" "}
          <span className="font-semibold">
            Web Development and Mobile App Development
          </span>{" "}
          in Hyderabad for small-scale and large-scale companies. Whether you
          require a dynamic website, a content management system, or a complex
          web application, our skilled developers use the latest technologies
          and best practices to create user-friendly, responsive, and
          high-performance websites. We tailor each project to align with your
          business goals, ensuring that your website not only looks great but
          also functions seamlessly across all devices and platforms. <span className="hidden">about us</span>
        </p>
      </div>

      <div className="p-4 md:px-8 lg:px-12 bg-slate-100 lg:h-auto">
        <h3 className="text-xl md:text-2xl lg:text-3xl font-medium text-black font-serif mt-6">
          Our Investment Focus
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {[
            {
              img: Connect,
              title: "Outstanding Teams",
              description:
                "Partner with us to benefit from the collective expertise and unwavering dedication of our outstanding teams.",
            },
            {
              img: Growth,
              title: "Differentiated Solution",
              description:
                "Partner with Innowide Technologies to benefit from our commitment to delivering solutions that are not only effective but also distinctively.",
            },
            {
              img: Market,
              title: "Deep Markets",
              description:
                "Our expertise in analyzing and penetrating these markets allows us to offer tailored solutions that address the unique needs of niche industries.",
            },
            {
              img: Global,
              title: "Global Applicability",
              description:
                "We leverage our expertise to develop versatile and scalable technologies that can be seamlessly adapted to various regions and industries.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-4 shadow transform hover:scale-105 transition-transform duration-500 lg:mb-14 md:mb-10"
            >
              <img
                src={item.img}
                alt='about us'
                className="rounded-sm mx-auto lg:h-[10vh] md:h-[13vh] p-2"
              />
              <label className="font-semibold grid justify-center mt-2 text-black">
                {item.title}
              </label>
              <label className="text-justify mt-2 text-black">
                {item.description}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="p-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center mt-10">
        <div className="lg:w-1/3">
          <img src={Mission} alt="about us" className="w-full rounded-lg" />
        </div>
        <div className="lg:w-2/3 lg:ml-8 mt-6 lg:mt-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-black font-serif">
            Our Mission
          </h2>
          <p className="text-justify mt-4 text-base md:text-lg leading-relaxed">
            At Innowide Technologies, our mission is to empower businesses
            through innovative technology solutions that drive growth and
            success. We are dedicated to delivering exceptional software, web,
            and mobile applications tailored to meet the unique needs of each
            client. Our focus is on harnessing cutting-edge technology and
            industry expertise to create solutions that are not only effective
            but also transformative. By prioritizing client satisfaction and
            fostering a collaborative approach, we strive to build lasting
            partnerships and contribute to the success of businesses worldwide.
            Our mission is to be a trusted partner in your journey towards
            digital excellence and business advancement.
          </p>
        </div>
      </div>

      <div className="p-4 md:px-8 lg:px-12 mt-10 bg-slate-100">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-black font-serif mb-4">
          Value to Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              img: KPI,
              title: "KPI’s Setup",
              description:
                "Setting up Key Performance Indicators (KPIs) is crucial for measuring and driving your business success.",
            },
            {
              img: Revenue,
              title: "Revenue Contributors",
              description:
                "We focus on identifying and maximizing your revenue contributors—key factors and activities that drive your business's financial success.",
            },
            {
              img: Global1,
              title: "Global Positioning",
              description:
                "We excel in enhancing your global positioning to ensure your brand stands out in the international market.",
            },
            {
              img: Key,
              title: "Key Networks",
              description:
                "We recognize the importance of building and leveraging key networks to drive business success.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-md p-4 shadow transform hover:scale-105 transition-transform duration-500 lg:mb-14 md:mb-10"
            >
              <img
                src={item.img}
                alt='about us'
                className="rounded-sm mx-auto lg:h-[10vh] md:h-[13vh] p-2"
              />
              <label className="font-semibold grid justify-center mt-2 text-black">
                {item.title}
              </label>
              <label className="text-justify mt-2 text-black">
                {item.description}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row p-6  lg:mt-10">
        <div className="flex-1 p-4">
          <div className="grid gap-4">
            <h2 className="md:text-3xl font-medium text-lg">
              Why we Choose Innowide Technologies
            </h2>
            <h2 className="md:text-xl font-medium">
              Pioneering Excellence for Your Success
            </h2>
            <p>
              At Innowide Technologies, we combine pioneering technology with
              industry insight to craft bespoke software solutions. Our
              dedication guarantees outstanding outcomes that propel your
              business and foster sustainable growth. Customized Software
              Aligned with Your Unique Business Goals. Advanced Tools and
              Approaches Customized for Your Specific Needs. Expert
              Professionals Delivering Dependable Solutions and Complete Client
              Support.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:mt-4">
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <label className="flex-1 font-extralight">
                  Customized Software Aligned with Your Unique Business Goals
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <label className="flex-1 font-extralight">
                  Advanced Tools and Approaches Customized for Your Specific
                  Needs
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <label className="flex-1 font-extralight">
                  Expert Professionals Delivering Dependable Solutions and
                  Complete Client Support
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <label className="flex-1 font-extralight">
                  Personalized Software Designed to Fit Your Specific Business
                  Objectives.
                </label>
              </div>
              <div className="flex items-start space-x-3">
                <FaRegCheckCircle className="rounded-full" />
                <label className="flex-1 font-extralight">
                  Innovative Tools and Strategies Tailored for Your Business
                  Needs.
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-4">
          <img
            src={CustomerSupport}
            alt="about us"
            className="lg:h-[70vh] lg:w-[50vw]"
          />
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

export default About;
