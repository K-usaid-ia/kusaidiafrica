import React from "react";

const Support = () => {
  return (
    <div className="relative w-full mt-20">
      {/* Top SVG Wave */}
      <div className="relative -mt-7 z-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(79 70 229)"
            fillOpacity="1"
            d="M0,224L48,192C96,160,192,96,288,96C384,96,480,160,576,181.3C672,203,768,181,864,192C960,203,1056,245,1152,240C1248,235,1344,181,1392,154.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      {/* Background Card Container */}
      <div
        className="relative w-full h-[154vh] bg-cover bg-center  -mt-60"
        style={{ backgroundImage: "url('/png/support-img.jpg')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

        {/* Inner Content */}
        <div className="absolute inset-0 text-gray-200 px-[7vw] mt-36 z-20">
          <div className="w-[90%] text-left mx-auto py-[5%]">
            <h1 className="text-5xl md:text-4xl lg:text-5xl text-white">
              WE ARE PROUD TO EMPOWER PEOPLE THROUGH SECURE, BORDERLESS DIGITAL
              TRANSACTIONS
            </h1>
          </div>

          {/* Right Aligned Text */}
          <div className="w-[38%] float-right text-left mr-[5vw] mt-4 text-lg leading-7">
            <p>
              At Kusaidia, we believe in financial freedom for everyone. Our
              platform enables seamless and secure transactions, allowing
              individuals and businesses to send money globally without
              limitations. We prioritize security, efficiency, and
              accessibility, ensuring that every transaction is transparent and
              reliable. Whether you are supporting loved ones, paying for
              services, or running a business, Kusaidia makes it easier than
              ever to move funds safely in the Web3 world.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom SVG Wave */}
      <div className="relative  -mt-[48.5vh] z-30">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="rgb(79 70 229)"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Support;
