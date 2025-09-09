import React from "react";
import { CgArrowRightR, CgArrowLeftR } from "react-icons/cg";

const CorouselItem = ({ data }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  function next() {
    setCurrentIndex((prev) => (prev + 4) % data.length);
  }
  function prev() {
    setCurrentIndex((prev) => (prev - 4 + data.length) % data.length);
  }
  return (
    <div className="w-[70vw] h-[64vh] relative my-1 mx-26 p-10 flex flex-row gap-2 justify-center">
      {data.slice(currentIndex, currentIndex + 4).map((item, index) => (
        <div
          key={index}
          className={`h-[400px] w-[360px] bg-gray-400 rounded-xl 
          object-center flex flex-col justify-center p-1 space-y-4`}
         > 
          <img
            src={item.img}
            alt="Dataimage"
            height={200}
            width={200}
            className="roundex-xl ml-2"
          />
          <div>
            <h1 className="text-md text-white font-bold">{item.title}</h1>
            <p className="text-sm text-white">{item.desc}</p>
          </div>
        </div>
      ))}
      {/* next button */}
      <button onClick={next} className="absolute top-50 right-0 text-4xl z-10">
        <CgArrowRightR />
      </button>
      {/* prev button */}
      <button onClick={prev} className="absolute top-50 left-0 text-4xl z-10">
        <CgArrowLeftR />
      </button>
    </div>
  );
};

export default CorouselItem;
