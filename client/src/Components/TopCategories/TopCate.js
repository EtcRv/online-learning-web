import React from "react";
import "./TopCate.css";
const TopCate = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 className="mb-4 title">Top categories</h2>
        <div className="row">
          <div className="col-3">
            <div className="">
              <img
                className="card-img-top"
                src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
                alt=""
              />
              <div className="card-body">
                <span className="card-content">Design</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="">
              <img
                className="card-img-top"
                src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
                alt=""
              />
              <div className="card-body">
                <span className="card-content">Development</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="">
              <img
                className="card-img-top"
                src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
                alt=""
              />
              <div className="card-body">
                <span className="card-content">Marketing</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="">
              <img
                className="card-img-top"
                src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
                alt=""
              />
              <div className="card-body">
                <span className="card-content">IT and Software</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="">
              <img
                className="card-img-top"
                src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
                alt=""
              />
              <div className="card-body">
                <span className="card-content">Personal Development</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="">
              <img
                className="card-img-top"
                src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
                alt=""
              />
              <div className="card-body">
                <span className="card-content">Business</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="">
              <img
                className="card-img-top"
                src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
                alt=""
              />
              <div className="card-body">
                <span className="card-content">Photography</span>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="">
              <img
                className="card-img-top"
                src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
                alt=""
              />
              <div className="card-body">
                <span className="card-content">Music</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCate;
