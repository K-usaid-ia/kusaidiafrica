import React, { useState, useRef } from "react";
import Star from "../../../public/png/black-star.png";
import Image from "next/image";

const ReviewData = [
  {
    name: "Emily Johnson",
    location: "New York, USA",
    review:
      "Kusaidia makes sending crypto effortless! The process is smooth, and I love how secure it feels. No more complicated transactions!",
    image:
      "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
  },
  {
    name: "Alex Rodriguez",
    location: "Madrid, Spain",
    review:
      "Finally, a crypto payment platform that’s easy to use! I send money to my family abroad without high fees or long waits.",
    image:
      "https://i0.wp.com/knowledgeenthusiast.com/wp-content/uploads/2022/04/pexels-photo-6694422.jpeg?fit=900%2C600&ssl=1",
  },
  {
    name: "Sophie Baker",
    location: "London, UK",
    review:
      "The dashboard is incredibly intuitive! I can send and track my transactions in real time with zero hassle.",
    image: "https://cdn2.f-cdn.com/files/download/38545966/4bce6b.jpg",
  },
  {
    name: "Jake Miller",
    location: "Toronto, Canada",
    review:
      "Kusaidia has changed the way I use crypto. Fast, reliable, and secure—what more could you ask for?",
    image:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
  {
    name: "Lily Chen",
    location: "Singapore",
    review:
      "I love the seamless experience. Kusaidia makes crypto transfers feel as easy as sending a text message.",
    image:
      "https://thumbs.dreamstime.com/b/young-indian-girl-wearing-casual-clothes-sitting-table-smiling-happy-face-winking-camera-doing-victory-sign-number-212214383.jpg",
  },
  {
    name: "Omar Patel",
    location: "Dubai, UAE",
    review:
      "This is the future of finance! No banks, no limits—just pure financial freedom with Web3 technology.",
    image:
      "https://vickyphotoart.com/wp-content/uploads/2023/02/Palm_Beach_Photographer_Vicky_Photo_Art_HeadshotIntensive0026-CREW.jpg",
  },
  {
    name: "Ava Foster",
    location: "Berlin, Germany",
    review:
      "I used Kusaidia to pay a freelancer overseas, and the transaction was completed in seconds. No delays, no stress!",
    image:
      "https://images.squarespace-cdn.com/content/v1/5de46ebb08114a27bbda46c6/1575251946511-VOZJ9NO4WKO23DXCRQVK/SpencerLoy_ReneeLake_1_Original.jpg",
  },
  {
    name: "Dylan Chang",
    location: "Hong Kong",
    review:
      "Kusaidia is my go-to for crypto payments. The transaction speed is unmatched, and I feel confident knowing it’s secure.",
    image:
      "https://pics.craiyon.com/2023-09-09/2a8e3022b9a14d038c06e848b195a98f.webp",
  },
  {
    name: "Mia Turner",
    location: "Los Angeles, USA",
    review:
      "No more dealing with exchange rate headaches! I send money to friends worldwide in just a few clicks.",
    image:
      "https://assets-global.website-files.com/637391ec846652083583cb2d/637cce2dccd18647a54026eb_Headshot_Black_Clothes.jpg",
  },
  {
    name: "Elijah Carter",
    location: "Cape Town, South Africa",
    review:
      "Kusaidia has simplified crypto payments like never before. No need for complex wallet addresses—just quick and secure transfers.",
    image:
      "https://media.istockphoto.com/id/535418863/photo/he-greets-every-business-day-with-a-smile.webp?b=1&s=612x612&w=0&k=20&c=tn6S6bQecRndDq2HcmeRSB66ppNkguIG-DjolGO3UbY=",
  },
  {
    name: "Zara Kim",
    location: "Seoul, South Korea",
    review:
      "Sending money with Kusaidia is as simple as sending an email. No banks, no restrictions—just smooth transactions.",
    image:
      "https://img.freepik.com/premium-photo/young-chinese-woman-wearing-casual-t-shirt-standing-isolated-white-background-looking-side-relax-profile-pose-with-natural-face-with-confident-smile_908985-5377.jpg",
  },
  {
    name: "Isaac Ramirez",
    location: "Mexico City, Mexico",
    review:
      "Low fees and lightning-fast transfers—Kusaidia is the best way to send crypto anywhere in the world.",
    image:
      "https://img.freepik.com/free-photo/pleased-cheerful-redhaired-male-with-pleasant-smile_273609-16419.jpg?size=626&ext=jpg&ga=GA1.1.1518270500.1698451200&semt=ais",
  },
  {
    name: "Eva Martin",
    location: "Paris, France",
    review:
      "I’ve tried many platforms, but Kusaidia is by far the easiest and most secure way to send crypto. Highly recommended!",
    image:
      "https://media.istockphoto.com/id/1164197096/photo/portrait-of-pretty-young-hotel-supervisor-facing-camera-smiling.jpg?s=612x612&w=0&k=20&c=Laj_q8KpIRao20CvxqU3Y0w426aEWU_2Q2-sNQMXFxM=",
  },
  {
    name: "Nathan Brooks",
    location: "Sydney, Australia",
    review:
      "Kusaidia takes the hassle out of crypto payments. The interface is clean, and the transactions are lightning-fast.",
    image:
      "https://eddie-hernandez.com/wp-content/uploads/2021/12/Mens-Professional-Headshot-San-Francisco-JA-7683.jpg",
  },
  {
    name: "Olivia White",
    location: "Tokyo, Japan",
    review:
      "This is the best crypto payment experience I’ve had. Super fast, easy to use, and completely secure!",
    image:
      "https://t4.ftcdn.net/jpg/06/11/11/65/360_F_611116596_Y2yhaoUKSnS6ySs3Y1zwAy7BbM6u29M5.jpg",
  },
];

const Reviews = () => {
  const [position, setPosition] = useState(0);
  const startX = useRef(null);

  const handleDragStart = (e) => {
    e.preventDefault();
    startX.current = e.clientX;
  };

  const handleDragMove = (e) => {
    if (startX.current !== null) {
      const diff = e.clientX - startX.current;
      setPosition((prev) => prev + diff);
      startX.current = e.clientX;
    }
  };

  const handleDragEnd = () => {
    startX.current = null;
  };

  return (
    <div className="h-[100vh] my-[30vh] bg-gray-100 pt-8 font-[Plus Jakarta Sans]">
      {/* Header */}
      <div className="text-left w-[90vw] mx-auto my-10">
        <h1 className="text-5xl font-bold">Happy customer words</h1>
      </div>

      {/* Slider Container */}
      <div
        className="w-[95%] mx-auto overflow-hidden relative cursor-grab"
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragEnd}
        onMouseLeave={handleDragEnd}
      >
        <div
          className="flex gap-6 transition-transform ease-in-out duration-300"
          style={{ transform: `translateX(${position}px)` }}
        >
          {ReviewData.map((review, index) => (
            <div
              key={index}
              className="flex flex-row min-w-[40%] md:min-w-[30%] bg-white rounded-xl shadow-lg"
            >
              {/* Text Content */}
              <div className="w-2/3 p-9 space-y-4 ">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    // <img key={i} src={Star} alt="star" className="w-5" />
                    <Image
                      key={i}
                      src={Star}
                      alt="logo"
                      className=""
                      width={16}
                      height={24}
                    />
                  ))}
                </div>
                <p className="text-gray-600">{review.review}</p>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-1/3 flex justify-center items-center bg-[#edf1f0]">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
