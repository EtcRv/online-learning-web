const UserPageLayout = ({ children }) => {
  return (
    <section className="h-screen">
      <div className="container mx-auto px-6 py-12 h-full">
        <div className="flex flex-wrap h-full g-6 text-gray-800">
          <div className="md:w-8/12 lg:w-5/12 lg:ml-20 lg:w-full">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserPageLayout;
