import React from "react";
import Header from "./components/Header/Header";
import Slides from "./components/Slides/Slides";
import OurPractices from "./components/OurPractices/OurPractices";
import Partners from "./components/Partners/Partners";
import OurClients from "./components/OurClients/OurClients";
import OurNews from "./components/OurNews/OurNews";
import Footer from "./components/Footer/Footer";

function Main() {
  return (
    <div>
      Main
      <Header></Header>
      <Slides></Slides>
      <OurPractices></OurPractices>
      <Partners></Partners>
      <OurClients></OurClients>
      <OurNews></OurNews>
      <Footer></Footer>
    </div>
  );
}

export default Main;
