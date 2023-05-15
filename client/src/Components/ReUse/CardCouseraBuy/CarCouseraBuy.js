const a={
courseraImg:"https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684141459&Signature=a8dZvVxMNWkyJeg-kF3buuPMBNYQJGWcmlYoRJ5Gu7isCjQrlt15jdgDcwOL6zZTyCaM6Fmg3LfNEbKx~YJXUOpgfa9qU2oTitLjozww8RopNke4~wPerAT6RCpqqW9tQMLuIzKyRgw~5prpt0FvNEDq4ePOnHwn~51c2f7kT0SaDZ8pWHdTFOW7nL~BdCggSLHxX9BWDeta8AsPxTtdvMwAOK7rrTCu6kMthja-GT60ZOn2jKJuuVyGZlNz9fznpIJSsMyYfOjje9lkjOfb0GrnEqyAcAEbbGZlB-fmL24DqnYVPM4UHrQbz1WwHY~EwYAFiB-k8Nlr-y0legVdyg__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
courseraName:"HTML5 - From Basics to Advanced level [2023]",
currentLec:"1. HTML - Introduction",
lecTime: "1 min"


}



const CardCouseraBuy = () => {
  return (
    <>
      <div className="flex w-[420px] border border-gray-200">
        <div className="w-[120px] h-[150px] bg-slate-600 relative overflow-hidden ">
          <img
            className="max-w-none h-full left-1/2 absolute top-0  translate-x-[-50%] "
            src={a.courseraImg}
            alt=""
          ></img>
         
        </div>
        <div className="w-[300px] p-[16px] flex flex-col justify-between">
      <div>
      <div className="line-clamp-1 text-[13px] mr-[16px] mb-[6px] text-gray-500">{a.courseraName}</div>
        <span className=" font-bold text-[16px]">{a.currentLec}</span>
      </div>
      <div className="text-[13px] text-gray-500">Lecture  •  {a.lecTime}</div>
        </div>
      </div>
    </>
  );
};

export default CardCouseraBuy;
