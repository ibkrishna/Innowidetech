import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Carousel from "react-bootstrap/Carousel";
import "./animation.css";

const TestimonialSlider = () => {
  return (
    <div className="flex flex-wrap justify-between p-6 rounded-md w-full mx-auto">
      <div className="w-full lg:w-1/2 p-4">
        <h2 className="text-center text-xl md:text-3xl font-medium text-slate-800 mb-8 animate-fadeInUp font-serif">
          What Our Clients Say!
        </h2>
        <p className="text-gray-600 mb-4">
          Our team of professionals is committed to ensuring your business
          excels in the digital era. Partner with us to reach your fullest
          potential.Innowide Technologies excels in delivering groundbreaking
          technology solutions. Our mission is to enhance business success
          through innovative technology.
        </p>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-400">
          Read More
        </button>
      </div>
      <div className="w-full lg:w-1/2 p-4 bg-sky-100">
        <Carousel>
          <Carousel.Item className="relative flip-in">
            <div className="flex flex-col items-center text-center">
              <FaUserCircle className="text-4xl mb-2 text-blue-500" />
              <h3 className="text-lg">Aditya</h3>
              <h2 className="text-sm text-black mb-4">CEO</h2>
              <p className="text-black">
                I think even if I did the research mentioned above, it would be
                a total waste of money because if those people don't believe in
                the testimonials, they won't believe in the research at all.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="relative flip-in">
            <div className="flex flex-col items-center text-center">
              <FaUserCircle className="text-4xl mb-2 text-blue-500" />
              <h3 className="text-lg bg-sky-100">Ankith</h3>
              <h2 className="text-sm text-slate-500 mb-4">CFO</h2>
              <p className="text-black bg-sky-100">
                Even with thorough research backing the claims, it's likely to
                be a wasted effort if the audience is not already inclined to
                trust the testimonials. Sometimes, beliefs are hard to change
                regardless of the evidence provided.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="relative flip-in">
            <div className="flex flex-col items-center text-center">
              <FaUserCircle className="text-4xl mb-2 text-blue-500" />
              <h3 className="text-lg bg-sky-100">Raju</h3>
              <h2 className="text-sm text-black mb-4">CTO</h2>
              <p className="text-black bg-sky-100">
                Investing in further research might not yield the desired impact
                if the audience is not open to believing in the testimonials.
                People often stick to their views despite the available
                evidence.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item className="relative flip-in">
            <div className="flex flex-col items-center text-center">
              <FaUserCircle className="text-4xl mb-2 text-blue-500" />
              <h3 className="text-lg bg-sky-100">Mary</h3>
              <h2 className="text-sm text-black mb-4">CTO</h2>
              <p className="text-black bg-sky-100">
                While detailed research is valuable, it might not sway those who
                doubt the testimonials. If someone is skeptical of personal
                experiences, they may not be convinced by additional research
                alone.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialSlider;
