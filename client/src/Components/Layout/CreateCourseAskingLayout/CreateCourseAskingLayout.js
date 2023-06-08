const CreateCourseAskingLayout = ({ children }) => {
  return (
    <section className="h-screen w-screen">
      <div className=""></div>
      <div className="container mx-auto px-6 py-12 h-full">
        <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20">{children}</div>
        </div>
      </div>
    </section>
  );
};

export default CreateCourseAskingLayout;
