import React from "react";
import fabricationServices from "./Data";
import CorouselItem from "../../Components/Corousel/CorouselItem";
const Fabrication = () => {
  return (
    <div className="flex flex-col items-center justify-center-safe">
      <h1 className="text-4xl font-bold">Our Fabrication work</h1>
      <CorouselItem data={fabricationServices} />
    </div>
  );
};

export default Fabrication;
