import { AiFillPlayCircle} from "react-icons/ai";

const a={
courseraImg:"https://mp4-c.udemycdn.com/2020-04-22_19-21-36-9c7432c6fd7964510fbd0c3fd107b523/thumb-1.jpg?Expires=1684181815&Signature=OrdSufWFSrV3g4hIE3VibJgvf6KPPnF2dzWP2f~FADzxdnf9b-9olX-WAgG1x9s70f9~K7WUXbTZJfgphXOAzveLa-2r2DQ88r9h~N1IfEHKhYJh94OUU8oas8h9TCtzlzvbJOqSmdS4kB~Xvxuxe3gfygo9owS0JhijW58AUkzrVG9A4kegKdUrpI-U-qUhjeltvrPia~xNuS2KPAwDEAx55TR6G2IATvhqi8sdPzohONkesLhNWWkDX2YuOZTZcEb3rBR6dNWw1lAikQ~AhNqFLotPfYVhxN9Wldv7i--G6LTdGrZqD~sQAihzVbqlGTJm9MDJepC8nRna9Jjq9g__&Key-Pair-Id=APKAITJV77WS5ZT7262A",
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
         <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
        
        <span className="text-white  flex items-center justify-center absolute top-0 left-0 h-full w-full">  <AiFillPlayCircle className="text-[50px]"></AiFillPlayCircle></span>
       
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
