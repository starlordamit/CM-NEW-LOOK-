"use client";
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const LottieAnimation = () => {
  const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "https://cms.creatorsmela.com/uploads/a_52c93a7967.json", // URL to your Lottie JSON file
    });

    // Cleanup on unmount
    return () => lottie.destroy();
  }, []);

  return <div ref={container} style={{ width: "100%", height: "100%" }}></div>;
};

export default LottieAnimation;
