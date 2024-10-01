import React, { useState, useEffect } from "react";
import {
  FaArrowUp,
  FaArrowDown,
  FaWhatsapp,
  FaTimesCircle,
} from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

function Scroll() {
  const [showTopArrow, setShowTopArrow] = useState(false);
  const [showBottomArrow, setShowBottomArrow] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;

      if (scrollPosition > 300) {
        setShowTopArrow(true);
        setShowBottomArrow(false);
      } else {
        setShowTopArrow(false);
        setShowBottomArrow(true);
      }

      if (scrollPosition + windowHeight >= bodyHeight - 50) {
        setShowTopArrow(true);
        setShowBottomArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  const handleIconClick = (type) => {
    if (type === "whatsapp") {
      window.open("https://wa.me/917075541674", "_blank");
    } else if (type === "phone") {
      window.location.href = "tel:+917075541674";
    } else {
      setPopupContent(type);
      setShowPopup(true);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showTopArrow && (
        <div
          className="fixed bottom-10 right-0 bg-blue-600 text-white p-3 rounded-full cursor-pointer"
          onClick={scrollToTop}
        >
          <FaArrowUp size={14} />
        </div>
      )}

      {showBottomArrow && (
        <div
          className="fixed bottom-10 right-0 bg-blue-600 text-white p-3 rounded-full cursor-pointer"
          onClick={scrollToBottom}
        >
          <FaArrowDown size={14} />
        </div>
      )}

      <div className="fixed right-0 top-2/3 flex flex-col items-center space-y-4 z-50 bg-slate-700 rounded-l-md">
        <div
          className="p-2 rounded-full shadow-md hover:bg-gray-200 cursor-pointer"
          onClick={() => handleIconClick("phone")}
        >
          <FaPhone size={30} className="text-blue-400" />
        </div>
        <div
          className="p-2 rounded-full shadow-md hover:bg-gray-200 cursor-pointer"
          onClick={() => handleIconClick("whatsapp")}
        >
          <FaWhatsapp size={30} className="text-green-500" />
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-300 p-6 rounded-lg shadow-lg relative max-w-md md:h-[30vh] w-full">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={handleClosePopup}
            >
              <FaTimesCircle
                className="text-gray-600 hover:text-gray-900"
                size={30}
              />
            </button>
            <h2 className="text-lg font-bold mb-4">
              {popupContent === "phone"
                ? "Innowide Technologies"
                : "Innowide Technologies"}
            </h2>
            <p>
              {popupContent === "phone"
                ? "Contact us on +91 7075541674"
                : "You can message us on WhatsApp at +91 7075541674"}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Scroll;
