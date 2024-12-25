import React, { useState } from "react";
import images from "./images";

const Carosel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const handleNextImage = () => {
    setCurrIndex((next) => {
      return (next + 1) % images.length;
    });
  };
  const handlePrevImage = () => {
    setCurrIndex((prev) => {
      return (prev - 1+images.length) % images.length;
    });
  };
  return (
    <div>
      <h2>Carosel Sliders</h2>

      <div>
        <span>
          <button onClick={handleNextImage}>Next</button>
        </span>
        <img
          src={images[currIndex]}
          alt={images[currIndex]}
          height={250}
          width={200}
        />
        <span>
          <button onClick={handlePrevImage}>Previous</button>
        </span>
      </div>
    </div>
  );
};
export default Carosel;
