import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../../assets/image/slide1.jpg"
import slide2 from "../../../assets/image/slide2.jpg"
import "./SliderTop.css"

export default function SliderTop() {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,
  };
  return (
    <>
 <div className="mx-[80px] px-[24px] slider-top">
 <Slider {...settings}>
          <div>
            <img src={slide1} />
          </div>
          <div>
          <img src={slide2} />
          </div>
        </Slider>

 </div>
    
    </>
    
  );
}