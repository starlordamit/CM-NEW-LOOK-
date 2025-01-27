"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
// import lottie from "lottie-web";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
export default function Error() {
  const container = useRef(null);

  // useEffect(() => {
  //   // Load the Lottie animation
  //   const anim = lottie.loadAnimation({
  //     container: container.current, // DOM element to contain the animation
  //     renderer: "svg", // Renderer type
  //     loop: true, // Loop the animation
  //     autoplay: true, // Autoplay the animation

  //     path: "https://cms.creatorsmela.com/uploads/404_0a3223d1b6.json", // URL to your Lottie JSON file
  //   });

  //   // Cleanup animation on component unmount
  //   return () => anim.destroy();
  // }, []);

  return (
    <div className="error-area  ptb_sm--60 ptb_md--80">
      <div className="container">
        <div className="row align-item-center">
          <div className="col-lg-12">
            <div className="error-inner">
              {/* Replace the static content with the Lottie animation */}
              <DotLottieReact
                src="https://cms.creatorsmela.com/uploads/404_00749e431a.lottie"
                loop
                autoplay
              />
              {/* <div
                ref={container}
                style={{ width: "auto", height: "auto", margin: "0 auto 0 0" }}
              ></div> */}
              {/* <h2 className="title">Something’s not right.</h2> */}

              {/* <div className="view-more-button">
                <Link className="btn-default" href={`/`}>
                  Go Back Home
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
