import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCousera from "../../ReUse/CardCousera/CardCousera"
import "./Couseras.css"




export default function Couseras() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       infinite: true,
    //       dots: true
    //     }
    //   },
    //   {
    //     breakpoint: 600,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 2,
    //       initialSlide: 2
    //     }
    //   },
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1
    //     }
    //   }
    // ]
  };
  return (
    <>
 <div className="couseras mx-[35px] px-[24px] mt-[64px] mb-[96px]">
        <h2 className="mb-[16px] mx-[45px]">Students are viewing</h2>
        {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider> */}

        <Slider {...settings}>
          <div className="m-auto">
            <CardCousera></CardCousera>
          </div>
          <div className="m-auto">
          <CardCousera></CardCousera>
          </div>
          <div className="m-auto">
          <CardCousera></CardCousera>
          </div>
          <div className="m-auto">
          <CardCousera></CardCousera>
          </div>
          <div className="m-auto">
          <CardCousera></CardCousera>
          </div>
          <div className="m-auto">
          <CardCousera></CardCousera>
          </div>
          <div className="m-auto">
          <CardCousera></CardCousera>
          </div>
          <div className="m-auto">
          <CardCousera></CardCousera>
          </div>
        </Slider>
      </div>
    
    </>
    
  );
}