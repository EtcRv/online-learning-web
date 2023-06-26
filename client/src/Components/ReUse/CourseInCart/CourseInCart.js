import CartServices from "../../../Services/CartServices/CartServices";
import EmptyStar from "../Star/EmptyStar";
import FullStar from "../Star/FullStar";
import { useSelector } from "react-redux";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

// const props = {
//     image: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
//     name: "Jose Potilla",
//     teacherName: "hehe lele",
//     rating: 4.5,
//     price: "12,199,000"
//   };

const CourseInCart = (props) => {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="py-2 flex w-full h-full justify-between border-t border-solid border-gray-300">
      <div className="flex ">
        <div className="w-60 h-32 mr-8">
          <img src={props.data.image} className="w-full h-full" />
        </div>
        <div className="flex flex-col justify-around">
          <p className="font-bold text-3xl mb-2 max-w-xl">{props.data.name}</p>
          <p className="text-xl">By {props.data.teacherName}</p>
          <div className="flex">
            <p className="mr-2">{props.data.rating}</p>
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
        </div>
      </div>
      <div className="flex justify-center">
        <div className="mx-8 flex flex-col items-end">
          <button
            className="text-blue-800"
            onClick={() => props.eventClickRemoveBtn(user.id, props.data.id)}
          >
            Remove
          </button>
        </div>
        <div className="font-bold text-3xl text-violet-700 mr-4 ml-8">
          {props.data.price === 0 ? "Free" : `$${props.data.price}`}
        </div>
      </div>
    </div>
  );
};

export default CourseInCart;
