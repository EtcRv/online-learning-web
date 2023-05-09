import React from "react";
import "./SliderTop.css"
import slide1 from "../../assets/image/slide1.jpg"
import slide2 from "../../assets/image/slide2.jpg"
 function SliderTop () {
    return(
  < div id="carouselExampleControlsNoTouching"  className="carousel slide w-100 h-30 container" data-bs-touch="false" data-bs-interval="false">
  <div id="carouselExampleControlsNoTouching"  className="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div  className="carousel-inner">
    <div  className="carousel-item active">
      <img src={slide1}  className="d-block w-100" alt="..."/>
    </div>
    <div  className="carousel-item">
      <img src={slide2}  className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button  className="carousel-control-prev btn-dark" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span  className="carousel-control-prev-icon " aria-hidden="true"></span>
    <span  className="visually-hidden">Previous</span>
  </button>
  <button  className="carousel-control-next btn-dark" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span  className="carousel-control-next-icon" aria-hidden="true"></span>
    <span  className="visually-hidden">Next</span>
  </button>
</div>
  </div>
  )
}
export default SliderTop;
