import React from "react";
import ReactPlayer from "react-player/file";

const Slider = () => {
  return (
    <section id="slider">
      <div className="d-block w-100 sliderVideo">
        <ReactPlayer
          width="100%"
          height="100%"
          url="/videos/api_video.mp4"
          // type="video/mp4"
          playing
          muted
          loop
          playsinline
          onReady={() => {
            console.log("Downloaded");
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
  );
};

export default Slider;
