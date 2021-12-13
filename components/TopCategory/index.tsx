import { useEffect } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Index = () => {
  const cat = [
    "All",
    "Computer",
    "Server",
    "Lotion",
    "cream",
    "Laptop",
    "Baby",
    "Shirt",
    "Jeans",
    "Light",
    "Ram",
    "Sports",
    "Mobiles",
    "T-shirt",
    "Shoes",
    "Something",
    "Something",
  ];

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 14,
    slidesToScroll: 5,
  };

  return (
    <div className="top-category">
      <Slider
        {...settings}
        centerMode={false}
        arrows={true}
        className="max-w-[1300px]"
      >
        {cat.map((item, index) => {
          return (
            <div
              key={index}
              className="hover:text-[blue] list-none px-5 max-w-max"
            >
              <a href="#">{item}</a>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Index;
