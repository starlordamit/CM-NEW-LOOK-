// File: /components/homes/index-marketing-agency/lottie.jsx
import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function LottieAnimation({ lotti, width, height }) {
  const container = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: lotti,
    });

    return () => anim.destroy();
  }, [lotti]);

  return <div ref={container} style={{ width, height }} />;
}
