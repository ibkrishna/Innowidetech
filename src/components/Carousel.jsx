import Carousel from "react-bootstrap/Carousel";
import "./animation.css";
import Banner1 from "../assets/Images/banner1.png";
import Banner2 from "../assets/Images/banner2.png";
import Banner3 from "../assets/Images/banner3.png";

function Carousels() {
  return (
    <Carousel controls indicators interval={2000} pause={false}>
      <Carousel.Item className="relative flip-in">
        <div className="relative lg:h-[90vh] w-full overflow-hidden flex items-center justify-center">
          <img
            src={Banner1}
            alt="Top Software Company in Hyderabad"
            className="object-cover w-full h-full"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item className="relative flip-in">
        <div className="relative lg:h-[90vh] w-full overflow-hidden flex items-center justify-center">
          <img
            src={Banner2}
            alt="Top Software Company in Hyderabad"
            className="object-cover w-full h-full"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item className="relative flip-in">
        <div className="relative lg:h-[90vh] w-full overflow-hidden flex items-center justify-center">
          <img
            src={Banner3}
            alt="Top Software Company in Hyderabad"
            className="object-cover w-full h-full"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
