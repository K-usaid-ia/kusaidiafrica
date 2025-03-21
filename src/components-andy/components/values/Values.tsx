import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Values = () => {
  const asideRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom 45%",
      pin: asideRef.current,
      pinSpacing: false,
      markers: false, // Set to true for debugging positions
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-[90vw] mt-40 m-auto min-h-screen"
      style={{ borderTop: "1px black solid" }}
    >
      {/* Fixed Header */}
      <aside
        ref={asideRef}
        className="w-1/2 absolute top-0 left-0 pr-8 pt-4 z-10"
      >
        <h1 className="text-3xl font-bold mt-6">Our Values</h1>
      </aside>

      <div className="w-1/2 ml-auto space-y-8 py-4">
        <div
          className="flex justify-between min-h-[30vh] pb-8"
          style={{ borderBottom: "1px black solid" }}
        >
          <h3 className="text-xl font-semibold w-1/3">Secure</h3>
          <p className="w-2/3">
            Security is at the heart of every transaction on Kusaidia. We
            leverage blockchain encryption and cutting-edge technology to ensure
            your funds are safe, private, and only accessible to you. Your
            financial freedom should never come with security compromises, and
            we make sure of that.
          </p>
        </div>
      </div>
      <div className="w-1/2 ml-auto space-y-8 py-4">
        <div
          className="flex justify-between min-h-[30vh] pb-8"
          style={{ borderBottom: "1px black solid" }}
        >
          <h3 className="text-xl font-semibold w-1/3">Fast & Efficient</h3>
          <p className="w-2/3">
            Speed is essential in today’s digital world, and Kusaidia ensures
            your transactions are processed instantly. No more waiting, no
            unnecessary delays—just seamless, borderless transfers that keep up
            with your fast-paced life.
          </p>
        </div>
      </div>
      <div className="w-1/2 ml-auto space-y-8 py-4">
        <div
          className="flex justify-between min-h-[30vh] pb-8"
          style={{ borderBottom: "1px black solid" }}
        >
          <h3 className="text-xl font-semibold w-1/3">
            Borderless & Inclusive
          </h3>
          <p className="w-2/3">
            Money should move as freely as you do. Kusaidia breaks down
            financial barriers, allowing you to send and receive funds anywhere
            in the world without restrictions. No banks, no limits—just true
            financial inclusion for everyone.
          </p>
        </div>
      </div>
      <div className="w-1/2 ml-auto space-y-8 py-4">
        <div
          className="flex justify-between min-h-[30vh] pb-8"
          style={{ borderBottom: "1px black solid" }}
        >
          <h3 className="text-xl font-semibold w-1/3">User-Centric</h3>
          <p className="w-2/3">
            We believe crypto transactions should be simple, intuitive, and
            accessible to everyone. Our user-friendly dashboard is designed with
            you in mind, making sending money as easy as sending a text—without
            the complexity of traditional crypto wallets.
          </p>
        </div>
      </div>
      <div className="w-1/2 ml-auto space-y-8 py-4">
        <div
          className="flex justify-between min-h-[30vh] pb-8"
          style={{ borderBottom: "1px black solid" }}
        >
          <h3 className="text-xl font-semibold w-1/3">
            Innovative & Future-Ready
          </h3>
          <p className="w-2/3">
            Kusaidia is built for the future of finance. We continuously evolve,
            integrating new blockchain advancements to offer the best possible
            experience. Whether it is lower fees, smarter contracts, or enhanced
            features, we’re always innovating to keep you ahead.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Values;
