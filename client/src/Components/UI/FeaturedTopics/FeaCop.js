import React from "react";

const FeaCop = () => {
  return (
    <div className=" bg-slate-300 mx-[-24px]">
      <div className="mx-[80px] py-[64px] px-[24px]">
        <h2 className="mb-[24px] text-[25px]">Featured topics by category</h2>

        <div className="grid grid-cols-4 mb-[20px]">
          <div className="  ">
            <h3 className="text-[20px] mb-[24px]">Development</h3>
            <div className="">
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    Python
                  </a>
                </div>
                <div className="text-[#6a6f73]">36,354,994 students</div>
              </div>
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    Web Development
                  </a>
                </div>
                <div className="text-[#6a6f73]">11,415,615 students</div>
              </div>
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    Machine Learning
                  </a>
                </div>
                <div className="text-[#6a6f73]">6,354,994 students</div>
              </div>
            </div>
          </div>
          <div className="  ">
            <h3 className="text-[20px] mb-[24px]">Business</h3>
            <div className="">
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    Financial Analysis
                  </a>
                </div>
                <div className="text-[#6a6f73]">3,354,994 students</div>
              </div>
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    SQL
                  </a>
                </div>
                <div className="text-[#6a6f73]">1,354,994 students</div>
              </div>
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    PMP
                  </a>
                </div>
                <div className="text-[#6a6f73]">2,354,994 students</div>
              </div>
            </div>
          </div>
          <div className="  ">
            <h3 className="text-[20px] mb-[24px]">IT and Software</h3>
            <div className="   ">
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    Amazon AWS
                  </a>
                </div>
                <div className="text-[#6a6f73]">24,354,994 students</div>
              </div>
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    Ethical Hacking
                  </a>
                </div>
                <div className="text-[#6a6f73]">70,354,994 students</div>
              </div>
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    Cyber Security
                  </a>
                </div>
                <div className="text-[#6a6f73]">3,423,994 students</div>
              </div>
            </div>
          </div>
          <div className="  ">
            <h3 className="text-[20px] mb-[24px]">Design</h3>
            <div className="   ">
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    Photoshop
                  </a>
                </div>
                <div className="text-[#6a6f73]">10,354,994 students</div>
              </div>
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    Graphic Design
                  </a>
                </div>
                <div className="text-[#6a6f73]">16,354,994 students</div>
              </div>
              <div className="mb-[24px]">
                <div>
                  <a className="text-[#5624d0] font-bold" href="s">
                    Drawing
                  </a>
                </div>
                <div className="text-[#6a6f73]">4,454,994 students</div>
              </div>
            </div>
          </div>
        </div>

        <a href="s" className="border border-black p-[10px]"><span className="text-[15px] font-bold">Explore more topics</span></a>
      </div>
    </div>
  );
};
export default FeaCop;
