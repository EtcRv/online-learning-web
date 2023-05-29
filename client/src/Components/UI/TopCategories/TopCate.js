import React from "react";

const TopCate = () => {
  return (
    <>
      <div className=" mt-5 mx-[80px] px-[24px]">
        <h2 className="mb-4 text-[25px]">Top categories</h2>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div>
              <div className="transition-transform duration-300 ease-in-out overflow-hidden w-[300px]">
                <img
                  className="hover:scale-110 "
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
                  alt=""
                />
              </div>

              <div className="pt-[8px] pb-[16px] ">
                <span className="text-[15px] font-bold  ">Design</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="transition-transform duration-300 ease-in-out overflow-hidden w-[300px]">
                <img
                  className="hover:scale-110 "
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg"
                  alt=""
                />
              </div>
              <div className="pt-[8px] pb-[16px]">
                <span className="text-[15px] font-bold">Development</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="transition-transform duration-300 ease-in-out overflow-hidden w-[300px]">
                <img
                  className="hover:scale-110 "
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg"
                  alt=""
                />
              </div>
              <div className="pt-[8px] pb-[16px]">
                <span className="text-[15px] font-bold">Marketing</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="transition-transform duration-300 ease-in-out overflow-hidden w-[300px]">
                <img
                  className="hover:scale-110 "
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg"
                  alt=""
                />
              </div>
              <div className="pt-[8px] pb-[16px]">
                <span className="text-[15px] font-bold">IT and Software</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-4">
          <div>
            <div>
              <div className="transition-transform duration-300 ease-in-out overflow-hidden w-[300px]">
                <img
                  className="hover:scale-110 "
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg"
                  alt=""
                />
              </div>
              <div className="pt-[8px] pb-[16px]">
                <span className="text-[15px] font-bold">
                  Personal Development
                </span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="transition-transform duration-300 ease-in-out overflow-hidden w-[300px]">
                <img
                  className="hover:scale-110 "
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg"
                  alt=""
                />
              </div>
              <div className="pt-[8px] pb-[16px]">
                <span className="text-[15px] font-bold">Business</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="transition-transform duration-300 ease-in-out overflow-hidden w-[300px]">
                <img
                  className="hover:scale-110 "
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg"
                  alt=""
                />
              </div>
              <div className="pt-[8px] pb-[16px]">
                <span className="text-[15px] font-bold">Photography</span>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="transition-transform duration-300 ease-in-out overflow-hidden w-[300px]">
                <img
                  className="hover:scale-110 "
                  src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg"
                  alt=""
                />
              </div>
              <div className="pt-[8px] pb-[16px]">
                <span className="text-[15px] font-bold">Music</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopCate;
