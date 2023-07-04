import EmptyStar from "../Star/EmptyStar";
import FullStar from "../Star/FullStar";


const CardCousera = (props) => {
  return (
    <>
      <div className=" max-w-[240px] bg-white border border-gray-200 rounded-lg  ">
        <div className=" bg-black ">
          <img
            className="max-w-full h-auto "
            src={props.data.courseImg}
            alt=""
          />
        </div>

        <div className=" p-2">
          <div className="text-xl font-bold tracking-tight text-gray-900  line-clamp-2 ">
            {props.data.title}
          </div>
          <div className=" text-gray-400 text-[13px]">
            {props.data.teacherName}
          </div>
          <div className="flex">
            <span className="mr-1 text-yellow-600 font-bold">
              {props.data.rating}
            </span>

            <div className="flex items-center">
              {props.data.rating >= 1 ? (
                <FullStar></FullStar>
              ) : (
                <EmptyStar></EmptyStar>
              )}
              {props.data.rating >= 2 ? (
                <FullStar></FullStar>
              ) : (
                <EmptyStar></EmptyStar>
              )}
              {props.data.rating >= 3 ? (
                <FullStar></FullStar>
              ) : (
                <EmptyStar></EmptyStar>
              )}
              {props.data.rating >= 4 ? (
                <FullStar></FullStar>
              ) : (
                <EmptyStar></EmptyStar>
              )}
              {props.data.rating >= 5 ? (
                <FullStar></FullStar>
              ) : (
                <EmptyStar></EmptyStar>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-[15px] font-bold text-gray-900 ">
              {props.data.price === 0 ? "Free" : `$${props.data.price}`}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardCousera;
