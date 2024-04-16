import { useState, useEffect } from "react";
import "./Carousel2.css";

import { ArrowBigLeft, ArrowBigRight, Circle, CircleDot } from "lucide-react";

export default function Carousel2() {
  const images = [
    "./slider_lilacDunks.png",
    "./slider_grayDunks.png",
    "./slider_beigeDunks.png",
    "./shoe1.png",
    "./shoe2.png",
    "./shoe3.png",
    "./shoe4.png",
    "./shoe5.png",
    "./shoe6.png",
  ];

  const [imageindex, setimageindex] = useState(-3);

  function shownext3images() {
    setimageindex((imageindex) => {
      if (imageindex === 3) return -3;
      return imageindex + 1;
    });
  }

  function showprev3images() {
    setimageindex((imageindex) => {
      if (imageindex === -3) return 3;
      return imageindex - 1;
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      shownext3images();
    }, 4000); // Adjust the time interval (in milliseconds) as needed
    return () => clearInterval(interval);
  }, [imageindex]); // Run this effect whenever imageindex changes

  return (
    <div className="carouselcontainer">
      <button className="leftarrow" onClick={showprev3images}>
        <ArrowBigLeft size={100} />
      </button>
      <div className="carousel">
        {images.map((url, index) => (
          <img
            key={`image-${index}`}
            src={url}
            style={{ translate: `${-100 * imageindex}%` }}
          />
        ))}
      </div>
      <button className="rightarrow">
        <ArrowBigRight size={100} onClick={shownext3images} />
      </button>
      <div className="dots">
        {[0, 1, 2, 3, 4, 5, 6].map((_, index) => (
          <button key={index} onClick={() => setimageindex(index - 3)}>
            {index - 3 === imageindex ? (
              <CircleDot style={{ fill: "#F5F5F5" }} />
            ) : (
              <Circle />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
