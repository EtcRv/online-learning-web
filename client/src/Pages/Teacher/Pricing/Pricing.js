import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateState } from "../../../store/createCourseSlice";
import SuccessMessage from "../../../Components/ReUse/SuccessMessage/SuccessMessage";
import CourseServices from "../../../Services/CourseServices/CourseServices";

const countries = [{ value: "US", money: "USD" }];

const prices = [
  {
    value: 0,
    data: "Free",
  },
  {
    value: 19.99,
    data: "$19.99 (tier 1)",
  },
  {
    value: 24.99,
    data: "$24.99 (tier 2)",
  },
  {
    value: 29.99,
    data: "$29.99 (tier 3)",
  },
];

const Pricing = () => {
  const isLogin = useSelector((state) => state.user.isLogin);
  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);
  const course_id = useSelector(
    (state) => state.createCourse.current_course_id
  );
  const [price_state, set_price_state] = useState(
    useSelector((state) => state.createCourse.price)
  );

  const [price, setPrice] = useState(price_state);
  const [changed, setChanged] = useState(false);

  const dispatch = useDispatch();

  const clickSaveBtn = async () => {
    await CourseServices.updateCourseInformation(
      {
        type_update: "price",
        data: { price: price },
        courseId: course_id,
      },
      token
    );
    dispatch(
      updateState({
        type: "price",
        value: price,
      })
    );
    // Call API to save into db
    SuccessMessage("Success", "Save successfull");
  };

  return (
    <CreateCourseLayout>
      <div className="flex w-full">
        <div className="lg:basis-1/4 hidden lg:block ">
          <ManagerBar></ManagerBar>
        </div>
        <div className="w-auto lg:basis-3/4">
          <CreateCourseContentLayout>
            <div className="border-2 border-x-0 border-t-0 border-slate-200 p-8">
              <label className="font-bold text-3xl">Pricing</label>
            </div>
            <div className="p-8">
              <div className="mt-8">
                <label className="font-bold">Course Price Tier</label>
                <br></br>
                <span>
                  Please select the price tier for your course below and click
                  'Save'.
                </span>
                <div className="flex my-4">
                  <select className="border-2 border-black py-2 pl-2 pr-8 mx-4">
                    {countries.map((item, idx) => (
                      <option value={item.value} key={idx}>
                        {item.money}
                      </option>
                    ))}
                  </select>
                  <select
                    className="border-2 border-black py-2 pl-2 pr-8 mx-4"
                    defaultValue={price}
                    onChange={(e) => {
                      setPrice(e.currentTarget.value);
                      setChanged(true);
                    }}
                  >
                    {prices.map((item, idx) => (
                      <option value={item.value} key={idx}>
                        {item.data}
                      </option>
                    ))}
                  </select>
                  <button
                    disabled={!changed}
                    className={
                      !changed
                        ? "bg-gray-500  mx-2 px-6 py-2 font-bold text-white"
                        : "bg-indigo-500  mx-2 px-6 py-2 font-bold text-white"
                    }
                    onClick={clickSaveBtn}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </CreateCourseContentLayout>
        </div>
      </div>
    </CreateCourseLayout>
  );
};

export default Pricing;
