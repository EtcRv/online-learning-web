import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardCousera from "../../ReUse/CardCousera/CardCousera";
import "./Couseras.css";

const data = [
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
  {
    courseImg: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    title:
      " Apple Watch Series 7 GPS, Aluminium Case, Starlight Spordasfasfasdfasdfafsaggabsafasfserw4efadf à we eawf we fwef t",
    teacherName: "Jose Potilla",
    rating: "5.0",
    numberStudent: "462,590",
    price: "12,199,000",
  },
];

export default function Couseras() {
  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    initialSlide: 0,
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
        <Slider {...settings}>
          {data.map((item, idx) => (
            <div className="m-auto" key={idx}>
              <CardCousera data={item}></CardCousera>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
