import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <div>
        <div className="">
          <Header />
        </div>
        <div className="mt-[80px] lg:mt-28">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
