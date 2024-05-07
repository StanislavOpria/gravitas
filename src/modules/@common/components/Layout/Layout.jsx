import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from '../Footer/Footer';

const Layout= () => {
  return (
    <Suspense fallback={<Loader />}>
         <Header/>
      <Outlet />
      <Footer/>
    </Suspense>
  );
};

export default Layout;
