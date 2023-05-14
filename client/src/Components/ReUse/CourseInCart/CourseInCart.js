import EmptyStar from "../Star/EmptyStar";
import FullStar from "../Star/FullStar";

const CourseInCart = (props) => {
  return (
    <div className="py-2 flex w-full h-full justify-between">
      <div className="flex ">
        <div className="w-60 h-32 mr-8">
          <img src={props.image} className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-around">
          <p className="font-bold text-3xl mb-2 max-w-xl">{props.name}</p>
          <p className="text-xl">By {props.teacherName}</p>
          <div className="flex">
            <p className="mr-2">{props.rating}</p>
            <div className="flex items-center">
              {props.rating >= 1 ? (
                <FullStar></FullStar>
              ) : (
                <EmptyStar></EmptyStar>
              )}
              {props.rating >= 2 ? (
                <FullStar></FullStar>
              ) : (
                <EmptyStar></EmptyStar>
              )}
              {props.rating >= 3 ? (
                <FullStar></FullStar>
              ) : (
                <EmptyStar></EmptyStar>
              )}
              {props.rating >= 4 ? (
                <FullStar></FullStar>
              ) : (
                <EmptyStar></EmptyStar>
              )}
              {props.rating >= 5 ? (
                <FullStar></FullStar>
              ) : (
                <EmptyStar></EmptyStar>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mx-8 flex flex-col items-end">
          <button className="text-blue-800">Remove</button>
          <button className="text-blue-800">Safe for later</button>
          <button className="text-blue-800">Move to Wishlist</button>
        </div>
        <div className="font-bold text-3xl text-violet-700 mr-4 ml-8">
          ${props.price}
        </div>
      </div>
    </div>
  );
};

export default CourseInCart;
