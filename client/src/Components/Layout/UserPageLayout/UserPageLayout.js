import Header from "../../UI/Header/Header";
import Footer from "../../UI/Footer/Footer";

const UserPageLayout = ({ children }) => {
  return (
    <section className="h-screen w-full">
      <Header></Header>
      <div className="mx-auto px-6 py-12">
        <div className="flex flex-wrap h-full text-gray-800">
          <div className="w-full h-full">{children}</div>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default UserPageLayout;
