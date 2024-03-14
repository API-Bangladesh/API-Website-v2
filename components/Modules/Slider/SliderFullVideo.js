import React, { useState } from "react";
import ReactPlayer from "react-player/file";
import Preloader from "../Preloader/Preloader";

const Slider = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setTimeout(() => {
      document.body.classList.add("loaded");
      setIsLoaded(true);
    }, 500);
  };

  return (
    <>
      {!isLoaded ? <Preloader /> : ""}
      <section id="slider">
        <div className="d-block w-100 sliderVideo">
          <ReactPlayer
            width="100%"
            height="100%"
            url="/videos/api_video.mp4"
            // type="video/mp4"
            playing={isLoaded}
            muted
            loop
            playsinline
            onReady={() => {
              console.log("Downloaded");
              handleLoad();
            }}
            // onStart={() => {
            //   console.log("Playing start");
            // }}
            // onEnded={() => {
            //   console.log("Playing ended");
            // }}
          />
        </div>
      </section>
    </>
  );
};

export default Slider;
