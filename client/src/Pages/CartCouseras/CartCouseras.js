import { useEffect, useState } from "react";
import CourseInCart from "../../Components/ReUse/CourseInCart/CourseInCart";
import Couseras from "../../Components/UI/Couseras/Couseras";
import UserPageLayout from "../../Components/Layout/UserPageLayout/UserPageLayout";
import CartServices from "../../Services/CartServices/CartServices";
import { useDispatch, useSelector } from "react-redux";
import SuccessMessage from "../../Components/ReUse/SuccessMessage/SuccessMessage";
import AlertMessage from "../../Components/ReUse/AlertMessage/AlertMessage";
import CourseServices from "../../Services/CourseServices/CourseServices";
import { updateMoney } from "../../store/userSlice";
import { useNavigate } from "react-router-dom";

const totalPrice = (data, Off = 0) => {
  const totalPrice = data.reduce((sum, item) => {
    const priceNumber = item.courseInformation.price;
    return sum + priceNumber;
  }, 0);

  return (totalPrice * (1 - Off)).toLocaleString();
};

const CartCouseras = () => {
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const getAllCourseInCart = async () => {
    const response = await CartServices.getCourseInCart(user.userId, token);
    setCourses(response.data);
  };
  useEffect(() => {
    getAllCourseInCart();
  }, []);

  const removeCourseFromCourse = async (userId, courseId) => {
    const response = await CartServices.removeCourseFromCart(
      {
        userId: userId,
        courseId: courseId,
      },
      token
    );

    const newCourses = courses.filter(
      (course) => course.courseInformation.id != courseId
    );
    setCourses(newCourses);

    SuccessMessage("Success", "Delete course successful");
  };

  const buyAllCourse = async () => {
    if (courses.length === 0) {
      AlertMessage("Error", "You don't have any course in cart");
    } else if (parseFloat(totalPrice(courses)) > user.money) {
      AlertMessage("Error", "You don't have enough money to buy all course");
    } else {
      let coursesId = [];
      let totalPrice = 0;
      courses.map(async (course, idx) => {
        coursesId.push(course.courseInformation.id);
        totalPrice += course.courseInformation.price;
        const response = await CartServices.removeCourseFromCart(
          {
            userId: user.userId,
            courseId: course.courseInformation.id,
          },
          token
        );
      });

      const res = await CourseServices.buyCourse(
        {
          courses: coursesId,
          totalPrice: totalPrice,
          userId: user.userId,
        },
        token
      );

      dispatch(
        updateMoney({
          newMoney: user.money - totalPrice,
        })
      );

      SuccessMessage("Success", "Buy successful");
      navigate("/");
    }
  };

  return (
    <UserPageLayout>
      <div className="mx-[80px] px-[24px]">
        <label className="my-[34px] text-4xl font-bold">Shopping Cart</label>
        {courses.length !== 0 && (
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-9">
              {courses.map((course, idx) => (
                <div key={idx}>
                  <CourseInCart
                    eventClickRemoveBtn={removeCourseFromCourse}
                    data={course.courseInformation}
                  ></CourseInCart>
                </div>
              ))}
            </div>
            <div className="col-span-3">
              <div>
                <div className="mb-2 text-gray-600">Total:</div>
                <div className="text-[30px] font-bold">
                  ${totalPrice(courses)}
                </div>

                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full"
                  onClick={buyAllCourse}
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
        {courses.length === 0 && (
          <div>
            <span className="font-bold text-lg">0 Courses in Cart</span>
            <div className="w-full border-[1px] border-neutral-200 mt-4 flex flex-col justify-center items-center">
              <img
                src="https://s.udemycdn.com/browse_components/flyout/empty-shopping-cart-v2.jpg"
                className="w-[240px] h-auto mb-4"
              ></img>
              <span className="mb-4">
                Your cart is empty. Keep shopping to find a course!
              </span>
              <button
                className="p-[10px] mb-4 font-bold bg-purple-700 text-white"
                onClick={(e) => navigate("/")}
              >
                Keep shopping
              </button>
            </div>
          </div>
        )}
      </div>
      <Couseras></Couseras>
    </UserPageLayout>
  );
};

export default CartCouseras;
