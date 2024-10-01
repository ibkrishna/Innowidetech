import React from "react";
import Slider from "react-slick";
import EHR from "../assets/Images/elee.png";
import Customer from "../assets/Images/customer.jpeg";
import Cloud from "../assets/Images/cloudd.jpg";
import Digital from "../assets/Images/digital.jpg";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};

function Sliders() {
  return (
    <Slider {...sliderSettings}>
      <div className="relative">
        <div className="grid grid-cols bg-slate-800 rounded-md p-2">
          <img src={EHR} alt="EHR" className="rounded-sm mx-auto" />
          <label className="font-medium text-lg grid justify-center mt-2">
            Electronic Health Records System
          </label>
          <label className="text-justify mb-4 inline-block mt-2">
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            dummy text of the printing and typesetting industry. Lorem Ipsum has
          </label>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols bg-slate-800 rounded-md p-2">
          <img
            src={Customer}
            alt="Customer"
            className="rounded-sm mx-auto md:h-[38vh]"
          />
          <label className="font-medium text-lg grid justify-center mt-2">
            Enhanced Customer Experience
          </label>
          <label className="text-justify mb-4 inline-block mt-2">
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            dummy text of the printing and typesetting industry. Lorem Ipsum has
          </label>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols bg-slate-800 rounded-md p-2">
          <img
            src={Cloud}
            alt="Cloud"
            className="rounded-sm mx-auto md:h-[38vh]"
          />
          <label className="font-semibold grid justify-center mt-2">
            Cloud Solution for Pharma Analytics
          </label>
          <label className="text-justify mb-4 inline-block mt-2">
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            dummy text of the printing and typesetting industry. Lorem Ipsum has
          </label>
        </div>
      </div>

      <div className="relative">
        <div className="grid grid-cols bg-slate-800 rounded-md p-2">
          <img
            src={Digital}
            alt="Digital"
            className="rounded-sm mx-auto md:h-[38vh]"
          />
          <label className="font-semibold grid justify-center mt-2">
            Digital Marketing for Industries
          </label>
          <label className="text-justify mb-4 inline-block mt-2">
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            dummy text of the printing and typesetting industry. Lorem Ipsum has
          </label>
        </div>
      </div>
    </Slider>
  );
}

export default Sliders;
