import React from "react";

const a = {
  feedbackDes: 1,
  userAva: 1,
  userName: 2,
  nameCourse: 3,
};

const Feedback = () => {
  return (
    <>
      <div className="p-[24px] w-[500px] border border-gray-400">
        <div>
          I am proud to say that after a few months of taking this course...
          <strong>
            I passed my exam and am now an AWS Certified Cloud Practitioner!
          </strong>
          <br></br> This content was exactly what the CCP exam covered
        </div>
        <div className="flex py-[15px]">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden ">
           
            <img className="w-full h-auto" src="https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3=w240-h480-rw" alt="">
            </img>
          </div>
          <div className="ml-[10px] font-bold">Will A</div>
        </div>

        <div className="py-[15px] border-t border-gray-400 font-bold text-[#5624d0]">[NEW] Ultimate AWS Certified Cloud Practitioner - 2022</div>
       
      
      </div>
    </>
  );
};
export default Feedback;
