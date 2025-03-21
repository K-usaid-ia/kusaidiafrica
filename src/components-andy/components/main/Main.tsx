import React, { useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Main = () => {
  useLayoutEffect(() => {
    // Animation for text lines
    gsap.utils.toArray(".animate-line").forEach((line: any) => {
      gsap.from(line, {
        y: 100,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: line,
          start: "top bottom-=80",
          toggleActions: "play none none reverse",
        },
      });
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="h-[100vh] mt-[40vh] mb-[75vh] w-[92vw] m-auto">
      <div className="relative">
        <div className="relative">
          <video
            className="web-video video-bg rounded-2xl"
            height="80vh"
            id="video-2"
            preload="auto"
            loop
            autoPlay={true}
            muted
          >
            <source src={"/video/kusaida-video.mp4"} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-5">
        <div className="w-[40%]">
          <p className="text-gray-400 text-left text-sm">WHAT WE DO</p>
          <div className="w-[40%] mt-2">
            <p className="animate-line transform">Secure Transactions</p>
            <p className="animate-line transform">Web3 Payments</p>
            <p className="animate-line transform">Seamless Transfers</p>
            <p className="animate-line transform">Financial Empowerment</p>
          </div>
        </div>
        <div className="w-[55%] text-left">
          <p className="text-gray-400 text-left text-sm">OVERVIEW</p>
          <p className="animate-line mt-2 text-gray-700 transform">
            Kusaidia is a blockchain-powered platform designed to simplify and
            secure digital transactions. With Kusaidia, users can send and
            receive crypto payments instantly, ensuring financial access without
            borders. Whether you're supporting loved ones, paying for services,
            or managing business transactions, Kusaidia provides a fast,
            transparent, and reliable way to move funds in the Web3 ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
