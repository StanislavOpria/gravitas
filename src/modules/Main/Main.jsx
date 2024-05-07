import React from "react";
import Slides from "./components/Slides/Slides";
import OurPractices from "./components/OurPractices/OurPractices";
import Partners from "./components/Partners/Partners";
import OurClients from "./components/OurClients/OurClients";
import OurNews from "./components/OurNews/OurNews";

function Main() {
  return (
    <div>


      <Slides></Slides>
      <OurPractices></OurPractices>
      <Partners></Partners>
      <OurClients></OurClients>
      <OurNews></OurNews>
   
    </div>
  );
}

export default Main;
