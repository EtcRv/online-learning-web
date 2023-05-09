import React from "react";
import "./Couseras.css"

const Couseras = () => {
  return (
  <div className="container">
    <h2 className="title">Couseras</h2>
  <div className="row">
  <div  className=" col-3" >
  <img  className="card-img-top" src="https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg" alt=""/>
  <div  className="card-body">
    <h5  className="card-title">Automate the Boring Stuff with Python Programming</h5>
    <p  className="card-text">Al Sweigart</p>
  </div>
  <ul  className="list-group list-group-flush">
    <li  className="list-group-item">₫349,000</li>
  </ul>
</div>
<div  className=" col-3" >
  <img  className="card-img-top" src="https://img-c.udemycdn.com/course/240x135/567828_67d0.jpg" alt=""/>
  <div  className="card-body">
    <h5  className="card-title">The Complete Python Bootcamp From Zero to Hero in Python</h5>
    <p  className="card-text">Jose Portillal</p>
  </div>
  <ul  className="list-group list-group-flush">
    <li  className="list-group-item">₫499,000</li>
  </ul>
</div>
<div  className=" col-3" >
  <img  className="card-img-top" src="https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg" alt=""/>
  <div  className="card-body">
    <h5  className="card-title">{`Machine Learning A-Z™: AI, Python & R + ChatGPT Bonus [2023]`}</h5>
    <p  className="card-text">Kirill Eremenko, Hadelin de Ponteves, Ligency I Team, Ligency Team</p>
  </div>
  <ul  className="list-group list-group-flush">
    <li  className="list-group-item">₫399,000</li>
  </ul>
</div>
<div  className=" col-3" >
  <img  className="card-img-top" src="https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg" alt=""/>
  <div  className="card-body">
    <h5  className="card-title">100 Days of Code: The Complete Python Pro Bootcamp for 2023</h5>
    <p  className="card-text">Dr. Angela Yu</p>
  </div>
  <ul  className="list-group list-group-flush">
    <li  className="list-group-item">₫449,000</li>
  </ul>
</div>





  </div>


  {/* <h1>This is Couseras</h1> */}
  </div>
  );
};

export default Couseras;
