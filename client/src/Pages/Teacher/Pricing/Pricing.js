import CreateCourseLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseLayout";
import ManagerBar from "../ManagerBar/ManagerBar";
import CreateCourseContentLayout from "../../../Components/Layout/CreateCourseLayout/CreateCourseContentLayout";

const countries = [
  { value: "US", money: "USD" },
  { value: "VN", money: "VND" },
];

const price = [
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
                  <select className="border-2 border-black py-2 pl-2 pr-8 mx-4">
                    {price.map((item, idx) => (
                      <option value={item.value} key={idx}>
                        {item.data}
                      </option>
                    ))}
                  </select>
                  <button
                    disabled
                    className=" mx-4 py-2 px-4 bg-gray-400 text-white font-bold"
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
