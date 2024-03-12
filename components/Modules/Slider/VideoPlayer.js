import React, { useEffect, useRef } from "react";

const VideoPlayer = () => {
  const videos = [
    "/videos/p1.mp4",
    "/videos/p2.mp4",
    "/videos/p3.mp4",
    "/videos/p4.mp4",
    "/videos/p5.mp4",
    "/videos/p6.mp4",
  ];

  const videoRefs = useRef([]);
  const currentVideoIndex = useRef(0);

  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, videos.length);

    const handleVideoEnded = () => {
      const nextIndex = (currentVideoIndex.current + 1) % videos.length;

      // Pause, Reset, Hide the current video
      videoRefs.current[currentVideoIndex.current].pause();
      videoRefs.current[currentVideoIndex.current].currentTime = 0;
      videoRefs.current[currentVideoIndex.current].style.display = "none";

      // Show and play the next video
      videoRefs.current[nextIndex].style.display = "block";
      videoRefs.current[nextIndex].play();

      currentVideoIndex.current = nextIndex;
    };

    videoRefs.current.forEach((video, index) => {
      video.addEventListener("ended", handleVideoEnded);
    });

    // Clean up event listeners
    return () => {
      videoRefs.current.forEach((video, index) => {
        video.removeEventListener("ended", handleVideoEnded);
      });
    };
  }, []);

  return (
    <>
      {videos.map((src, index) => (
        <video
          key={index}
          ref={(ref) => (videoRefs.current[index] = ref)}
          style={{ display: index === 0 ? "block" : "none" }}
          autoPlay={index === 0} // Autoplay the first video
          muted
          playsInline
          className="w-100 sliderVideo"
        >
          <source src={src} type="video/mp4" />
        </video>
      ))}
    </>
  );
};

export default VideoPlayer;
