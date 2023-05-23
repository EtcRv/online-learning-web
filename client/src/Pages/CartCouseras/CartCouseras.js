import CourseInCart from "../../Components/ReUse/CourseInCart/CourseInCart";
import Couseras from "../../Components/UI/Couseras/Couseras";
import UserPageLayout from "../../Components/Layout/UserPageLayout/UserPageLayout";

const data = [
  {
    image: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    name: "Jose Potilla",
    teacherName: "hehe lele",
    rating: 4.5,
    price: "12,199,000",
  },
  {
    image: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    name: "Jose Potilla",
    teacherName: "hehe lele",
    rating: 4.5,
    price: "12,199,000",
  },
  {
    image: "https://img-c.udemycdn.com/course/240x135/950390_270f_3.jpg",
    name: "Jose Potilla",
    teacherName: "hehe lele",
    rating: 4.5,
    price: "12,199,000",
  },
];
const valOff = 0.71;

const totalPrice = (data, Off = 0) => {
  const totalPrice = data.reduce((sum, item) => {
    const priceNumber = parseFloat(item.price.replace(/,/g, ""));
    return sum + priceNumber;
  }, 0);

  return (totalPrice * (1 - Off)).toLocaleString();
};

const CartCouseras = () => {
  return (
    <UserPageLayout>
      <div className="mx-[80px] px-[24px]">
        <h1 className="my-[34px]">Shopping Cart</h1>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-9">
            {data.map((item) => (
              <div>
                {" "}
                <CourseInCart data={item}></CourseInCart>
              </div>
            ))}
          </div>
          <div className="col-span-3">
            <div>
              <div className="mb-2 text-gray-600">Total&nbsp;:</div>

              <div className="text-[30px] font-bold">
                {totalPrice(data, valOff)} ₫
              </div>

              <div className="text-gray-600 line-through">
                {totalPrice(data)} ₫
              </div>

              <div>71&nbsp;% off</div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-full">
                Checkout
              </button>
            </div>
            <div className="mt-6 border-t border-black pt-6">
              <p className="mb-[16px] font-bold">Promotions</p>
              <div>
                <button type="button ">
                  <div className="text-[20px]">x</div>
                </button>
                <span className="ml-[10px] text-gray-500">
                  <b>BIGDREAMSALE</b> is applied
                </span>
                <div>
                  <div className="mb-3">
                    <div className="mb-4 flex w-full flex-wrap items-stretch">
                      <input
                        type="search"
                        className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                        placeholder="Enter Coupon"
                        aria-label="Search"
                        aria-describedby="button-addon1"
                      />
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4">
                        Apply
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Couseras></Couseras>
    </UserPageLayout>
  );
};

export default CartCouseras;
