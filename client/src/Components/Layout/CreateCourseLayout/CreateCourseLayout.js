import Footer from "../../UI/Footer/Footer";

const CreateCourseLayout = ({ children }) => {
  return (
    <section className="h-auto w-full">
      <div className="flex bg-black text-white justify-between px-8 py-4 items-center">
        <div className="flex">
          <button className="px-2 hover:text-slate-300">Back to courses</button>
          <div className="px-2 font-bold text-xl">Course name</div>
          <div className="px-2 mx-2 bg-gray-500 text-base">Draft</div>
        </div>
        <div className="flex">
          <button disabled className="bg-gray-400 mx-2 px-6 py-2">
            Save
          </button>
          <button>Setting</button>
        </div>
      </div>
      <div className="container mx-auto px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="w-full h-full lg:ml-20">{children}</div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default CreateCourseLayout;
