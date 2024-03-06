// import React from "react";
// import Colors from "./components/Colors";
import "./App.css";
import Hero from "./components/Hero";
import DemoVideo from "./components/DemoVideo";
// import Discover from "./components/Discover";
import Super from "./components/Super";
import Steps from "./components/Steps";
// import Campaign from "./components/Campaign";
import Testimonial from "./components/Testimonial";
import FAQs from "./components/FAQ";
import { useEffect } from "react";
// import PricingCard from "./components/PricingCard";

const App = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      {/* <Colors /> */}
      <div className="flex pb-12 flex-col gap-12">
        <Hero />
        <DemoVideo />
        {/* <Discover /> */}
        <Super />
        <Steps />
        {/* <Campaign /> */}
        {/* <PricingCard /> */}
        <Testimonial />
        <FAQs />
      </div>
    </>
  );
};

export default App;
